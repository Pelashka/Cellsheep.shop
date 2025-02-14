document.getElementById("searchInput").addEventListener("keyup", function() {
    let filter = this.value.toLowerCase();
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        let name = product.getAttribute("data-name").toLowerCase();
        product.style.display = name.includes(filter) ? "block" : "none";
    });
});
