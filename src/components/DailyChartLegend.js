export const DailyChartLegend = ({vals}) => (
    <ul className="daily-chart-legend">
      <li className="daily-chart-legend-li-good">
        <span className="daily-chart-legend-highlight-good"></span>
        <h3 className="daily-chart-legend-label">Good</h3>
      </li>
      <li className="daily-chart-legend-li-okay">
        <span className="daily-chart-legend-highlight-okay"></span>
        <h3 className="daily-chart-legend-label">Okay</h3>
      </li>
      <li className="daily-chart-legend-li-bad">
        <span className="daily-chart-legend-highlight-bad"></span>
        <h3 className="daily-chart-legend-label">Bad</h3>
      </li>
    </ul>
)
