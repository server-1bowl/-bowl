import { SOPT } from "../data/members data";
import { Movie } from "../data/myFavMovie data";

//인터페이스를 타입검사하고싶은데..... 자바스크립트 런타입에서는 인터페이스를 지원해주지 않아 직접 커스텀하는 함수!
export const instanceOfSOPT = (object: any) : object is SOPT => {
	if (object === null || object === undefined) return false;
    return (
    	'name' in object && 
        typeof (object.name) === 'string' &&
        'age' in object && 
        typeof (object.age) === 'number' &&
        'isSOPT' in object && 
        typeof (object.isSOPT) === 'boolean' &&
        'favorite' in object && 
        'favorFood' in object && 
        typeof (object.favorFood) === 'string'
        
	);
};

export const instanceOfMovie = (object: any) : object is Movie => {
	if (object === null || object === undefined) return false;
    return (
    	'name' in object &&
        typeof (object.name)==='string'&&
        'director' in object &&
        typeof (object.director)==='string'&&
        'genre' in object &&
        typeof (object.genre)==='string'&&
        'isGREAT' in object &&
        typeof (object.isGREAT)==='boolean'
	);
};