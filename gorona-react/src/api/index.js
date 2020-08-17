import axios from 'axios';

const url = "https://covid19.mathdro.id/api"

export const fetchData = async () => {
    try {
       const data = await axios.get(url);
       return data;
    } catch (error) {
        
    }
}

const usa = "https://covid19.mathdro.id/api/countries/"


export const fetchCharts = async (country) => {
    try {

        const all = await axios.get(usa+country);
        
        const c = (all.data.confirmed.value);
        const r = (all.data.recovered.value);
        const d = (all.data.deaths.value);

        var jso = {};
        jso["country"] = country;
        jso["values"] = [c,r,d];

        return jso;
        
    } catch (error) {
        
    }
}
export function getCountries(){
    var arr =[];
    try {
    axios.get("https://covid19.mathdro.id/api/countries").then(coun => {        
            (coun.data.countries).forEach(element => arr.push({value: element.iso2, label: element.name}))})
    
    return arr;
}
    catch(error){}
  }

