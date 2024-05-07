const customRender = (reactElement, container) => {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])

    }
    container.appenChild(domElement)

}




const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Click me to visit google'
}


const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)

