//? indentifica se a variável é nula ou undefined(vazia)
export interface Paciente{
    nome:string
    setor:string
    prioridade?: string
}

export interface Ala{
    nome:string
    fila:Paciente[]
}

export interface Consultorio{
    nome:string
    alas:Ala[]
}

 let paciente:Paciente = { 
    nome:"noemi",
    setor:"cardiologia",
 }