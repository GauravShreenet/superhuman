import axios from "axios";

const apiUrl = "https://superheroapi.com/api/"
const accessToken = "2039640043063608"

export const fetchCharacter = async (name) => {
    try {
        const response = await axios.get(`${apiUrl}${accessToken}/search/${name}`);
        console.log(response.results)
        return response.results;  
    }catch(error){
        console.log(error)
    }
}