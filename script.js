const produtosMock = [
    { id: 1, nome: "Camisa Brasil I 2026", preco: 349.90, img: "assets/img/camisa.png" },
    { id: 2, nome: "Chuteira Adidas de campo 11 PREDATOR EDGE+ - Azul", preco: 899.00, img: "assets/img/predator-image.png" },
    { id: 3, nome: "Bola Futebol Adidas Euro24 Eurocopa 2024", preco: 259.90, img: "assets/img/bola24.png" },
    { id: 4, nome: "Camisa São Paulo III 2025/2026", preco: 399.90, img: "assets/img/camisasp.png" },
];

let cartCount = 0;

function renderProducts() {
    const productList = document.getElementById('product-list');
    
    // Se o elemento não existir ainda, para a execução para não dar erro
    if (!productList) return;

    // SOLUÇÃO DEFINITIVA: Criamos uma string única e SUBSTITUÍMOS tudo de uma vez
    let htmlContent = "";

    produtosMock.forEach(produto => {
        htmlContent += `
            <article class="card">
                <div class="card__image-container">
                    <img src="${produto.img}" alt="${produto.nome}" class="card__image">
                </div>
                <div class="card__content">
                    <h3 class="card__name">${produto.nome}</h3>
                    <p class="card__price">R$ ${produto.preco.toFixed(2)}</p>
                    <button class="btn btn--primary" onclick="addToCart()">Adicionar ao Carrinho</button>
                </div>
            </article>
        `;
    });

    // O sinal de "=" (sem o +) apaga o "Carregando..." e coloca os cards
    productList.innerHTML = htmlContent;
}

function addToCart() {
    cartCount++;
    const cartElement = document.getElementById('cart-count');
    if (cartElement) cartElement.innerText = cartCount;
    alert("Produto adicionado ao carrinho!");
}

// Garante que a função só rode quando o HTML estiver 100% pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderProducts);
} else {
    renderProducts();
}