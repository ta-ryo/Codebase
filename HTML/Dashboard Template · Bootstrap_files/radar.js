// 色の設定
var colorSet = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};

// 乱数生成(0～100)
var rnd100 = function () {
  return Math.round(Math.random() * 100);
};

// 色のRGB変換
var color = Chart.helpers.color;

/*
 * チャートの初期設定
 */
var config = {
  type: 'radar',
  data: {
    labels: ["破壊力", "", "射程距離", "持続力", "精密動作性", "成長性"],
    datasets: [{
      label: "スタンドパワー",
      backgroundColor: color(colorSet.red).alpha(0.5).rgbString(),
      borderColor: colorSet.red,
      pointBackgroundColor: colorSet.red,
      data: [50, 60, 70, 80, 90, 100]
    },]
  },
  options: {
    animation: false,
    showTooltips: false,
    legend: { position: 'bottom' },
    title: {
      display: true,
      fontSize: 20,
      fontColor: '#666',
      text: 'STATUS'
    },
    scale: {
      display: true,
      pointLabels: {
        fontSize: 15,
        fontColor: colorSet.yellow
      },
      ticks: {
        display: true,
        fontSize: 12,
        fontColor: colorSet.green,
        min: 0,
        max: 100,
        beginAtZero: true
      },
      gridLines: {
        display: true,
        color: colorSet.yellow
      }
    }
  }
};

/*
* チャートの作成
*/
var myRadar = new Chart($("#myChart_radar"), config);