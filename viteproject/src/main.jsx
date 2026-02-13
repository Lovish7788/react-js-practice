import { createRoot } from 'react-dom/client'
import React from 'react'
const anotherelement= (
  <h1>This is anotheer element</h1>
)
const third = React.createElement(
  'a',{
    href: "https://google.com",target: "_blank"
 
  },
  'click here'
)

createRoot(document.getElementById('root')).render(
third
)
