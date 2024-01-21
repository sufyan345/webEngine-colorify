export class Log{
    static success(msg:string){
        console.log(`%c ${msg} ` , 'color: green')
    }
    static danger(msg:string){
        console.log(`%c ${msg} ` , 'color: red')
    }
    static warning(msg:string){
        console.log(`%c ${msg} ` , 'color: black; background:yellow')
    }
    static info(msg:string){
        console.log(`%c ${msg} ` , 'color: purple; background:#e1e1e1')
    }
}