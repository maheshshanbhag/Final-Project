<%@ page import="java.sql.*" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
    // Retrieve cart items from the database
    String url = "jdbc:mysql://localhost:3306/online_grocery_shopping";
    String username = "root";
    String password = "mysql";

    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection conn = DriverManager.getConnection(url, username, password);

        // Get cart items
        String getCartItemsQuery = "SELECT * FROM cart_items";
        String insertOrderedItemsQuery = "INSERT INTO ordered_items (productName, price) VALUES (?, ?)";
        String deleteCartItemsQuery = "DELETE FROM cart_items";
        
        PreparedStatement getCartItemsStmt = conn.prepareStatement(getCartItemsQuery);
        PreparedStatement insertOrderedItemsStmt = conn.prepareStatement(insertOrderedItemsQuery);
        PreparedStatement deleteCartItemsStmt = conn.prepareStatement(deleteCartItemsQuery);
        
        ResultSet cartItemsResult = getCartItemsStmt.executeQuery();

        // Iterate over cart items and insert into ordered_items table
        while (cartItemsResult.next()) {
            String productName = cartItemsResult.getString("productName");
            String price = cartItemsResult.getString("price");
            insertOrderedItemsStmt.setString(1, productName);
            insertOrderedItemsStmt.setString(2, price);
            insertOrderedItemsStmt.executeUpdate();
        }

        // Delete cart items
        deleteCartItemsStmt.executeUpdate();

        // Close statements and connection
        cartItemsResult.close();
        getCartItemsStmt.close();
        insertOrderedItemsStmt.close();
        deleteCartItemsStmt.close();
        conn.close();
        
        // Print success message
        out.print("Cart items stored in ordered_items table and removed from cart_items table successfully.");
    } catch (ClassNotFoundException | SQLException e) {
        out.print("Error storing cart items in database: " + e.getMessage());
    }
%>
