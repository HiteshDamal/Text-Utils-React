
import React  from 'react'
import { useState } from 'react'




export default function TextForm(props) {
    const [text,setText] =useState('')
    const handleUpCLick =()=>{
        let newText =text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","success")
    }
    const Lowerr =()=>{
        let newText =text.toLowerCase();
        setText(newText)
        props.showAlert("converted to Lowercase","success")
    }
    const clear =()=>{
        let newText ='';
        setText(newText)
    }
    const handleonchange= (event)=>{
        setText(event.target.value)

    }
    const email=()=>{
       let newText=text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
       if(newText === null){
        setText('No Email address found')
       }else{

           setText(newText.join(''))
       }
       

    }
    const handleAltCaseClick=()=>{
        let newText = text.toLowerCase().split("");
        for (let i = 0; i < newText.length; i += 2) {
        newText[i] = newText[i].toUpperCase();
        }
        setText(newText.join(''));
    }
    
    return (
       <>
       <div className="container "  style ={{backgroundColor: props.mode==='light' ?'white':'#001751',color: props.mode==='light'?'black':'white'}}>
      <div>
        <h1 style={{margin:'35px'}}>{props.heading} </h1>
        <div className="mb-3">
       
        <textarea className="form-control" value={text}  onChange= {handleonchange} id="myBox" rows="8" style={{backgroundColor: props.mode==='light' ?'white':'#001751',color: props.mode==='light'?'black':'white'}} ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary"  onClick= {handleUpCLick} style ={{color: 'white'}} >Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary"onClick= {Lowerr} style ={{color: 'white'}}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary"onClick= {clear} style ={{color: 'white'}}>Clear the text </button>
        <button disabled={text.length===0} className="btn btn-primary"onClick= {email} style ={{color:'white'}}>Extract email </button>
        <button disabled={text.length===0} className="btn btn-primary"onClick= {handleAltCaseClick} style ={{color:'white'}}>alternate case </button>
       
    
    
    </div>
    </div>
    <div className="container " style ={{color: props.mode==='light'?'black':'white'}}>
        <h5>The no of word  you have entered  {text.split(/\s/).filter((element)=>{return element.length!==0}).length}</h5>
        <h5>The no of Character you have entered {text.length}</h5>
        <h5>The no of Minutes  it will take to read the text is {0.0098*text.split(/\s/).filter((element)=>{return element.length!==0}).length}Minutes</h5>
        <p style={{fontSize:'40px'}}><strong>Preview</strong> </p>
        <h4>{text.length>0?text:'Nothing to preview'}</h4>
    </div>
    </> 
  )
}
