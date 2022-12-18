export default async function queryId(id){
    try {
        let response = await fetch(`https://rickandmortyapi.com/api/character/${id}`,{ mode: 'cors' })
        return response.json()       
    } catch (error) {
        throw error
    }
}