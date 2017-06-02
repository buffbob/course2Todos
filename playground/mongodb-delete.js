
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
    if(err){
        return console.log('unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB server');

    // delete Many
    // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result)=>{
    //     console.log(result);
    // });

//     //delte One
//     db.collection('Todos').deleteOne({text: 'Something'}).then((result) => {
//         console.log(result);
// l    
//     });

    //find One and Delete

    // db.collection('Todos').findOneAndDelete({text: "Nothing"}).then((result) =>{
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({age: 25}).then((result)=> {
        console.log(result);
    });

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5930ce1e0cc04a1add4ed8f6")}).then((result)=>{
        console.log(result);
    });
});