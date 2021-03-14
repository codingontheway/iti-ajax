const url = 'https://reqres.in/api/users';

async function showData(url) {
    const req = await fetch(url);
    const { data } = await req.json();
    return data;
}

const data = await showData(url);
export default data;
