import { Line, defaults, Bar } from 'react-chartjs-2'

export const OverviewChart = ({vals, barData}) => (
  <div>
    <Line data={vals} />
  </div>
)