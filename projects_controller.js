

module.exports={
  create:(req,res,next)=>{
    const {name, description,price,imageurl}=req.body;
    req.app.get('db').create_product([name,description,price,imageurl])
      .then((response)=>res.status(200).json(response))
      .catch(()=>res.status(500).json())
  },
  getOne:(req,res,next)=>{
    req.app.get('db').read_product([req.params.id])
    .then(response=>res.status(200).json(response))
    .catch(()=>res.status(500).json())
  },
  getAll:(req,res,next)=>{
    req.app.get('db').read_products().then((response)=>res.status(200).json(response)).catch(()=>res.status(500).json())
  },
  update:(req,res,next)=>{
    req.app.get('db').update_product([req.query.desc,req.params.id]).then((response)=>res.status(200).json(response)).catch(()=>res.status(500).json())
  },
  delete:(req,res,next)=>{
    req.app.get('db').delete_product([req.params.id]).then((response)=>res.status(200).json(response)).catch(()=>res.status(500).json())
  }
}

















//
