export interface examen{
    codigo_examen?:string,
    nombre:string
}
export interface persona{
    codigo_persona?:string,
    nombre:string,
    apellido:string,
    fecha_nacimiento?:string,
    identificacion:string
}
export interface orden{
    codigo_orden:string,
    paciente:persona, 
    list_examen:examen[]
}