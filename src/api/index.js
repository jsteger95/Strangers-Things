export const APIURL=`https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt`
export const URL=`${APIURL}/posts`

export async function fetchPosts(url) {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": 'application/json',
            }
        })
        const results = await response.json()
        const data = results.data.posts

        return data
}

