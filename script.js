const quotes = [
    {
        quote: "Start writing, no matter what. The water does not flow until the faucet is turned on.",
        author: "Louis L’Amour"
    },
    {
        quote: "You cannot believe in God until you believe in yourself.",
        author: "Swami Vivekananda"
    },
    {
        quote: "Never write anything that does not give you great pleasure. Emotion is easily transferred from the writer to the reader.",
        author: "Joseph Joubert"
    },
    {
        quote: "Outside of a dog, a book is man’s best friend. Inside of a dog, it’s too dark to read.",
        author: "Groucho Marx"
    },
    {
        quote: "No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.",
        author: "Robert Frost"
    },
    {
        quote: "Talk to yourself once in a day, otherwise you may miss meeting an intelligent person in this world.",
        author: "Swami Vivekananda"
    }
];

const btn = document.getElementById('btn');
const quote = document.getElementById('quote');

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = '"' + quotes[randomIndex].quote + '"<br>- '+ quotes[randomIndex].author+'"';
    quote.style.textAlign="center"
}
 generateQuote();
btn.addEventListener('click', generateQuote);

