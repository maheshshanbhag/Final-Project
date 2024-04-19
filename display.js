var progress = document.querySelector(".progress-bar");
var buy = document.querySelector(".buy");
var next = document.querySelector(".button-container");

buy.addEventListener("click",function(){
    progress.style.display = "flex";
    next.style.display = "block";
});
let currentStep = 1;

function nextStep() {
    if (currentStep === 1) {
        // If moving from Make Order to Address step
        document.getElementById('addressInput').style.display = 'block';
    } else if (currentStep === 2) {
        // If moving from Address to Make Payment step
        const address = document.getElementById('address').value.trim();
        if (address === '') {
            alert("Please enter your address.");
            return;
        } else {
            document.getElementById('addressInput').style.display = 'none'; // Hide address input
        }
    } else if (currentStep === 3) {
        // If moving from Make Payment to Payment successful
        alert("Payment successful!");
        storeCartItemsInDatabase(); // Store cart items in the database
        return;
    }
    
    // Move to the next step
    currentStep++;
    updateProgressBar();
}

function storeCartItemsInDatabase() {
    fetch('store_cart_items.jsp', {
        method: 'POST'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to store cart items in the database.');
        }
        return response.text();
    })
    .then(data => {
        console.log(data); // Log server response
        // Redirect to order.jsp
        window.location.href = 'order.jsp';
    })
    .catch(error => console.error('Error:', error));
}

function updateProgressBar() {
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => step.classList.remove('active'));
    document.getElementById(`step${currentStep}`).classList.add('active');
}

function resetProgressBar() {
    currentStep = 1;
    updateProgressBar();
    document.getElementById('address').value = '';
    document.getElementById('addressInput').style.display = 'none';
}
