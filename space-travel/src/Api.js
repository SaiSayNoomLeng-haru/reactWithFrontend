async function getData(){
    try{
        const response = await fetch('/data.json');
        if(!response.ok){
            throw{
                messeage: response.status
            }
        }
        const result = await response.json();
        return result;
    }
    catch(err){
        console.error(err)
    }
}

export { getData }