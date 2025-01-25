document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('rainbow');
    const ctx = canvas.getContext('2d');
    const colorText = document.getElementById('color-text');
    const colorBox = document.getElementById('color-box');
    const colorRGB = document.getElementById('color-rgb');

    const drawRainbow = (ctx) => {
        const colors = ["#E50000", "#FF8D00", "#FFEE00", "#028121", "#004CFF", "#770088"];
        const arcWidth = 15;
        const centerX = canvas.width / 2;
        const centerY = canvas.height * 1.1;
        let radius = 200;

        colors.forEach(color => {
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, Math.PI, 2 * Math.PI);
            ctx.lineWidth = arcWidth;
            ctx.strokeStyle = color;
            ctx.stroke();
            radius -= arcWidth;
        });
    };

    const loadColors = async () => {
        try {
            const response = await fetch('rainbow.json');
            return await response.json();
        } catch (error) {
            console.error('error loading color info :(', error);
        }
    };

    const getRandomColor = (colors) => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const colorInfo = (color) => {
        colorText.textContent = `${color.name} means ${color.meaning}`;
        colorText.style.color = color.code;
        colorBox.style.backgroundColor = color.code;
        colorRGB.innerHTML = `
            <li>r: ${color.r}</li>
            <li>g: ${color.g}</li>
            <li>b: ${color.b}</li>
        `;
        colorRGB.style.color=color.code;
    };

    const da = async () => {
        drawRainbow(ctx);
        const colors = await loadColors();

        canvas.addEventListener('click', () => {
            const randomColor = getRandomColor(colors);
            colorInfo(randomColor);
        });

        colorBox.addEventListener('click', () => {
            const currentColor = colors.find(color => color.code === colorBox.style.backgroundColor);
            if (currentColor) {
                colorInfo(currentColor);
            }
        });
    };

    da();
});
