// Main container that gets imported and rendered in the index.js file
import { Component } from 'react'
import { AddEntryForm } from './AddEntryForm'
import { EntryList } from './EntryList'
import { DailyChart } from './DailyChart'

export class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            entries: [
                        {
                            time: '15:28',
                            meal: 'wholegrain toast and scrambled eggs',
                            good: true,
                            okay: false,
                            bad: false
                        }
                    ], // entries
                    // To access chart data values: chartData.datasets[0].data
            chartData: {
                    labels: ['Good', 'Okay', 'Bad'],
                    datasets: [
                        {
                            data: [0, 0, 0],
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
            } // chartData
        }; // state
        this.addEntry = this.addEntry.bind(this)
    } // constructor

    addEntry(newEntry) {
        /**
         * MUST REFACTOR AND FIND PROPER WAY TO DO THIS
         */
        let cData = this.state.chartData;
        let cDataVals = cData.datasets[0].data;
        let cDataGood = parseInt(cDataVals[0]);
        let cDataOkay = parseInt(cDataVals[1]); 
        let cDataBad = parseInt(cDataVals[2]);

        if (newEntry.good) {
            cDataGood += 10;
        } else if (newEntry.okay) {
            cDataOkay += 10;
        } else if (newEntry.bad) {
            cDataBad += 10;
        }

        this.setState({
            /**
             * Take all the exisitng entries in state and push those into a new state object
             * and add the new entry
             */
            entries: [
                ...this.state.entries,
                newEntry
            ],
            chartData: {
                    labels: ['Good', 'Okay', 'Bad'],
                    datasets: [
                        {
                            data: [`${cDataGood}`, `${cDataOkay}`, `${cDataBad}`],
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
            } // chartData

        })

    }




    render() {
        return (
            <div className="app">
                <DailyChart vals={this.state.chartData} />
                <AddEntryForm onNewEntry={this.addEntry} />
                <EntryList entries={this.state.entries} />
            </div>
        ); // return
    } // render
}

