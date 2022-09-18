import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  
    function consultaCep() {

      if(input.length === 0) {
        alert('Campo não pode ser vazio');
        return false;
      }


      let url = `https://viacep.com.br/ws/${input}/json/`;

      fetch(url)
      .then((response => response.json()))
      .then((json)=> {

        console.log(json);
        setCep(json);
        setInput('');

      })
      .catch(()=> {
        console.log(`Ops Algo deu Errado`)
      })

    }

  return(
    <div className='container'>
      
      <header className='tituloApp'>
          <h1>Buscador de Cep</h1>
      </header>

      <div className='containerInput'>

        <input type="number"
        placeholder='Digite o Cep'
        value={input}
        onChange={ (e) => setInput(e.target.value) }
        />

        <button className='buscarCep' onClick={consultaCep}>
          Buscar
        </button>

      </div>

      {Object.keys(cep).length > 0 && (

        <div className='containerCep'>
        <strong className='cepNum'>Cep : {cep.cep}</strong>
        <span className='nomeRua'>Logradouro : {cep.logradouro}</span>
        <span className='nomeComplemento'>Complemento : {cep.complemento}</span>
        <span className='nomeBairro'>Bairro : {cep.bairro}</span>
        <span className='localidadeUf'>Localidade : {cep.localidade}  {cep.uf}</span>
        <span className='ibge'>Código IBGE : {cep.ibge}</span>
        <span className='gia'>Gia : {cep.gia}</span>
        <span className='ddd'>DDD : {cep.ddd}</span>
        <span className='siafi'>Siafi : {cep.siafi}</span>
      </div>

      )}

      
      

    </div>

  );
}

export default App;