import { API_URL } from '../utils/constans'

export async function registerApi (formData){
    try {
        const url = `${API_URL}/`;
        const params={
            method: 'POST',
            headers:{
                "Content-Type": "aplication/json"
            },
            body: JSON.stringify(formData),
        };
        const response = await fetch(url,params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error)
        return null;
    }
}

export async function loginApi (formData){
    try {
        const url = fetch(`${API_URL}/`);
        const params ={
            method: 'POST',
            headers:{
                "Content-Type": "aplication/json"
            },
            body: json.stringify(formData)
        };
        const response = await fetch(url,params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error)
        return null;
    }
}