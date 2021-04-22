import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Button} from "antd";
import 'antd/dist/antd.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button type="primary">vite+react+antd</Button>
    </div>
  )
}

export default App
