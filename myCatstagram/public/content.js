// array of cat name
const catName = [
  "Abby",
  "Angel",
  "Annie",
  "Baby",
  "Bailey",
  "Bandit",
  "Bear",
  "Bella",
  "Bob",
  "Boo",
  "Boots",
  "Bubba",
  "Buddy",
  "Buster",
  "Cali",
  "Callie",
  "Casper",
  "Charlie",
  "Chester",
  "Chloe",
  "Cleo",
  "Coco",
  "Cookie",
  "Cuddles",
  "Daisy",
  "Dusty",
  "Felix",
  "Fluffy",
  "Garfield",
  "George",
  "Ginger",
  "Gizmo",
  "Gracie",
  "Harley",
  "Jack",
  "Jasmine",
  "Jasper",
  "Kiki",
  "Kitty",
  "Leo",
  "Lilly",
  "Lily",
  "Loki",
  "Lola",
  "Lucky",
  "Lucy",
  "Luna",
  "Maggie",
  "Max",
  "Mia",
  "Midnight",
  "Milo",
  "Mimi",
  "Miss kitty",
  "Missy",
  "Misty",
  "Mittens",
  "Molly",
  "Muffin",
  "Nala",
  "Oliver",
  "Oreo",
  "Oscar",
  "Patches",
  "Peanut",
  "Pepper",
  "Precious",
  "Princess",
  "Pumpkin",
  "Rascal",
  "Rocky",
  "Sadie",
  "Salem",
  "Sam",
  "Samantha",
  "Sammy",
  "Sasha",
  "Sassy",
  "Scooter",
  "Shadow",
  "Sheba",
  "Simba",
  "Simon",
  "Smokey",
  "Snickers",
  "Snowball",
  "Snuggles",
  "Socks",
  "Sophie",
  "Spooky",
  "Sugar",
  "Tiger",
  "Tigger",
  "Tinkerbell",
  "Toby",
  "Trouble",
  "Whiskers",
  "Willow",
  "Zoe",
  "Zoey"
]
// to make a node
class DoublyLinkedListNode {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}
// chains the node to each other
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }
  push(val) {
    let newNode = new DoublyLinkedListNode(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++
    return this
  }

}
//--------------------------------------------------------
// grabs a random cat image from the url
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

// gets a name from the array
const imageNameFetch = () => {
  let randomIndex = Math.floor(Math.random() * 100)
  //=> 'Max'
  let name = catName[randomIndex]
  console.log(name)
  return name
}

// make a node out of the current Image/Name
// let currentNode = DoublyLinkedListNode([imageFetcher(), imageNameFetch()])

console.log(imageFetcher())
console.log(imageNameFetch())

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
