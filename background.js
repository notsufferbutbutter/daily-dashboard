const images = [
    "frieren1.png",
    "frieren2.jpg",
    "frieren4.jpeg"
]

choosenImage = images[Math.floor(Math.random() * images.length)]
const src = `img/${choosenImage}`
document.body.style.background = `black url(${src}) no-repeat`
document.body.style.backgroundSize = "cover"
