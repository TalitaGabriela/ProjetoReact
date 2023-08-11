import './App.css'
import { Exemplo } from './Exemplo'

export default function App(){
    const aluno = [{nome:"Talita", idade:17 + " anos", cidade:"Nova Andradina"},
                    {nome:"João", idade:16 + " anos", cidade:"Nova Andradina"},
                     {nome:"Brenda", idade:16 + " anos", cidade:"Nova Andradina"},
                      {nome:"Gustavo", idade:16 + " anos", cidade:"Nova Andradina"}];
    return(
    <div>
    <h1>Hello World</h1>
    <Exemplo lista = {aluno}/>
    </div>
    );
}