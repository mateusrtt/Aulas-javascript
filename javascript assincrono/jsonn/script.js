fetch('./dados.json')
.then(r => r.json())
.then(json => {
    json.forEach(materia => {
    });
})

const configuracoes = {
    player:"Google",
    tempo: 25.5,
    aula: "2.1 Javascript",
}

localStorage.config = JSON.stringify(configuracoes)

console.log(JSON.parse(localStorage.config));