async function getData(){
    try{
        const response = await fetch('./data.json');
        if(!response.ok){
            throw {
                status: response.status,
                message: response.statusText
            }
        }
        const data = await response.json();
        return data;
    }
    catch(err){
        console.error(err)
    }
}

export {getData};