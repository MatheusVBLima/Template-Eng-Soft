var voices = speechSynthesis.getVoices();
const voice = voices.filter(voice => voice.lang.includes("BR"))[0]

function adiconaLeitor() {
    const paragrafos = document.querySelectorAll("p.leitor")
    paragrafos.forEach(p => {
        const paragrafo = {
            text: p.innerText,
            play: function() {
                const utterance = new SpeechSynthesisUtterance(this.text)
                utterance.voice = voice
                speechSynthesis.speak(utterance)
            }
        }

        const button = document.createElement("button")
        button.innerText = "play"
        button.addEventListener("click", () => { paragrafo.play() })
        p.appendChild(button)
    })
}
adiconaLeitor()