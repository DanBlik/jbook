import './add-cell.css'
import { useActions } from '../hooks/useActions'

interface AddCellProps {
  previousCellId: string | null
  forceVisible?: boolean
}

const AddCell: React.FC<AddCellProps> = ({ previousCellId, forceVisible = false }) => {
  const { insertCellAfter } = useActions()
  return (
    <div className='add-cell' style={{ opacity: forceVisible ? 1 : ''}}>
      <div className='divider'></div>
      <div className='add-buttons'>
        <button onClick={() => insertCellAfter(previousCellId, 'code')} className='button is-rounded is-primary is-small'>
          <span className='icon is-small'>
            <i className='fas fa-plus'></i>
          </span>
          <span>Code</span>
        </button>
        <button onClick={() => insertCellAfter(previousCellId, 'text')} className='button is-rounded is-primary is-small'>
        <span className='icon is-small'>
            <i className='fas fa-plus'></i>
          </span>
          <span>Text</span>
        </button>
      </div>
    </div>
  )
}

export default AddCell
