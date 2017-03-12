import { PropTypes } from 'react'
import MdClose from 'react-icons/lib/md/close'
import TiTickOutline from 'react-icons/lib/ti/tick-outline'

export const EntryRow = ({meal, time, good, okay, bad, onDeleteEntry}) => {

  /**
   * Send the data-id as a unique identifier for the entry to be deleted
   */
  const deleteEntry = (e) => {
    let row = e.target.closest('tr')
    let rowID = row.attributes['data-id'].value
    onDeleteEntry({
      entryId: rowID
    })
  }

  return (
    <tr className="entry-row" data-id={time}>
      
      <td className="entry-row-cell">
        {time}
      </td>

      <td className="entry-row-cell">
        {meal}
      </td>  

      <td className="entry-row-cell-good">
        {(good) ? <TiTickOutline/> : null}
      </td>

      <td className="entry-row-cell-okay">
        {(okay) ? <TiTickOutline/> : null}
      </td> 

      <td className="entry-row-cell-bad">
        {(bad) ? <TiTickOutline/> : null}
      </td> 

      <td className="entry-row-cell js-delete-entry" onClick={deleteEntry}>
        <button tabIndex="0"> <MdClose /> </button>
      </td>

    </tr>
  )
}

EntryRow.propTypes = {
  meal: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  good: PropTypes.bool.isRequired,
  okay: PropTypes.bool.isRequired,
  bad: PropTypes.bool.isRequired
}