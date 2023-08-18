import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home(){
    const [count, setCount] = useState(0);
    return(
        <div>
            <h1>Home</h1>
            <Link to="/todo">PARA FAZER</Link>
            <p>{count}</p>
            <button onClick={() => setCount(count+1)}>Count</button>
            <button onClick={() => setCount(count*0)}>Reset</button>
        </div>
    );
}