<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ page import="java.sql.*" %><!DOCTYPE html<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>LOGIN PAGE</title>
<link rel="stylesheet" href="login.css">
<link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet"/>
<style>
#error {
            display: none; /*Initially hide the error paragraph */
            text-align: center;
            margin-top: 5px;
            color: red;
            font-size: 15px;
        }
</style>
</head>
<body>
<div class="login">
    <div class="login-form">
        <form action="login.jsp" method="post"> <!-- Submit to the same page -->
            <div id="heading">
                <h2>Welcome to <span>ecommart</span></h2>
            </div>
            <div id="user-inputs">
                <input type="text" name="username" placeholder="Username" required>
                <input type="password" name="password" placeholder="Password" required>
            </div>
            <div class="forgot">
                <a href="#">Forgot password</a>
            </div>
            <div id="submit">
                <button type="submit" id="button">Login</button>
            </div>
            <div id="footer">
                <p>If you are a new user?<a href="register.jsp">Click here to register.</a></p>
            </div>
            <div id="other">
                <div class="para">
                    <p>Or sign in with</p>
                    <div class="signIn-icons">
                        <i class="ri-facebook-fill icon"></i>
                        <i class="ri-google-fill icon"></i>
                        <i class="ri-twitter-fill icon"></i>
                        <i class="ri-instagram-fill icon"></i>
                    </div>
                </div>
            </div>
            <div id="error"> <!-- Error paragraph -->
                <p>Invalid username or password</p>
            </div>
        </form>
    </div>
</div>

<%
if (request.getMethod().equalsIgnoreCase("post")) {
    String username = request.getParameter("username");
    String password = request.getParameter("password");
    
    String message = ""; // Message to be displayed
    
    try {
        // Establish database connection
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/online_grocery_shopping", "root", "mysql");
        
        // Query to check if the provided credentials exist in the database
        PreparedStatement ps = con.prepareStatement("SELECT * FROM reg_details WHERE username=? AND password=?");
        ps.setString(1, username);
        ps.setString(2, password);
        
        ResultSet rs = ps.executeQuery();
        
        if (rs.next()) {
            // Credentials match, redirect to index.html
            response.sendRedirect("shop.html");
        } else {
            // Credentials don't match, display error message
            message = "Invalid username or password. Please try again.";
%>
            <script>
                // Display the error paragraph
                document.getElementById("error").style.display = "block";
            </script>
<%
        }
        
        con.close(); // Close connection
    } catch(Exception e) {
        message = "Error occurred while processing your request. Please try again later.";
        e.printStackTrace();
    }
}
%>

</body>
</html>
