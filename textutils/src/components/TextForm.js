import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('Enter text here');

    const handleUpClick= ()=>{
        let newText= text.toUpperCase();
        setText(newText);
    }

    const handleOnChange= (event)=>{
        setText(event.target.value);
    }

    const handleDownClick= ()=>{
        let newText= text.toLowerCase();
        setText(newText);
    }
    

    const handleClear= ()=>{
        let newText= '';
        setText(newText);
    }


    
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange= {handleOnChange} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleClear}>Clear</button>
            </div>
        </div>
        <div className="container my-2">
            <h1>Your text Summary</h1>
            <p>{text.split(" ").length} words are present and {text.length} characters are present</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>

        </>
    )
}
