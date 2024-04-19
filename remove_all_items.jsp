<%@ page import="java.sql.*" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
    // Remove all items from the database
    String url = "jdbc:mysql://localhost:3306/online_grocery_shopping";
    String username = "root";
    String password = "mysql";

    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection conn = DriverManager.getConnection(url, username, password);

        String sql = "DELETE FROM cart_items";
        PreparedStatement stmt = conn.prepareStatement(sql);
        int rowsAffected = stmt.executeUpdate();

        stmt.close();
        conn.close();

        // Redirect back to the cart page after removing all items
        response.sendRedirect("displayCart.jsp");
    } catch (ClassNotFoundException | SQLException e) {
        out.print("Error removing all items from database: " + e.getMessage());
    }
%>
