import axios from "axios";

const apiPosts = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
})

async function getPosts() {
    let response = await apiPosts.get('posts');
    return response.data;
}

export default getPosts;
