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
