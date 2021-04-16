const baseUrl = 'http://localhost:3001'
const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
}

const ITEM_ENDPOINT = '/item'
const ITEMS_ENDPOINT = '/items'

const API_METHODS = {
    post: 'POST',
    get: 'GET',
    delete: 'DELETE',
    put: 'PUT',
}


const ApiAdapter = (endPoint, { method , body }) => {
    const url = `${baseUrl}${endPoint}?format=json`
    
    return fetch(url, {
        method: method,
        ...body && { body : JSON.stringify(body) },
        headers
    })
    .then(res => res.json())
    .catch(error=> error);
}

export const addItemAPI = async (data) => {

    try {

        const meta = {
            method: API_METHODS['post'],
            body: data,
        };
    
        const resp = await ApiAdapter(ITEM_ENDPOINT, meta)
        return resp;
        
    } catch (err) {
        console.error(err);
    }
};

export const getItemsAPI = async () => {

    try {
        const meta = {
            method: API_METHODS['get'],
        };
    
        const resp = await ApiAdapter(ITEM_ENDPOINT, meta)
        return resp;
        
    } catch (err) {
        console.error(err);
    }
};

export const getItemAPI = async (id) => {

    try {

        const meta = {
            method: API_METHODS['get'],
        };
    
        const resp = await ApiAdapter(ITEM_ENDPOINT, meta)
        return resp;
        
    } catch (err) {
        console.error(err);
    }
};

export const updateItemAPI = async (data) => {

    try {
        const meta = {
            method: API_METHODS['put'],
            body: data,
        };
    
        const resp = await ApiAdapter(ITEM_ENDPOINT, meta)
        return resp;

    } catch (err) {
        console.error(err);
    }
};

export const deleteItemAPI = async (data) => {

    try {

        const meta = {
            method: API_METHODS['delete'],
            body: data,
        };
    
        const resp = await ApiAdapter(ITEM_ENDPOINT, meta)
        return resp;
        
    } catch (err) {
        console.error(err);
    }
};

export const deleteAllItemsAPI = async () => {

    try {

        const meta = {
            method: API_METHODS['delete'],
        };
    
        const resp = await ApiAdapter(ITEMS_ENDPOINT, meta)
        return resp;
        
    } catch (err) {
        console.error(err);
    }
};