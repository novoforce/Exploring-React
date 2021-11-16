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

    const handleCopy= ()=>{
        let text= document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces= ()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(' '));
    }


    
    return (
        <>
        <div className='container' style={{color: props.theme_mode==='dark' ? 'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.theme_mode==='dark'?'grey':'white', color: props.theme_mode==='dark'?'white':'black'}} onChange= {handleOnChange} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handleClear}>Clear</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
            </div>
        </div>
        <div className="container my-2" style={{color: props.theme_mode==='dark' ? 'white':'black'}}>
            <h1>Your text Summary</h1>
            <p>{text.split(" ").length} words are present and {text.length} characters are present</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text:"Enter the text in the textbox to preview"}</p>
        </div>

        </>
    )
}
