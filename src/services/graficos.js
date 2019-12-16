module.exports = {
  estruturaGrafico(tipo,categorias,data) {
    var options = {
      chart: {
        type: 'line',
        marginRight: 20
      },
      credits: {
        enabled: false
      },
      title: {
          text: ''
      },
      xAxis: {
        categories: categorias
      },
      yAxis: {
        title: {
            text: tipo
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true,
            pointFormat: "{point.y:.2f}"
          },
          enableMouseTracking: true
        },
        series:{
          animation: false
        }
      },
      series: [{
        name: tipo,
        data: data
      }]
    }

    return options
  }
}