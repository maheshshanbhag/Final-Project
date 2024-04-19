import java.sql.*;

public class CartToOrderedScheduler {
    private static final String CART_URL = "jdbc:mysql://localhost:3306/online_grocery_shopping";
    private static final String CART_USERNAME = "root";
    private static final String CART_PASSWORD = "mysql";
    private static final String ORDER_URL = "jdbc:mysql://localhost:3306/online_grocery_shopping";
    private static final String ORDER_USERNAME = "root";
    private static final String ORDER_PASSWORD = "mysql";

    public static void main(String[] args) {
        Timer timer = new Timer();
        timer.scheduleAtFixedRate(new CartToOrderedTask(), 0, 1000); // Run every second
    }

    static class CartToOrderedTask extends TimerTask {
        @Override
        public void run() {
            try {
                Class.forName("com.mysql.cj.jdbc.Driver");
                Connection cartConn = DriverManager.getConnection(CART_URL, CART_USERNAME, CART_PASSWORD);
                Connection orderConn = DriverManager.getConnection(ORDER_URL, ORDER_USERNAME, ORDER_PASSWORD);

                String cartSql = "SELECT * FROM cart_items";
                String insertSql = "INSERT INTO ordered_items (productName, price) VALUES (?, ?)";

                PreparedStatement cartStmt = cartConn.prepareStatement(cartSql);
                ResultSet cartRs = cartStmt.executeQuery();

                PreparedStatement insertStmt = orderConn.prepareStatement(insertSql);

                while (cartRs.next()) {
                    String productName = cartRs.getString("productName");
                    double price = cartRs.getDouble("price");

                    insertStmt.setString(1, productName);
                    insertStmt.setDouble(2, price);
                    insertStmt.executeUpdate();
                }

                cartRs.close();
                cartStmt.close();
                insertStmt.close();
                cartConn.close();
                orderConn.close();
                
                System.out.println("Cart items added to ordered items at " + new java.util.Date());
            } catch (ClassNotFoundException | SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
