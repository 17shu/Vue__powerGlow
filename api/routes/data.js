const express = require('express');
const router = express.Router();
const db = require('../config/database');

router.get('/',async(req,res)=>{
    try{
        const [rows,field] = await db.query("select * from powerdata_energy where Datetime like '2024-05-03%'");
        if(rows.length === 0){
            res.status(404).json({error:'data not found'});
        }
        else{
            res.json(rows);
        }
    }catch(err){
        res.status(500).json({error: err.message});
    }
});


module.exports = router;