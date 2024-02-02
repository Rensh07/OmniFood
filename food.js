console.log("Hello World!");

const myName="Renish Ratanpara"
const h1=document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

/////////////////////////////////////////////
// make mobile navigation work


const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function() {
    headerEl.classList.toggle("nav-open");
});

/////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function(link){
    link.addEventListener('click',function(e){
        e.preventDefault();
        const href = link.getAttribute("href");
        console.log(href);

        // Scroll back to top
        if(href==="#") 
        window.scrollTo({
            top : 0,
            behavior:"smooth",
        });

        if(href!=="#" && href.startsWith('#'))
        {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior:"smooth"});
        }

        //Close mobile navigation
        {
            if(link.classList.contains('main-nav-link'))
            headerEl.classList.toggle("nav-open");
        }
    });
});

/////////////////////////////////////////////
// Sticky Navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(function(entries)
{
    const ent = entries[0];
    console.log(ent);

    if(ent.isIntersecting === false){
        document.classList.add("sticky");
    }

    if(ent.isIntersecting === true){
        document.classList.remove("sticky");
    }
}, 
{
    //In the viweport
    root: null,
    threshold:  0,
    rootMargin: "-80px",
});
obs.observe(sectionHeroEl);