// import store from "../store/store";

const API_URL = 'http://43.204.218.113/api/v1/';
let store


export const testStore = (formSt)=>{
    store = formSt
}
console.log(store);



export const fetchApi = async({ endpoint, method = 'GET', data, customHeaders = {} }) => {
    const token = store.getState().auth.token || localStorage.getItem('token');
    console.log(token);
    
    console.log(method);

    try {
        // Башкалардын даярдыгын көрүү
        let headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            ...customHeaders 
        };
        console.log(headers);
        

        // Запрос опцияларын даярдоо
        let options = {
            method: method,
            headers: headers,
        };

        if (data) {
            options.body = JSON.stringify(data);
        }

        // Асинхрондуу запрос жөнөтүү
        const response = await fetch(`${API_URL}${endpoint}`, options);

        // Жоопту текшерүү
        if (!response.ok) {
            throw new Error(`Запрос катасы: ${response.status} - ${response.statusText}`);
        }

        // Жоопту JSON форматка өткөрүп кайтаруу
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Запрос катасы:", error);
        throw error;
    }
}