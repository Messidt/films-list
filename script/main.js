// removing movies

const list = document.querySelector('#films-list ul');

list.addEventListener('click', function(e){
  if(e.target.className == 'delete-movie') {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

// adding movies

const addForm = document.forms['add-movie'];

addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  // creating elements
  const newLi = document.createElement('li');
  const newTitle = document.createElement('span');
  const newDelBtn = document.createElement('span');

  // adding content
  newTitle.textContent = value;
  newDelBtn.textContent = 'delete';

  //adding classes
  newTitle.classList.add('movie-title');
  newDelBtn.classList.add('delete-movie');

  // inserting elements
  newLi.appendChild(newTitle);
  newLi.appendChild(newDelBtn);
  list.appendChild(newLi);


});
