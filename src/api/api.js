/**
 * 
 * @returns Array of users
 */
export default async function getUsersFromApi() {
    return await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
}