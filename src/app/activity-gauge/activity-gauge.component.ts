import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
// require('highcharts/modules/data')(Highcharts);
// require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);
// require('highcharts/modules/export-data')(Highcharts);
require('highcharts/highcharts-more')(Highcharts);

@Component({
  selector: 'app-activity-gauge',
  templateUrl: './activity-gauge.component.html',
  styleUrls: ['./activity-gauge.component.scss']
})
export class ActivityGaugeComponent implements OnInit {
  
  highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
  }

    chartOptions:any = {

    chart: {
      type: 'solidgauge',
      height: "100%",
    },
    title: {
        text:"Title"
    },

  
  tooltip: {
    borderWidth: 0,
    backgroundColor: 'none',
    shadow: true,
    style: {
        fontSize: '16px'
    },
    valueSuffix: '%',
    pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
    // positioner adjusts placement of tooltip
    positioner: function (labelWidth: number) {
      return {
          x: 260,
          y: 260
      };
    }
    // Orignal positioner function w/ unresolved issues when porting to angular
    // positioner: function (labelWidth: number) {
    //     return {
    //         x: (this.chartOptions.chart.chartWidth - labelWidth) / 2,
    //         y: (this.chart.plotHeight / 2) + 15
    //     };
    // }
},

  pane: {
      startAngle: 0,
      endAngle: 360,
      background: [{ // Track for Move
          outerRadius: '112%',
          innerRadius: '88%',
          backgroundColor: Highcharts.color('#FF0000'),
          borderWidth: 0
      }, { // Track for Exercise
          outerRadius: '87%',
          innerRadius: '63%',
          backgroundColor: Highcharts.color('#FF0000'),
          borderWidth: 0
      }, { // Track for Stand
          outerRadius: '62%',
          innerRadius: '38%',
          backgroundColor: Highcharts.color('#FF0000')
          .setOpacity(0.3)
          .get(),
          borderWidth: 0
      }]
  },

  yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickPositions: []
  },

  plotOptions: {
      solidgauge: {
          dataLabels: {
              enabled: false
          },
          linecap: 'round',
          stickyTracking: false,
          // bar edge rounding
          rounded: false
      }
  },

  series: [{
      name: 'Move',
      data: [{
          color: '#E57373',
          radius: '112%',
          innerRadius: '88%',
          y: 80
      }]
  }, {
      name: 'Exercise',
      data: [{
          color: '#F06292',
          radius: '87%',
          innerRadius: '63%',
          y: 65
      }]
  }, {
      name: 'Stand',
      data: [{
          color: '#BA68C8',
          radius: '62%',
          innerRadius: '38%',
          y: 50
      }]
  }]
  }
}
