import { useEffect, useRef} from "react"

const Certifications = () => {
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
    <div className="certification" >
      <h1 ref={scrollRefs[0]} className="hidden" >Certificaions</h1>
      <img  src="src\assets\icons8-certificate-90.png" className="star " alt="" style={{top:'-10px',right:'10px',height:'130px'}}/>
      <div ref={scrollRefs[1]}  style={{display:'flex',padding:'20px',justifyContent:'center'}} className= "  hidden  ">
        <div className="certificate_list">
        <div  className="certificate ">1</div>
        <div  className="certificate ">1</div>
        <div  className="certificate ">1</div>
        </div>
      </div>
    </div>
  )
}

export default Certifications