// Main container that gets imported and rendered in the index.js file
import { Component } from 'react'
import { state } from '../data/state'
import { Menu } from './Menu'
import { TodayView } from './TodayView'
import { OverviewView } from './OverviewView'
import { Settings } from './Settings'

export class App extends Component {
    constructor(props){
        super(props)
        this.state = state
        this.addEntry = this.addEntry.bind(this)
        this.deleteEntry = this.deleteEntry.bind(this)
        this.completeDay = this.completeDay.bind(this)
    } // constructor

    addEntry(newEntry) {
        /**
         * MUST REFACTOR AND FIND PROPER WAY TO DO THIS
         */
        let cData = this.state.chartData;
        let cDataVals = cData.datasets[0].data
        let cDataGood = parseInt(cDataVals[0])
        let cDataOkay = parseInt(cDataVals[1])
        let cDataBad = parseInt(cDataVals[2])

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
                            // the chart data is stored in these three variables
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

    deleteEntry(entryId) {
        let ID = entryId.entryId
        let entries = this.state.entries

        /**
         * @params variable ID, this.state.entries
         */
        const search = (key, array) => {
            for (let i=0; i < array.length; i++) {
                if (array[i].time === key) {
                    return array[i];
                }
            }
        }

       let resultObject = search(ID, entries);

        /**
         * Determine which chart value to decrement
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

    /**
     * If the user is logged in, complete the day and add the processed result to past entries
     * If the user is not logged in, prompted them to log in or register to access the feature
     */
    completeDay() {

        if (!this.state.isLoggedIn) {
            console.log('not logged in')
           let modal = document.querySelector('.Modal')
           console.log(modal)
           modal.style.visibility = "visible"

        } else if(this.state.isLoggedIn) {
            console.log('logged in')
            let days = this.state.entries

            let goodCount = 0
            let okayCount = 0
            let badCount = 0

            // iterate through array elements to count good, okay and bads
            for(let i = 0; i < days.length; i++) {
            if (days[i].good) {
                goodCount += 10;
            } else if (days[i].okay) {
                okayCount += 10;
            } else if (days[i].bad) {
                badCount += 10;
            }
            }

            // compare the counts to see which value was the majority and return it
            function returnHighest(good, okay, bad) {
            if (good > okay && good > bad) {
                return 'good'
            } else if (okay > good && okay > bad) {
                return 'okay'
            } else if (bad > good && bad > okay) {
                return 'bad'
            } else {
                return 'okay'
            }
            }

            let result = returnHighest(goodCount, okayCount, badCount)

            // get todays date as a string 
            function getToday() {
            let date = new Date()
            let dateISO = date.toISOString();
            return dateISO
            }

            // create an object to push into pastEntries array
            function createEntry(today, result) {
            return { day: today, value: result }
            } 

            // form new object to add to past entries
            let todaysEntry = (createEntry(getToday(), result))

            let pastEntries = this.state.pastEntries
            let updatedPastEntries = pastEntries.unshift(todaysEntry)

            this.setState({
            entries: [],
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

            })
            } // end if
    } // end onCompleteDay


    render() {
        return (
            <div className="app">
                 <Menu/>
                {(this.props.location.pathname === "/") ?
                <TodayView vals={this.state.chartData} 
                        onNewEntry={this.addEntry}
                        entries={this.state.entries} 
                        onDeleteEntry={this.deleteEntry}
                        onCompleteDay={this.completeDay} /> :

                (this.props.location.pathname === "/overview") ?
                <OverviewView vals={this.state.overviewChartData} 
                              barData={this.state.barChartData}
                              pastEntries={this.state.pastEntries} /> :
                <Settings /> }
            </div>
        ) // return
    } // render
}

