$(window).load(function () {
  $(".before-after").twentytwenty({
    before_label: "Без скинали", // Set a custom before label
    after_label: "Со скинали", // Set a custom after label
  });
  $(".before-slider").slick({
    draggable: false,
    dots: true,
  });
  $(".menu-button").on("click", function () {
    $(".menu").toggleClass("menu_active");
  });

  /* Настройка select */
  $(".select").on("click", function () {
    $(".select_dropdown").toggleClass("select_dropdown_open");
  });
});
