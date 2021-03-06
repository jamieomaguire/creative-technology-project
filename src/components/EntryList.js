import { EntryRow } from './EntryRow'
import { RoundButton } from './RoundButton'
import { PropTypes } from 'react'

export const EntryList = ({entries, onDeleteEntry, onCompleteDay}) => {

return (
<section className="entry-list">
  <table className="entry-list-table">
      <thead>
          <tr>
              <th className="entry-list-heading">Time</th>
              <th className="entry-list-heading">Meal</th>
              <th className="entry-list-heading-good">Good</th>
              <th className="entry-list-heading-okay">Okay</th>
              <th className="entry-list-heading-bad">Bad</th>
          </tr>
      </thead>
      <tbody>
          {/* Return a tabel row for each entry containing all the keys */}
          {entries.map((entry, i) => 
              <EntryRow key={i}
                        onDeleteEntry={onDeleteEntry}
                      {...entry} />
          )}
      </tbody>
  </table>
  <RoundButton fn={onCompleteDay} cta="Complete Day"/>
</section>
)  
}

/** 
 * EntryList expects an array of entries
 * otherwise it shall return an error
 */
EntryList.propTypes = {
  entries: function(props) {
    if(!Array.isArray(props.entries)) {
      return new Error(
          "EntryList should be an array"
      )
    } else {
      return null
    }
  }
}