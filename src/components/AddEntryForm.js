import { PropTypes } from 'react'

export const AddEntryForm = ({ meal, 
                               time, 
                               good, 
                               okay, 
                               bad,
                               onNewEntry }) => {

  

  /**
   * Refs to reach out to individual elements and figure out their values
   * keep the ref variables in scope so they can be accessed inside of the nested functions
   */
  let _meal, _time, _good, _okay, _bad

  const submit = (e) => {
    // prevent default form submission
    e.preventDefault()
    /**
     * Send an object of the new form values
     * @param {object} form values - the refs of each form value
     */
    onNewEntry({
      meal: _meal.value,
      time: _time.value,
      good: _good.checked,
      okay: _okay.checked,
      bad: _bad.checked
    })

    /**
     * Reset the form values after a submit
     */
    _meal.value = ''
    _time.value = ''
    _good.checked = false
    _okay.checked = false
    _bad.checked = false

  }


  return (
      <form onSubmit={submit} className="add-entry-form">
        <p>
          <input id="meal" 
                  type="text"
                  placeholder="Meal" 
                  required 
                  /* use the callback ref */
                  ref={input => _meal = input} /> 
        </p>

        <p>
          <input id="time" 
                  type="text" 
                  required 
                  placeholder="Time i.e 10:00, 13:45"
                  ref={input => _time = input} />
        </p>

        <div className="add-entry-form-radio-container">

          <label htmlFor="good" className="add-entry-form-radio-label">Good 
            <input id="good" 
                  type="radio" 
                  name="food-radio" 
                  required 
                  ref={input => _good = input}/>
            <span className="add-entry-form-radio-check-good"></span>
          </label>
          

          <label htmlFor="okay" className="add-entry-form-radio-label">Okay 
            <input id="okay" 
                  type="radio" 
                  name="food-radio" 
                  required 
                  ref={input => _okay = input} />
            <span className="add-entry-form-radio-check-okay"></span>
          </label>
          
          <label htmlFor="bad" className="add-entry-form-radio-label">Bad
            <input id="bad" 
                  type="radio" 
                  name="food-radio" 
                  required 
                  ref={input => _bad = input}/>
            <span className="add-entry-form-radio-check-bad"></span>
          </label>
        </div>

        <p><button className="add-entry-form-btn">Add Entry</button></p>
      </form>
    )
}

/**
 * Populate form with default props
 */

// AddEntryForm.defaultProps = {
//   meal: "Scrambled eggs",
//   time: "8:45",
//   good: true,
//   okay: false,
//   bad: false
// }

// AddEntryForm.propTypes = {
//   meal: PropTypes.string.isRequired,
//   time: PropTypes.string.isRequired,
//   good: PropTypes.bool.isRequired,
//   okay: PropTypes.bool.isRequired,
//   bad: PropTypes.bool.isRequired
// }