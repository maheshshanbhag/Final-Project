
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>PRODUCTS</title>
<link rel="stylesheet" href="ep.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>
<body>
    <div class="navbar">
        <div class="logo">
            <h2>ecommart</h2>
        </div>
        <div class="searchbar">
            <input type="text" placeholder="search items" id="search">
            
        </div>
        
        <div class="orders">
            <a href="displayCart.jsp">Carts</a>
            <a href="order.jsp">My orders</a>
        </div>
    </div>
    <div class="top">
        <div class="expdiv">


        </div>
        <div class="products">
            <div class="product">
                <div class="left">
                    <img src="first.jpg" alt="">
                </div>
                <div class="right">
                    <h2>ProuctName</h2>
                    <h2>199</h2>
                    <p>Lorem ipsum, et cum hic amet eligendi enim itaque, mollitia beatae architecto numquam officiis necessitatibus quia atque?</p>
                    <i class="fa-solid fa-star"></i>
					<button onclick="addToCart('ProductName', 199)">add to cart</button>
                </div>
                
            </div>
        </div>
    </div>
    <script src="extra.js"></script>
</body>
</html>