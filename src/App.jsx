import './App.css'
import { useEffect,useRef, useState } from 'react'
import {Hero,Header,Skills,Contact,Aboutme, Education} from './components'

function App() {
  const scrollRefs = [useRef(),useRef(),useRef(),useRef()]
  const [contact,setContact] = useState(false)
  const observer = new IntersectionObserver((es) => {
      es.forEach((e)=> {
          if(e.isIntersecting)
          {
              e.target.classList.add('appear')
          }
          
      })
  })

  useEffect(() => {
      scrollRefs.forEach((ref) => {
          if(ref.current){
              observer.observe(ref.current)   
          }
      })
         
       
  },[observer])

  const handleToggle = () => {
    setContact((prev) =>!prev)
  }

  return (
    <>
        <div className="page">
          <div className="container">
          <div ref={scrollRefs[0]} className='page1 disappear'>
            <Header ref={scrollRefs[1]}/>
            <Hero ref={scrollRefs[2]}/>
          </div>
            <Aboutme/>
            <Education/>
          </div>
          <div className='skill_container'> 
            <div className="container">
            <Skills/>
            </div>
          </div>
          <div className='container'>
             <div className='button_container'>
               <button onClick={handleToggle} className='contact_btn'style={{width:'200px',height:'50px',fontSize:'20px'}}>Contact</button>
             </div>
             {contact && <div className='formcontainer'>
              <div className='form_box'>
                <i onClick={handleToggle} className='bx bx-arrow-back' style={{color:'white',fontSize:'50px'}} ></i>
                <Contact/>
              </div>
                
              
              </div>}
          </div>
        </div>
    </>
  )
}

export default App
