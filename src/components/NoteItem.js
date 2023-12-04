const NoteItem = ({name, note, date, created, remove}) => {
const handleRemove = () => {
      remove(created);
    };
  
    return (
      <>
        <li><span className='danger'>{date} <br></br> {name} <br></br> {note}</span>
          <button className='btn btn-sm btn-danger done' onClick={handleRemove} type="button">
              Remove
          </button>
        </li>
      </>
    )
  }
  
  export default NoteItem;