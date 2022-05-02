const router = require("express").Router();
let User = require("../model/User");


//create
router.route ("/add").post((req,res) => {

    const regNo = req.body.regNo;
    const name = req.body.name;
    const dob = req.body.dob;
    const address = req.body.address;
    const email= req.body.email; 
    const phoneNo = req.body.phoneNo;
    const nic = req.body.nic;
    const shift= req.body.shift; 
    const regDate = req.body.regDate;
   


    const newUser = new User ({

        regNo,
        name,
        dob,  
        address,
        email,
        phoneNo,
        nic,
        shift,
        regDate

    })

    newUser.save().then(() =>{
        res.json("User Added")
    }).catch((err)=>{
        console.log(err);
    })


})


//get
router.route("/").get((req,res)=>{

    User.find().then((user)=>{
        res.json(user)
    }).catch((err)=>{
        console.log(err)
        
    })

})




//update

router.route("/update/:regNo").put(async(req,res)=>{
    let userId = req.params.regNo;
    const {  regNo,name,dob,address,email,phoneNo,nic,shift,regDate} = req.body;

    const updateUser = {
        regNo,
        name,
        dob,  
        address,
        email,
        phoneNo,
        nic,
        shift,
        regDate

    }

    const update = await User.findOneAndUpdate({regNo:userId},updateUser)
    .then(()=>{
res.status(200).send ({status:"user updated"})

}).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"Error with updating data", error: err.message});
})

})



//search

router.route("/get/:empNo").get(async(req,res)=>{
    let employeeId =req.params.empNo;
    const user = await Employee.findOne({empNo:employeeId})
    .then((emp)=> {
        res.status(200).send({status:"user fetched",emp})
    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status:"Error with get user",error:err.message});

    })

})

module.exports = router;
