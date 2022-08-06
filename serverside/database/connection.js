const mongoose = require('mongoose');
 mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
   //  useCreateIndex: true, //make this true
   //  autoIndex: true,
 })
 .then(()=>[
    console.log("database connected successfully")
 ])
 .catch(err=>[
    console.log(err)
 ])