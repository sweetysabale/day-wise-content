function saveContent() {
    const date = document.getElementById('date').value;
    const content = document.getElementById('content').value;
    if (date && content) {
        localStorage.setItem(date, content);
        alert('Content saved for ' + date);
    } else {
        alert('Please select a date and enter content.');
    }
}

function loadContent() {
    const date = document.getElementById('date').value;
    if (date) {
        const content = localStorage.getItem(date);
        if (content) {
            document.getElementById('content').value = content;
            alert('Content loaded for ' + date);
        } else {
            alert('No content found for ' + date);
        }
    } else {
        alert('Please select a date to load content.');
    }
}
