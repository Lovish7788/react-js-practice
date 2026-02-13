import { useState } from "react";

/*
Exercise 2: The Character Limit TextArea
Create a text area for a "Bio" (like in your QuestForge profile).

As the user types, show a character count (e.g., "15 / 100").

Change the text color to red if they exceed 100 characters.

Disable the "Submit" button if the count is over 100 or is empty.

Goal: Understand how one state can drive multiple UI changes.
*/
function Practice2() {
  const [text, setText] = useState("");

  return (
    <>
      <h1>Enter Your Text</h1>
      <textarea
         id="textarea"    
        placeholder="Enter Text....."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{width: "400px",
                height: "400px"

        }}
      />
     
      <p
        style={{
          color: text.length > 100 ? "red" : "black",
        }}
      >
        Word count is: {text.length}
      </p>
      <button disabled={text.length === 0 || text.length > 100}>Submit</button>
    </>
  );
}

export default Practice2;
