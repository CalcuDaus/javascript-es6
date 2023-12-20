// untuk melakukan exports module kita dapat menggunakan keyword module.exports atau 

// contoh 

// const toppingStock = {
//     daging : 20,
//     sosis : 10,
//     sayur : 5
// }

// module.exports = toppingStock;


// contoh untuk expor banyak nilai sekaligus menggunakan object literals

const toppingStock = {
    daging : 20,
    sosis : 10,
    sayur : 5
}

const isOvenReady = true;

module.exports = {toppingStock,isOvenReady}