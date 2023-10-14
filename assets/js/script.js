document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    var textElements = document.querySelectorAll('.text-content');
    var btnElements = document.querySelectorAll('.read-more-btn');

    // Add click event listener to each button
    btnElements.forEach(function(btnElement, index) {
        btnElement.addEventListener('click', function() {
            var textElement = textElements[index]; // Corresponding text element
            if (textElement.classList.contains('hidden')) {
                textElement.classList.remove('hidden'); // Show text
                btnElement.innerText = 'Read Less'; // Change button text
            } else {
                textElement.classList.add('hidden'); // Hide text
                btnElement.innerText = 'Read More'; // Change button text
            }
        });
    });
});
