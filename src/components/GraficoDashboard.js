import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import io from 'socket.io-client'

export default function GraficoDashboard() {
  const socket = io('localhost:3333');
  const fator5s = 5/3600;

  useEffect(() => {  
    return () => {
      socket.disconnect()
    }
  }, []);

  const optionsCorrente = {
    chart: {
      type: 'spline',
      animation: Highcharts.svg,
      marginRight: 20,
      events: {
        load: function () {
            // Seta as configuracoes do grafico a cada segundo
            var series = this.series[0];
            socket.on('leitura', message => {
              var x = (new Date()).getTime(), // current time
                  y = parseFloat(message.corrente);
                  series.addPoint([x, y], true, true);
            });
        }
      }
    },
  
    time: {
        useUTC: false
    },
  
    credits: {
      enabled: false
    },
  
    title: {
        text: ''
    },
  
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
    },
  
    yAxis: {
        title: {
            text: 'Corrente'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
  
    plotOptions: {
      spline: {
        dataLabels: {
            enabled: true,
            pointFormat: "{point.y:.2f} A { &nbsp; &nbsp;}"
        },
        enableMouseTracking: false
      }
    },
  
    tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
    },
  
    legend: {
        enabled: false
    },
  
    exporting: {
        enabled: false
    },
  
    series: [{
        name: '',
        data: (function () {
            // generate an array   of random data
            var data = [],
                i;
  
            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: null,
                    y: null
                });
            }
  
            return data;
        }())
    }]
  };
  
  const optionsConsumo = {
    chart: {
      type: 'spline',
      animation: Highcharts.svg,
      marginRight: 20,
      events: {
        load: function () {
            // Seta as configuracoes do grafico a cada segundo
            var series = this.series[0];
            socket.on('leitura', message => {
              var x = (new Date()).getTime(), // current time
                  y = parseFloat(message.corrente * 127 * fator5s);
              series.addPoint([x, y], true, true);
            });
        }
      }
    },
  
    time: {
        useUTC: false
    },
  
    credits: {
      enabled: false
    },
  
    title: {
        text: ''
    },
  
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
    },
  
    yAxis: {
        title: {
            text: 'Corrente'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
  
    plotOptions: {
      spline: {
        dataLabels: {
            enabled: true,
            pointFormat: "{point.y:.2f} W"
        },
        enableMouseTracking: false
      }
    },
  
    tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
    },
  
    legend: {
        enabled: false
    },
  
    exporting: {
        enabled: false
    },
  
    series: [{
        name: '',
        data: (function () {
            // generate an array   of random data
            var data = [],
                i;
  
            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: null,
                    y: null
                });
            }
  
            return data;
        }())
    }]
  };

  return (
    <>
      <div className="tab-content col-12">
        <ul className="nav nav-tabs ml-2" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Corrente</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Potência</a>
          </li>
        </ul>
      </div>
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
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
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
        </div>
      </div>
    </>
  );
};