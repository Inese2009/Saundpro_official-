/*
    SAUNDPRO_OFFICIAL
    Основные настройки сайта
*/

// ========================================
// НАСТРОЙКИ
// ========================================

// ВСТАВЬ СЮДА ССЫЛКУ НА СВОЙ DISCORD
const DISCORD_LINK = "https://discord.gg/YOUR_SERVER";

// ========================================
// ЗАКАЗ ТОВАРА
// ========================================

function orderProduct(productName) {

    const toast = document.getElementById("toast");

    if (toast) {
        const title = toast.querySelector("strong");
        const message = toast.querySelector("span");

        title.textContent = productName;
        message.textContent = "Переходим в Discord...";

        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 2200);
    }

    /*
        Небольшая задержка нужна,
        чтобы пользователь увидел уведомление.
    */

    setTimeout(() => {
        window.open(DISCORD_LINK, "_blank");
    }, 500);
}


// ========================================
// ВСЕ DISCORD-КНОПКИ
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    const discordLinks = document.querySelectorAll(
        'a[href*="discord.gg/YOUR_SERVER"]'
    );

    discordLinks.forEach(link => {
        link.href = DISCORD_LINK;
    });

});


// ========================================
// ПОЯВЛЕНИЕ ЭЛЕМЕНТОВ ПРИ СКРОЛЛЕ
// ========================================

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


// ========================================
// ПОДКЛЮЧЕНИЕ АНИМАЦИИ
// ========================================

document.querySelectorAll(
    ".product-card, .feature, .about, .discord-section"
).forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


// ========================================
// ПЛАВНЫЙ СКРОЛЛ
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// ========================================
// ЭФФЕКТ ДВИЖЕНИЯ HERO-КАРТОЧКИ
// ========================================

const heroCard = document.querySelector(".hero-card");

if (heroCard) {

    document.addEventListener("mousemove", (event) => {

        if (window.innerWidth < 850) return;

        const x = (window.innerWidth / 2 - event.clientX) / 60;
        const y = (window.innerHeight / 2 - event.clientY) / 60;

        heroCard.style.transform =
            `perspective(1000px) rotateY(${-x}deg) rotateX(${y}deg)`;
    });

  }
