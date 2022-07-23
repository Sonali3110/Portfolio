
import React , {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = () =>{   //arrow function
  let newText = text.toUpperCase();
  setText(newText)  //output of the function
  }
  const handleLowerClick = () =>{   //arrow function
  let newText = text.toLowerCase();
  setText(newText)  //output of the function
  }

  const handleOnChange = (event)=>{
    setText(event.target.value) //output of the function
  }

  const[text, setText]= useState(' ');
  //text='new text'; //wrong way to chnge the state
  //setText("new text"); //correct way to change the state
  return (
    <>
    <div>
      <h1> {props.heading} </h1>
    <div className="mb-3">
   
    {/* this onchnge event is listened bcz it enables us to type in text area , it handles the changing of the txt in the box*/}
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>   
    </div>
    <button className="btn-btn-primary" onClick={handleUpClick}>  Convert to UpperCase</button>
    <button className="btn-btn-primary" onClick={handleLowerClick}>  Convert to LowerCase</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>

    </>
  )
}
