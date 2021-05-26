import React, {Component} from "react";
import template from "./Chart.jsx";

class Chart extends React.Component {
  render() {
    return template.call(this);
  }

  componentDidMount() {
    let ctx = document.getElementById('myChart');
    let myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Pawn', 'Bishop', 'Knight', 'Rook', 'Queen', 'King'],
        datasets: [{
          label: ['Pawn', 'Bishop', 'Knight', 'Rook', 'Queen', 'King'],
          data: [11, 1, 2, 4, 2, 2],
          backgroundColor: [
            'rgba(62, 126, 126, 0.75)',
            'rgba(48, 161, 142, 0.75)',
            'rgba(38, 171, 191, 0.75)',
            'rgba(76, 192, 224, 0.75)',
            'rgba(12, 101, 153, 0.75)',
            'rgba(47, 214, 172, 0.75)'
          ]
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
export default Chart;
