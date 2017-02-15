import { PropTypes } from 'react'

export const EntryRow = ({meal, time, good, okay, bad}) => (
  <tr className="entry-row">
    
    <td className="entry-row-cell">
      {time}
    </td>

    <td className="entry-row-cell">
      {meal}
    </td>  

    <td className="entry-row-cell">
      {(good) ? 'X' : null}
    </td>

    <td className="entry-row-cell">
      {(okay) ? 'X' : null}
    </td> 

    <td className="entry-row-cell">
      {(bad) ? 'X' : null}
    </td> 

  </tr>

)

EntryRow.propTypes = {
  meal: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  good: PropTypes.bool.isRequired,
  okay: PropTypes.bool.isRequired,
  bad: PropTypes.bool.isRequired
}