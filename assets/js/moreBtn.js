document.getElementById('moreBtn').addEventListener('click', function() {
    var textElement = document.getElementById('btntext');
    var btnElement = document.getElementById('moreBtn');

    if (textElement.classList.contains('hidden')) {
        textElement.classList.remove('hidden');
        btnElement.innerText = 'Read Less';
    } else {
        textElement.classList.add('hidden');
        btnElement.innerText = 'Read More';
    }
});
