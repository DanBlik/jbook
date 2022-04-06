import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import CellListItem from './cell-list-item'
import AddCell from './add-cell'

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }: any) =>
    order.map((id: any) => data[id])
  )

  const renderedCells = cells.map((cell: any) => (
    <React.Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />
    </React.Fragment>
  ))

  return (
    <div>
      <AddCell forceVisible={cells.length === 0} previousCellId={null} />
      {renderedCells}
    </div>
  )
}

export default CellList
