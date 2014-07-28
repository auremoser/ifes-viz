$(function () {
  'use strict';
        $('#regions').highcharts({
            chart: {
                type: 'column'
            },
            colors: [
              '#E9322D', '#46A546', '#EC7063' , '#2C81BA', '#FBD8DB', '#666'
            ],
            credits: {
              enabled: false
            },
            title: {
                text: 'Gender by Regions'
            },
            subtitle: {
                text: 'Perpetrator and Victim Gender'
            },
            xAxis: {
                categories: [
                    'Abyan',
                    '`Adan',
                    'Al Bayda',
                    'Al Dali',
                    'Al Hudaydah',
                    'Al Jawf',
                    'Al Mahwit',
                    'Al Mahrah',
                    'Amran',
                    'Dhamar',
                    'Hadramawt',
                    'Hajjah',
                    'Ibb',
                    'Lahij',
                    'Ma\'rib',
                    'Sa`dah',
                    'Sana\'a',
                    'Sana\'a',
                    'Ta`izz'
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Counts by Region'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Perpetrator (F)',
                data: [49, 71, 106, 129, 144, 176, 135, 148, 216, 194, 95, 54, 49, 71, 106, 129, 144, 176, 135]

            }, {
                name: 'Perpetrator (M)',
                data: [83, 78, 98, 93, 106, 84, 105, 104, 91, 83, 106, 92, 84, 105, 104, 91, 83, 106, 92]

            }, {
                name: 'Victim (F)',
                data: [48, 38, 39, 41, 47, 48, 59, 59, 52, 65, 59, 51,  84, 105, 104, 91, 83, 106, 92]

            }, {
                name: 'Victim (M)',
                data: [42, 33, 34, 39, 52, 75, 57, 60, 47, 39, 46, 51, 75, 57, 60, 47, 39, 46, 51]

            }]
        });
    });