// let items = [
//     {
//         id : 1,
//         name : "apple"
//     },
//     {
//         id : 2,
//         name : "carrot"
//     },
//     {
//         id : 3,
//         name : "beetroot"
//     }
// ]
// const innerList = items.map(elem => React.createElement("li", { key : elem.id }, elem.name))
// const list = React.createElement("ul",{ class : "bg-green p-0"},innerList)
// const heading = React.createElement("h1",{},"Hello World from React")
// const container = React.createElement("div",{id : "container"},[heading,list])

// console.log(container)



const newContainer = React.createElement("div",{id : "parent"},
[
    React.createElement("div",{id : "child"},[
        React.createElement("h1",{},"I'm a h1 tag"),
        React.createElement("h2",{},"I'm a h2 tag")
    ]),
    React.createElement("div",{id : "child2"},[
        React.createElement("h1",{},"I'm a h1 tag"),
        React.createElement("h2",{},"I'm a h2 tag")
    ])
]
)

const root = ReactDOM.createRoot(document.getElementById("root"))
const root2 = ReactDOM.createRoot(document.getElementById("root2"))

console.log(root)

//to delay the render
setTimeout(() => {root.render(newContainer)} ,3000)
setTimeout(() => {root2.render(newContainer)} ,5000)