import React from 'react';
import CardRealTime from '../components/CardRealTime.js'
import CardConsumo from '../components/CardConsumo.js'
import CardGasto from '../components/CardGasto.js'
import CardInfo from '../components/CardInfo.js'
import GraficoDashboard from '../components/GraficoDashboard'

export default function Dashboard() {

  return (
    <React.Fragment>
      <div className="row">
        <CardRealTime />
        <CardConsumo />
        <CardGasto />
        <CardInfo />
      </div>
      <div className="row">
        <GraficoDashboard/>
      </div>
    </React.Fragment>
  );
};