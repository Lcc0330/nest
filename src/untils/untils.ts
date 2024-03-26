export class MyUtility {
    
    static filterObject(obj:{[key:string]:any}) {
        const filterObject: {[key:string]:any} ={};
        Object.keys(obj).forEach((key)=>{
            if(obj[key]!==undefined && obj[key]!== null && obj[key]!==false){
                filterObject[key]=obj[key]
            }
            return filterObject
        })
    }
}