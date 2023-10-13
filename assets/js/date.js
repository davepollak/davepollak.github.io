document.addEventListener("DOMContentLoaded", function() {
    updateDate();

    // Update the date every 24 hours (86400000 milliseconds)
    setInterval(updateDate, 86400000);
});

function updateDate() {
    var today = new Date();
    var dateString = today.toDateString(); // Format: "Wed Sep 16 2020"

    document.getElementById('dateDisplay').innerText = dateString;
}
