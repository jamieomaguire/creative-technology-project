export const OverviewRow = ({day, value}) => {

  // Get day from iso string
  function isoStringToDate(string) {
    let b = string.split(/\D/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3]||0, b[4]||0, b[5]||0, b[6]||0));
  }

  // Capitalize the first letter of a string
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Prepare values for rendering
  let val = capitalize(value)
  let date = isoStringToDate(day);
  let dateStr = date.toString()
  let dateArr = dateStr.split(' ')
  let dayS = dateArr[0]
  let dayN = dateArr[2]
  let month = dateArr[1]
  let year = dateArr[3]
  
  return (
    <tr className="overview-row">
      
      <td className="overview-row-cell js-value">
        {
         val
        }
      </td>

      <td className="overview-row-cell">
        {dayS + ' ' + dayN}
      </td>  

       <td className="overview-row-cell">
       {month}
      </td>
      <td className="overview-row-cell">
        {year}
      </td>  
    </tr>
  )
}