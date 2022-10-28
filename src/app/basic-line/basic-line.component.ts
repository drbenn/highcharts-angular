import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-basic-line',
  templateUrl: './basic-line.component.html',
  styleUrls: ['./basic-line.component.scss']
})
export class BasicLineComponent implements OnInit {
  highcharts = Highcharts;
  constructor() { }

  ngOnInit(): void {
  }
  chartOptions:any = {

    chart: {
      type:'line',
      height: "400px",
    },
    title: {
        text:"Title"
    },
    xAxis: {
      ctegories: ['dec', 'jan', 'feb'],
      title: {
        text: 'Months'
      }
    },
    yAxis: {
    },
    series: [
      {
      type:undefined,
      name:'US',
      data:[8,6,3]
      },
      {
        type:undefined,
        name:'Canada',
        data:[4,8,5]
      }, 
  ]
  }

}
