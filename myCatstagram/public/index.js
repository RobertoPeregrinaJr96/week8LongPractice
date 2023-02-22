const catNames = require('cat-names');
const { DoublyLinkedListNode, DoublyLinkedList } = require('./memory.js')

const staticStyle = () => {
    // ------body------
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    document.body.style.display = "flex"
    document.body.style.justifyContent = "center"
    document.body.style.alignItems = "center"
}
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
    catNames.all;
    //=> ['Abby', 'Angel', …]

    let name = catNames.random();
    //=> 'Max'
    console.log(name)
    return name
}

/*
first approach
*/
let refresh = document.getElementById("refresh")

// the event that happens when the button is clicked
// refresh.addEventListener("click", async () => {
//     try {
//         // getting id's from the HTML
//         let catFeed = document.getElementById("cat-feed")
//         console.log(catFeed)

//         // setting attributes
//         img.setAttribute("src", url); // assigning the newly created <img> with a "scr" attribute with the url

//         figcaption.innerText = catPhoto; // assigning the img's name to the newly created figcaption

//     } catch (error) {
//         console.log("Something went wrong,Try again later")
//     }
// });

const previousImage = () => {

}
/*
second approach
*/
// to cycle through to the next image
let next = document.getElementById("next-Image")
next.addEventListener("click", () => {

})
// to cycle through the previous image
let previous = document.getElementById("previous-Image")
previous.addEventListener("click", () => {

})



/*
- load the default styling
- load our default html
*/
window.onload = async () => {

};
