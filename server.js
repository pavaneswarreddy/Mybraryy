const express=require('express')
const app=express()
const dbName = 'mybrary';
const expressLayouts=require('express-ejs-layouts')
const indexRouter=require('./routes/index')
app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.set('layout','layout/layout')
app.use(expressLayouts)
app.use(express.static('public'))
const mongoose=require('mongoose')
mongoose.connect(`mongodb+srv://pavan:pavan@cluster0.0zlexo2.mongodb.net/?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db=mongoose.connection
db.on('error',error=>console.error(error))
db.once('open',()=>console.log("connected to mongoose"))
app.use('/',indexRouter)
app.listen(process.env.PORT||3000)