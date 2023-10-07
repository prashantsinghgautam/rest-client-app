document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('send');
    const urlInput = document.getElementById('url');
    const methodSelect = document.getElementById('method');
    const responseData = document.getElementById('response-data');

    sendButton.addEventListener('click', () => {
        const url = urlInput.value; // URL entered by the user
        const method = methodSelect.value;

        fetch(url, {
            method,
        })
        .then((response) => {
            console.log('Response Status Code:', response.status); // Log the status code
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            responseData.textContent = JSON.stringify(data, null, 2);
        })
        .catch((error) => {
            console.error('Error:', error.message);
            responseData.textContent = `Error: ${error.message}`;
        });
    });
});
