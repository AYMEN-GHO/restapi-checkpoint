const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://Aymen:Khadija@cluster0.ghzbi.mongodb.net/contact?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
})
.then(()=>console.log('connected to mongoDB'))
.catch((err)=>console.log(err))