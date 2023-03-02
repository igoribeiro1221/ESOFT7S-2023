import { writeFile } from "fs/promises"

export class RequestDataApi {
    async getAllPokeUrl(){
       const pokeApiResponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2')

       console.log(await pokeApiResponse.json().then(i =>{
        writeFile("pokedex.json", JSON.stringify(i.results, null, 2))
    }))
    }



}