$(document).ready(function() {
    // $('body').on("click", ".dashboard_main_li_1", function() {
    //     $(".dashboard_sub_navbar").slideDown(2000)
    // });
    // $(window).click(".dashboard_main_li_1", function() {
    //     $(".dashboard_sub_navbar").slideToggle();
    // });
    $(".toggle_btn").click(function() {
        $(".toggle_menu").hide();
    });
    $(".dashboard_main_li_1").click(function() {
        $(".dashboard_sub_navbar_1").slideToggle();
    });
    $(".dashboard_main_li_2").click(function() {
        $(".dashboard_sub_navbar_2").slideToggle();
    });
    $(".dashboard_main_li_3").click(function() {
        $(".dashboard_sub_navbar_3").slideToggle();
    });
    $(".dashboard_main_li_4").click(function() {
        $(".dashboard_sub_navbar_4").slideToggle();
    });
    $(".dashboard_main_li_5").click(function() {
        $(".dashboard_sub_navbar_5").slideToggle();
    });
});