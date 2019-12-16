import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
const axios = require('axios');
const Graficos = require('../services/graficos.js')

export default function GraficoHistorico({leituras, consumos}) {
  const [optionsCorrente, setOptionsCorrente] = useState({})
  const [optionsConsumo, setOptionsConsumo] = useState({})

  var dadosGraficos = function(collection, tipo){
    var dadosGrafico = {}
    var categorias = []
    var series = []
    collection.forEach(element => {
      var data = new Date(element.createdAt)
      categorias.push(`${data.getHours()}:${data.getMinutes()}:${data.getSeconds()} : ${data.getDay()}/${data.getMonth()}/${data.getFullYear()}`)
      
      if(tipo === 'leituras'){
        series.push(parseFloat(element.corrente))
      } else if (tipo === 'consumos'){
        series.push(parseFloat(element.watts))
      } 
    });

    dadosGrafico['categorias'] = categorias
    dadosGrafico['series'] = series

    if(tipo === 'leituras'){
      setOptionsCorrente( Graficos.estruturaGrafico('Corrente', dadosGrafico['categorias'], dadosGrafico['series']) )
    } else if (tipo === 'consumos'){
      setOptionsConsumo( Graficos.estruturaGrafico('Consumo', dadosGrafico['categorias'], dadosGrafico['series']) )
    }
  }

  useEffect(() => {  
    if(Object.keys(leituras).length){
      dadosGraficos(leituras,'leituras')
    }

  }, [leituras]);

  useEffect(() => {  
    if(Object.keys(consumos).length){
      dadosGraficos(consumos, 'consumos')
    }
  }, [consumos]);

  return (
    <>
      <div className="tab-content col-12" id="myTabContent">
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">Gráfico de consumo em corrente</h6>
            </div>
            <div className="card-body">
              <div id="myAreaChart" className="container-fluid">
                <HighchartsReact highcharts={Highcharts} options={optionsCorrente} />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">Gráfico de consumo em potência</h6>
            </div>
            <div className="card-body">
              <div id="myAreaChart" className="container-fluid">
                <HighchartsReact highcharts={Highcharts} options={optionsConsumo} />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};