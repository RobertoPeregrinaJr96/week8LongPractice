// import catName from "./names"
// import { DoublyLinkedListNode, DoublyLinkedList } from './temp-memory'
// default HTML
const defaultHTML = () => {
    let h1 = document.body.createElement("h1")
    h1.innerHtml = "Cats"
}

const defaultStyle = () => {
    // ------body------
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    document.body.style.display = "flex"
    document.body.style.justifyContent = "center"
    document.body.style.alignItems = "center"
}



// events













const relStyle = () => {
    document.style.width = "5rem"
    document.style.height = "5rem"
}
const elementsForImages = () => {
    // making elements
    let listItem = document.createElement("li")
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    let figcaption = document.createElement("figcaption")
    // appending elements
    figure.append(img, figcaption)
    console.log(figure)

    listItem.appendChild(figure)
    console.log(listItem)

    catFeed.append(listItem)
    console.log(catFeed)
}

const imageFetcher = async () => {
    // image
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    // const res = await fetch("https://cdn2.thecatapi.com/images/MTgwNTYxMg.jpg")
    console.log("res", res) // [{...}]

    const data = await res.json(); // {...}
    console.log("data", data)

    const url = data[0].url; // keying into the array to grab the object to use the "url" property
    console.log("url", url);

    return url
}

const imageNameFetch = async () => {
    let randomIndex = Math.floor(Math.random() * 100)
    //=> 'Max'
    catName[randomIndex]
    console.log(catName)
    return catName
}

// make a node out of the current Image/Name
let currentNode = DoublyLinkedListNode([imageFetcher(), imageNameFetch()])

// go back to the previous Image
const previousImage = () => {
    let previous = currentNode.tail
    if (previous) {
        console.log(previous)
        return previous
    } else {
        return console.log("NO CATS")
    }
}

// to cycle through to the next image
let next = document.getElementById("next-Image")
next.addEventListener("click", () => {
    let url = imageFetcher();
    let name = imageNameFetch();
    DoublyLinkedList.push([url, name])

})
// to cycle through the previous image
let previous = document.getElementById("previous-Image")
previous.addEventListener("click", () => {

})


/*
- load the default styling
- load our default html
*/
window.onload = () => {
    defaultHTML();
    staticStyle();
};
