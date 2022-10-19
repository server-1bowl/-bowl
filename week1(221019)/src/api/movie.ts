import express, {NextFunction, Request, Response, Router } from "express";
import { Movie, myFavMovie } from "./data/myFavMovie data";
import { instanceOfMovie } from "./customfunction/instanceOf";

const router : Router = express.Router();



router.get("/",(req : Request, res : Response)=>{
    return res.status(200).json({
        status : 200,
        data : myFavMovie,
    });

});

router.post("/",(req : Request, res : Response)=>{

    if(instanceOfMovie(req.body)){
        myFavMovie.push(req.body); //local의 기존 데이터에 req의 데이터를 추가
    }
    else{
        console.error("Movie 타입이 아님");
        
    }


    return res.status(200).json({
        status : 200,
        data : "영화 추가완료 get으로 확인하세요.",
    });

});


module.exports=router;