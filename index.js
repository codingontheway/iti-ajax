import data from './fechData.js';

function showData(data) {
    const tbody = document.querySelector('tbody');

    data.forEach((user) => {
        let row = tbody.insertRow();
        for (let i in user) {
            if (typeof user[i] === 'string' && user[i].startsWith('http')) {
                user[i] = `<img src="${user[i]}"/>`;
            }
            let cell = row.insertCell();
            cell.innerHTML = user[i];
        }
    });
}

showData(data);
