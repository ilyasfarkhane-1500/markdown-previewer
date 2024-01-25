import { useState } from "react"


export default function Editor() {

  const [content,setContent] = useState("Hi, ")

  const handleChange = (e)=>{
    setContent(e.target.value);

  }
  

  return (
    <div>
      <header className="container">Editor</header>
      <textarea id="editor" value={content}  onChange={handleChange} ></textarea>
    </div>
  )
}
