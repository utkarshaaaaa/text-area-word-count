import React ,{useState} from 'react'
import Spring from './Spring';
import Navba from './Navba';
import '../textform.css'


export default function TextForms(props) {
  

  const [sty,finsyl]=useState({
    color:'green',
    backgroundColor:'red'
  })
  const txtc=()=>{
    finsyl({
      color:'white',
      backgroundColor:'black'

    })
  }
  const col=()=>{
    if(sty=='green'){
      finsyl({
        color:'black',
        backgroundColor:'red'
      })
    }
    else{
      finsyl({
        color:'pink',
        backgroundColor:'black'
  
      })
    }
     
  }
  const y={
    color:'white',
    backgroundColor:'black'
  }

  const handleclick=()=>{
    
    let newtwxt=text.toUpperCase();
    settext(newtwxt)
  }
  const lower=()=>{
    
    let txt=text.toLowerCase();
    settext(txt)
  }
 
  const handlechange=(e)=>{
   
    settext(e.target.value)
  }

  const [text,settext]=useState("");
  const page=()=>{
    <Spring/>
  }
  
     

  return (
    <div>
      
     

      <h1>{props.heading} </h1>
        <div className="mb-3">
            
            
            </div>
            <div className="mb-3">
            
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="20" cols="120" value={text} onChange={handlechange} style={y} placeholder='Type text here'></textarea>
            
        </div>
        <div className='buttons'>
        <button className="btn" onClick={handleclick}  >convert to uppercase</button>
       
        
        <button className="btn" onClick={lower} style={sty} >convert to lower case</button>
       
        
        <button className="btn"  >change color</button>
        
       
        </div>
        
        <div className='length'>
        <p className='letters'>Number of character - {text.length}  Number of words -{text.split(' ').length-1}</p>
        </div>
        
        
    </div>
  
  )
}
