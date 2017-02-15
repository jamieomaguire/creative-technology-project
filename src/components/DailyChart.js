import { Doughnut, defaults } from 'react-chartjs-2'
import { DailyChartLegend } from './DailyChartLegend'

defaults.global.legend.display = false;

export const DailyChart = ({vals}) => (
    <div className="daily-chart">
      <Doughnut data={vals}/>
      <DailyChartLegend />
    </div>
)
