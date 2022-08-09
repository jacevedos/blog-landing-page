((d)=>{
    const $btnMenu=d.querySelector(".menu-btn"),
    $menu=d.querySelector(".menu"),
    $product=d.querySelector(".product-btn"),
    $company=d.querySelector(".company-btn"),
    $connect=d.querySelector(".connect-btn");
    


    $product.addEventListener("click", e=>{
        $product.firstElementChild.classList.toggle("none")
        $product.lastElementChild.classList.toggle("none")
        d.querySelector(".product").classList.toggle("none")
    });
    $company.addEventListener("click", e=>{
        $company.firstElementChild.classList.toggle("none")
        $company.lastElementChild.classList.toggle("none")
        d.querySelector(".company").classList.toggle("none")
        
    });
    $connect.addEventListener("click", e=>{
        $connect.firstElementChild.classList.toggle("none")
        $connect.lastElementChild.classList.toggle("none")
        d.querySelector(".connect").classList.toggle("none")
    });

    $btnMenu.addEventListener("click",e=>{
        $btnMenu.firstElementChild.classList.toggle("none")
        $btnMenu.lastElementChild.classList.toggle("none")
        $menu.classList.toggle("is-active");
    });
    // d.addEventListener("click",e=>{
    //     console.log(e.target.matches(".menu a"))
    // })
    // d.addEventListener("click",e=>{
    //     if(!e.target.matches(".menu a")) return false;
    //     $btnMenu.firstElementChild.classList.remove("none")
    //     $btnMenu.lastElementChild.classList.add("none")
    //     $menu.classList.remove("is-active");
    // })
})(document);