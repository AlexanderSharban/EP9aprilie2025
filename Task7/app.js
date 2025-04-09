function addListItem() {
    const ul = document.getElementById('myList'); 
    const li = document.createElement('li'); 
    li.textContent = 'New Item'; 
    ul.appendChild(li); 
}

  document.getElementById('addButton').addEventListener('click', addListItem);
  