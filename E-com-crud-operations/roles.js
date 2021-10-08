var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/E_commerce";

// insertdata function takes data as argument and insert in db

const insertdata=async(data,client)=>{
    try{
        const result=await client.db("E_commerce").collection("Roles").insertMany(data);
        console.log(result.insertedCount+" record inserted");
    }
    catch(err){
        console.log(err);
    }
}

// readAllData function fetch all documents from db and show it on console.

const readAllData=async(client)=>{

    try{
        const result=await client.db("E_commerce").collection("Roles").find().toArray()
        console.log("document data \n",result);
    }
    catch(err){
        console.log(err);
    }
}

// updateData update documents on db

const updateData=async(client)=>{
    const query={Slug:"user-1"};
    const updatequery={$set:{Slug:"agent-5",Name:"agent",Updated_At:new Date()}};
    try{
        const result=await client.db("E_commerce").collection("Roles").updateMany(query,updatequery);
        console.log(result.modifiedCount +" record updated");
    }
    catch(err)
    {
        console.log(err)
    }
}

// deleteData Delete decument based on query

const deleteData=async(client)=>{
    const query={Name:"user"};
    try{
        const result = await client.db("E_commerce").collection("Roles").deleteOne(query);
        console.log(result.deletedCount+" record deleted");
    }
    catch(err){
        console.log(err)
    }
}


// deleteAllData delete all Documnets from collections

const deleteAllData=async(client)=>{
    try{
        const result = await client.db("E_commerce").collection("Roles").deleteMany({});
        console.log(result.deletedCount+" record deleted");
    }
    catch(err){
        console.log(err)
    }
}

const data=[
    {Name: "admin",Slug: "admin",Created_AT:new Date()},
    {Name: "user",Slug: "user-1",Created_AT:new Date()},
    {Name: "agent",Slug: "agent-1",Created_AT:new Date()}, 
    {Name: "user",Slug: "user-1",Created_AT:new Date()},
    {Name: "user",Slug: "user-2",Created_AT:new Date()},
    {Name: "agent",Slug: "agent-2",Created_AT:new Date()}, 
    {Name: "user",Slug: "user-3",Created_AT:new Date()},
    {Name: "admin",Slug: "admin-3",Created_AT:new Date()}, 
    {Name: "user",Slug: "user-4",Created_AT:new Date()},
    {Name: "agent",Slug: "agent-4",Created_AT:new Date()}
];

const rolesdbOperations=async()=>{
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
rolesdbOperations()
