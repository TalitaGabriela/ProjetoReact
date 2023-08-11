/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export function Exemplo({lista}){
        return (
        <div>
            {lista.map(aluno=>(
                <ul>
                    <li>{aluno.nome}, {aluno.idade}, {aluno.cidade}</li>
                </ul>
            ))}
        </div>
    );

}