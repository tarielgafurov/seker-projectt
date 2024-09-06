
const API_URL = 'https://jsonplaceholder.typicode.com/';

export const fetchFromJsonPlaceholder = async ({ endpoint, method = 'GET', data, customHeaders = {} }) => {
    console.log(method);
    
    try {
        // Башкыларды даярдоо
        let headers = {
            'Content-Type': 'application/json',
            ...customHeaders
        };

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

        // Жоопту JSON форматка өтүп кайтаруу
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Запрос катасы:", error);
        throw error;
    }
}
