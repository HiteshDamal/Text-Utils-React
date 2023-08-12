import React from 'react'

export default function About(props) {

// const[myStyle,setmyStyle]=useState({
//     color:'black',
    
//     backgroundColor:'white'
// })
// const[btnstyle,setbtnstyle]=useState('enable dark mode')


// const darkmode=()=>{
//     if(myStyle.color==='white'){
//         setmyStyle({
//             color:'black',
//             backgroundColor:'white',
//             border: '2px solid white'
//         })
//      setbtnstyle('enable darkmode')   

//     }
//     else{
//         setmyStyle({
//         color:'white',
//         backgroundColor:'rgb(0, 23, 81)',
        
        
//     })
//     setbtnstyle('enable lightmode')   


//     }
// }
  return (

    <div>
      
      <div className="accordion my-5" id="accordionExample"style={{backgroundColor: props.mode==='light' ?'white':'#001751',color: props.mode==='light'?'black':'white'}} >
        <h2 className='my-7' >About us</h2>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode==='light' ?'white':'#001751',color:props.mode==='light'?'black':'white'}} >
                Text Analyzer
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
                <div className="accordion-body"  style={{backgroundColor: props.mode==='light' ?'white':'#001751',color: props.mode==='light'?'black':'white'}}>
                    <strong>Free software utility which allows you to find the most frequent phrases and frequencies of words. Non-English language texts are supported. It also counts number of words, characters, sentences and syllables. Also calculates lexical density.</strong>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode==='light' ?'white':'#001751',color: props.mode==='light'?'black':'white'}}>
                    Word Counter
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{backgroundColor: props.mode==='light' ?'white':'#001751',color: props.mode==='light'?'black':'white'}}>
                    <strong>There may be certain times when instead of wanting to know the word count of your own writing, you'd like to know a website's word count. That is, you'd like to know the word count for a website without having to actually count all the words on the page by hand. Website Word Count is a tool which will do exactly that for you. It's a website word counter created specifically so you can find out the number of words on any page on the Internet. All you need to know is the URL of a web page, place it into the tool, and you can find out exactly how many words are on that page by hitting the "count" button. The tool will count the words on the website's page and instantly provide that number to you.</strong> 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode==='light' ?'white':'#001751',color: props.mode==='light'?'black':'white'}}>
                    Email Extractor
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={{backgroundColor: props.mode==='light' ?'white':'#001751',color: props.mode==='light'?'black':'white'}}>
                    <strong>Email extractor will help you efficiently extract email addresses for distribution contained in different files. Of course, you can do it manually, but it will take a lot of time and there is still a chance to miss something.</strong>
                </div>
    </div>
  </div>
  <div className="container">
  {/* <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={darkmode}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">{btnstyle}</label> */}
{/* </div> */}

  {/* <button type="button" className="btn btn-primary" onClick={(darkmode)} >{btnstyle}</button> */}
  </div>
</div>
    </div>

  )
}
