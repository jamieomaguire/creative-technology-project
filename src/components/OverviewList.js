import { OverviewRow } from './OverViewRow'
export const OverviewList = ({pastEntries}) => {

  return (
    <section className="overview-list">
      <table className="overview-list-table">
        <thead>
          <tr>
            <th className="overview-list-heading">Value</th>
            <th className="overview-list-heading">Day</th>
            <th className="overview-list-heading">Month</th>
            <th className="overview-list-heading">Year</th>
          </tr>
        </thead>
        <tbody>
          {/* Return a tabel row for each entry containing all the keys */}
          {pastEntries.map((entry, i) => 
              <OverviewRow key={i}
                      {...entry} />
          )}
      </tbody>
      </table>
    </section>
  )
}

