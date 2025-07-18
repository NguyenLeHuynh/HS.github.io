const express = require("express"), fs=require("fs"), router=express.Router();
router.get("/:grade",(req,res)=>{
  const data = JSON.parse(fs.readFileSync(__dirname+"/../data/curriculum.json"));
  res.json(data[req.params.grade]||{});
});
module.exports = router;
