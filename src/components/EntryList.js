import { EntryRow } from './EntryRow'
import { PropTypes } from 'react'

export const EntryList = ({entries}) => (
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
                            {...entry} />
                )}
            </tbody>
        </table>
    </section>
)

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