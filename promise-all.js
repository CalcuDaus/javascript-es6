// promise yang dapat mengembalikan langsung banyak promise dalam bentuk array 
// contoh 

const pizzaSosis = ()=>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("Pizza sosis selesai !");
        }, 4000);
    })
}

const pizzaDaging = ()=>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Pizza daging selesai !");
        }, 3000);
    })
}

const pizzaSayur = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Pizza sayur selesai")
        }, 2000);
    })
}

// menjalankan semua promise sekaligus dengan array
const pizzas = [pizzaSosis(),pizzaDaging(),pizzaSayur()];

// jalan kan semua promise dengan method Promise.all

Promise.all(pizzas)
.then(result => console.log(...result));

