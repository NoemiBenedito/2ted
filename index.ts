import {Paciente, Ala} from './types'
import * as fila from './fila'

//determinado o objeto paciente
const pacientes:Paciente[]=[
    {
        nome: "noemi",
        setor:"clínico geral",
    },
    {
        nome:"pedro",
        setor:"ortopedista",
    },
    {
        nome:"paulo",
        setor:"cardiologista",
    },
];
// atendimento inicio
//triagem é a situação da paciênte
//criamos uma função TRIAGEM passamos dentro dela pacientes
//criamos uma variável chamada prioridades que dentro dela tem os casos
//criamos uma variável chamada prioridade faz um cáculo retornando um caso
//iguala paciente = prioridade 
// depois retorna 
export function triagem(paciente:Paciente){
    const prioridades=["emergência","urgente","preferencial","comum"]
    const prioridade=prioridades[Math.floor(Math.random()*prioridades.length)]
    paciente.prioridade=prioridade
    return paciente;

}

// declarando o objeto consultorio
const consultorio:Ala[] =[
    {
        nome:"triagem",
        fila:fila.create(5),
    },
    {
        nome:"cardiologista",
        fila:fila.create(5),
    },
    {
        nome:"clínico geral",
        fila:fila.create(5),
    },
    {
        nome:"ortopedista",
        fila:fila.create(5),
    },

];

// realizar a triagem 
//atendimento ocorrendo
export function triar(pacientes:Paciente[]) {

    // percorre toda a triagem 
    for(let i=0; i<pacientes.length;i++) {

        // recebe uma prioridade
        const pacienteTriado=triagem(pacientes[i]);

     //inserindo paciente no setor
     if(pacienteTriado.setor === "cardiologista"){
        fila.insert(pacienteTriado,consultorio[1].fila)
        fila.remove(pacientes)
        return;

     }


    if (pacienteTriado.setor === "clínico geral "){
        fila.insert(pacienteTriado,consultorio[2].fila);
        fila.remove(pacientes);
        return;
    }
    if (pacienteTriado.setor === "ortopedista"){
        fila.insert(pacienteTriado,consultorio[3].fila);
        fila.remove(pacientes);
        return;
    }
    }
}


