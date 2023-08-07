import React from "react"
import ReactDOM from "react-dom/client"


const heading = React.createElement("h1",{id:"heading"},"Namaste React 🚀")
const root = ReactDOM.createRoot(document.getElementById("root"))

//react element
const heading2 = (<>
<h1 id="heading"> 
Namaste React using JSX 🚀
</h1>
<h2>another one yeah</h2></>)

const Title  = () => {
    return (<span style={{fontWeight:600,display:"block"}}>
        This is title
    </span>)
}

const AnotherHeading = () => {
    return (
    <div>
    <h1>Namaste React Functional Component {100+200} {console.log('abcdefgh')}</h1>
    {heading2}
    {Title()}
    <Title ></Title>
    <Title />
    </div>
    )
}

console.log({heading})
console.log({heading2})

root.render(<AnotherHeading /> )



// // let items = [
// //     {
// //         id : 1,
// //         name : "apple"
// //     },
// //     {
// //         id : 2,
// //         name : "carrot"
// //     },
// //     {
// //         id : 3,
// //         name : "beetroot"
// //     }
// // ]
// // const innerList = items.map(elem => React.createElement("li", { key : elem.id }, elem.name))
// // const list = React.createElement("ul",{ class : "bg-green p-0"},innerList)
// // const heading = React.createElement("h1",{},"Hello World from React")
// // const container = React.createElement("div",{id : "container"},[heading,list])

// // console.log(container)



// const newContainer = React.createElement("div",{id : "parent"},
// [
//     React.createElement("div",{id : "child", key : 1},[
//         React.createElement("h1",{key : 1},"This is namaste react "),
//         React.createElement("h2",{key : 2},"I'm a h2 tag")
//     ]),
//     React.createElement("div",{id : "child2", key : 2},[
//         React.createElement("h1",{key : 1},"I'm a h1 tag"),
//         React.createElement("h2",{key : 2},"I'm a h2 tag")
//     ])
// ]
// )
// console.log(newContainer)
// const root = ReactDOM.createRoot(document.getElementById("root"))
// const root2 = ReactDOM.createRoot(document.getElementById("root2"))

// console.log(root)

// //to delay the render
// // setTimeout(() => {root.render(newContainer)} ,3000)
// // setTimeout(() => {root2.render(newContainer)} ,5000)
// root.render(newContainer)
// root2.render(newContainer)