import { useEffect, useState } from 'react'

import CodeEditor from './code-editor'
import Preview from './preview'
import bundle from '../bundler'
import Resizable from './resizable'

const CodeCell = () => {
  const [input, setInput] = useState('')
  const [code, setCode] = useState('')
  const [err, setErr] = useState('')

  useEffect(() => {
    const timeout = setTimeout(async () => {
      const output = await bundle(input)
      setCode(output.code)
      setErr(output.err)
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [input])

  return (
    <Resizable direction='vertical'>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction='horizontal'>
          <CodeEditor initialValue='const a = 3' onChange={(v) => setInput(v)} />
        </Resizable>
        <Preview code={code} err={err} />
      </div>
    </Resizable>
  )
}

export default CodeCell
