const categoryItemsElm = document.querySelectorAll(".item");
console.log(`В списке ${categoryItemsElm.length} категории.`);

const categoryItemsDescElm = document.querySelectorAll(".item > ul");

categoryItemsDescElm.forEach(
  (element) => (
    console.log("Категория:", element.previousElementSibling.textContent),
    console.log("Количество элементов:", element.children.length)
  )
);
