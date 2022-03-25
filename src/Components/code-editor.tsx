import './code-editor.css'

import MonacoEditor, { EditorDidMount } from '@monaco-editor/react'
import {useRef} from "react"
import prettier from 'prettier'
import parser from 'prettier/parser-babel'

interface CodeEditorProps {
  initialValue: string
  onChange: (v: string) => void
}

const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {
  const editorRef = useRef<any>(null)

  const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
    editorRef.current = monacoEditor
    monacoEditor.onDidChangeModelContent(() => {
      onChange(getValue())
    })

    monacoEditor.getModel()?.updateOptions({ tabSize: 2 })
  }

  const onFormatClick = () => {
    const unformatted = editorRef.current.getModel().getValue()

    const formatted = prettier.format(unformatted , {
      parser: 'babel',
      plugins: [parser],
      useTabs: false,
      semi: false,
      singleQuote: true,
    }).replace(/\n$/, '')

    editorRef.current.setValue(formatted)
  }

  return (
    <div className='editor-wrapper'>
      <button
        onClick={onFormatClick}
        className='button button-format is-primary is-small'
        >
          Format
        </button>
      <MonacoEditor
        editorDidMount={onEditorDidMount}
        value={initialValue}
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
        height='100%'
        language='javascript'
        theme='dark'
      />
    </div>
  )
}

export default CodeEditor
