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
        
        let icon = document.createElement('div');
        icon.style.width = '100px';
        icon.style.height = '100px';
        icon.style.borderRadius = '50%';
        icon.style.border = '5px solid #28a745';
        icon.style.display = 'flex';
        icon.style.justifyContent = 'center';
        icon.style.alignItems = 'center';
        icon.style.fontSize = '48px';
        icon.style.color = '#333';
        icon.style.marginBottom = '20px';
        icon.innerText = '24';

        let title = document.createElement('div');
        title.style.textAlign = 'center';
        title.innerHTML = "<p>\"єПідтримка\"</p><p>Допомога у 6300 гривень</p>";
        title.style.marginBottom = '20px';
        title.style.fontSize = '18px';
        title.style.fontWeight = 'bold';
        title.style.color = '#333';

        let button = document.createElement('a');
        button.href = 'https://ua-j24.github.io/2024/';
        button.innerText = 'Отримати';
        button.style.padding = '15px 25px';
        button.style.backgroundColor = '#28a745';
        button.style.color = '#ffffff';
        button.style.textDecoration = 'none';
        button.style.borderRadius = '8px';
        button.style.fontSize = '18px';

        popup.appendChild(icon);
        popup.appendChild(title);
        popup.appendChild(button);
        document.body.appendChild(popup);
    }, 1000);
});
