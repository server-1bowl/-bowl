import express, {NextFunction, Request, Response, Router } from "express";
import { Movie, myFavMovie } from "./data/myFavMovie data";
import { instanceOfMovie } from "./customfunction/instanceOf";

const router : Router = express.Router();


const Comment : String[] = myFavMovie.map((f : Movie)=>{ // 영화에 대한 코멘트들만 따로 배열로 만듬
    return (f.comment as String)
})




router.get("/",(req : Request, res : Response)=>{
    return res.status(200).json({
        status : 200,
        data : Comment
    });

});

router.post("/",(req : Request, res : Response)=>{
    if(instanceOfMovie(req.body) && 'comment' in req.body){
        Comment.push((req.body.comment as String)); 
    }
    else{
        console.error("Movie 타입이 아니거나 comment가 없음");

    }

    
    return res.status(200).json({
        status : 200,
        data : Comment
    });

});

module.exports=router;