<%@ page import="java.sql.*" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
    String productName = request.getParameter("productName");

    // Remove the item from the database
    String url = "jdbc:mysql://localhost:3306/online_grocery_shopping";
    String username = "root";
    String password = "mysql";

    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection conn = DriverManager.getConnection(url, username, password);

        String sql = "DELETE FROM cart_items WHERE productName = ?";
        PreparedStatement stmt = conn.prepareStatement(sql);
        stmt.setString(1, productName);
        int rowsAffected = stmt.executeUpdate();

        stmt.close();
        conn.close();

        // Redirect back to the cart page after removing the item
        response.sendRedirect("displayCart.jsp");
    } catch (ClassNotFoundException | SQLException e) {
        out.print("Error removing item from database: " + e.getMessage());
    }
%>
