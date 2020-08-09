import axios from 'axios';

const url = "https://api.covid19api.com/summary"

export const fetchData = async () => {
    try {
       const data = await axios.get(url);
       return data;
    } catch (error) {
        
    }
}

const usa = "https://covid19.mathdro.id/api/countries/USA"
const br = "https://covid19.mathdro.id/api/countries/Brazil"
const arg = "https://covid19.mathdro.id/api/countries/Argentina"

export const fetchCharts = async () => {
    try {
        const jasonC = [];
        const jasonR = [];
        const jasonD = [];

        const allUsa = await axios.get(usa);
        const allBr = await axios.get(br);
        const allArg = await axios.get(arg);
        
        jasonC.push(allUsa.data.confirmed.value);
        jasonC.push(allBr.data.confirmed.value);
        jasonC.push(allArg.data.confirmed.value);
       
        jasonR.push(allUsa.data.recovered.value);
        jasonR.push(allBr.data.recovered.value);
        jasonR.push(allArg.data.recovered.value);

        jasonD.push(allUsa.data.deaths.value);
        jasonD.push(allBr.data.deaths.value);
        jasonD.push(allArg.data.deaths.value);
        

        return [jasonC,jasonR,jasonD];
    } catch (error) {
        
    }
}