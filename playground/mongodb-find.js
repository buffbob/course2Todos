
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
    if(err){
        return console.log('unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB server');

    db.collection('Users').find({
        name: 'ron'
    }).toArray().then((docs) => {
        console.log('search results');
        console.log(JSON.stringify(docs,undefined,3));
    },(err)=>{
        console.log('unable to fetch todos', err);
    });

    //     db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // },(err)=>{
    //     console.log('unable to fetch todos', err);
    // });
    //db.close();
});