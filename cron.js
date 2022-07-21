const Knight = require("./models/knight-model");


Knight.updateMany({}, 
    {completedToday:false}, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Updated Docs : ", docs);
    }})