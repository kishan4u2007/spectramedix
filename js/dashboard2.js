$(function () {

  'use strict'

  /* ChartJS
   * -------
   * Here we will create a few charts using ChartJS
   */

  //-----------------------
  //- MONTHLY SALES CHART -
  //-----------------------

  // Get context with jQuery - using jQuery's .get() method.
  var salesChartCanvas = $('#salesChart').get(0).getContext('2d')

  var salesChartData = {
    labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label               : 'ED Visit per 100',
        backgroundColor     : 'rgba(60,141,188,0.9)',
        borderColor         : 'rgba(60,141,188,0.8)',
        pointRadius          : false,
        pointColor          : '#3b8bba',
        pointStrokeColor    : 'rgba(60,141,188,1)',
        pointHighlightFill  : '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data                : [28, 48, 30, 29, 56, 27, 90],
      },
      {
        label               : 'Inpatient Admit per 1000',
        backgroundColor     : 'rgba(210, 214, 222, 1)',
        borderColor         : 'rgba(220, 53, 69, 1)',
        pointRadius         : false,
        pointColor          : 'rgba(210, 214, 222, 1)',
        pointStrokeColor    : '#c1c7d1',
        pointHighlightFill  : '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data                : [45, 28, 50, 21, 46, 55, 40]
      },
      {
        label               : 'Inpatient Days per 1000',
        backgroundColor     : '#fff',
        borderColor         : 'rgba(239, 195, 61, 1)',
        pointRadius         : false,
        pointColor          : 'fff',
        pointStrokeColor    : '#c1c7d1',
        pointHighlightFill  : '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data                : [45, 38, 20, 51, 26, 55, 60]
      },
    ]
  }

  var salesChartOptions = {
    maintainAspectRatio : false,
    segmentShowStroke: false,
    responsive : true,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines : {
          display : false,
        }
      }],
      yAxes: [{
        gridLines : {
          display : false,
        }
      }]
    }
  }

     //-------------
    //- LINE CHART -
    //--------------
    var lineChartCanvas = $('#lineChart').get(0).getContext('2d')
    var lineChartOptions = jQuery.extend(true, {}, salesChartOptions)
    var lineChartData = jQuery.extend(true, {}, salesChartData)
    lineChartData.datasets[0].fill = false;
    lineChartData.datasets[1].fill = false;
    lineChartOptions.datasetFill = false

    var lineChart = new Chart(lineChartCanvas, { 
      type: 'line',
      data: lineChartData, 
      options: lineChartOptions
    })



  // This will get the first returned node in the jQuery collection.
  var salesChart = new Chart(salesChartCanvas, { 
      type: 'line', 
      data: salesChartData, 
      options: salesChartOptions
    }
  )

  //---------------------------
  //- END MONTHLY SALES CHART -
  //---------------------------

  //-------------
  //- PIE CHART -
  //-------------
  // Get context with jQuery - using jQuery's .get() method.
    var pieChartCanvas = $('#pieChart').get(0).getContext('2d')
    var pieData        = {
      labels: [
          'Impatients', 
          'Outpatients',
          'Professional services', 
          'Pharmacy', 
          'Other' 
      ],
      datasets: [
        {
          data: [800,400,400,400,200],
          backgroundColor : ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'],
          borderWidth: 0
          
        }
      ]
    }
    var pieOptions     = {
      legend: {
        display: false
      },
      elements: {
				center: {
					text: '90%',
          color: '#FF6384', // Default is #000000
          fontStyle: 'Arial', // Default is Arial
          sidePadding: 20 // Defualt is 20 (as a percentage)
				}
			},
      cutoutPercentage: 70
      
    }
    //Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
    var pieChart = new Chart(pieChartCanvas, {
      type: 'doughnut',
      data: pieData,
      options: pieOptions,
           

    })

  //-----------------
  //- END PIE CHART -
  //-----------------

  /* jVector Maps
   * ------------
   * Create a world map with markers
   */
  $('#world-map-markers').mapael({
      map: {
        name : "usa_states",
        zoom: {
          enabled: true,
          maxLevel: 10
        },
      },
    }
  );

 

})
