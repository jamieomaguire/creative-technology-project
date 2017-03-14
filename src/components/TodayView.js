import { AddEntryForm } from './AddEntryForm'
import { EntryList } from './EntryList'
import { DailyChart } from './DailyChart'
import { Modal } from './Modal'


export const TodayView = ({ vals, onNewEntry, entries, onDeleteEntry, onCompleteDay }) => {
  
  return (
    <section className="TodayView">
      <Modal />
      <DailyChart vals={vals} />
      <AddEntryForm onNewEntry={onNewEntry} />
      <EntryList entries={entries} 
                 onDeleteEntry={onDeleteEntry}
                 onCompleteDay={onCompleteDay} />
    </section>
  )
}
