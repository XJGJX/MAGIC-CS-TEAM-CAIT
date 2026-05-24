//_____
const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;")
        });

        document.addEventListener('click', () => {
            cursor.classList.add("expand");

            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 300);
        });
        const cursor2 = document.querySelector('.cursor2');

        document.addEventListener('mousemove', e => {
            cursor2.setAttribute("style", "top: "+(e.pageY - 3)+"px; left: "+(e.pageX - 3)+"px;")
        });

        document.addEventListener('click', () => {
            cursor2.classList.add("expand");

            setTimeout(() => {
                cursor2.classList.remove("expand");
            }, 300);
        });
        const cursor3 = document.querySelector('.cursor3');

        document.addEventListener('mousemove', e => {
            cursor3.setAttribute("style", "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;")
        });

        document.addEventListener('click', () => {
            cursor3.classList.add("expand2");

            setTimeout(() => {
                cursor3.classList.remove("expand2");
            }, 300);
        });
//_____

// АНИМАЦИИ ПОЯВЛЕНИЯ
const hiddenElements = document.querySelectorAll(`
  .player-card,
  .rank-card,
  .news-card,
  .player-page-content,
  .player-page-image
`);
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-element");
    }
  });
}, {
  threshold: 0.15
});
hiddenElements.forEach(el => {
  el.classList.add("hidden-element");
  observer.observe(el);
});
// КНОПКА СОСТАВ
const mainBtn = document.querySelector(".main-btn");
if(mainBtn){
  mainBtn.addEventListener("click", () => {
    document.querySelector("#players").scrollIntoView({
      behavior: "smooth"
    });
  });
}
// КНОПКА НОВОСТИ
const newsBtn = document.querySelector("#newsBtn");
if(newsBtn){
  newsBtn.addEventListener("click", () => {
    document.querySelector("#news").scrollIntoView({
      behavior: "smooth"
    });
  });
}
// PARALLAX EFFECT
window.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  document.querySelector(".bg-animation").style.transform =
    `translate(${-x * 20}px, ${-y * 20}px)`;
});