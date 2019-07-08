/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace()

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        '日曜日',
        '月曜日',
        '火曜日',
        '水曜日',
        '木曜日',
        '金曜日',
        '土曜日'
      ],
      datasets: [{
        data: [
          Math.ceil(Math.random() * 100),
          Math.ceil(Math.random() * 100),
          Math.ceil(Math.random() * 100),
          Math.ceil(Math.random() * 100),
          Math.ceil(Math.random() * 100),
          Math.ceil(Math.random() * 100),
          Math.ceil(Math.random() * 100)
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
}())
