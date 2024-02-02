import { useEffect,useRef } from "react"
import { Link } from "react-router-dom"

const Projects = () => {
  const scrollRefs = [useRef(),useRef(),useRef(),useRef()]
  const observer = new IntersectionObserver((es) => {
      es.forEach((e)=> {
          if(e.isIntersecting)
          {
              e.target.classList.add('show')
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
  return (
    <div className="projects">
      <img src="src\assets\icons8-projects-96.png" className='star' alt="" />
      <img src="src\assets\network-chart-regular-240.png" className='star' alt="" style={{top:'500px',right:'-80px'}}/>
      <div style={{display:'flex',width:'100%',justifyContent:"space-between"}}>
      <h1 ref={scrollRefs[0]} className="hidden">Projects</h1>
      <Link to='/'><i  className='bx bx-arrow-back' style={{color:'green',fontSize:'50px'}} ></i></Link>
      </div>
      <div className="projects_container">
        <ul className="project_list">
          <li ref={scrollRefs[1]} className="project hidden">1</li>
          <li ref={scrollRefs[2]} className="project hidden">1</li>
          <li ref={scrollRefs[3]} className="project hidden">1</li>
        </ul>
      </div>
    </div>
  )
}

export default Projects