import 'bulmaswatch/superhero/bulmaswatch.min.css'

import ReactDOM from 'react-dom'

import CodeCell from './Components/code-cell'

const App = () => {
  return (
    <div>
      <CodeCell />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))


/**
 * for tests
 *
 * import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <h1>test</h1>

ReactDOM.render(<App />, document.querySelector('#root'))
 */
