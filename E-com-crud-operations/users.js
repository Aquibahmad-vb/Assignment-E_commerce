const { Timestamp } = require("mongodb");

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/E_commerce";

// insertdata function takes data as argument and insert in db

const insertdata=async(data,client)=>{
    try{
        const result=await client.db("E_commerce").collection("Users").insertMany(data);
        console.log(result.insertedCount+" record inserted");
    }
    catch(err){
        console.log(err);
}

}

// readAllData function fetch all documents from db and show it on console.

const readAllData=async(client)=>{

    try{
        const result=await client.db("E_commerce").collection("Users").find().toArray()
        console.log("document data \n",result);
    }
    catch(err){
        console.log(err);
    }
}

// updateData update documents on db

const updateData=async(client)=>{
    const query={First_Name:"Bartel"};
    const updatequery={$set:{Last_Name:"Ahmad",Updated_At:new Date()}};
    try{
        const result=await client.db("E_commerce").collection("Users").updateMany(query,updatequery);
        console.log(result.modifiedCount +" record updated");
    }
    catch(err)
    {
        console.log(err)
    }
}

// deleteData Delete decument based on query

const deleteData=async(client)=>{
    const query={First_Name:"Matthus"};
    try{
        const result = await client.db("E_commerce").collection("Users").deleteMany(query);
        console.log(result.deletedCount+" record deleted");
    }
    catch(err){
        console.log(err)
    }
}


// deleteAllData delete all Documnets from collections

const deleteAllData=async(client)=>{
    try{
        const result = await client.db("E_commerce").collection("Users").deleteMany({});
        console.log(result.deletedCount+" record deleted");
    }
    catch(err){
        console.log(err)
    }
}

const data=[
{First_Name:"Bartel",Last_Name:"Woodfin",'E-Mail':"bwoodfin0@slashdot.org",Profile_Image:"http://dummyimage.com/124x100.png/5fa2dd/ffffff",Role:"user",Created_AT:new Date()},
{First_Name:"Matthus",Last_Name:"Le Quesne",'E-Mail':"mlequesne1@ow.ly",Profile_Image:"http://dummyimage.com/209x100.png/dddddd/000000",Role:"user",Created_AT:new Date()},
{First_Name:"Hortense",Last_Name:"Dreher",'E-Mail':"hdreher2@cornell.edu",Profile_Image:"http://dummyimage.com/244x100.png/5fa2dd/ffffff",Role:"user"},
{First_Name:"Dael",Last_Name:"Bassick",'E-Mail':"dbassick3@patch.com",Profile_Image:"http://dummyimage.com/142x100.png/ff4444/ffffff",Role:"user",Created_AT:new Date()},
{First_Name:"Gideon",Last_Name:"Dowtry",'E-Mail':"gdowtry4@tinypic.com",Profile_Image:"http://dummyimage.com/183x100.png/5fa2dd/ffffff",Role:"user",Created_AT:new Date()},
{First_Name:"Archibaldo",Last_Name:"Rainbow",'E-Mail':"arainbow5@phoca.cz",Profile_Image:"http://dummyimage.com/216x100.png/dddddd/000000",Role:"user",Created_AT:new Date()},
{First_Name:"Valencia",Last_Name:"Jickles",'E-Mail':"vjickles6@gravatar.com",Profile_Image:"http://dummyimage.com/175x100.png/5fa2dd/ffffff",Role:"user",Created_AT:new Date()},
{First_Name:"Dory",Last_Name:"Gadney",'E-Mail':"dgadney7@aboutads.info",Profile_Image:"http://dummyimage.com/192x100.png/ff4444/ffffff",Role:"user",Created_AT:new Date()},
{First_Name:"Katrine",Last_Name:"Waything",'E-Mail':"kwaything8@wiley.com",Profile_Image:"http://dummyimage.com/123x100.png/ff4444/ffffff",Role:"user",Created_AT:new Date()},
{First_Name:"Andriette",Last_Name:"Extance",'E-Mail':"aextance9@instagram.com",Profile_Image:"http://dummyimage.com/210x100.png/dddddd/000000",Role:"user",Created_AT:new Date()}
];

const usersdbOperations=async()=>{
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
usersdbOperations()

