

export async function fetchBooks(){
    const options= {
        method: 'GET',
        headers: {
            
        }
    }

    const url = 'http://localhost:3000/api/product/';

    const response = await fetch(url,options);
    
    const result= await response.json();

    return result;

}  