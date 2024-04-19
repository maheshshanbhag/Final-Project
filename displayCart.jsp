<%@ page import="java.sql.*" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>My Cart</title>
    <link rel="stylesheet" href="display.css">
</head>
<body>

    <h1>My Cart</h1>
    <%
        // Retrieve data from the database
        String url = "jdbc:mysql://localhost:3306/online_grocery_shopping";
        String username = "root";
        String password = "mysql";

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = DriverManager.getConnection(url, username, password);

            String sql = "SELECT * FROM cart_items";
            PreparedStatement stmt = conn.prepareStatement(sql);
            ResultSet rs = stmt.executeQuery();

            // Check if the cart is empty
            boolean isEmpty = true;
            while (rs.next()) {
                isEmpty = false;
                String productName = rs.getString("productName");
                String price = rs.getString("price");
    %>
                <div class="cart-item">
                    <p><strong>Product Name:</strong> <%= productName %></p>
                    <p><strong>Price:</strong> <%= price %></p>
                    <form method="post" action="remove_item.jsp">
                        <input type="hidden" name="productName" value="<%= productName %>">
                        <input class="remove-btn" type="submit" value="Remove">
                    </form>
                </div>
    <%
            }
            rs.close();
            stmt.close();
            conn.close();

            if (isEmpty) {
    %>
                <h2>Empty Cart</h2>
    <%
            } else {
    %>
                <form method="post" action="remove_all_items.jsp">
                    <input class="remove-all-btn" type="submit" value="Remove All">
                </form>
                <a href="extra.jsp" class="back-btn">Back</a>
                <button class="buy">Buy Now</button>
                
                <div class="progress-bar" id="progressBar" style="display:none;">
                    <div class="step-container">
                        <div class="step active" id="step1">1. Make Order</div>
                        <div class="step-line right"></div>
                    </div>
                    <div class="step-container">
                        <div class="step" id="step2">2. Address</div>
                        <div class="step-line left"></div>
                        <div class="step-line right"></div>
                    </div>
                    <div class="step-container">
                        <div class="step" id="step3">3. Make Payment</div>
                        <div class="step-line left"></div>
                    </div>
                </div>

                <div class="input-container" id="addressInput" style="display:none;">
                    <input type="text" id="address" placeholder="Enter your address">
                </div>

                <div class="button-container" id="buyButton" style="display:none;">
                    <button class="button" onclick="nextStep()">Next</button>
                </div>
    <%
            }
        } catch (ClassNotFoundException | SQLException e) {
            out.print("Error retrieving data from database: " + e.getMessage());
        }
    %>
<script src="display.js"></script>    
</body>
</html>
