import React from 'react';

const LocForm = () => {
  return (
    <div className="loc-form">
        <h2>Inserir dados</h2>
        <form>
            <input type="text" placeholder='Digite a Região' />
            <select>
                <option value="">Selecione um comércio</option>
                <option value="Padaria">Padaria</option>
                <option value="Restaurante">Restaurante</option>
                <option value="Acougue">Açougue</option>
            </select>
            <select>
                <option value="">Selecione renda média mensal do público alvo</option>
                <option value="1">R$1.000 à R$2.999</option>
                <option value="2">R$3.000 à R$6.999</option>
                <option value="3">R$7.000 à R$11.999</option>
                <option value="4">R$12.000 à R$17.999</option>
                <option value="5">R$18.000+</option>
            </select>
            <button type="submit">Analisar</button>
        </form>
    </div>
  )
};

export default LocForm;