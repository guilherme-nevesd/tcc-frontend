import React, { useEffect, useState } from 'react';
import GraficoHistorico from '../components/GraficoHistorico.js'
import Tabela from '../components/Tabela.js'
const axios = require('axios');

export default function Historico() {
  const [dadosCorrente, setDadosCorrente] = useState({})
  const [dadosConsumo, setDadosConsumo] = useState({})

  useEffect(() => {
    var mounted = true
    var getLeituras = async function(){
      await axios.get('https://tcc-backend-energyadmin.herokuapp.com/leituras').then(response => {
        // leituras = response.data
        if(mounted){
          setDadosCorrente(response.data)
        }
      });
    }

    var getConsumo = async function(){
      await axios.get('https://tcc-backend-energyadmin.herokuapp.com/consumos').then(response => {
        // leituras = response.data
        if(mounted){
          setDadosConsumo(response.data)
        }
      });
    }

    getLeituras()
    getConsumo()
    
    return () => {
      mounted = false
    }
  }, []);
  
  return (
    <React.Fragment>
      <div className="row">
        <GraficoHistorico leituras = {dadosCorrente} consumos = {dadosConsumo} />
      </div>
      <Tabela dadosLeituras = {dadosCorrente} dadosConsumos = {dadosConsumo} />
    </React.Fragment>
  );
};