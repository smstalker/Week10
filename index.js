let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date();
    let table = document.getElementById('registrationTable');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() +1}-${createdDate.getDate()}`;
    row.insertCell(1).innerHTML = document.getElementById('full-name').value;
    row.insertCell(2).innerHTML = document.getElementById('age').value;
    row.insertCell(3).innerHTML = document.getElementById('skill-level').value;
     let actions = row.insertCell(4);
     actions.appendChild('');
    document.getElementById('new-task').value = '';
});

// function createDeleteButton(id) {
//     let btn = document.createElement('button');
//     btn.className = 'btn btn-primary';
//     btn.id = id;
//     btn.innerHTML = 'Delete'
//     btn.onclick = () => {
//         console.log (`Deleting row with id: item-${id}`);
//         let elementToDelete = document.getElementById(`item-${id}`);
//         elementToDelete.parentNode.removeChild(elementToDelete);
//     };
//     return btn;
// }

