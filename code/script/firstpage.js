$(document).ready(function() {

        $('#togglesearchbtn').click(function() {
            $('.search-product').toggle(300);
        });

        $('#orderlist-hover').hover(function()  {
            $('.box-orderlist').toggle(300);
        });

        $('#shoppingcart-hover').hover(function() {
            $('.box-shoppingcart').toggle(300);
        });

        $('#logoutbtn').click(function() {
            $('.box-logout').toggle(300);
        });

        // Tabbar menu
        $('#showtran').click(function() {
            $('.listmenu1').slideToggle(300);
        });
        $('#showmarvel').click(function() {
            $('.listmenu2').slideToggle(300);
        });
        $('#showone').click(function() {
            $('.listmenu3').slideToggle(300);
        });
        $('#shownaru').click(function() {
            $('.listmenu4').slideToggle(300);
        });

});