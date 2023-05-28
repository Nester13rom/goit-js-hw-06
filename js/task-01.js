const listItemEls = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItemEls.length}`);

listItemEls.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.childElementCount}`);
});