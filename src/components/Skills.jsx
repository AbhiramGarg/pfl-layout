import { useEffect } from "react";
import { useRef } from "react"

const Skills = () => {
    const scrollRefs = [useRef(),useRef(),useRef(),useRef(),useRef(),useRef(),useRef(),useRef()]
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
    <div className="skills">
        <img src="src\assets\zap.png" className="star" alt=""  style={{top:'-50px',zIndex:'0',left:'-40px'}}/>
        <div className="skills_container">
            <h1 ref={scrollRefs[5]} className="skills_title hidden">Technical Skills</h1>
            <div className="skill_list">
                <div ref={scrollRefs[0]} className="skill_box skill hidden 1">
                    <i className='bx bxl-react ' style={{color:'#34d0d4'}}  ></i>
                    <h3>React</h3>
                </div>
                <div ref={scrollRefs[1]} className="skill_box skill hidden 2">
                <i className='bx bxl-nodejs ' style={{color:'#25aa22'}} ></i>
                    <h3>Nodejs</h3>
                </div>
                <div ref={scrollRefs[2]} className="skill_box skill hidden 3">
                <i className='bx bxl-mongodb ' style={{color:'#24C977'}} ></i>
                        <h3>MongoDB</h3>
                    
                </div>
                <div ref={scrollRefs[3]} className="skill_box skill hidden 4">
                    <i className='bx bxl-python ' style={{color:'#80C329'}} ></i>
                    <h3>Python</h3>
                </div>
                <div ref={scrollRefs[4]} className="skill_box skill hidden 5">
                <i className='bx bxl-c-plus-plus ' style={{color:'#7420B7'}} ></i>
                    <h3>C++</h3>
                </div>
                <div ref={scrollRefs[6]} className="skill_box skill hidden 5">
                <i className='bx bxl-git' style={{color:'#ff5f1f'}}></i>
                    <h3>Git</h3>
                </div>
                <div ref={scrollRefs[7]} className="skill_box skill hidden 5">
                <img src="src\assets\icons8-express-js-50.png" alt="" />
                    <h3>Express js</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
