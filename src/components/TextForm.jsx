import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();  
        setText(newText)
        props.showAlert("coverted to upppercase","success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();  
        setText(newText)
        props.showAlert("coverted to lowercase","success");
    }
    const handleclearClick = ()=>{
        let newText = '';  
        setText(newText)
         props.showAlert("text cleared","success");
    }
     const handleColorChange = () => {
        const newColor = color === "black" ? "red" : "black";
        setColor(newColor);
         props.showAlert("changing colors","success");
    }
     // text copy thase
    const handleCopy = () => {
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard!","success");
    }

    // remove rxtra space
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed!","success");
    }
    const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "myText.txt";
    element.click();
    };
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    const [color, setColor] = useState("black");
    //SetText("New Text");
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1 className="mb-4">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} 
                style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowecasw</button>
            <button disabled={text.length===0} className="btn btn-danger mx-1 my-1"  onClick={handleColorChange}>Change Text Color</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleDownload}> Download Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>your text summary</h2>
            <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p style={{color: props.mode === "dark" && color === "black" ? "white" : color }}>
            {text.length > 0 ? text : "Nothing to preview!"}</p> {/* Preview text color */}
        </div>
        </>
    )
}
 

