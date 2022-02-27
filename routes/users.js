import express from "express";
import { v4 as uuidv4 } from 'uuid';
uuidv4();
const router = express.Router();

const users = [
    
]


router.get('/',(req,res) => {
 


    res.send('hello');

});


router.post('/',(req , res)=>{
    console.log('Post route reached');
    const user = req.body;
    const userId = uuidv4();
    const userWithId = {...user,id: userId}
    
    users.push(userWithId);



    res.send(`user with the name ${user.firstname} added to the database`)

});



export default router;