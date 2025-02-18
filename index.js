
function scrollToInquiry(){
    var element = document.querySelector('.container-home.inquiry');
    element.scrollIntoView({ behavior: 'smooth' });
}

function scrollToEmlak(){
    var element = document.querySelector('.container-home.emlak');
    element.scrollIntoView({ behavior: 'smooth' });
}

const openButton = document.querySelector('.open-nav');
const closeButton = document.querySelector('.close-nav');
const nav = document.querySelector('.navbar');
const images = document.querySelectorAll('img');


openButton.addEventListener("click", () => {
    nav.classList.add('navigation-open');
    
    images.forEach(function(image) {
        image.style.display = 'none';
    });
});


closeButton.addEventListener("click", () => {
    nav.classList.remove('navigation-open');

    images.forEach(function(image) {
        image.style.display = 'block';
    });
});



// Set your URL
var urlCurrency = 'https://api.collectapi.com/economy/allCurrency'; // Replace this with your actual URL
var urlGold = 'https://api.collectapi.com/economy/goldPrice'; // Replace this with your actual URL
var urlSilver = 'https://api.collectapi.com/economy/silverPrice';
var urlCrypto = 'https://api.collectapi.com/economy/cripto';
var urlBorsa = 'https://api.collectapi.com/economy/borsaIstanbul';
var urlHisseSenedi = 'https://api.collectapi.com/economy/hisseSenedi';



var headers = {
    'Content-Type': "application/json",
    'Authorization': "apikey 61gBvSY82R6OsblW7UlnOB:597XxuHy8wEWFYu5jjh1kP"
};
//cache: 'force-cache',
function getDataCurrency(url, headers){
    fetch(url, { method: 'GET', cache: 'no-cache',  headers: headers }).then(response => response.json()).then(data => {
        console.log(data.result) //USD dolar
        //console.log(data.result[0]['buying']) //USD dolar
        const USD = data.result[0]['selling'];
        const USD_rate = data.result[0]['rate'];

        const EUR = data.result[1]['selling'];
        const EUR_rate = data.result[1]['rate'];

        const GBP = data.result[2]['selling'];
        const GBP_rate = data.result[2]['rate'];

        console.log(USD);
        console.log(USD_rate);

        setDataCurrency(USD, EUR, GBP);
        setDataCurrencyRates(USD_rate, EUR_rate, GBP_rate);

        })
        .catch((error) => {
        console.error('Error:', error);
    });
}


function setDataCurrency(USD, EUR, GBP){
    const dollar_price = document.getElementsByClassName('dolar-price')[0];
    const euro_price = document.getElementsByClassName('euro-price')[0];
    const sterlin_price = document.getElementsByClassName('sterlin-price')[0];

    dollar_price.textContent = USD.toString().slice(0,5);
    euro_price.textContent = EUR.toString().slice(0,5);
    sterlin_price.textContent = GBP.toString().slice(0,5);
}


function setDataCurrencyRates(USD_rate, EUR_rate, GBP_rate){
    const dollar_rate = document.getElementsByClassName('dolar-rate')[0];
    const euro_rate = document.getElementsByClassName('euro-rate')[0];
    const sterlin_rate = document.getElementsByClassName('sterlin-rate')[0];

    dollar_rate.textContent = USD_rate.toString().slice(0,5);
    euro_rate.textContent = EUR_rate.toString().slice(0,5);
    sterlin_rate.textContent = GBP_rate.toString().slice(0,5);
    retrieveNumberResult(USD_rate, dollar_rate);
    retrieveNumberResult(EUR_rate,euro_rate);
    retrieveNumberResult(GBP_rate, sterlin_rate);
}

getDataCurrency(urlCurrency, headers);



//ALTIN
//cache: 'force-cache',
function getDataAltin(url, headers){
    fetch(url, { method: 'GET', cache: 'no-cache', headers: headers }).then(response => response.json()).then(data => {
        console.log(data.result) //USD dolar
        //console.log(data.result[0]['buying']) //USD dolar
        const grAltin = data.result[0]['selling'];
        const grAltin_rate = data.result[0]['rate'];

        const ceyrekAltin = data.result[1]['selling'];
        const ceyrekAltin_rate= data.result[1]['rate'];


        console.log(grAltin);
        console.log(grAltin_rate);

        setDataAltin(grAltin, ceyrekAltin);
        setDataAltinRates(grAltin_rate, ceyrekAltin_rate);

        })
        .catch((error) => {
        console.error('Error:', error);
    });
}

function setDataAltin(grAltin_price, ceyrekAltin_price){
    const grAltin = document.getElementsByClassName('gr-altin-price')[0];
    const ceyrekAltin = document.getElementsByClassName('ceyrek-altin-price')[0];

    grAltin.textContent = grAltin_price.toString();
    ceyrekAltin.textContent = ceyrekAltin_price.toString();
}

