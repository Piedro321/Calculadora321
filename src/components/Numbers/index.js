import React, {useState} from 'react';
import Title from '../Title';
import './index.css';

export default function Numbers() {        
    const [numero, setNumero] = useState(0  );
    const [numero2, setNumero2] = useState(0);
    const [operador, setOperador] = useState('');

    //pega o value do numero, ao ser clicado 
    const handleClick = ({ target }) => {
        const {value} = target;
        //se for 0, seta o numero clicado... o mesmo vale ao segundo
        numero === 0 ? setNumero(value) : setNumero2(value);
    }

    //pega o valor do operador, ao ser clicado
    const handleOperator = ({ target }) => {
        const {value} = target;

        //se for igual a vazio = sete o valor do clicado
        if(operador === '') setOperador(value)
        
        //condições para realizar as operações, de acordo com o sinal selecionado
        if(operador === '+') {
            alert("O resultado da soma será igual a: "+(Number(numero) + Number(numero2)));
            setNumero(0);
            setOperador('')
            setNumero2(0);
        } else if(operador === '-') {
            alert("O resultado da subtração será igual a: "+(Number(numero) - Number(numero2)));
            setNumero(0);
            setOperador('')
            setNumero2(0);
        } else if(operador === '*') {
            alert("O resultado da multiplicação será igual a: "+(Number(numero) * Number(numero2)));
            setNumero(0);
            setOperador('')
            setNumero2(0);
        } else if(operador === '/') {
            alert("O resultado da divisão será igual a: "+(Number(numero) / Number(numero2)).toFixed(2));
            setNumero(0);
            setOperador('')
            setNumero2(0);
        } else if(operador === '%') {
            alert("O resultado da porcentagem será igual a: "+((Number(numero) * Number(numero2)) / 100));
            setNumero(0);
            setOperador('')
            setNumero2(0);
        }
    }

    //ao apertar o C, zera todo o histórico da calculadora
    const handleZerar = () => {
        setNumero(0);
        setNumero2(0);
        setOperador('');
    }

    
    return (
        <section className="card">
        <Title />
        <div className="fields">
            <input type="text" value={numero} />
            <input type="text" value={operador} />
            <input type="text" value={numero2} />
            {/* <p>{numero}  {operador} {numero2}</p> */}
        </div>
        <div className="numbers">
            <div className="divisao-1">
                <button onClick={handleClick} value="1">1</button>
                <button onClick={handleClick} value="2">2</button>
                <button onClick={handleClick} value="3">3</button>
                <button onClick={handleOperator} value="+">+</button>
            </div>
            <div className="divisao-2">
                <button onClick={handleClick} value="4">4</button>
                <button onClick={handleClick} value="5">5</button>
                <button onClick={handleClick} value="6">6</button>
                <button onClick={handleOperator} value="-">-</button>
            </div>
            <div className="divisao-3">
                <button onClick={handleClick} value="7">7</button>
                <button onClick ={handleClick} value="8">8</button>
                <button onClick={handleClick} value="9">9</button>
                <button onClick={handleOperator} value="*">x</button>
            </div>
            <div className="divisao-4">
                <button onClick={handleZerar}>C</button>
                <button onClick={handleClick} value="0">0</button>
                <button onClick={handleOperator} value="%">%</button>
                <button onClick={handleOperator} value="/">/</button>
            </div>
            <div className="divisao-5">
                <button className="equal" onClick={handleOperator}>=</button>
            </div>
        </div>
    </section>
    )
}