document.addEventListener("DOMContentLoaded", () => {
    slideCharacters();
    slideSentence();
});

function slideCharacters() {
    initAnimation();
    document.querySelectorAll('.lucky-sand').forEach(el => {

        const charClass = el.dataset.charClass;
        const fragment = document.createDocumentFragment();

        const div = document.createElement('div');

        Object.assign(div.style, {
            fontSize: "0px",
            overflow: "hidden",
        });

        el.textContent.split('').forEach((el, i) => {

            const span = document.createElement('span');
            span.textContent = el;
            span.classList.add(charClass);

            Object.assign(span.style, {
                display: "inline-block",

                animation: "upSlide 5s ease-in-out infinite",
                animationDirection: "normal",
                animationDelay: `${i * 100}ms`,

                transform: "translateY(100%)"
            });

            if(span.innerHTML === ' '){
                span.style.marginRight = "3rem";
            }

            fragment.appendChild(span);
        });

        div.appendChild(fragment)

        el.innerHTML = ''; // 元の内容をクリア
        el.appendChild(div);
    });
}

function slideSentence() {
    initAnimation();
    document.querySelectorAll('.sandwitch-store').forEach(el => {

        const charClass = el.dataset.charClass;

        const div = document.createElement('div');

        Object.assign(div.style, {
            fontSize: "0px",
            overflow: "hidden",
        });

        const span = document.createElement('span');
        span.textContent = el.textContent;
        span.classList.add(charClass);

        Object.assign(span.style, {
            display: "inline-block",

            animation: "upSlide 5s ease-in-out infinite",
            animationDirection: "normal",

            transform: "translateY(100%)"
        });

        div.appendChild(span)

        el.innerHTML = ''; // 元の内容をクリア
        el.appendChild(div);
    });
}

function initAnimation(){
    const style = document.createElement("style");
    style.textContent = `
        @keyframes upSlide {
            0%   { transform: translateY(100%); }
            20%  { transform: translateY(0); }
            80%  { transform: translateY(0); }
            100% { transform: translateY(-100%); }
        }
    `;
    document.head.appendChild(style);
}