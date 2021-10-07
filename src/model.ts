export interface StudentType
{
    id?:number,
    name:string,
    email:string,
    phone:string
    branch:string
}
export interface Attendance{

    id?:number,
    studentId:number
    date:Date,
    status:string,
    present:string
}