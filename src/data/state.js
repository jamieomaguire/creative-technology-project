export const state = {
    isLoggedIn: false,
    entries: [
        {
            time: '10:25',
            meal: 'Wholegrain toast and scrambled eggs',
            good: true,
            okay: false,
            bad: false
        },
        {
            time: '12:40',
            meal: 'Packet of crisps',
            good: false,
            okay: false,
            bad: true
        },
        {
            time: '15:10',
            meal: 'Ham sandwich',
            good: false,
            okay: true,
            bad: false
        }
    ], // entries
    chartData: {
        labels: ['Good', 'Okay', 'Bad'],
        datasets: [
            {
                data: [10, 10, 10],
                backgroundColor: [
                    '#68D286',
                    '#FBAD2F',
                    '#EB585C'
                ],
                hoverBackgroundColor: [
                '#68D286',
                '#FBAD2F',
                '#EB585C'
                ]
            }
        ],
        options: {
            cutoutPercentage: 50,
            datasetStrokeWidth : 5,
            elements: {
                arc: {
                    borderWidth: 2
                }
            },
            legend: {
                labels: {
                    boxWidth: 20,
                    padding: 25
                }
            }
        }
    }, // chartData
    pastEntries: [ 
        {
            day: '2017-02-16T23:57:42.501Z',
            value: 'good'
        },
        {
            day: '2017-02-15T23:57:42.501Z',
            value: 'okay'
        },
        {
            day: '2017-02-14T23:57:42.501Z', 
            value: 'bad'
        },
        {
            day: '2017-02-13T23:57:42.501Z',
            value: 'good'
        },
        {
            day: '2017-02-12T23:57:42.501Z',
            value: 'okay'
        },
        {
            day: '2017-02-11T23:57:42.501Z', 
            value: 'bad'
        },
            {
            day: '2017-02-10T23:57:42.501Z',
            value: 'good'
        },
        {
            day: '2017-02-09T23:57:42.501Z',
            value: 'okay'
        },
        {
            day: '2017-02-08T23:57:42.501Z', 
            value: 'bad'
        },
            {
            day: '2017-02-07T23:57:42.501Z',
            value: 'good'
        },
        {
            day: '2017-02-06T23:57:42.501Z',
            value: 'okay'
        },
        {
            day: '2017-02-05T23:57:42.501Z', 
            value: 'bad'
        },
        
    ]
}