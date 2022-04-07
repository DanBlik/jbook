import { useTypedSelector } from "./useTypedSelector"

export const useCumulativeCode = (cellId: string) => {
  const cumulativeCode = useTypedSelector((state) => {
    const showFunc = `
    import _React from 'react'
    import _ReactDOM from 'react-dom'

    const root = document.querySelector('#root')
    var show = value => {
      if (typeof value === 'object') {
        if (value.$$typeof && value.props) {
          _ReactDOM.render(value, root)
        } else {
          root.innerHTML = JSON.stringify(value)
        }
      } else {
        root.innerHTML = value
      }
    }
    `

    const showFuncNoop = 'var show = () => {}'

    const cumulativeCode = []

    if (state.cells) {
      const { data, order } = state.cells
      const orderedCells = order.map((id) => data[id])

      for (let c of orderedCells) {
        if (c.type === 'code') {
          if (c.id === cellId) {
            cumulativeCode.push(showFunc)
          } else {
            cumulativeCode.push(showFuncNoop)
          }
          cumulativeCode.push(c.content)
        }

        if (c.id === cellId) {
          break
        }
      }
    }

    return cumulativeCode
  }).join('\n')

  return cumulativeCode
}