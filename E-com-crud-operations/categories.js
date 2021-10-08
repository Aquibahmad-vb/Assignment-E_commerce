var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/E_commerce";

// insertdata function takes data as argument and insert in db

const insertdata=async(data,client)=>{
    try{
        const result=await client.db("E_commerce").collection("Categories").insertMany(data);
        console.log(result.insertedCount+" record inserted");
    }
    catch(err){
        console.log(err);
}
}

// readAllData function fetch all documents from db and show it on console.

const readAllData=async(client)=>{

    try{
        const result=await client.db("E_commerce").collection("Categories").find().toArray()
        console.log("document data \n",result);
    }
    catch(err){
        console.log(err);
    }
}

// updateData update documents on db

const updateData=async(client)=>{
    const updatequery={$set:{Slug:"mens-products",Updated_At:new Date()}};
    try{
        const result=await client.db("E_commerce").collection("Categories").updateMany(query,updatequery);
        console.log(result.modifiedCount +" record updated");
    }
    catch(err)
    {
        console.log(err)
    }
}

// deleteData Delete decument based on query

const deleteData=async(client)=>{
    const query={Name:"Sports Products"};
    try{
        const result = await client.db("E_commerce").collection("Categories").deleteOne(query);
        console.log(result.deletedCount+" record deleted");
    }
    catch(err){
        console.log(err)
    }
}


// deleteAllData delete all Documnets from collections

const deleteAllData=async(client)=>{
    try{
        const result = await client.db("E_commerce").collection("Categories").deleteMany({});
        console.log(result.deletedCount+" record deleted");
    }
    catch(err){
        console.log(err)
    }
}

const data=[
    {
        Name:"kitchen Appliances",
        Slug:"kitchen-appliances",
        Image:{
        image1:"https://www.pexels.com/photo/brown-and-white-pendant-lamp-4068316//",
        image2:"https://www.pexels.com/photo/white-oven-in-brown-wooden-rack-211761//"},
        Description:"In this category you found kitchen applicances",   
        Created_AT:new Date()
    },
    {
        Name:"Electronics Products",
        Slug:"electronics-products",
        Image:{
        image1:"https://www.pexels.com/photo/silver-imac-apple-magic-keyboard-and-magic-mouse-on-wooden-table-38568/",
        image2:"https://www.pexels.com/photo/silver-ipad-1334598/"},
        Description:"In this category you find electronics item",
        Created_AT:new Date()
    }, 
    {
        Name:"Mens Products",
        Slug:"Women-products",
        Image:{
        image1:"https://www.pexels.com/photo/full-suited-man-standing-on-rail-station-9755651//",
        image2:"https://www.pexels.com/photo/pair-of-brown-leather-casual-shoes-on-table-298863//"},
        Description:"In this category you found mens-products",
        Created_AT:new Date()
    }, 
    {
        Name:"Hardware Products",
        Slug:"hardware-products",
        Image:{
        image1:"https://www.pexels.com/photo/flat-lay-photography-of-hand-tools-1029243/",
        image2:"https://www.pexels.com/photo/black-computer-compenent-159201//"},
        Description:"In this category you found hardware products",
        Created_AT:new Date()
    },    
    {
        Name:"Women Products",
        Slug:"women-products",
        Image:{
        image1:"https://www.pexels.com/photo/woman-holding-shopping-bag-291762/",
        image2:"https://www.pexels.com/photo/smiling-woman-looking-upright-standing-against-yellow-wall-1536619/"},
        Description:"In this category you found women products",
        Created_AT:new Date()
    },  
    {
        Name:"Sports Products",
        Slug:"sports-products",
        Image:{
        image1:"https://www.pexels.com/photo/high-angle-view-of-people-on-bicycle-248547/",
        image2:"https://www.pexels.com/photo/football-player-carrying-brown-football-1618269/"},
        Description:"In this category you found sports products",
        Created_AT:new Date()
    }
]

const categoriesdbOperations=async()=>{
    const client= new MongoClient(url);
    client.connect();
    await insertdata(data,client);
    await deleteData(client);
    await updateData(client);
    await readAllData(client);
// deleteAllData delete all document from database to use this remove comment from below line 
    // await deleteAllData(client);
    client.close();
}
categoriesdbOperations()








