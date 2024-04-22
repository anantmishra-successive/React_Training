import React,{useState} from 'react';
import useClipboard from './useClipboard'; // Import your custom hook

function CopyButton() {
  const { copiedText, copyToClipboard,setCopiedText } = useClipboard();
  const [text,setText] =useState("")

  return (
    <div>
      <input type="text" onChange={(e)=> {setText(e.target.value)
      setCopiedText("")
      }} />
      <button onClick={() => {copyToClipboard(text)
      setText("")}}>{copiedText? 'Copied' : "Copy to Clipboard"} </button>
        
        
      
    </div>
  );
}

export default CopyButton;