export interface Array{
    id?:number,
    name?:string,
    children?:unknown
}
 export type Props={
    id:number,
    name?:string,
    children?:Array[],
    open?:boolean
 }