function setDataAltinRates(grAltin_rate, ceyrekAltin_rate){
    const grAltin = document.getElementsByClassName('gr-altin-rate')[0];
    const ceyrekAltin = document.getElementsByClassName('ceyrek-altin-rate')[0];

    grAltin.textContent = grAltin_rate.toString().slice(0,5);
    ceyrekAltin.textContent = ceyrekAltin_rate.toString().slice(0,5);
    retrieveNumberResult(grAltin_rate, grAltin);
    retrieveNumberResult(ceyrekAltin_rate, ceyrekAltin);
}

getDataAltin(urlGold, headers);



// BORSA
function getDataIstanbulBorsa(url, headers){
    fetch(url, {method: 'GET', cache: 'no-cache', headers: headers }).then(response => response.json()).then(data => {
        console.log(data.result) //USD dolar
        //console.log(data.result[0]['buying']) //USD dolar
        const borsa = data.result[0]['current'];
        const borsa_rate = data.result[0]['changerate'];

        console.log(borsa);
        console.log(borsa_rate);

        setDataIstanbulBorsa(borsa);
        setDataIstanbulBorsaRates(borsa_rate);

        })
        .catch((error) => {
        console.error('Error:', error);
    });
}

function setDataIstanbulBorsa(borsa_price){
    const borsa = document.getElementsByClassName('borsa-price')[0];

    borsa.textContent = borsa_price.toString();
}

function setDataIstanbulBorsaRates(borsa_rate){
    const borsaRate = document.getElementsByClassName('borsa-rate')[0];

    borsaRate.textContent = borsa_rate.toString().slice(0,5);
    retrieveNumberResult(borsa_rate, borsaRate);
}

getDataIstanbulBorsa(urlBorsa, headers);





// BITCOIN
function getDataBitcoin(url, headers){
    fetch(url, { method: 'GET', cache: 'no-cache', headers: headers }).then(response => response.json()).then(data => {
        console.log(data.result) //USD dolar
        //console.log(data.result[0]['buying']) //USD dolar
        const bitcoin = data.result[0]['price'];
        const bitcoin_rate = data.result[0]['changeDay'];

        console.log(bitcoin);
        console.log(bitcoin_rate);

        setDataBitcoin(bitcoin);
        setDataBitcoinRates(bitcoin_rate);


        })
        .catch((error) => {
        console.error('Error:', error);
    });
}

function setDataBitcoin(bitcoin_price){
    const bitcoin = document.getElementsByClassName('bitcoin-price')[0];

    bitcoin.textContent = bitcoin_price.toString().slice(0,7);
}

function setDataBitcoinRates(bitcoin_rate){
    const bitcoinRate = document.getElementsByClassName('bitcoin-rate')[0];

    bitcoinRate.textContent = bitcoin_rate.toString().slice(0,5);
    retrieveNumberResult(bitcoin_rate, bitcoinRate);

}

getDataBitcoin(urlCrypto, headers);


// Check if the number is negative or positive
function retrieveNumberResult(number, numberResult) {
    if (number < 0) {
        numberResult.textContent = '%'+ number;
        numberResult.classList.add('red-text');
    } 
    else {
        numberResult.textContent = '%'+ number;
        numberResult.classList.add('green-text');
    }
}


// HISSE SENEDI

let arr = ["EREGL", "FROTO", "SISE", 'TUPRS', 'THYAO', 'ISCTR', 'GARAN', 'ENJSA', 'KCHOL', 'ALARK', 'HEKTS', 'KRDMA', 'ISDMR', 'ARCLK', 'ASTOR', 'BIMAS', 'SASA', 'ENKAI', 'TCELL', 'TOASO'];
let count = 0;

function getAndSetDataHisseler(url, headers) {
    fetch(url, { method: 'GET', cache: 'no-cache', headers: headers }).then(response => response.json()).then(data => {
        console.log(data.result)

    const hisseler = data.result;
    for (j in hisseler){
        console.log(j)
        console.log(hisseler[j].code)
        if (arr.includes(hisseler[j].code)) {
            const str = hisseler[j].code;
            const lowercaseStr = str.toLowerCase();
            const sirketFiyat = hisseler[j].lastprice
            const sirketDegisim = hisseler[j].rate
            console.log(sirketFiyat, sirketDegisim)
            const sirketFiyatPlace = lowercaseStr + '-fiyat';
            const sirketDegisimPlace = lowercaseStr + '-degisim';

            if (sirketFiyat != null){
                const sirket_price = document.getElementsByClassName(sirketFiyatPlace)[0];
                sirket_price.textContent = sirketFiyat.toString()
                const sirket_change = document.getElementsByClassName(sirketDegisimPlace)[0];
                sirket_change.textContent = sirketDegisim.toString()
                retrieveNumberResult(sirketDegisim, sirket_change);
            }
    }
}})}


console.log(count)
getAndSetDataHisseler(urlHisseSenedi, headers);


function altin_smaller(){
    var screenWidth = screen.width;
    // Get the element by class name
    const element = document.getElementsByClassName("currency-text-altin-gr")[0];
    console.log(element)
    // Check if the screen width is less than or equal to 600px
    if (screenWidth <= 600) {
        element.textContent = "ALTIN";
    } 
    else {
        // Restore the original text when the screen width is greater than 600px
        element.textContent = "ALTIN(GRAM)";
    }
}

altin_smaller();