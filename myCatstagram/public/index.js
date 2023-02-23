

window.onload = () => {

    contentContainer();

}

const contentContainer = () => {
    const sectionContainer = document.createElement("section");
    sectionContainer.className = "container";
    sectionContainer.style.display = "flex";
    sectionContainer.style.flexDirection = "column";
    sectionContainer.style.justifyContent = "center"
    sectionContainer.style.alignItems = "center";
    sectionContainer.style.marginTop = "3rem";
    document.body.appendChild(sectionContainer);
}

const divContainer = () => {
    let div = document.createElement("div")

    let h1 = document.createElement("h1")
    h1.setAttribute("id", "content-Title")
    let img = document.createElement("img")
    img.setAttribute("src")

    fetchImage();
}

const fetchImage = async () => {
    try {
        const kittenResponse = fetch("https://api.thecatapi.com/v1/images/search");
        // Converts to JSON
        const kittenData = await kittenResponse.json();
        // console.log(kittenData);
        const kittenImg = document.querySelector("img");
        kittenImg.src = kittenData[0].url;
    } catch (e) {
        console.log("Failed to fetch image", e);

    }
}
