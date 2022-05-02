import { authenticate } from "../middleware/auth.middleware";
 import {user} from "../routes/user";
 import {recommend} from "../routes/recommend";
 import {borrowed} from "../routes/borrowed";

const routesInit =(app,passport) =>{
app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));
app.get(
    "/auth/google/callback",
    passport.authenticate("google",{
    failureRedirect:"/login",
    successRedirect :"/user",
}),
(req,res) => {
    console.log("User authenticated");
}
);
app.get("/test",authenticate,(req,res)=>{
    res.send("<h3> User is authenticated </h3>");
});

};

export {routesInit};