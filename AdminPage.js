
 import {users} from '../Exporting.js';
 const usersDisplay = () => {
   let table = '';
 
   for (let i = 1; i < users.length; i++) {
   table += `
       <tr>
         <td>${users[i].firstName}</td>
         <td>${users[i].lastName}</td>
         <td>${users[i].Email}</td>
         <td>${users[i].Password}</td>
         <td> <button class="delete">Delete</button> </td>
       </tr>
       
     ;
     `
     document.querySelector('tbody').innerHTML = table;
   }
 }
 
 usersDisplay();
 
 let deleteBtns = document.querySelectorAll('.delete');
 
 for (let i = 1; i < users.length; i++) {
   deleteBtns[i-1].addEventListener('click', ()=> {
     users.splice(i, 1);
     location.reload();
     usersDisplay();
     localStorage.users = JSON.stringify(users);
   });
 }