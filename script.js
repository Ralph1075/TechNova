document.addEventListener('DOMContentLoaded', function () {
    // Handle dropdown functionality
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');

    dropdownBtns.forEach(function (dropdownBtn) {
        const dropdownContent = dropdownBtn.nextElementSibling;

        dropdownBtn.addEventListener('mouseenter', function () {
            dropdownContent.style.display = 'block';
        });

        dropdownBtn.addEventListener('mouseleave', function () {
            dropdownContent.style.display = 'none';
        });
    });
});
