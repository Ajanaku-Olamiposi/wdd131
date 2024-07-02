const input = document.querySelector("favchap");
const button = document.querySelector("button");
const list = document.querySelector('list');
const li = document.createElement('list');
const deleteButton = document.createElement("button");
li.textContent = input.ariaValueMax;
deleteButton.textContent = 'x';
li.append(deleteButton);
list.append(li);