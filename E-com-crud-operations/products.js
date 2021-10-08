var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/E_commerce";

// insertdata function takes data as argument and insert in db

const insertdata=async(data,client)=>{
    try{
        const result=await client.db("E_commerce").collection("Products").insertMany(data);
        console.log(result.insertedCount+" record inserted");
    }
    catch(err){
        console.log(err);
}

}

// readAllData function fetch all documents from db and show it on console.

const readAllData=async(client)=>{

    try{
        const result=await client.db("E_commerce").collection("Products").find().toArray()
        console.log("document data \n",result);
    }
    catch(err){
        console.log(err);
    }
}

// updateData update documents on db

const updateData=async(client)=>{
    const query={Name:"boat earbuds"};
    const updatequery={$set:{Additional_Information:"free home delivery and with delivered in 2 days",Updated_At:new Date()}};
    try{
        const result=await client.db("E_commerce").collection("Products").updateMany(query,updatequery);
        console.log(result.modifiedCount +" record updated");
    }
    catch(err)
    {
        console.log(err)
    }
}

// deleteData Delete decument based on query

const deleteData=async(client)=>{
    const query={Name:"casual shirt"};
    try{
        const result = await client.db("E_commerce").collection("Products").deleteOne(query);
        console.log(result.deletedCount+" record deleted");
    }
    catch(err){
        console.log(err)
    }
}


// deleteAllData delete all Documnets from collections

const deleteAllData=async(client)=>{
    try{
        const result = await client.db("E_commerce").collection("Products").deleteMany({});
        console.log(result.deletedCount+" record deleted");
    }
    catch(err){
        console.log(err)
    }
}

const data=[
    {
        Name:"hp Keyboard",
        Thumbnail:"dummyimage.com/152x100.png/cc0000/ffffff",
        Product_Gallery:["dummyimage.com/152x100.png/cc0000/ffffff","http://dummyimage.com/232x100.png/dd0000/ffffff"],
        Description:"hp mechanical keyboard",
        Base_price:699,
        Sell_Price:899,
        Category_Name:"Electronics Products",
        Tags:"best elecrtronics deals",
        Aditional_Information:"no warrentry provided",
        Created_AT:new Date()
    },
    {
        Name:"hp 15s laptop",
        Thumbnail:"http://dummyimage.com/186x100.png/5fa2dd/ffffff",
        Product_Gallery:["http://dummyimage.com/186x100.png/5fa2dd/ffffff","http://dummyimage.com/186x100.png/5fa2dd/ffffff"],
        Description:"hp 15s laptop 8gram|512gb ssd|i5 11 gen|windows 10 pre installed with ms office",
        Base_price:480000,
        Sell_Price:530000,
        Category_Name:"Electronics Products",
        Tags:"best budget laptop",
        Aditional_Information:"1 year onsite warrentry provided",
        Created_AT:new Date()
    },
    {
        Name:"hp 14s laptop",
        Thumbnail:"http://dummyimage.com/186x100.png/5fa2dd/ffffff",
        Product_Gallery:["http://dummyimage.com/186x100.png/5fa2dd/ffffff","http://dummyimage.com/186x100.png/5fa2dd/ffffff"],
        Description:"hp 15s laptop 8gram|512gb ssd|i5 11 gen|windows 10 pre installed with ms office",
        Base_price:480000,
        Sell_Price:530000,
        Category_Name:"Electronics Products",
        Tags:"best budget laptop",
        Aditional_Information:"1 year onsite warrentry provided",
        Created_AT:new Date()
    },
    {
        Name:"gas stove",
        Thumbnail:"http://dummyimage.com/186x100.png/5fa2dd/ffffff",
        Product_Gallery:["http://dummyimage.com/186x100.png/5fa2dd/ffffff","http://dummyimage.com/186x100.png/5fa2dd/ffffff"],
        Description:"easy to use gas stove",
        Base_price:6000,
        Sell_Price:8000,
        Category_Name:"kitchen Appliances",
        Tags:"new release products",
        Aditional_Information:"6 month warrenty",
        Created_AT:new Date()
    },
    {
        Name:"casual shirt",
        Thumbnail:"http://dummyimage.com/186x100.png/5fa2dd/ffffff",
        Product_Gallery:["http://dummyimage.com/186x100.png/5fa2dd/ffffff","http://dummyimage.com/186x100.png/5fa2dd/ffffff"],
        Description:"cotton casual shirt",
        Base_price:3000,
        Sell_Price:4000,
        Category_Name:"Mens Products",
        Tags:"latest fashion",
        Aditional_Information:"comfortable to wear",
        Created_AT:new Date()
    },
    {
        Name:"boat earbuds",
        Thumbnail:"http://dummyimage.com/186x100.png/5fa2dd/ffffff",
        Product_Gallery:["http://dummyimage.com/186x100.png/5fa2dd/ffffff","http://dummyimage.com/186x100.png/5fa2dd/ffffff"],
        Description:"high noise cancellation",
        Base_price:1800,
        Sell_Price:2200,
        Category_Name:"Electronics Products",
        Tags:"new release products",
        Aditional_Information:"free home delivery",
        Created_AT:new Date()
    }
]

const productsdbOperations=async()=>{
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
productsdbOperations()

