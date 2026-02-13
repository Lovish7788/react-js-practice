import { createRoot } from 'react-dom/client'
import react from 'react'
// import App from './App.jsx'
// import Chai from './chai_code.jsx'
import Username from './username.jsx'

// const anotherelement= (
//   <a href='https://google.com' target='_blank'>Visit Google</a>
//   // <h1>Hello world</h1>

// )
// const secdelement= (
//   <h1>Hello World</h1>

// )

// const thirdelement = (
//   <input type="text" />
// )
// create coustom element from using create Element
// const reactElement = react.createElement(
//   'a', // tag
//   //attribute
// { href: 'https://google.com',
//     target : '_blank'
// },
//   //text
//   'click me to visit google'

// )
createRoot(document.getElementById('root')).render(
<Username/>

)
