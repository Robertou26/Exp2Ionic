
export interface IAlumnos{
    id:Number;
    nombre:String;
    tipoPersona: String;
    rut: String;
}

export interface IAlumno{
    nombre:String;
    tipoPersona: String;
    rut: String;
}

export interface Users{
    id:number;
    username: String;
    password: String;
    role: String;
    isactive:boolean;
}
export interface User{
    username: String;
    password: String;
    correo: String;
}