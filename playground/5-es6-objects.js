// Object property shorthand

const nombre = 'Alfredo'
const userAge = 34

const user = {
    nombre,
    age: userAge,
    location: 'Mendoza'
}

console.log(user)

//Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: 55,
    rating: 4.2
}

//const label= product.label

const {label:productLabel, price, stock, rating=5} = product

console.log(productLabel)
console.log(stock)
console.log(rating)

const transaction = (type, {label, stock}) =>
{
console.log(label, stock)

}

transaction('Order', product)