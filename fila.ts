import {Ala,Consultorio,Paciente} from './types'


export function create(size:number): Array<any>{
    return[... new Array(size)];
}

export function insert(item: any,fila:Array<any>){
    const emptySpace=fila.indexOf(undefined);
    if(emptySpace === -1){
        console.log("erro,sem espaço");
        return;
    }
    console.log("item inserido");
    fila[emptySpace]=item;
   
}
 export function remove(fila:Array<any>){
    const removeItem=fila[0];
     
    for(let i=0; i<fila.length;i++){
        fila[i]= fila[i+1];
    }
    return removeItem
 }



 