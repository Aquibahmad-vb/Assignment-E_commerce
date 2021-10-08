var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/E_commerce";

// insertdata function takes data as argument and insert in db

const insertdata=async(data,client)=>{
    try{
        const result=await client.db("E_commerce").collection("Orders").insertMany(data);
        console.log(result.insertedCount+" record inserted");
    }
    catch(err){
        console.log(err);
}

}

// readAllData function fetch all documents from db and show it on console.

const readAllData=async(client)=>{

    try{
        const result=await client.db("E_commerce").collection("Orders").find().toArray()
        console.log("document data \n",result);
    }
    catch(err){
        console.log(err);
    }
}

// updateData update documents on db

const updateData=async(client)=>{
    const query={Order_Status:"booked"};
    const updatequery={$set:{Order_Status:"dispatch",Updated_At:new Date()}};
    try{
        const result=await client.db("E_commerce").collection("Orders").updateMany(query,updatequery);
        console.log(result.modifiedCount +" record updated");
    }
    catch(err)
    {
        console.log(err)
    }
}

// deleteData Delete decument based on query

const deleteData=async(client)=>{
    const query={Order_Status:"pending"};
    try{
        const result = await client.db("E_commerce").collection("Orders").deleteOne(query);
        console.log(result.deletedCount+" record deleted");
    }
    catch(err){
        console.log(err)
    }
}


// deleteAllData delete all Documnets from collections

const deleteAllData=async(client)=>{
    try{
        const result = await client.db("E_commerce").collection("Orders").deleteMany({});
        console.log(result.deletedCount+" record deleted");
    }
    catch(err){
        console.log(err)
    }
}

const data=[
    {
        User_id:8065,
        Total_Items:2,
        Products:[
            {
                Name:"hp Keyboard",
                Thumbnail:"dummyimage.com/152x100.png/cc0000/ffffff",
                Product_Gallery:["dummyimage.com/152x100.png/cc0000/ffffff","http://dummyimage.com/232x100.png/dd0000/ffffff"],
                Description:"hp mechanical keyboard",
                Base_price:699,
                Sell_Price:899,
                Category_Name:"Electronics Products",
                Tags:"best elecrtronics deals",
                Additional_Information:"no warrentry provided"
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
                Additional_Information:"1 year onsite warrentry provided"
            },
        ],
        Billing_Address:"Delhi,India",
        Shipping_Address:"Pune,India",
        Transaction_Status:"success",
        Payment_Mode:"net banking",
        Payment_Status:"success",
        Order_Status:"delivered",
        Created_AT:new Date()
    },
    {
        User_id:8089,
        Total_Items:1,
        Products:[
            {
                Name:"boat earbuds",
                Thumbnail:"http://dummyimage.com/186x100.png/5fa2dd/ffffff",
                Product_Gallery:["http://dummyimage.com/186x100.png/5fa2dd/ffffff","http://dummyimage.com/186x100.png/5fa2dd/ffffff"],
                Description:"high noise cancellation",
                Base_price:1800,
                Sell_Price:2200,
                Category_Name:"Electronics Products",
                Tags:"new release products",
                Additional_Information:"free home delivery"
            }
        ],
        Billing_Address:"Bihar,India",
        Shipping_Address:"Delhi,India",
        Transaction_Status:"success",
        Payment_Mode:"debit card",
        Payment_Status:"success",
        Order_Status:"booked",
        Created_AT:new Date()
    },
    {
        User_id:8011,
        Total_Items:1,
        Products:[
            {
                Name:"gas stove",
                Thumbnail:"http://dummyimage.com/186x100.png/5fa2dd/ffffff",
                Product_Gallery:["http://dummyimage.com/186x100.png/5fa2dd/ffffff","http://dummyimage.com/186x100.png/5fa2dd/ffffff"],
                Description:"easy to use gas stove",
                Base_price:6000,
                Sell_Price:8000,
                Category_Name:"kitchen Appliances",
                Tags:"new release products",
                Additional_Information:"6 month warrenty"
            }
        ],
        Billing_Address:"Uttar Pradesh,India",
        Shipping_Address:"Hyderabad,India",
        Transaction_Status:"success",
        Payment_Mode:"cash",
        Payment_Status:"success",
        Order_Status:"pending",
        Created_AT:new Date()
    }
];

const ordersdbOperations=async()=>{
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
ordersdbOperations()


