 let element_position = $('.sc1').offset().top;
 let swap1 = 1;
 $(window).on('scroll', function() {
     let y_scroll_pos = window.pageYOffset;
     let scroll_pos_test = element_position;
     $(".disappearing_header").css("padding-top", "27px");
     if(y_scroll_pos === scroll_pos_test && $(window).width() > 900) {
         $(".disappearing_header").css("padding-top", "57px");
     }
     if(y_scroll_pos > 1 && swap1 !== 0) {
         swap1 = 0;
         let nav_menu_icon = $(".nav_box");
         let nav_menu_inside = $(".nav_box span");
         anim(nav_menu_icon);
         anim(nav_menu_inside);
         anim_border(nav_menu_icon, nav_menu_inside);

         let menu = $(".disappearing_header");
         menu.css("width", "0%");
         $(".main_header").css("opacity", "0")

         menu.mouseleave(function () {
             nav_menu_icon.css("transform", "rotate(180deg)");
             menu.css("width", "0%");
             $(".main_header").css("opacity", "0");
         });
         swap++;
     }
 });

 let menu = $(".disappearing_header");
 let nav_menu_icon = $(".nav_box");

 nav_menu_icon.mouseenter(() => nav_menu_icon.css("transform", "rotate(360deg)"));
 nav_menu_icon.mouseenter(() => menu.css("width", "100%"));
 nav_menu_icon.mouseenter(() => $(".main_header").css("opacity", "1"));
 nav_menu_icon.mouseenter(() => menu.css("height", "100px"));
 nav_menu_icon.mouseenter(()=>$(".main_header").css("visibility", "visible"));



 function anim(for_what) {
     for_what.animate({
         opacity: "1",
         width: "15px",
     }, 500);
 }
 function anim_border(box, span) {
     setTimeout(function () {
         box.css("border-radius", "50%");
         box.css("transform", "rotate(180deg)");
         span.css("border-radius", "50%");
         span.css("transform", "rotate(225deg)");
     }, 500);
 }