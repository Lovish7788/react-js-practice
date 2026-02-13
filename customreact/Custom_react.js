function custom_render(container , element){
const domelement = document.createElement(element.type)
domelement.innerHTML    = element.childern
domelement.setAttribute('href',element.prop.href)
domelement.setAttribute('target',element.prop.target)
container.appendChild(domelement)
}
const root = document.querySelector('#root')
//this is how we understand how render works
const customElement = {
    type: 'a',
    prop: {
        href:'https://www.google.com/',
        target: '_blank'

    }, 
    childern : 'Click here to open Google'
}


custom_render(root, customElement);
