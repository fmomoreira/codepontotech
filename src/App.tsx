import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BsGithub, BsInstagram, BsLinkedin } from  'react-icons/bs'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h1>CodePontoTech</h1>
       
      </div>
      <div className="box-social-links">
        <a href="https://www.linkedin.com/in/felipemoreirafrontend/" target="_blank" rel="Linkedin"><BsLinkedin/></a>
        <a href="https://www.instagram.com/fmomoreira/" target="_blank" rel="Intagram"><BsInstagram/></a>
        <a href="https://github.com/fmomoreira/" target="_blank" rel="Github"><BsGithub/></a>
        
      </div>
    </>
  )
}

export default App
