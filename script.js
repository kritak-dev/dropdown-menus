
const openDropdown = (() => {
    const listItems = [...document.querySelectorAll('.list-items')];

    const showDropdown = evt => {
        const items = evt.target.nextElementSibling;
        items.style.display = items.style.display === 'block' ? 'none' : 'block';
        listItems.forEach(item => {
            if (item.textContent !== evt.target.textContent) {
                item.nextElementSibling.style.display = 'none';
            }
        });
    }
    listItems.forEach(item => document.addEventListener('click', showDropdown));
})();
