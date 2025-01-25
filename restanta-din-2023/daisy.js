document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById('daisy-table');
    const firstDaisy = createDaisy();
    const row = table.insertRow();
    const cell = row.insertCell();
    cell.appendChild(firstDaisy);

    document.addEventListener('keypress', (event) => {
        if (event.key === 'b') {
            smolDaisy();
        } else if (event.key === 'p') {
            stopRotation();
        }
    });

    table.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            rotation(event.target);
        }
    });

    updateCount();

    function createDaisy(size = 800) {
        const img = document.createElement('img');
        img.src = 'daisy.png';
        img.width = size;
        img.height = size;
        return img;
    }

    function smolDaisy() {
        const daisies = table.getElementsByTagName('img');
        if (daisies.length > 0) {
            const randomIndex = Math.floor(Math.random() * daisies.length);
            const selectedDaisy = daisies[randomIndex];
            const parentCell = selectedDaisy.parentNode;
            parentCell.removeChild(selectedDaisy);

            const newSize = selectedDaisy.width / 2;
            for (let i = 0; i < 2; i++) {
                const newRow = table.insertRow();
                for (let j = 0; j < 2; j++) {
                    const newCell = newRow.insertCell();
                    newCell.appendChild(createDaisy(newSize));
                }
            }
            updateCount();
        }
    }

    function rotation(img) {
        if (img.classList.contains('rotateright')) {
            img.classList.remove('rotateright');
            img.classList.add('rotateleft');
        } else if (img.classList.contains('rotateleft')) {
            img.classList.remove('rotateleft');
            img.classList.add('rotateright');
        } else {
            img.classList.add('rotateright');
        }
    }

    function stopRotation() {
        const daisies = table.getElementsByTagName('img');
        for (let daisy of daisies) {
            daisy.classList.toggle('paused');
        }
    }

    function updateCount() {
        let count = table.getElementsByTagName('img').length;
        localStorage.setItem('flowerCount', count);
        const flowerCountDiv = document.getElementById('flower-count');
        flowerCountDiv.textContent = `number of daisies: ${count}`;
    }
});
