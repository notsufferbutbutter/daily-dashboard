const quotes = [
    {
        quote: "I’ll tell you the secret to fighting strong enemies. It’s easy, keep getting up and attack them with your moves continuously.",
        author: "Eisen"
    },
    {
        quote: "The greatest joy of magic lies in searching for it",
        author: "Frieren"
    },
    {
        quote: "To live is to be known and remembered by others.",
        author: "Himmel"
    },
    {
        quote: "There's nothing wrong with being a fake hero. I'll defeat the Demon King and bring peace to the world. Then it won't matter if I'm fake or not",
        author: "Himmel"
    },
    {
        quote: "Don't let the tree within you grow twisted by fear of others' opinions. Instead, let it rise freely, tall and strong, until people have to change the way they see it",
        author: "Aelisa."
    },
    {
        quote: "Responsibility is closely tied to a sense of ownership. If someone doesn’t feel their voice is valued, they won’t feel responsible for the outcome.",
        author: "Aelisa."
    },
    {
        quote: "People forego their responsibilities when they feel unheard",
        author: "Aelisa."
    },
    {
        quote: "The one who has everything she wants is the one who knows how to manage time",
        author: "Linh"
    },
    {
        quote: "To be on the highest rank, you have to master in managing time first",
        author: "Linh"
    },
    {
        quote: "500 today can be 20000 in the next 5 years",
        author: "Linh"
    },
    {
        quote : "Fake it until you make it",
        author : "Linh"
    }
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

quoteObject = quotes[Math.floor(Math.random() * quotes.length)]
quote.innerText = quoteObject.quote
author.innerText = quoteObject.author