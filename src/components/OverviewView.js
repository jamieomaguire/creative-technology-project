import { OverviewChart } from './OverviewChart'
import { OverviewList } from './OverviewList'

export const OverviewView = ({ vals, pastEntries }) => {
  return (
    <section className="overview">
      <h2 className="overview-heading">Overview</h2>
      {/*<OverviewChart vals={vals} barData={barData}/>*/}
      <OverviewList pastEntries={pastEntries} />
    </section>
  )
}