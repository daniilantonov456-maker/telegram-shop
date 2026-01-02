let tg = window.Telegram.WebApp;

// Массив для корзины
let cart = [];

// Функция добавления товара в корзину
function buy(product) {
    cart.push(product);
    alert(`${product} добавлен в корзину!`);
}

// Функция отправки корзины в бота
function sendCart() {
    if(cart.length === 0){
        alert("Корзина пуста!");
        return;
    }
    // Отправляем все товары через WebApp
    tg.sendData(JSON.stringify(cart));
    cart = []; // очищаем корзину после отправки
}