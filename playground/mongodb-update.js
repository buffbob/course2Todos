
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
    if(err){
        return console.log('unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB server');

 
    // db.collection('Users').deleteMany({age: 25}).then((result)=> {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        name: 'Fred'
    }, {
        $set: {
                name:'Robert the Great'
            },
        $inc:{
            age: 1000
        }
     },{
        returnOriginal: false
    

        }).then((result)=>{
            console.log(result);
        });
    });