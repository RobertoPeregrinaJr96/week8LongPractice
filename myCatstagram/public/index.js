
window.onload = async () => {

    // style
    // ------body------
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    document.body.style.display = "flex"
    document.body.style.justifyContent = "center"
    document.body.style.alignItems = "center"

    let refresh = document.getElementById("refresh")

    // the event that happens when the button is clicked
    refresh.addEventListener("click", async () => {
        // making elements
        let listItem = document.createElement("li")
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        let figcaption = document.createElement("figcaption")

        // the guts
        try {
            // image
            const res = await fetch("https://api.thecatapi.com/v1/images/search");
            // const res = await fetch("https://cdn2.thecatapi.com/images/MTgwNTYxMg.jpg")
            console.log("res", res) // [{...}]

            const data = await res.json(); // {...}
            console.log("data", data)

            const url = data[0].url; // keying into the object to grab the property
            console.log("url", url);

            const urlParts = url.split("/"); // seperating the string by its "/" to get a array
            console.log("url parts ", urlParts);

            const catPhoto = urlParts[4]; // grabbing index 3 from the array
            console.log("catPhoto", catPhoto);

            // getting id's from the HTML
            let catFeed = document.getElementById("cat-feed")
            console.log(catFeed)

            // setting attributes
            img.setAttribute("src", url); // assigning the newly created <img> with a "scr" attribute with the url

            figcaption.innerText = catPhoto; // assigning the img's name to the newly created figcaption

            // appending elements
            figure.append(img, figcaption)
            console.log(figure)

            listItem.appendChild(figure)
            console.log(listItem)

            catFeed.append(listItem)
            console.log(catFeed)
        } catch (error) {
            console.log("Somthing went wrong,Try again later")
        }






        // style
        document.body.style.backgroundColor = "beige"
    });
};
