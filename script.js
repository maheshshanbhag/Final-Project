Shery.imageEffect("#right", {style:5, config:{"a":{"value":2.29,"range":[0,30]},"b":{"value":-0.85,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.059652926935632},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":10.3,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.31,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.92,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.57,"range":[0,1]},"antialias_threshold":{"value":0.02,"range":[0,0.1]},"noise_height":{"value":0.56,"range":[0,2]},"noise_scale":{"value":11.45,"range":[0,100]}} , gooey: true})
var items = [
    {name:"Honey",price:"199",image:"https://tse1.mm.bing.net/th?id=OIP.5L8qnpEc_f26jf8PXLLPKwHaE7&pid=Api&P=0&h=180"},
    {name:"Oil",price:"119",image:"https://tse3.mm.bing.net/th?id=OIP.gVbLGaGKTwUnv1i99J9gXAHaE8&pid=Api&P=0&h=180"},
    {name:"Drgon Fruit",price:"59",image:"https://tse1.mm.bing.net/th?id=OIP.bwqChmPePS2rhlqZgC8fZwHaE8&pid=Api&P=0&h=180"},
    {name:"Fanta",price:"49",image:"https://tse3.mm.bing.net/th?id=OIP.TVKHfbwsa4c8rx3ybZkL3gHaHa&pid=Api&P=0&h=180"},
    {name:"Panper Boat",price:"39",image:"https://tse1.mm.bing.net/th?id=OIP.LQtpOttN8cU4W2nNfSrAXgHaFO&pid=Api&P=0&h=180"},
    {name:"Papaya",price:"59",image:"https://tse3.mm.bing.net/th?id=OIP.iiz7LGiv15zdM29AAO25vAHaHa&pid=Api&P=0&h=180"},
    {name:"Chicken Meat",price:"199",image:"https://tse1.mm.bing.net/th?id=OIP.mU9QE8WOakaksbWKkR9I_QHaEK&pid=Api&P=0&h=180"},
    {name:"Capsicum",price:"39",image:"https://tse1.mm.bing.net/th?id=OIP.LOxxC83VWSHtCmWNzv6GwQHaFf&pid=Api&P=0&h=180"},
    {name:"Potato",price:"39",image:"https://tse1.explicit.bing.net/th?id=OIP.pvco8kt_y61V_GnAI8ZhsQHaF7&pid=Api&P=0&h=180"},
    {name:"Bread",price:"59",image:"https://tse1.mm.bing.net/th?id=OIP.PICx191zg4aarkrCdyNb4AHaHa&pid=Api&P=0&h=180"},
    {name:"Grapes",price:"99",image:"https://tse4.mm.bing.net/th?id=OIP.a18w7RxP3qVC0FlynrlpdwHaHa&pid=Api&P=0&h=180"},
    {name:"Eegs",price:"70",image:"https://tse3.mm.bing.net/th?id=OIP.S9zs5PXDxhNLEnvqyXIfyQHaE6&pid=Api&P=0&h=180"}
];
let clutter = "";
var featureDiv = document.querySelector(".feature-product");
var myCart = document.querySelector("#myCart");
var showCarts = document.querySelector(".hero-carts");
var category = document.querySelector(".category");
var showMycart  = document.querySelector(".carts");

items.forEach(function(obj,index){
    clutter +=
     `<div class="feature-item">
        <div class="feature-img">
            <img src="${obj.image}" alt="" class="simple">
        </div>
        <h4>"${obj.name}"</h4>
        <h4><i class="ri-money-rupee-circle-line"></i>"${obj.price}"</h4>
		<button class="addToCart" data-index="${index}" onclick="redirectToExtraPage(${index})">View More</button>
    </div>`;
});
       const contactLink = document.getElementById('contactLink');

        // Get the footer element
        const footer = document.querySelector('.footer');

        // Add click event listener to the contact anchor tag
        contactLink.addEventListener('click', function(event) {
            // Prevent default behavior of anchor tag
            event.preventDefault();

            // Scroll smoothly to the footer
            footer.scrollIntoView({ behavior: 'smooth' });
        });
// items.forEach(function(obj, index) {
//     if (index === 0) { // Check if it's the first item
//         clutter +=
//             `<div class="feature-item">
//                 <div class="feature-img">
//                     <a href="honey.html"><img src="${obj.image}" alt="" class="simple"></a> 
//                 </div>
//                 <h4>"${obj.name}"</h4>
//                 <h4><i class="ri-money-rupee-circle-line"></i>"${obj.price}"</h4>
//                 <button data-index="${index}" class="addToCart">Add to Cart</button>
//             </div>`;
//     } else {
//         clutter +=
//             `<div class="feature-item">
//                 <div class="feature-img">
//                     <img src="${obj.image}" alt="" >
//                 </div>
//                 <h4>"${obj.name}"</h4>
//                 <h4><i class="ri-money-rupee-circle-line"></i>"${obj.price}"</h4>
//                 <button data-index="${index}" class="addToCart">Add to Cart</button>
//             </div>`;
//     }
// });
featureDiv.innerHTML = clutter;

function redirectToExtraPage(index) {
    // Get the index of the item
    const itemIndex = index;

    // Redirect to extra.jsp page with the index as a query parameter
    window.location.href = `extra.jsp?index=${itemIndex}`;
}

var carts=[];
function addToCart(){
    featureDiv.addEventListener("click",function(dets){
        if(dets.target.classList.contains('addToCart')){
            carts.push(items[dets.target.dataset.index])
            console.log(carts);
        }
    })
}
addToCart();

/*function displayCart(){
    var cartFlag = 0;
    myCart.addEventListener("click",function(){
        showCarts.style.display = "block";
        var adCart = "";
        carts.forEach(function(obj){
            adCart += `<div class="cart-item">
            <div class="img">
                <img src=${obj.image} alt="">
            </div>
            <div class="name"> ${obj.name} </div>
            <div class="minus">
                <i class="ri-subtract-line"></i>
            </div>
        </div>`;
        });
        if(cartFlag == 0){
            showMycart.innerHTML = adCart;
            cartFlag = 1;
        }
        else{
            category.style.marginTop = "20px";
            showCarts.style.display = "none";
            cartFlag = 0;
        }
    })  
} */
// displayCart();
        // Get the contact anchor tag


function changePage(){
    document.querySelector(".simple").addEventListener("clcik",function(){
        console.log("hello");
        window.location.href = "honey.html";
    })
}
changePage();