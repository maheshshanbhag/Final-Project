<%@ page import="java.sql.*" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Add to Cart</title>
</head>
<body>
    <h1>Add to Cart</h1>
    <%-- Retrieve form data from request parameters --%>
    <%
        String productName = request.getParameter("productName");
        String price = request.getParameter("price");

        // Insert data into the cart_items table
        String cartUrl = "jdbc:mysql://localhost:3306/online_grocery_shopping";
        String cartUsername = "root";
        String cartPassword = "mysql";

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection cartConn = DriverManager.getConnection(cartUrl, cartUsername, cartPassword);

            String cartSql = "INSERT INTO cart_items (productName, price) VALUES (?, ?)";
            PreparedStatement cartStmt = cartConn.prepareStatement(cartSql);
            cartStmt.setString(1, productName);
            cartStmt.setString(2, price);
            int cartRowsAffected = cartStmt.executeUpdate();

            cartStmt.close();
            cartConn.close();
        } catch (ClassNotFoundException | SQLException e) {
            out.print("Error inserting into cart_items table: " + e.getMessage());
        }

        // Insert data into the ordered_items table
        String orderedUrl = "jdbc:mysql://localhost:3306/online_grocery_shopping";
        String orderedUsername = "root";
        String orderedPassword = "mysql";

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection orderedConn = DriverManager.getConnection(orderedUrl, orderedUsername, orderedPassword);

            String orderedSql = "INSERT INTO ordered_items (productName, price) VALUES (?, ?)";
            PreparedStatement orderedStmt = orderedConn.prepareStatement(orderedSql);
            orderedStmt.setString(1, productName);
            orderedStmt.setString(2, price);
            int orderedRowsAffected = orderedStmt.executeUpdate();

            orderedStmt.close();
            orderedConn.close();
        } catch (ClassNotFoundException | SQLException e) {
            out.print("Error inserting into ordered_items table: " + e.getMessage());
        }
    %>
    <div>
        <p><strong>Product Name:</strong> <%= productName %></p>
        <p><strong>Price:</strong> <%= price %></p>
    </div>
</body>
</html>
