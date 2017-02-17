import { AddEntryForm } from './AddEntryForm'
import { EntryList } from './EntryList'
import { DailyChart } from './DailyChart'

export const TodayView = ({ vals, onNewEntry, entries, onDeleteEntry, onCompleteDay }) => {

  return (
    <section>
      <DailyChart vals={vals} />
      <AddEntryForm onNewEntry={onNewEntry} />
      <EntryList entries={entries} 
                 onDeleteEntry={onDeleteEntry}
                 onCompleteDay={onCompleteDay} />
    </section>
  )
}
