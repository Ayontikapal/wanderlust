const checkboxes = document.querySelectorAll('.category-checkbox');
  const dropdownButton = document.getElementById('dropdownMenuButton');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const selected = Array.from(checkboxes)
        .filter(c => c.checked)
        .map(c => c.value);
      dropdownButton.textContent = selected.length
        ? selected.join(', ')
        : 'Select Categories';
    });
  });