/*setTimeout(()=>{
    console.log("Executed after two seconds")
},2000)

console.log("End line")*/

console.log("Start line")

const add = (a,b,callback) => {
    setTimeout(()=>{
        callback((a+b))
    },2000)
}

add(1,4,(sum)=>{
    console.log(sum)
})

console.log("End line")