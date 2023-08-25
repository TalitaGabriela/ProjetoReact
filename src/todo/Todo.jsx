import { useState } from "react";
import { Link } from "react-router-dom";


export default function Todo(){
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState([]);
    const [id,setId] = useState(1);
    const salvar = (e) =>{
        e.preventDefault();
        setLista([...lista,{
            atividade: atividade,
            id: id
        }]);
        setId(id+1);
    };

    return(
        <div>
            <Link to="/">home</Link>
            <h1>Lista de Atividades</h1>
            <p>{atividade}</p>
            <form onSubmit={salvar}>
                <input type="text" onChange={(e)=>{setAtividade(e.target.value)}}></input>
                <button>ADD</button>
            </form> 
            {lista.map((ativ)=>
            <div key={ativ.id}>
                <p>{ativ.atividade}</p>
            </div>
            )}     
        </div>
    );
}
