var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/E_commerce";

// insertdata function takes data as argument and insert in db

const insertdata=async(data,client)=>{
    try{
        const result=await client.db("E_commerce").collection("Tags").insertMany(data);
        console.log(result.insertedCount+" record inserted");
    }
    catch(err){
        console.log(err);
}

}

// readAllData function fetch all documents from db and show it on console.

const readAllData=async(client)=>{

    try{
        const result=await client.db("E_commerce").collection("Tags").find().toArray()
        console.log("document data \n",result);
    }
    catch(err){
        console.log(err);
    }
}

// updateData update documents on db

const updateData=async(client)=>{
    const query={Name:"cheapset mobile ever"};
    const updatequery={$set:{Slug:"cheapset-mobile-ever",Updated_At:new Date()}};
    try{
        const result=await client.db("E_commerce").collection("Tags").updateMany(query,updatequery);
        console.log(result.modifiedCount +" record updated");
    }
    catch(err)
    {
        console.log(err)
    }
}

// deleteData Delete decument based on query

const deleteData=async(client)=>{
    const query={Name:"new release products"};
    try{
        const result = await client.db("E_commerce").collection("Tags").deleteOne(query);
        console.log(result.deletedCount+" record deleted");
    }
    catch(err){
        console.log(err)
    }
}


// deleteAllData delete all Documnets from collections

const deleteAllData=async(client)=>{
    try{
        const result = await client.db("E_commerce").collection("Tags").deleteMany({});
        console.log(result.deletedCount+" record deleted");
    }
    catch(err){
        console.log(err)
    }
}

const data=[
    {Name: "best budget laptop",Slug: "best-budget-laptop",Created_AT:new Date()},
    {Name: "latest fashion",Slug: "latest-fashion",Created_AT:new Date()},
    {Name: "cheapset mobile ever",Slug: "budget-mobile",Created_AT:new Date()}, 
    {Name: "mobile under 20000",Slug: "mobile-under-20000",Created_AT:new Date()},
    {Name: "best elecrtronics deals",Slug: "best-budget-deal-ever",Created_AT:new Date()},
    {Name: "new release products",Slug: "new-release products",Created_AT:new Date()}, 
];

const tagsdbOperations=async()=>{
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
tagsdbOperations()
