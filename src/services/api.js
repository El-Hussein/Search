const base_url = "http://www.mocky.io/";

// get request
export const get_request = async ({ target }) => {
    const url = `${base_url}${target}`
    try {
        const result = await fetch(url,
            {
                method: 'GET',
            })
        return await result.json()
    } catch (err) {
        console.log('errorInConnection');
    }
}