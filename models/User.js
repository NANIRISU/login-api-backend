var mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    username:{
  type:"string",
  required:true
    },
    email:{
        type:"string",
        required:true
    },
    password:{
        type:"string",
        required:true
    },

    createdAt: {
        type: Date,
        default: Date.now()
      }
});
module.exports=mongoose.model('user',userSchema)
