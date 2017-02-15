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
                    // To access chart data values: chartData.datasets[0].data
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
            } // chartData
        }; // state
        this.addEntry = this.addEntry.bind(this)
        this.deleteEntry = this.deleteEntry.bind(this)
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
             * Take all the existing entries in state and push those into a new state object
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

    } // Add Entry

    // REFACTOR THIS
    deleteEntry(entryId) {
        let ID = entryId.entryId
        let entries = this.state.entries

        function search(nameKey, myArray){
            for (var i=0; i < myArray.length; i++) {
                if (myArray[i].time === nameKey) {
                    return myArray[i];
                }
            }
        }

       var resultObject = search(ID, entries);

        /**
         * Determine which chart value to decrement
         * MUST REFACTOR AND FIND PROPER WAY TO DO THIS
         */
    
        let cData = this.state.chartData;
        let cDataVals = cData.datasets[0].data;
        let cDataGood = parseInt(cDataVals[0]);
        let cDataOkay = parseInt(cDataVals[1]); 
        let cDataBad = parseInt(cDataVals[2]);

        if (resultObject.good) {
            cDataGood -= 10;
        } else if (resultObject.okay) {
            cDataOkay -= 10;
        } else if (resultObject.bad) {
            cDataBad -= 10;
        }
       
       // Return a new array without the deleted entry
       let updatedEntries = entries.filter(function(i) {
           return i != resultObject
       })

       this.setState({
           entries: updatedEntries,
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
                <EntryList entries={this.state.entries} onDeleteEntry={this.deleteEntry}/>
            </div>
        ); // return
    } // render
}

