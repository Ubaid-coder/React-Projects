import Quiz from './components/Quiz.jsx'
import './Index.css'
import {data} from './assets/data.js'


function App() {
  return (
    <>
      <Quiz questions={data.map((question) => <h2>{question.question}</h2>)} />
    </>
  )
}

export default App
