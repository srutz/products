# Project Title

This project is a simple web application that fetches product data from a dummy JSON API and displays it in a user-friendly format. The product data includes a thumbnail image and product title. The project also includes a utility function for formatting currency values.

# Controversial Section

Controversial comment

## Code Snippet

Here is a snippet from the `main.js` file:

```javascript
import './style.css'

const formatCurrency = (number, currency = 'EUR', locale = 'de-DE') => 
    new Intl.NumberFormat(locale, { style: 'currency', currency }).format(number);

const loadproducts = async () => {
    const response = await fetch("https://dummyjson.com/products")
    const data = await response.json()
    const products = data.products;
    console.table(products)

    const content = document.querySelector("#content")
    for (const product of products) {
        const div = document.createElement("div")
        div.classList.add(...("flex flex-col gap-2 items-center p-4 m-4 w-96 border rounded-lg shadow-lg".split(" ")))
        div.innerHTML = `
            <img src="${product.thumbnail}" class="object-contain w-80 h-48" alt="${product.title}">
