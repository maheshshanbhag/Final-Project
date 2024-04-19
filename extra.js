var products = document.querySelector(".products");

var arr = [
    {name:"Tomatoes",img:"https://img.freepik.com/free-photo/tomatoes_144627-15412.jpg?t=st=1712742483~exp=1712746083~hmac=4b53c7082ec0438159c1ea111d567864d1b8cc81b798e56260bbc88504c4ae82&w=1060",price:"39",dsec:"Tomatoes are a popular and versatile fruit used in a wide variety of culinary dishes. They are rich in vitamins and antioxidants, making them a nutritious addition to any meal.",rating:"fa-solid fa-star"},
    {name:"Fish",img:"https://img.freepik.com/free-photo/fresh-bass-with-white-background_1203-1781.jpg?t=st=1712742530~exp=1712746130~hmac=409ab2606b39b14f67074939a5295f746becc1073c14dea5fe8caa782f1b3912&w=1060",price:"99",dsec:"Fresh fish, a nutritious source of protein, is a staple in many diets worldwide. It can be prepared in various ways, such as grilling, baking, or frying, to suit different tastes.",rating:"fa-regular fa-star-half-stroke"},
    {name:"Salt",img:"https://img.freepik.com/free-photo/spoon-heap-salt-table_144627-11034.jpg?t=st=1712742557~exp=1712746157~hmac=5d96ed22512ab76ecd2399af0e5ed4d8fce137179d82de14d31c703aac84f637&w=1060",price:"9",dsec:"Salt is an essential seasoning used to enhance the flavor of various dishes. It also plays a crucial role in food preservation and baking.",rating:"fa-solid fa-star"},
    {name:"Coffee",img:"https://img.freepik.com/free-psd/coffee-cup-icon-isolated-3d-render-illustration_47987-8773.jpg?t=st=1712742611~exp=1712746211~hmac=ca68b5f4c0597442db0392ec901e75bffcd9c26f897c59be1e5bc6cbff9f44cf&w=740",price:"29",dsec:"Coffee, a beloved beverage worldwide, is enjoyed for its rich flavor and stimulating effects. It can be brewed in various ways, such as espresso, drip, or French press.",rating:"fa-regular fa-star-half-stroke"},
    {name:"Ketchup",img:"https://img.freepik.com/premium-photo/bowl-ketchup-isolated-white_88281-1550.jpg?w=900",price:"39",dsec:"Ketchup is a popular condiment made from tomatoes, vinegar, sugar, and spices. It adds a tangy and slightly sweet flavor to dishes and is commonly used with fries, burgers, and hot dogs.",rating:"fa-regular fa-star-half-stroke"},
    {name:"Onions",img:"https://img.freepik.com/premium-photo/red-onions-slices_398492-9039.jpg?w=740",price:"29",dsec:"Onions are a versatile vegetable used in various cuisines worldwide. They add flavor and aroma to dishes and can be enjoyed raw, cooked, or caramelized.",rating:"fa-regular fa-star-half-stroke"},
    {name:"Watermelon",img:"https://img.freepik.com/premium-psd/psd-manipulation-design-psd-social-media-post-watermelon-pieces-design_1150083-4.jpg?w=740",price:"30",dsec:"Watermelon is a refreshing and hydrating fruit known for its juicy, sweet flesh and vibrant color. It's a popular choice during hot summer months for its thirst-quenching properties.",rating:"fa-solid fa-star"},
    {name:"Eggs",img:"https://img.freepik.com/free-photo/three-fresh-organic-raw-eggs-isolated-white-surface_114579-43677.jpg?t=st=1712748355~exp=1712751955~hmac=748ce4a54538b1e4d435fd015e3d134c28a8916cfb626d68d1dddac98f177515&w=1060",price:"70",dsec:"Eggs are a versatile ingredient used in various culinary preparations. They are rich in protein and can be cooked in numerous ways, such as boiled, fried, or scrambled.",rating:"fa-solid fa-star"},
    {name:"Milk",img:"https://img.freepik.com/free-vector/drink-ad-milk-company_52683-35014.jpg?t=st=1712748387~exp=1712751987~hmac=be01a3e04818162987b6d05acb82065448d74a8f3760ed5a76f5537d159ecc3f&w=740",price:"25",dsec:"Milk is a nutrient-rich dairy product known for its calcium content, which is essential for bone health. It can be consumed on its own or used in cooking and baking.",rating:"fa-regular fa-star"},
    {name:"Bread",img:"https://img.freepik.com/free-photo/side-view-wheat-bread_140725-9303.jpg?t=st=1712748434~exp=1712752034~hmac=1f7638080b385e7df62fb6e950f0d127bc348d3a9b87515f2b0a709007199e29&w=740",price:"29",dsec:"Bread is a staple food made from flour, water, yeast, and salt. It comes in various forms, such as loaves, rolls, and baguettes, and is a versatile ingredient used in sandwiches, toast, and more.",rating:"fa-regular fa-star"},
    {name:"Chicken",img:"https://img.freepik.com/free-photo/delicious-chicken-table_144627-8758.jpg?t=st=1712748570~exp=1712752170~hmac=6904a17e9de344f96c0fcf596bfe62c6b5b23b1ef7c903ef721d979be641e2c7&w=1060",price:"190",dsec:"Chicken is a popular source of lean protein enjoyed worldwide. It can be prepared in countless ways, including grilling, roasting, baking, and frying, making it a versatile ingredient in various cuisines.",rating:"fa-solid fa-star"},
    {name:"Apples",img:"https://img.freepik.com/free-photo/front-view-fresh-red-apples-ripe-mellow-fruits-white-desk-fruit-color-tree-fresh-plant-red_140725-110203.jpg?t=st=1712748616~exp=1712752216~hmac=193dfc704091610c99cb07acceaffacc9ddce8bea84c8d74160bec129b02abc1&w=1060",price:"80",dsec:"Apples are crisp and juicy fruits known for their sweet and tart flavors. They are rich in fiber, vitamins, and antioxidants, making them a healthy snack option.",rating:"fa-solid fa-star"},
    {name:"Rice",img:"https://img.freepik.com/free-photo/top-view-raw-rice-inside-plate-dark-desk_179666-27235.jpg?t=st=1712748647~exp=1712752247~hmac=9f9c227e4a41515f7f7a712c46260d7a699a96bc190e08360f12d9b18885d6c6&w=1060",price:"400",dsec:"Rice is a staple food consumed by a large part of the world's population. It comes in various types, such as white, brown, and jasmine, and can be served as a side dish or used in dishes like stir-fries, curries, and sushi.",rating:"fa-solid fa-star"},
    {name:"Bananas",img:"https://img.freepik.com/premium-photo/bananas-isolated-white-background_179068-7966.jpg?w=900",price:"80",dsec:"Bananas are creamy and nutritious fruits known for their high potassium content. They make a convenient and portable snack.",rating:"fa-solid fa-star"},
    {name:"Oranges",img:"https://img.freepik.com/premium-photo/pile-oranges-with-water-droplets-them_173770-1442.jpg?w=360",price:"70",dsec:"Oranges are citrus fruits known for their refreshing taste and high vitamin C content. They are commonly eaten fresh or juiced and are also used in cooking and baking.",rating:"fa-solid fa-star"},
    {name:"Mangoes",img:"https://img.freepik.com/premium-photo/fresh-ripe-marian-plum-mayongchid-maprang-plum-mango-tropical-thai-fruit_293060-3066.jpg?w=1060",price:"100",dsec:"Mangoes are tropical fruits prized for their sweet and juicy flesh. They are commonly eaten fresh, added to salads, or used in smoothies and desserts.",rating:"fa-solid fa-star"},
    {name:"Sugar",img:"https://img.freepik.com/premium-photo/sweet-sugar-wood-bowl-white-surface_55883-2836.jpg?w=826",price:"40",dsec:"Sugar is a common sweetener used in various culinary preparations, including baking, cooking, and beverage-making.",rating:"fa-regular fa-star-half-stroke"},
    {name:"Banana Slices",img:"https://img.freepik.com/premium-photo/fresh-sliced-banana-white-ceramic-plate-black-table-preparing-ingredients-healthy-breakfasts_63762-5484.jpg?w=1060",price:"50",dsec:"Banana slices are a convenient snack option made from dehydrated or dried bananas. They are often enjoyed on their own or added to cereal, yogurt, or baked goods.",rating:"fa-solid fa-star"},
    {name:"Sauce",img:"https://img.freepik.com/free-vector/realistic-icon-with-bottle-tomato-ketchup-white-background-vector-illustration_1284-67201.jpg?t=st=1712748829~exp=1712752429~hmac=5451eda4cfe2a4177660062811999478a2aae18d21424d49c086b12cdedee512&w=740",price:"40",dsec:"Sauce is a flavorful liquid or semi-solid condiment used to enhance the taste of dishes. It comes in various types, such as tomato sauce, barbecue sauce, and soy sauce.",rating:"fa-solid fa-star"},
    {name:"Avocados",img:"https://img.freepik.com/free-vector/vector-green-fresh-whole-half-cut-avocado-with-leaf-side-view-isolated-white-background_1284-45445.jpg?t=st=1712748848~exp=1712752448~hmac=6032967c09aff386a366dc18c1ed6e5bc9267ff833fffb425a6ce06d7fed7a63&w=740",price:"150",dsec:"Avocados are creamy and nutritious fruits known for their high healthy fat content. They are commonly used in salads, sandwiches, dips, and smoothies.",rating:"fa-solid fa-star"},
    {name:"Dry Fruits",img:"https://img.freepik.com/premium-photo/assortment-dry-fruits-nuts_107389-1080.jpg?w=1060",price:"200",dsec:"Dry fruits are fruits that have been dried or dehydrated to remove their water content, resulting in a concentrated source of nutrients and flavor. Common types include raisins, dates, figs, and apricots.",rating:"fa-regular fa-star-half-stroke"},
    {name:"Meat",img:"https://img.freepik.com/free-photo/top-view-roasted-meat-pieces-wooden-board_141793-1496.jpg?t=st=1712748907~exp=1712752507~hmac=7a5cf02cdd538c10d9329c639e2035acb84ccd143d38dac5ecbf153d6e40c7e8&w=740",price:"188",dsec:"Meat is animal flesh that is used as food. It is a significant source of protein and nutrients and is consumed in various forms, including beef, pork, lamb, and poultry.",rating:"fa-solid fa-star"},
    {name:"Butter",img:"https://img.freepik.com/free-photo/close-up-grated-parmesan_23-2148376113.jpg?t=st=1712748938~exp=1712752538~hmac=8f131773d7823a88a23618ef9f968e6f4db9faa8ebf099442e0ce6d0e2003c5f&w=996",price:"79",dsec:"Butter is a dairy product made from the fat and protein components of milk or cream. It is commonly used as a spread on bread or in cooking and baking.",rating:"fa-solid fa-star"},
    
        {
            name: "Honey",
            img: "https://tse1.mm.bing.net/th?id=OIP.5L8qnpEc_f26jf8PXLLPKwHaE7&pid=Api&P=0&h=180",
            price: "199",
            dsec: "Honey is a sweet and viscous food substance produced by bees. It is rich in antioxidants and has various health benefits. Honey is commonly used as a natural sweetener and is also used in cooking and baking.",
            rating: "fa-regular fa-star"
        },
        {
            name: "Oil",
            img: "https://tse3.mm.bing.net/th?id=OIP.gVbLGaGKTwUnv1i99J9gXAHaE8&pid=Api&P=0&h=180",
            price: "119",
            dsec: "Oil is a staple cooking ingredient used in various culinary preparations. It provides flavor, moisture, and texture to dishes and is essential for frying, sautéing, and dressing salads.",
            rating: "fa-regular fa-star"
        },
        {
            name: "Dragon Fruit",
            img: "https://tse1.mm.bing.net/th?id=OIP.bwqChmPePS2rhlqZgC8fZwHaE8&pid=Api&P=0&h=180",
            price: "59",
            dsec: "Dragon fruit, also known as pitaya, is a tropical fruit with a unique appearance and sweet flavor. It is rich in antioxidants, fiber, and vitamin C, making it a nutritious addition to smoothies, salads, and desserts.",
            rating: "fa-regular fa-star"
        },
        {
            name: "Fanta",
            img: "https://tse3.mm.bing.net/th?id=OIP.TVKHfbwsa4c8rx3ybZkL3gHaHa&pid=Api&P=0&h=180",
            price: "49",
            dsec: "Fanta is a popular carbonated soft drink known for its fruity flavors. It is enjoyed worldwide as a refreshing beverage and is available in various flavors such as orange, grape, and pineapple.",
            rating: "fa-regular fa-star"
        },
        {
            name: "Panper Boat",
            img: "https://tse1.mm.bing.net/th?id=OIP.LQtpOttN8cU4W2nNfSrAXgHaFO&pid=Api&P=0&h=180",
            price: "39",
            dsec: "Panper Boat is a fun and delicious snack made by hollowing out a boat-shaped bread roll and filling it with a variety of savory or sweet ingredients. It's a popular street food in many cultures.",
            rating: "fa-regular fa-star"
        },
        {
            name: "Papaya",
            img: "https://tse3.mm.bing.net/th?id=OIP.iiz7LGiv15zdM29AAO25vAHaHa&pid=Api&P=0&h=180",
            price: "59",
            dsec: "Papaya is a tropical fruit known for its sweet taste and vibrant color. It is rich in vitamins, minerals, and digestive enzymes, making it a nutritious addition to smoothies, salads, and desserts.",
            rating: "fa-regular fa-star"
        },
        {
            name: "Chicken Meat",
            img: "https://tse1.mm.bing.net/th?id=OIP.mU9QE8WOakaksbWKkR9I_QHaEK&pid=Api&P=0&h=180",
            price: "199",
            dsec: "Chicken meat is a versatile and lean source of protein enjoyed in various culinary preparations worldwide. It can be grilled, roasted, baked, or fried and is used in dishes like curries, salads, and sandwiches.",
            rating: "fa-regular fa-star"
        },
        {
            name: "Capsicum",
            img: "https://tse1.mm.bing.net/th?id=OIP.LOxxC83VWSHtCmWNzv6GwQHaFf&pid=Api&P=0&h=180",
            price: "39",
            dsec: "Capsicum, also known as bell pepper or sweet pepper, is a colorful and flavorful vegetable used in various culinary dishes. It can be eaten raw in salads, roasted in sandwiches, or cooked in stir-fries and curries.",
            rating: "fa-regular fa-star"
        },
        {
            name: "Potato",
            img: "https://tse1.explicit.bing.net/th?id=OIP.pvco8kt_y61V_GnAI8ZhsQHaF7&pid=Api&P=0&h=180",
            price: "39",
            dsec: "Potatoes are starchy tuber vegetables known for their versatility and nutritional value. They can be boiled, mashed, roasted, or fried and are a staple ingredient in many dishes worldwide.",
            rating: "fa-regular fa-star"
        },
        {
            name: "Bread",
            img: "https://tse1.mm.bing.net/th?id=OIP.PICx191zg4aarkrCdyNb4AHaHa&pid=Api&P=0&h=180",
            price: "59",
            dsec: "Bread is a staple food made from flour, water, yeast, and salt. It comes in various forms, such as loaves, rolls, and baguettes, and is a versatile ingredient used in sandwiches, toast, and more.",
            rating: "fa-regular fa-star"
        },
        {
            name: "Grapes",
            img: "https://tse4.mm.bing.net/th?id=OIP.a18w7RxP3qVC0FlynrlpdwHaHa&pid=Api&P=0&h=180",
            price: "99",
            dsec: "Grapes are juicy and sweet fruits known for their versatility and health benefits. They can be eaten fresh as a snack, used in salads, or pressed to make juice and wine.",
            rating: "fa-regular fa-star"
        },
        {
            name: "Eggs",
            img: "https://tse3.mm.bing.net/th?id=OIP.S9zs5PXDxhNLEnvqyXIfyQHaE6&pid=Api&P=0&h=180",
            price: "70",
            dsec: "Eggs are a versatile ingredient used in various culinary preparations. They are rich in protein and can be cooked in numerous ways, such as boiled, fried, or scrambled.",
            rating: "fa-regular fa-star"
        }
    
];

