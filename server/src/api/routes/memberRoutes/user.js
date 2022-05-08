const router = require("express").Router();
let User = require("../../model/member/User");


//create
router.route ("/add").post((req,res) => {

    const regNo = req.body.regNo;
    const regDate = req.body.regDate;
    const name = req.body.name;
    const email= req.body.email; 
    const phoneNo = req.body.phoneNo;
    const area = req.body.area;
    const address = req.body.address;
    const nic = req.body.nic;
    const shift= req.body.shift; 
 
   


    const newUser = new User ({

        regNo,
        regDate,
        name,  
        email,   
        phoneNo, 
        area,
        address,
        nic,
        shift

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
    const {  regNo,regDate,name,email,phoneNo,area,address,nic,shift} = req.body;

    const updateUser = {
        regNo,
        regDate,
        name,  
        email,   
        phoneNo, 
        area,
        address,
        nic,
        shift

    }

    const update = await User.findOneAndUpdate({regNo:userId},updateUser)
    .then(()=>{
res.status(200).send ({status:"user updated"})

}).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"Error with updating data", error: err.message});
})

})




module.exports = router;
