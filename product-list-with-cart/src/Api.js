async function getMenu() {
    try{
        const response = await fetch('./data.json');
        if(!response.ok){
            throw{
                message: response.status
            }
        }
        const result = await response.json();
        return result;
    }
    catch(error){
        console.error(error)
    }
}

export {getMenu}