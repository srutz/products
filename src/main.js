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
            <h3 class="text-2xl">${product.title}</h3>
            <p >${product.description}</p>
            <div class="grow" ></div>
            <div class="flex gap-2 self-stretch text-sm">
                <div>Available: ${product.stock}</div>
                <div class="grow" ></div>
                <div>Price: ${formatCurrency(product.price)}</div>
            </div>
        `
        content.appendChild(div)
    }
}

loadproducts()

