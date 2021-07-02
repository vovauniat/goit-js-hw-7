  
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsElm = document.getElementById('ingredients');


const items = ingredients.map(ingredient => {
  const itemElm = document.createElement('li');
  itemElm.textContent = ingredient;

  return itemElm;
});

ingredientsElm.append(...items);

