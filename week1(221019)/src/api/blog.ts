import express, {NextFunction, Request, Response, Router } from "express";

const router : Router = express.Router();

let Blog : object[] = [];

router.get("/",(req : Request, res : Response)=>{
    return res.status(200).json({
        status : 200,
        message : "블로그조회 성공?!",
        data : Blog
    });

});

router.post("/",(req : Request, res : Response)=>{
    Blog.push(req.body);

    return res.status(200).json({
        status : 200,
        message : "post 성공, 확인은 get으로",
        data : Blog
    });

});

module.exports=router;