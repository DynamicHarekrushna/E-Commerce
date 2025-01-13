//Product List

document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
});

async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function displayProducts(products) {
    const productContainer = document.getElementById('products');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>Price: $${product.price.toFixed(2)}</p>
        `;
        
        productContainer.appendChild(productElement);
    });
}


// Image Slide


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(slideIndex) {
    const totalSlides = slides.length;
    if (slideIndex >= totalSlides) {
        currentSlide = 0;
    } else if (slideIndex < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = slideIndex;
    }
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.slides').style.transform =` translateX(-${currentSlide * slideWidth}px)`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

// Automatic Slide (Optional)
setInterval(() => {
    moveSlide(1);
}, 5000); // Auto-slide every 5 seconds



// category Section

document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});


// Review Section 
const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');
const reviewText = document.getElementById('review-text');
const submitReview = document.getElementById('submit-review');
let rating = 0;
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        rating = index + 1;
        ratingValue.innerText = rating + '/5';
        stars.forEach((s, i) => {
            s.classList.remove('active');
            if (i < rating) {
                s.classList.add('active');
            }
        });
    });
});
submitReview.addEventListener('click', () => {
    const reviewData = {
        rating,
        review: reviewText.value.trim(),
    };
    console.log(reviewData);
    ratingValue.innerText = '0/5';
    reviewText.value = '';
    stars.forEach((s) => s.classList.remove('active'));
});