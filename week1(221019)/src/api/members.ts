import express, {NextFunction, Request, Response, Router } from "express";
import { SOPT, soptMember } from "./data/members data";
import { instanceOfSOPT } from "./customfunction/instanceOf";

const router : Router = express.Router();

router.get("/",(req: Request, res : Response)=>{
    return res.status(200).json({
        status : 200,
        data : soptMember,
    });
    //return res.status(200).json(JSON.stringify(introduce));
});

router.post("/",(req : Request, res : Response) => {

    if (instanceOfSOPT(req.body)){
        soptMember.push(req.body);
    }else{
        console.error("SOPT 타입이 아닙니다.")
    }


    
    return res.status(201).json({
        status : 201,
        data : soptMember,

    })
});

module.exports=router;