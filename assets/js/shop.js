function updateRangeValue(value) {
    document.getElementById('rangeValue').textContent = value;
}

function clearFilters() {
    // Uncheck all checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.checked = false;
    });

    // Uncheck all radio buttons
    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
      radio.checked = false;
    });

    // Reset range input
    document.getElementById('priceRange').value = 0;
    document.getElementById('rangeValue').textContent = 0;
}




