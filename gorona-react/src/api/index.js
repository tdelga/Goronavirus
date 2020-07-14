import axios from 'axios';

const url = "https://api.covid19api.com/summary"

export const fetchData = async () => {
    try {
       const data = await axios.get(url);
       return data;
    } catch (error) {
        
    }
}