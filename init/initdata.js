const mongoose=require("mongoose");
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/farmer');
}   
main().then(()=>{
    console.log("connected");
}
).catch((err)=>{
    console.log(err);
})

const dataa=require("../init/data.js");
const listing = require("../models/listing");


async function connect(){
    for(d of dataa.data){
        data=new listing(d);
        await data.save();
    }
}

connect().then(()=>{
    console.log("data saved");
}).catch((err)=>{
    console.log(err);
})