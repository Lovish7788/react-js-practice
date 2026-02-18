import { useState, useCallback, useEffect , useRef } from "react";
import "./index.css";
function App() {
  const [length, setlength] = useState(8);
  const [checknum, setchecknum] = useState(false);
  const [checkchar, setcheckchar] = useState(false);
  const [isclicked, setisclicked]= useState(false)
  const [password, setpassword] = useState("");
  // ref hook
  const passwordRef = useRef(null)


  const passwordgenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (checknum) str += "0123456789";
    if (checkchar) str += "!@#$%^&*(){}~?><";

    for (let index = 1; index <= length; index++) {
      // make password
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, checknum, checkchar, setpassword]);
  
  useEffect(()=>{
passwordgenrator()
  },[ length,checkchar, checknum, passwordgenrator])

const copyPasswordToClip = useCallback(()=>{
  
  passwordRef.current?.select();
  // passwordRef.current?.setSelectionRange(0,6) // select value in specific range
  window.navigator.clipboard.writeText(password)
},[password])
  // passwordgenrator() we cant use this 
  return (
    <div>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-[#d36841] bg-gray-800 font-bold">
        <h1 className="text-white text-center">password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            placeholder="your password"
            className="outline-none w-full py-1 px-3 bg-amber-50"
            readOnly // no one write here
            ref={passwordRef}
          />
          <button className="bg-blue-500 text-white text- white rounded-lg ml-1 outline-none"
          onClick={copyPasswordToClip}
         
          >
            Copy Password
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
            {/* this is where checkbox */}
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={checknum}
              id="numberInput"
              onChange={() => {
                setchecknum((prev) => !prev);
              }}
            />
            <label>numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={checkchar}
              id="charInput"
              onChange={() => {
                setcheckchar((prev) => !prev);
              }}
            />
            <label>characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
