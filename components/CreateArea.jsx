import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';


function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleChange(event) {
    const name = event.target.name;
    const newValue = event.target.value;

    if (name === "title") {
      setTitle(newValue);
    } else if (name === "content") {
      setContent(newValue);
    }
  }

  function handleClick(event) {
    props.onClicked({ title, content });
    setTitle("");
    setContent("");
    event.preventDefault();
  }
 
  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
      {isExpanded && (
        <input
          name="title"
          onChange={handleChange}
          value={title}
          placeholder="Title"
        />
      )}
        
        <textarea
          name="content"
          onChange={handleChange}
          onClick={expand}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={content}
        />
        <Fab onClick={handleClick}><AddIcon/></Fab>
      </form>
    </div>
  );
}

export default CreateArea;
