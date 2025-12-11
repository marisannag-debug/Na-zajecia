document.addEventListener('DOMContentLoaded', ()=>{
  const input = document.getElementById('textInput');
  const addBtn = document.getElementById('addBtn');
  const list = document.getElementById('notesList');

  function renderEmpty() {
    list.innerHTML = '<li class="empty">Brak wpisów. Dodaj coś powyżej.</li>';
  }

  function addNote(text){
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;
    const del = document.createElement('button');
    del.textContent = 'Usuń';
    del.className = 'delete';
    del.addEventListener('click', ()=>{
      li.remove();
      if(!list.querySelector('li')) renderEmpty();
    });
    li.appendChild(span);
    li.appendChild(del);
    // if empty placeholder exists, clear it
    if(list.querySelector('.empty')) list.innerHTML = '';
    list.appendChild(li);
  }

  addBtn.addEventListener('click', ()=>{
    const v = input.value.trim();
    if(!v) return;
    addNote(v);
    input.value = '';
    input.focus();
  });

  input.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter') addBtn.click();
  });

  renderEmpty();
});
