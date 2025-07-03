document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("fuzzy-canvas");
    const ctx = canvas.getContext("2d");

    const texts = [
        {
            parts: [
                { text: "We're More Than ", color: "#ffffff" },
                { text: "Laboratory", color: "#E63946" }
            ]
        },
        {
            parts: [
                { text: "We're Partners In Your ", color: "#ffffff" },
                { text: "Growth", color: "#4E80EE" }
            ]
        }
    ];

    const config = {
        fontSize: 64,
        fontWeight: "bold",
        fontFamily: "Poppins,Poppins",
        baseIntensity: 0.15,
        hoverIntensity: 0.35,
        fuzzRange: 25,
        enableHover: true,
    };

    let currentTextIndex = 0;
    let isHovering = false;
    let animationFrameId;
    let offscreen = document.createElement("canvas");
    let offCtx = offscreen.getContext("2d");
    let width = 0, height = 0;

    function prepareText(parts) {
        // Measure total width
        offCtx.font = `${config.fontWeight} ${config.fontSize}px ${config.fontFamily}`;
        let totalWidth = 0;
        parts.forEach(p => totalWidth += offCtx.measureText(p.text).width);

        height = Math.ceil(config.fontSize * 1.5);
        width = Math.ceil(totalWidth + 20);
        offscreen.width = width;
        offscreen.height = height;
        offCtx.clearRect(0, 0, width, height);
        offCtx.font = `${config.fontWeight} ${config.fontSize}px ${config.fontFamily}`;
        offCtx.textBaseline = "top";

        let x = 10;
        parts.forEach(part => {
            offCtx.fillStyle = part.color;
            offCtx.fillText(part.text, x, 10);
            x += offCtx.measureText(part.text).width;
        });

        canvas.width = width + 100;
        canvas.height = height;
    }

    function draw() {
        const intensity = isHovering ? config.hoverIntensity : config.baseIntensity;
        const fuzz = config.fuzzRange;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let j = 0; j < height; j++) {
            const dx = Math.floor(intensity * (Math.random() - 0.5) * fuzz);
            ctx.drawImage(offscreen, 0, j, width, 1, dx + 50, j, width, 1);
        }
        animationFrameId = requestAnimationFrame(draw);
    }

    function triggerGlitchAndBlink() {
        canvas.classList.add("glitching", "blink");
        setTimeout(() => canvas.classList.remove("glitching"), 300);
        setTimeout(() => canvas.classList.remove("blink"), 200);
    }

    function updateText() {
        const { parts } = texts[currentTextIndex];
        prepareText(parts);
        triggerGlitchAndBlink();
        currentTextIndex = (currentTextIndex + 1) % texts.length;
    }

    canvas.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        isHovering = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
    });

    canvas.addEventListener("mouseleave", () => {
        isHovering = false;
    });

    // Initialize
    updateText();
    draw();
    setInterval(updateText, 3000);
});
