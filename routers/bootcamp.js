const express = require('express');
const router = express.Router()

router.get('/',(req,res)=>{
    res.status(400).json({success:true , msg: "Show all Bootcamps"}) 
})

router.get('/:id',(req,res)=>{
    res.status(400).json({success:true , msg: "Get Single Bootcamp"}) 
})

router.post('/',(req,res)=>{
    res.status(400).json({success:true , msg: "Create New Bootcamp"}) 
})

router.put('/:id',(req,res)=>{ 
    res.status(400).json({success:true , msg: "Update Single Bootcamp"}) 
})

router.delete('/:id',(req,res)=>{
    res.status(400).json({success:true , msg: "Delete Single Bootcamps"}) 
})

module.exports = router;