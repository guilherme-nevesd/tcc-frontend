import React from 'react';
import BasicCard from '../components/BasicCard.js'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import io from 'socket.io-client'
const socket = io('https://tcc-backend-energyadmin.herokuapp.com');

export default function Controle() {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
      <BasicCard />
      </div>
    </div>
  );
};