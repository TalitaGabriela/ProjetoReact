import { Dev } from './Dev';

export function Exemplo({lista}){
        return (
        <div>
            {lista.map(aluno=>(
                <ul>
                    <li>{aluno.nome}, {aluno.idade}, {aluno.cidade}</li>
                </ul>
            ))}
            <Dev nome = "Talita Gabriela Del Poso Vilalva"/>
        </div>
    );

}