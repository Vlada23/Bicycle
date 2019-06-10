window.addEventListener("load",function () {
    var adap_menu=document.querySelector(".adap_menu");
    var main_nav=document.querySelector(".main_nav");
    var cnt=0;
    var item_cont=document.querySelectorAll(".item_cont");
    for(var i=0; i<item_cont.length; i++){
        item_cont[i].addEventListener("click",
            function () {
                var id=this.getAttribute("data-target");
                var tab=document.querySelector(id);
                var activeTabLink=document.querySelector(".contact_container.active");
                activeTabLink.classList.remove("active");
                tab.classList.add("active");
                var active_nav=document.querySelector(".item_cont.active");
                active_nav.classList.remove("active");
                this.classList.add("active")
            });
    }
    adap_menu.addEventListener("click",function(){
        cnt++;
        if(cnt%2==1){
            main_nav.style.display="block";
            main_nav.style.background="#e7e8ed";
        }else {
            main_nav.style.display="none";
        }
    })
});