function showProducts(){
    var clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class="product">
            <div class="left">
                <img src="${obj.img}" alt="">
            </div>
            <div class="right">
                <h2>${obj.name}</h2>
                <h2><i class="fa-solid fa-indian-rupee-sign"></i> ${obj.price}</h2>
                <p>${obj.dsec}</p>
                <i class="${obj.rating}"></i>
                <button onclick="addToCart('${obj.name}', '${obj.price}')">add to cart</button>            
            </div>
        </div>`;
    })
    products.innerHTML = clutter;
}    
showProducts();
var oneSearch =  document.querySelector(".oneSerach");
var expdiv = document.querySelector(".expdiv");
var search = document.querySelector("#search");
search.addEventListener("focus", function(){
    expdiv.style.display = "block";
    oneSearch.style.display= "none";
    
})
search.addEventListener("blur", function(){
    expdiv.style.display = "none";
})


function searchFuntionality(){
    search.addEventListener("input", function(){
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(search.value.toLowerCase()));
        var clutter = "";
        filteredArray.forEach(function(obj){
            clutter += `<div class="oneSearch">
                <i class="fa-solid fa-magnifying-glass"></i>
                <h2>${obj.name}</h2>
                </div>`;
        });
        
        expdiv.style.display = "block";
        expdiv.innerHTML = clutter;
    });
};
searchFuntionality();

// extra.js

function addToCart(productName, price) {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Set up the request
    xhr.open('POST', 'add_to_cart.jsp', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Define the data to be sent in the request body
    const data = `productName=${encodeURIComponent(productName)}&price=${encodeURIComponent(price)}`;

    // Set up the onload function to handle the response
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Item added successfully, show a message to the user
            alert('Item added to cart successfully!');
        } else {
            // Error handling: Show an error message to the user
            alert('Failed to add item to cart. Please try again.');
        }
    };

    // Send the request with the data
    xhr.send(data);
}



