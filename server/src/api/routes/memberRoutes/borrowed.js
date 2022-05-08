const router = require("express").Router();
let Borrowed = require("../../model/member/Borrowed");


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
        res.json(" Book Borrowed")
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


//search
router.route("/get/:bookName").get(async(req,res)=>{
    let bookname =req.params.bookName;
    const data = await Borrowed.findOne({bookName:bookname})
    .then((borrowed)=> {
        res.status(200).send({status:"data fetched",borrowed})
    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status:"Error with get data",error:err.message});

    })

})



module.exports = router;