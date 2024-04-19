<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ page import="java.sql.*" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>REGISTER HERE</title>
    <link rel="stylesheet" href="reg.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" /></head>
<body>
    <div class="reg">
        <form action=""> <!-- Change the action to login.jsp -->
            <h2>Sign up <span>ecommart</span></h2>
            <div class="para">
                <p>You have chance to create new</p>
                <p>account if you really want to.</p>
            </div>
            <div class="input">
                <div class="icon">
                    <i class="fa-solid fa-envelope"></i>    
                    <input type="email" name="umail" placeholder="email" required>

                </div>
                <div class="icon">
                    <i class="fa-solid fa-user"></i>    
                    <input type="text" name="uname" placeholder="username" required>

                </div>
                <div class="icon">
                    <i class="fa-solid fa-lock"></i>    
                    <input type="password" name="upass" placeholder="password" required>

                </div>
                <div class="submit">
                    <input type="submit" value="Sign up">
                </div>
                <div class="login">
                    <h3>Already have account ? <a href="login.jsp">Go here</a></h3>
                </div>
            </div>
        </form>
    </div>
<%
String umail = request.getParameter("umail");
String uname = request.getParameter("uname");
String upass = request.getParameter("upass");
String message = "";

if (umail != null && uname != null && upass != null) {
    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/online_grocery_shopping", "root", "mysql");

        // Verify if the connection is successful
        if (con != null) {
            System.out.println("Connected to the database.");
        } else {
            System.out.println("Failed to connect to the database.");
        }

        PreparedStatement ps = con.prepareStatement("INSERT INTO reg_details(user_email, username, password) VALUES (?, ?, ?)");
        ps.setString(1, umail);
        ps.setString(2, uname);
        ps.setString(3, upass);
        int i = ps.executeUpdate();
        if (i > 0) {
            message = "Registered";
            // Redirect to login.jsp after successful registration
            response.sendRedirect("login.jsp");
        } else {
            message = "Not Registered";
        }
    } catch (Exception e) {
        message = "Error";
        e.printStackTrace();
    }
} else {
    message = "Please Enter The Data";
    System.out.println(message);
}
%>
</body>
</html>
