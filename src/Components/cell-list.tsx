import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import CellListItem from './cell-list-item'

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }: any) => order.map((id: any) => data[id]))

  const renderedCells = cells.map((cell: any) => <CellListItem key={cell.id} cell={cell}/>)

  return (
    <div>
      {renderedCells}
    </div>
  )
}

export default CellList
