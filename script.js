let tg = window.Telegram.WebApp;

function buy(product) {
    tg.sendData(product);
}