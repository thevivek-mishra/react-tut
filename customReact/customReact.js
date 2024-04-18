 function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    // we can use for loop for this 
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    for(prop in reactElement.props){
        domElement.setAttribute(prop, reactElement.props[prop])
    }
       container.appendChild(domElement)
 }

 const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: 'blank'
    },
    children: "click me for  google  search"
 }

 const mainContainer = document.querySelector('#root')

 customRender(reactElement,mainContainer)