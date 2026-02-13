
function Username(){
    
    let age;
    let name = prompt("Enter Your name: ")
    if(name){
       age= prompt("enter your age: ")
    }
    return(
    <div>
    <h1 id="getmessage">Hello {name} Welcome to our website</h1>
    <h2>Age is {age} </h2>
    </div>

)

}
export default Username