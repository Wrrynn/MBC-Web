import { useEffect, useRef, useState } from "react";

export default function FuzzyText({
    baseIntensity = 0.15,
    hoverIntensity = 0.35,
    fuzzRange = 25,
    enableHover = true,
    fontSize = 64,
    fontWeight = "bold",
    fontFamily = "Poppins, sans-serif",
}) {
    const canvasRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const currentTextIndex = useRef(0);
    const animationFrameId = useRef(null);
    const offscreen = useRef(null);
    const offCtx = useRef(null);
    const glitchingRef = useRef(false);

    const texts = [
        {
            parts: [
                { text: "We're More Than ", color: "#ffffff" },
                { text: "Laboratory", color: "#E63946" },
            ],
        },
        {
            parts: [
                { text: "We're Partners In Your ", color: "#ffffff" },
                { text: "Growth", color: "#4E80EE" },
            ],
        },
    ];

    const prepareText = (parts, canvas) => {
        const ctx = offCtx.current;
        ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
        const totalWidth = parts.reduce((acc, p) => acc + ctx.measureText(p.text).width, 0);

        const height = Math.ceil(fontSize * 1.5);
        const width = Math.ceil(totalWidth + 20);
        offscreen.current.width = width;
        offscreen.current.height = height;

        ctx.clearRect(0, 0, width, height);
        ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
        ctx.textBaseline = "top";

        let x = 10;
        parts.forEach((part) => {
            ctx.fillStyle = part.color;
            ctx.fillText(part.text, x, 10);
            x += ctx.measureText(part.text).width;
        });

        canvas.width = width + 100;
        canvas.height = height;

        return { width, height };
    };

    useEffect(() => {
        // Pastikan hanya dijalankan di client
        if (typeof window === "undefined") return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Inisialisasi canvas offscreen
        offscreen.current = document.createElement("canvas");
        offCtx.current = offscreen.current.getContext("2d");

        let width = 0;
        let height = 0;

        const draw = () => {
            const intensity = isHovering && enableHover ? hoverIntensity : baseIntensity;
            const fuzz = fuzzRange;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let j = 0; j < height; j++) {
                const dx = Math.floor(intensity * (Math.random() - 0.5) * fuzz);

                if (glitchingRef.current) {
                    ctx.globalCompositeOperation = "screen";
                    ctx.drawImage(offscreen.current, 0, j, width, 1, dx + 47, j, width, 1);
                    ctx.drawImage(offscreen.current, 0, j, width, 1, dx + 50, j, width, 1);
                    ctx.drawImage(offscreen.current, 0, j, width, 1, dx + 53, j, width, 1);
                    ctx.globalCompositeOperation = "source-over";
                } else {
                    ctx.drawImage(offscreen.current, 0, j, width, 1, dx + 50, j, width, 1);
                }
            }

            animationFrameId.current = requestAnimationFrame(draw);
        };

        const triggerGlitchAndBlink = () => {
            glitchingRef.current = true;
            canvas.classList.add("blink");
            setTimeout(() => canvas.classList.remove("blink"), 200);
            setTimeout(() => {
                glitchingRef.current = false;
            }, 300);
        };

        const updateText = () => {
            const { parts } = texts[currentTextIndex.current];
            const size = prepareText(parts, canvas);
            width = size.width;
            height = size.height;
            triggerGlitchAndBlink();
            currentTextIndex.current = (currentTextIndex.current + 1) % texts.length;
        };

        const onMouseMove = (e) => {
            if (!enableHover) return;
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setIsHovering(x >= 0 && x <= rect.width && y >= 0 && y <= rect.height);
        };

        const onMouseLeave = () => {
            setIsHovering(false);
        };

        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mouseleave", onMouseLeave);

        updateText();
        draw();
        const intervalId = setInterval(updateText, 3000);

        return () => {
            cancelAnimationFrame(animationFrameId.current);
            clearInterval(intervalId);
            canvas.removeEventListener("mousemove", onMouseMove);
            canvas.removeEventListener("mouseleave", onMouseLeave);
        };
    }, [
        baseIntensity,
        hoverIntensity,
        enableHover,
        fuzzRange,
        fontSize,
        fontWeight,
        fontFamily,
        isHovering,
    ]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                display: "block",
                width: "100%",
                height: "auto",
            }}
            id="fuzzy-canvas"
        />
    );
}
