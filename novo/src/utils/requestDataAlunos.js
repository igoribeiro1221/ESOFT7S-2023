import { readFile, writeFile } from "fs/promises"

const alunos = [
    {nome: "Igor", idade:20, ra:"1111111-2"},
    {nome: "Matheus", idade:15, ra:"2222222-2"},
    {nome: "Lucas", idade:22, ra:"3333333-2"},
    {nome: "Caue", idade:19, ra:"4444444-2"},
    {nome: "Vitor", idade:32, ra:"5555555-2"}
]

function postAlunos() {
    writeFile("alunos.json", JSON.stringify(alunos, null, 2))
    // const value = 10
    // console.log(alunos.reduce((acc, currentValue) => acc + (currentValue.idade*2), value)
}

async function getAlunos() {
    const getAlunos = await readFile("alunos.json")
    console.log(JSON.parse(getAlunos).filter(i => i.idade > 20))
}

getAlunos()