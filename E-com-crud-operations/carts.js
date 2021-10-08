var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/E_commerce";

// insertdata function takes data as argument and insert in db

const insertdata=async(data,client)=>{
    try{
        const result=await client.db("E_commerce").collection("Carts").insertMany(data);
        console.log(result.insertedCount+" record inserted");
    }
    catch(err){
        console.log(err);
}

}

// readAllData function fetch all documents from db and show it on console.

const readAllData=async(client)=>{

    try{
        const result=await client.db("E_commerce").collection("Carts").find().toArray()
        console.log("document data \n",result);
    }
    catch(err){
        console.log(err);
    }
}

// updateData update documents on db

const updateData=async(client)=>{
    const query={'User.First_Name':"Matthus"};
    const updatequery={$set:{'User.First_Name':"Aquib",'User.Last_Name':"Ahmad",Updated_At:new Date()}};
    try{
        const result=await client.db("E_commerce").collection("Carts").updateMany(query,updatequery);
        console.log(result.modifiedCount +" record updated");
    }
    catch(err)
    {
        console.log(err)
    }
}

// deleteData Delete decument based on query

const deleteData=async(client)=>{
    const query={'User.First_Name':"Gideon"};
    try{
        const result = await client.db("E_commerce").collection("Carts").deleteOne(query);
        console.log(result.deletedCount+" record deleted");
    }
    catch(err){
        console.log(err)
    }
}


// deleteAllData delete all Documnets from collections

const deleteAllData=async(client)=>{
    const query={First_Name:"Matthus"};
    try{
        const result = await client.db("E_commerce").collection("Carts").deleteMany({});
        console.log(result.deletedCount+" record deleted");
    }
    catch(err){
        console.log(err)
    }
}

const data=[
    {
        Product:[
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
            }
        ],
        User:{
            First_Name:"Bartel",
            Last_Name:"Woodfin",
            'E-Mail':"bwoodfin0@slashdot.org",
            Profile_Image:"http://dummyimage.com/124x100.png/5fa2dd/ffffff",
            Role:"user"
        },
        Product_qty:2,
        Base_Price:480699,
        Sell_Price:530899,
        Total_Price:530899,
        Created_AT:new Date()
    },
    {
        Product:[
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
        ],
        User:{
            First_Name:"Matthus",
            Last_Name:"Le Quesne",
            'E-Mail':"mlequesne1@ow.ly",
            Profile_Image:"http://dummyimage.com/209x100.png/dddddd/000000",
            Role:"user"
        },

        Product_qty:1,
        Base_Price:699,
        Sell_Price:899,
        Total_Price:899,
        Created_AT:new Date()
    },
    {
        Product:[
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
            }
        ],
        User:{
            First_Name:"Hortense",
            Last_Name:"Dreher",
            'E-Mail':"hdreher2@cornell.edu",
            Profile_Image:"http://dummyimage.com/244x100.png/5fa2dd/ffffff",
            Role:"user"
        },
        Product_qty:1,
        Base_Price:6000,
        Sell_Price:8000,
        Total_Price:8000,
        Created_AT:new Date()
    },
    {
        Product:[
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
        User:{
            First_Name:"Gideon",
            Last_Name:"Dowtry",
            'E-Mail':"gdowtry4@tinypic.com",
            Profile_Image:"http://dummyimage.com/183x100.png/5fa2dd/ffffff",
            Role:"user"
        },
        Product_qty:1,
        Base_Price:6000,
        Sell_Price:8000,
        Total_Price:8000,
        Created_AT:new Date()
    },

]

const cartsdbOperations=async()=>{
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
cartsdbOperations();
