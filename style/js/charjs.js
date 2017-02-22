var linechar = (function() {
  function linechar(chart_id, labels, datas) {
    Chart.defaults.global.defaultFontColor = "#000";
    var ctx = document.getElementById(chart_id).getContext("2d");
    var data = {
      labels: labels,
      datasets: [{
          label: "我的评价星级",
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(254,136,0,.4)",
          borderColor: "rgba(254,136,0,1)",
          borderCapStyle: 'square',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(254,136,0,1)",
          pointBackgroundColor: "rgba(254,136,0,1)",
          pointBorderWidth: 1,
          pointHoverRadius: 3,
          pointHoverBackgroundColor: "rgba(254,136,0,1)",
          pointHoverBorderColor: "rgba(254,136,0,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 3,
          pointHitRadius: 10,
          data: datas[0],
          pointStyle: 'circle',
          spanGaps: false,
        },
        {
          label: "所有人均值",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(210,210,210,0.4)",
          borderColor: "rgba(210,210,210,1)",
          borderCapStyle: 'circle',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(210,210,210,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 3,
          pointHoverBackgroundColor: "rgba(210,210,210,1)",
          pointHoverBorderColor: "#fff",
          pointHoverBorderWidth: 1,
          pointRadius: 3,
          pointHitRadius: 10,
          data: datas[1],
          spanGaps: false,
        }
      ]
    }
    var options = {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true
        }
      },
      scales: {
        xAxes: [{
          display: true
        }]
      }
    };
    var myLineChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    });
  }

  return linechar;
}());