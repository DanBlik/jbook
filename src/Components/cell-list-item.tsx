import React from 'react'
import { Cell } from '../state'
import CodeCell from './code-cell'
import TextEditor from './text-editor'

interface CellListItemsProps {
  cell: Cell
}

const CellListItem: React.FC<CellListItemsProps> = ({ cell }) => {
  let child: JSX.Element

  console.log(cell);


  if (cell.type === 'code') {
    child = <CodeCell />
  }
  else {
    child = <TextEditor />
  }

  return <div>{child}</div>
}

export default CellListItem
