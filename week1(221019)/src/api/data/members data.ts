export interface SOPT{
    name : string,
    age : number,
    isSOPT : boolean,
    favorite : any,
    favorFood : string,
    cat ?: boolean, //?로 선택적 속성을 나타냄
}


export const soptMember :SOPT[]=[{
    name:'ww',
    age:2,
    isSOPT : false,
    favorFood: 'sushi',
    favorite : 'hi',
    cat : true
},{
    name:'빛',
    age:24,
    isSOPT : true,
    favorFood: '부찌',
    favorite : 'shwa'
},{
    name:'bori',
    age:5,
    isSOPT : false,
    favorFood: 'salmon',
    favorite : 'walk out'
}]
