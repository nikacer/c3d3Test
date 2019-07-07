import { Component, OnInit } from '@angular/core';

declare var c3: any;
declare var d3: any;

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    this.graficaUno();
  }

  graficaUno() {
    const SubscriptoresPorTecnologia = c3.generate({
      size: {
            height: 400
        },
        bindto: '#chart',
      data: {
            x : 'x',
            onclick: (d, element) => {
              alert( JSON.stringify(d));
            },
        rows: [
                  ['x','CABLE','XDSL','OTRAS TECNOLOGIAS','SATELITAL','FIBRA OPTICA','RADIO MICRO-ONDAS','OTRAS INALAMBRICAS'],
                  ['2014-1T',0.50,0.4885,0.01,0.01,0.19,0.01,0.00],
                  ['2014-2T',0.5162,0.4816,0.01,0.01,0.19,0.01,0.00],
                  ['2014-3T',0.5251,0.4816,0.01,0.01,0.19,0.01,0.00]
                ],
        groups: [
                ['CABLE','XDSL','OTRAS TECNOLOGIAS','SATELITAL','FIBRA OPTICA','RADIO MICRO-ONDAS']
            ],
            type: 'bar',
        labels: {
    //           format: function (v, id, i, j) { return "Default Format"; },
                format: {
                    CABLE: d3.format('%'),
                    XDSL: d3.format('%'),
                    'OTRAS TECNOLOGIAS': d3.format('%'),
                    SATELITAL: d3.format('%'),
                    'FIBRA OPTICA': d3.format('%'),
                    'RADIO MICRO-ONDAS': d3.format('%')
    //                data1: function (v, id, i, j) { return "Format for data1"; },
                }
            },
        },
        axis: {
            x: {
                type: 'category' // this needed to load string x value
            }
        },
      zoom: {
            enabled: true
        }
    });
  }
   
}
