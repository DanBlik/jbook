import 'bulmaswatch/superhero/bulmaswatch.min.css'

import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './state'

// import CodeCell from './Components/code-cell'
import TextEditor from './Components/text-editor'

const App = () => {
  return (
    <Provider store={store}>
          <div>
      {/* <CodeCell /> */}
      <TextEditor />
    </div>
    </Provider>
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
