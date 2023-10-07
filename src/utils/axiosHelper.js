import axios from "axios";

const apiUrl = "https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/"
const accessToken = "2039640043063608"

export const fetchCharacter = async (name) => {
    try {
        const response = await axios.get(`${apiUrl}${accessToken}/search/${name}`);
        const datas = response.data.results
        console.log(datas);
        return datas;  
    }catch(error){
        console.log(error)
    }
}