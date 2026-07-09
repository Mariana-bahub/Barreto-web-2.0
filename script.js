// ==============================
// BARRETO WEB PREMIUM
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // MENU MOBILE
    // ==========================

    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("#menu");

    if(menuToggle && menu){

        menuToggle.addEventListener("click",()=>{

            menu.classList.toggle("active");

            const icon = menuToggle.querySelector("i");

            if(menu.classList.contains("active")){
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            }else{
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });

    }

    // Fecha o menu ao clicar em um link

    document.querySelectorAll("#menu a").forEach(link=>{

        link.addEventListener("click",()=>{

            menu.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

    // ==========================
    // SCROLL SUAVE
    // ==========================

    document.querySelectorAll('a[href^="#"]').forEach(link=>{

        link.addEventListener("click",function(e){

            e.preventDefault();

            const destino=document.querySelector(this.getAttribute("href"));

            if(destino){

                destino.scrollIntoView({
                    behavior:"smooth"
                });

            }

        });

    });

    // ==========================
    // HEADER
    // ==========================

    const header=document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>80){

            header.classList.add("header-scroll");

        }else{

            header.classList.remove("header-scroll");

        }

    });

    // ==========================
    // REVELAR ELEMENTOS
    // ==========================

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    document.querySelectorAll(
        ".beneficio-card,.portfolio-card,.processo-card,.plano,.depoimento-card,.faq-item"
    ).forEach(item=>{

        item.classList.add("hidden");

        observer.observe(item);

    });

    // ==========================
    // BOTÃO TOPO
    // ==========================

    const topo=document.createElement("button");

    topo.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

    topo.className="btn-topo";

    document.body.appendChild(topo);

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            topo.classList.add("mostrar");

        }else{

            topo.classList.remove("mostrar");

        }

    });

    topo.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

});