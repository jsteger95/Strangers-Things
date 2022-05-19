export const APIURL=`https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt`
export const posts=`${APIURL}/posts`

export async function fetchPosts() {
    try {
        const response = await fetch(posts, {
            method: "GET",
            headers: {
                "Content-Type": 'application/json',
            }
        })
        const results = await response.json()
        const data = results.data.posts
        

        if (results.error) throw results.error
        return data
        console.log(data)
    } catch (error) {
        throw error
    }
}

