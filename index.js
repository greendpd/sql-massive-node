const express=require('express');
const bodyParser=require('body-parser')
const cors=require('cors')
const massive=require('massive')
const ctrl=require('./projects_controller')

const config=require('./config')
const port=config.port||3000;


const app=module.exports=express();
app.use(bodyParser.json())
app.use(cors())

massive(config.connectionString).then(dbInstance=>{
  app.set('db',dbInstance);
})

app.get('/api/products/',ctrl.getAll);
app.get('/api/product/:id',ctrl.getOne);
app.post('/api/product/',ctrl.create);
app.put('/api/product/:id',ctrl.update);
app.delete('/api/product/:id',ctrl.delete)


















app.listen(port,()=>console.log(`Listening on port ${port}`))


//
