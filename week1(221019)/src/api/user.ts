import express, {NextFunction, Request, Response, Router } from "express";
import { SOPT, soptMember } from "./data/members data";
import { instanceOfSOPT } from "./customfunction/instanceOf";

const router : Router = express.Router();


const User : String[] = soptMember.map((m : SOPT) => {
    return m.name;
})

router.get("/",(req : Request, res : Response)=>{
    return res.status(200).json({
        status : 200,
        message : User
    });

});

router.post("/",(req : Request, res : Response)=>{
    if (instanceOfSOPT(req.body)){
        User.push((req.body as SOPT).name);
    }else{
        console.error("SOPT 타입이 아닙니다.")
    }

    return res.status(201).json({
        status : 201,
        message : User
    });

});

module.exports=router;