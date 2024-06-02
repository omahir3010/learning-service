
//Writing all Routers Implementation and Separting methods from routers and router methods

//Getting all bootcamps via controller
exports.getBootcamps = (req,res,next) =>{
    res.status(400).json({success:true , msg: "Show all Bootcamps", myUrl: req.myUrl});
}

//getting single bootcamp via controller
exports.getBootcamp = (req,res,next) =>{
    res.status(400).json({success:true , msg: "Get Single Bootcamp"}); 
}

//create new bootcamp
exports.createBootcamp = (req,res,next) =>{
    res.status(400).json({success:true , msg: "Create New Bootcamp"}); 
}

//update bootcamp
exports.updateBootcamp = (req,res,next) =>{
    res.status(400).json({success:true , msg: "Update Single Bootcamp"});
}

//deleting bootcamp
exports.deleteBootcamp = (req,res,next) =>{
    res.status(400).json({success:true , msg: "Delete Single Bootcamps"});
}




