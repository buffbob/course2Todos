
//now we will destructure MC
//const MongoClient = require('mongodb').MongoClient;
//===const {MongoClient} = require('mongodb');
//now pull more out of MC
const {MongoClient, ObjectID} = require('mongodb');


// es6 object destructuring
// var user = {name:"bob",age:24};
// var {name}=user;
// console.log(name);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
    if(err){
        return console.log('unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB server');
    db.close();
});

//    db.collection('Todos').insertOne({
//     text: 'Something',
//     completed: false
//    },(err, result)=> {
//        if(err){
//            return console.log('unable to insert todo', err);           
//        }
//        console.log(JSON.stringify(result.ops,undefined,2));
//    });

//     db.collection('Todos').insertOne({
//     text: 'Nothing',
//     completed: true
//    },(err, result)=> {
//        if(err){
//            return console.log('unable to insert todo', err);           
//        }
//        console.log(JSON.stringify(result.ops,undefined,2));
//    });

//    db.collection('Users').insertOne({
//        name: 'Rorie McIlroy',
//        age: 25,
//        location: 'IreLand'
//    },(err,result)=>{
//        if(err){
//            return console.log("cant add User",err);
//        }
//        console.log(JSON.stringify(result.ops,undefined,3));
//    });
    
//     db.close();
    
// });