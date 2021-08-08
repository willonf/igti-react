import axios from "axios";
import apiPosts from "./Services/postsAPI.js";
import getPosts from "./Services/postsAPI.js";

// let res1 = await axios.get("https://jsonplaceholder.typicode.com/users")
// let res2 = await axios.get("https://jsonplaceholder.typicode.com/users/1")
// let res3 = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
// let res4 = await axios.put('https://jsonplaceholder.typicode.com/posts',
//     {
//         userId: 1,
//         id: 1,
//         title: 'Testing!',
//         body: 'Teste quia et suscipit\n' +
//             'suscipit recusandae consequuntur expedita et cum\n' +
//             'reprehenderit molestiae ut ut quas totam\n' +
//             'nostrum rerum est autem sunt rem eveniet architecto'
//     })
// let res5 = await axios.post("https://jsonplaceholder.typicode.com/posts",
//     {
//         userId: 1,
//         id: 1,
//         title: 'Testing!',
//         body: 'Teste'
//     })
// let res6 = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${101}`)
// let res7 = await apiPosts.get('posts');
let res8 = await getPosts();

// console.log(res1.data);
// console.log(res2.data);
// console.log(res3.data);
// console.log(res4.data);
// console.log(res5.status);
// console.log(res5.data);
// console.log(res6.status);
// console.log(res6.data);
// console.log(res7.status);
// console.log(res7.data);
console.log(res8);
console.log(`Título do 1ª post: ${res8[0].title}`);


