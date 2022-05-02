const router = require("express").Router();
let Borrowed = require("../model/Borrowed");


//create
router.route ("/add").post((req,res) => {

    const regNo = req.body.regNo;
    const  bookName = req.body. bookName;
    const issueDate = req.body.issueDate;
    const returnDate = req.body.returnDate;
  
   
   
    const newBorrowed = new Borrowed ({

        regNo ,
        bookName,
        issueDate,
        returnDate
       
       
      

    })

    newBorrowed.save().then(() =>{
        res.json(" Book Recommend")
    }).catch((err)=>{
        console.log(err);
    })


})


//get
router.route("/").get((req,res)=>{

    Borrowed.find().then((borrowed)=>{
        res.json(borrowed)
    }).catch((err)=>{
        console.log(err)
        
    })

})

module.exports = router;