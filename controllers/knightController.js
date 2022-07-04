const express = require("express");
const router = express.Router();
const Knight = require("../models/knight-model");


function getTodaysDate() {
  let today = new Date();
  let year = today.getFullYear();
  year = year.toString();
  let month = today.getMonth();
  month = month + 1;
  month = month.toString();
  let day = today.getDate();
  day = day.toString();
 
  let date = `${month}/${day}/${year}`;
  return date;
}

router.get("/", (req, res, next) => {
   // console.log(getTodaysDate())
   Knight.find({user:req.user._id})
    .then((knight) => {
        res.send(knight);
    })
    .catch(next);
});



router.get("/:id", (req, res, next) => {
    Knight.find({_id: req.params.id,user:req.user._id})
    .then((knight) => {
        res.send(knight);
    })
    .catch(next);
});


router.post("/add", (req, res, next) => {
 // console.log(req.body)
 // req.body.owner = req.user._id ? req.user._id : req.user.id;
 
            Knight.create(req.body)
            .then((day)=>res.send(day))
            .catch(console.error);
    })

router.delete("/:knightid", (req, res, next) => {
 // let owner = req.user._id ? req.user._id : req.user.id;

 Knight.findOneAndDelete({ _id: req.params.knightid}, (del) => {
   // console.log(del)
    res.send(del);
  }).catch(console.error);
});

router.put("/:id", (req, res) => {
  Knight.findOneAndUpdate(
    {

      _id: req.params.id,
      user:req.user._id
     // owner: req.user._id ? req.user._id : req.user.id,
    },
    req.body,
    { new: true }
  )
    .then((knight) => {
   
      res.send(knight);
    })
    .catch(console.error);
});

const knightController = router;
module.exports = knightController;