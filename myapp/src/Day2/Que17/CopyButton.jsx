import React,{useState} from 'react';
import useClipboard from './useClipboard'; // Import your custom hook

function CopyButton() {
<<<<<<< HEAD
  const { copiedText, copyToClipboard } = useClipboard();
=======
  const { copiedText, copyToClipboard,setCopiedText } = useClipboard();
>>>>>>> 74b963610f4fd2543feaa8804222a7157cc95685
  const [text,setText] =useState("")

  return (
    <div>
<<<<<<< HEAD
      <input type="text" onChange={(e)=> setText(e.target.value)} />
      <button onClick={() => copyToClipboard(text)}>
        {copiedText ? 'Copied!' : 'Copy to Clipboard'}
      </button>
=======
      <input type="text" onChange={(e)=> {setText(e.target.value)
      setCopiedText("")
      }} />
      <button onClick={() => {copyToClipboard(text)
      setText("")}}>{copiedText? 'Copied' : "Copy to Clipboard"} </button>
        
        
      
>>>>>>> 74b963610f4fd2543feaa8804222a7157cc95685
    </div>
  );
}

export default CopyButton;