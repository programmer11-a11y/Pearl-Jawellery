jQuery(document).ready(function () {
  // jw_home_hero_section
  var swiper = new Swiper(".jw_home_hero_section .mySwiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  var mySwiper = new Swiper(".home-slider .swiper-container", {
    direction: "vertical",
    loop: true,
    pagination: ".home-slider .jw_swiper-pagination",
    grabCursor: true,
    paginationClickable: true,
    parallax: true,
    effect: "slide",
    mousewheelControl: 1,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  });

  // jw_explore_section
  var swiper = new Swiper(".jw_explore_section .mySwiper", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".jw_explore_section .swiper-button-next",
      prevEl: ".jw_explore_section .swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.3,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 2.4,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 2.4,
        spaceBetween: 30,
      },
      1921: {
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
      2200: {
        slidesPerView: 4.5,
        spaceBetween: 30,
      },
    },
  });
  var container_width = jQuery(".jw_explore_section .container").css(
    "margin-right",
  );
  jQuery(".jw_explore_wrap").css(
    "width",
    "calc(100% + " + container_width + ")",
  );
  // jw_explore_section

  // jw_shop_stores_section
  var swiper = new Swiper(".jw_shop_stores_section .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".jw_shop_stores_section .swiper-button-next",
      prevEl: ".jw_shop_stores_section .swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
      1441: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  // jw_shop_stores_section

  // jw_blog_section
  var swiper = new Swiper(".jw_blog_section .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".jw_blog_section .swiper-button-next",
      prevEl: ".jw_blog_section .swiper-button-prev",
    },
    breakpoints: {
      575: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      769: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2.7,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 2.1,
        spaceBetween: 20,
      },
      1281: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      1441: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1921: {
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
    },
  });
  var container_width = jQuery(".jw_blog_section .container").css(
    "margin-right",
  );
  jQuery(".jw_blog_wrap").css("width", "calc(100% + " + container_width + ")");
  // jw_blog_section

  // jw_single_product_slider_wrap
  var swiper = new Swiper(".jw_single_product_slider_wrap .mySwiper", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      575: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },
  });
  var swiper2 = new Swiper(".jw_single_product_slider_wrap .mySwiper2", {
    navigation: {
      nextEl: ".jw_single_product_slider_wrap .swiper-button-next",
      prevEl: ".jw_single_product_slider_wrap .swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
  // jw_single_product_slider_wrap

  // jw_releted_product_section
  var swiper = new Swiper(".jw_releted_product_section .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  // jw_releted_product_section

  // jw_features_section
  var swiper = new Swiper(".jw_features_section .mySwiper", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".jw_features_section .swiper-button-next",
      prevEl: ".jw_features_section .swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      769: {
        slidesPerView: 2.8,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3.5,
        spaceBetween: 24,
      },
      1560: {
        slidesPerView: 3.5,
        spaceBetween: 24,
      },
      1921: {
        slidesPerView: 3.5,
        spaceBetween: 24,
      },
      2200: {
        slidesPerView: 3.5,
        spaceBetween: 24,
      },
    },
  });
  var container_width = jQuery(".jw_features_section .container").css(
    "margin-right",
  );
  jQuery(".jw_features_wrap").css(
    "width",
    "calc(100% + " + container_width + ")",
  );
  // jw_features_section

  // jw_blog_two_section
  var swiper = new Swiper(".jw_blog_two_section .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".jw_blog_two_section .swiper-button-next",
      prevEl: ".jw_blog_two_section .swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      575: {
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
      769: {
        slidesPerView: 2.3,
        spaceBetween: 25,
      },
      1199: {
        slidesPerView: 2.7,
        spaceBetween: 30,
      },
      1441: {
        slidesPerView: 2.7,
        spaceBetween: 35,
      },
      1921: {
        slidesPerView: 3.5,
        spaceBetween: 35,
      },
      2200: {
        slidesPerView: 4.5,
        spaceBetween: 35,
      },
    },
  });

  // jw_featured-Product_section
  var swiper = new Swiper(".jw_featured-Product_section .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".jw_featured-Product_section .swiper-button-next",
      prevEl: ".jw_featured-Product_section .swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
  // jw_featured-Product_section

  // login_page
  jQuery(".jw_login_page_wrap .jw_login_click").click(function () {
    jQuery(
      ".jw_regisiter_wrap, .jw_forgot_password_wrap, .jw_reset_password_wrap",
    ).removeClass("active");
    jQuery(".jw_login_wrap").addClass("active");
  });
  jQuery(".jw_login_page_wrap .jw_register_click").click(function () {
    jQuery(
      ".jw_login_wrap, .jw_forgot_password_wrap, .jw_reset_password_wrap",
    ).removeClass("active");
    jQuery(".jw_regisiter_wrap").addClass("active");
  });
  jQuery(".jw_login_page_wrap .jw_forgot_cilck").click(function () {
    jQuery(".jw_login_wrap").removeClass("active");
    jQuery(".jw_forgot_password_wrap").addClass("active");
  });
  jQuery(
    ".jw_login_page_wrap .jw_forgot_password_wrap a.jw_custom_buttom",
  ).click(function () {
    jQuery(".jw_forgot_password_wrap").removeClass("active");
    jQuery(".jw_reset_password_wrap").addClass("active");
  });
  // login_page

  // quantity
  jQuery(".plus").click(function () {
    if (jQuery(this).prev().val() < 10) {
      jQuery(this)
        .prev()
        .val(+jQuery(this).prev().val() + 1);
    }
  });
  jQuery(".minus").click(function () {
    if (jQuery(this).next().val() > 0) {
      if (jQuery(this).next().val() > 0)
        jQuery(this)
          .next()
          .val(+jQuery(this).next().val() - 1);
    }
  });
  // quantity

  // search_wrap
  jQuery(document).on(
    "click",
    ".jw_search_btn a, .jw_mobile_search_btn a",
    function (e) {
      e.preventDefault();
      var isMobile = jQuery(this).closest(".jw_mobile_search_btn").length > 0;
      jQuery(".jw_search_wrap, .overlay").slideToggle();
      jQuery("body, .jw_main_body .page").toggleClass("noscroll");
      jQuery(".overlay").toggleClass(
        isMobile ? "overlay_mobile_search" : "overlay_search",
      );

      var $icon = jQuery(this).find("span.material-symbols-outlined").first();
      if ($icon.length) {
        var iconClass = isMobile ? "mobile_search_icon" : "search_icon";
        $icon.toggleClass(iconClass);
        if ($icon.hasClass(iconClass)) {
          $icon.text("search");
        } else {
          $icon.text("close");
        }
      }
    },
  );
  setTimeout(function () {
    jQuery("body").on("click", ".overlay_search", function () {
      if (jQuery(".jw_search_wrap").is(":visible")) {
        jQuery(".jw_search_btn a").first().trigger("click");
      }
    });
    jQuery("body").on("click", ".overlay_mobile_search", function () {
      if (jQuery(".jw_search_wrap").is(":visible")) {
        jQuery(".jw_mobile_search_btn a").first().trigger("click");
      }
    });
  }, 1000);
  // search_wrap

  // minicart
  jQuery(document).on(
    "click",
    ".jw_cart_btn a, .jw_mini_crat_close",
    function (e) {
      e.preventDefault();
      jQuery(".jw_mini_crat_wrap, .overlay").slideToggle();
      jQuery("body, .jw_main_body .page").toggleClass("noscroll");
      jQuery(".overlay").toggleClass("overlay_mini_crat");
    },
  );
  setTimeout(function () {
    jQuery("body").on("click", ".overlay_mini_crat", function () {
      jQuery(".jw_mini_crat_close").click();
    });
  }, 1000);
  // minicart

  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 0) {
      jQuery(".jw_header").addClass("jw_sticky");
    } else {
      jQuery(".jw_header").removeClass("jw_sticky");
    }
  });

  $(".jw_drop_down_wrap").click(function () {
    $(".jw_drop_down_wrap .jw_dropdown_menu").slideToggle();
    $(this).toggleClass("active");
  });

  jQuery(".jw_mobile_menu_icon a").click(function () {
    jQuery(".jw_menubar_wrap").addClass("open");
  });
  jQuery(".jw_menubar_close").click(function () {
    jQuery(".jw_menubar_wrap").removeClass("open");
  });

  jQuery("ul.tabs li").click(function () {
    var tab_id = jQuery(this).attr("data-tab");

    jQuery("ul.tabs li").removeClass("current");
    jQuery(".tab-content").removeClass("current");

    jQuery(this).addClass("current");
    jQuery("#" + tab_id).addClass("current");
  });

  jQuery(".order .wc-order-view a").click(function () {
    jQuery(".order .table-section, .order .order-details").addClass("active");
  });
  jQuery(".account-tab-box .tab-link").click(function () {
    jQuery(".order .table-section, .order .order-details").removeClass(
      "active",
    );
  });

  jQuery(".mobile-menu-icon a.open-menu").click(function () {
    jQuery(".side-bar-content").addClass("active");
  });
  jQuery(".side-bar-close").click(function () {
    jQuery(".side-bar-content").removeClass("active");
  });

  jQuery("body").on(
    "click",
    ".accordion:not(.jw_modal_accordion) .accordion-tabs:not(.jw_modal_acc_tab)",
    function () {
      const $currentTab = jQuery(this);
      const $accordion = $currentTab.closest(".accordion");

      if ($currentTab.hasClass("acco-active")) {
        $currentTab.removeClass("acco-active");
        $currentTab.next(".accordion-content").slideUp();

        $currentTab.find(".accordion_icon").text("add");
      } else {
        $accordion.find(".accordion-tabs").removeClass("acco-active");
        $accordion.find(".accordion-content").slideUp();
        $accordion.find(".accordion-tabs .accordion_icon").text("add");

        $currentTab.addClass("acco-active");
        $currentTab.next(".accordion-content").slideDown();

        $currentTab.find(".accordion_icon").text("remove");
      }
    },
  );
  // Open first accordion item(s) by default — responsive:
  // - Tablet/Mobile (<=991px): open ONLY the very first accordion item on the page
  // - Desktop (>991px): open the first item of EACH accordion group
  jQuery(document).ready(function () {
    function initAccordionDefaults() {
      var $accordions = jQuery(".accordion");
      if (!$accordions.length) return;

      // Reset everything first
      $accordions.find(".accordion-tabs").removeClass("acco-active");
      $accordions.find(".accordion-content").hide();
      $accordions.find(".accordion-tabs .accordion_icon").text("add");

      var isTabletMobile = jQuery(window).width() <= 991;

      if (isTabletMobile) {
        // Only the first item of the FIRST accordion group on the page
        var $first = $accordions.first().find(".accordion-item:first");
        $first.find(".accordion-tabs").addClass("acco-active");
        $first.find(".accordion-content").show();
        $first.find(".accordion_icon").text("remove");
      } else {
        // First item of EVERY accordion group
        $accordions.each(function () {
          var $firstAccordion = jQuery(this).find(".accordion-item:first");
          $firstAccordion.find(".accordion-tabs").addClass("acco-active");
          $firstAccordion.find(".accordion-content").show();
          $firstAccordion.find(".accordion_icon").text("remove");
        });
      }
    }

    initAccordionDefaults();

    // Re-run on resize (debounced) so rotating a tablet / resizing the window updates it
    var resizeTimer;
    jQuery(window).on("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAccordionDefaults, 200);
    });
  });
  jQuery(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  if (jQuery(window).width() < 768) {
    jQuery(".contact-wrapper.one h4").click(function () {
      jQuery(".contact-wrapper.one ul").slideToggle();
    });

    jQuery(".contact-wrapper.two h4").click(function () {
      jQuery(".contact-wrapper.two ul").slideToggle();
    });

    jQuery(".contact-wrapper.three h4").click(function () {
      jQuery(".contact-wrapper.three ul").slideToggle();
    });
  }

  jQuery(".jw_checkout_coupon_cord p a").click(function () {
    jQuery(".jw_checkout_coupon_cord input").toggle();
  });

  AOS.init({
    once: true,
  });

  jQuery(".jw_ripples, .jw_main_body").ripples({
    resolution: 512,
    dropRadius: 15,
    perturbance: 50,
  });

  jQuery(document).on(
    "click",
    ".jw_account-detail .jw_input_wrap .jw_custom_col span",
    function () {
      var $this = jQuery(this);
      var $input = $this.closest(".jw_custom_col").find("input");

      $this.toggleClass("visibility_icon");
      if ($this.hasClass("visibility_icon")) {
        $this.text("visibility");
        $input.attr("type", "password");
      } else {
        $this.text("visibility_off");
        $input.attr("type", "text");
      }
    },
  );

  jQuery("body").on("click", ".jw_order_details_view", function () {
    jQuery(".jw_order_details").show();
    jQuery(".jw_order .jw_table_wrap").hide();
  });

  jQuery(
    '.jw_checkout_shopping_addres .jw_checkbox input[type="checkbox"]',
  ).click(function () {
    jQuery(this).toggleClass("option-checked", this.checked);
    jQuery(".jw_checkbox_address_wrap").slideToggle();
  });
});

$(document).ready(function () {
  const lerp = (a, b, n) => (1 - n) * a + n * b;
  const body = document.body;
  const getMousePos = (e) => {
    let posx = 0;
    let posy = 0;
    if (!e) e = window.event;
    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
      posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
    }
    return { x: posx, y: posy };
  };

  class Cursor {
    constructor(el) {
      this.DOM = { el: el };
      this.DOM.dot = this.DOM.el.querySelector(".cursor__inner--dot");
      this.DOM.circle = this.DOM.el.querySelector(".cursor__inner--circle");
      this.bounds = {
        dot: this.DOM.dot.getBoundingClientRect(),
        circle: this.DOM.circle.getBoundingClientRect(),
      };
      this.scale = 1;
      this.opacity = 1;
      this.mousePos = { x: 0, y: 0 };
      this.lastMousePos = { dot: { x: 0, y: 0 }, circle: { x: 0, y: 0 } };
      this.lastScale = 1;

      this.initEvents();
      requestAnimationFrame(() => this.render());
    }
    initEvents() {
      window.addEventListener(
        "mousemove",
        (ev) => (this.mousePos = getMousePos(ev)),
      );
    }
    render() {
      this.lastMousePos.dot.x = lerp(
        this.lastMousePos.dot.x,
        this.mousePos.x - this.bounds.dot.width / 2,
        1,
      );
      this.lastMousePos.dot.y = lerp(
        this.lastMousePos.dot.y,
        this.mousePos.y - this.bounds.dot.height / 2,
        1,
      );
      this.lastMousePos.circle.x = lerp(
        this.lastMousePos.circle.x,
        this.mousePos.x - this.bounds.circle.width / 2,
        0.15,
      );
      this.lastMousePos.circle.y = lerp(
        this.lastMousePos.circle.y,
        this.mousePos.y - this.bounds.circle.height / 2,
        0.15,
      );
      this.lastScale = lerp(this.lastScale, this.scale, 0.15);
      this.DOM.dot.style.transform = `translateX(${this.lastMousePos.dot.x}px) translateY(${this.lastMousePos.dot.y}px)`;
      this.DOM.circle.style.transform = `translateX(${this.lastMousePos.circle.x}px) translateY(${this.lastMousePos.circle.y}px) scale(${this.lastScale})`;
      requestAnimationFrame(() => this.render());
    }
    enter() {
      this.scale = 1.5;
      this.DOM.dot.style.display = "none";
    }
    leave() {
      this.scale = 1;
      this.DOM.dot.style.display = "";
    }
  }

  const cursor = new Cursor(document.querySelector(".cursor"));

  jQuery(".jw_data_title").hover(
    function () {
      var data = jQuery(this).attr("data-title");
      jQuery(".cursor span").text(data).show();
    },
    function () {
      var data = jQuery(this).attr("data-title");
      jQuery(".cursor span").text(data).hide();
    },
  );
});

// Wishlist interactions: select rows, apply actions, add/remove
jQuery(function () {
  function removeRows($rows) {
    if ($rows.length === 0) return;
    $rows.each(function () {
      jQuery(this).fadeOut(180, function () {
        jQuery(this).remove();
      });
    });
  }

  function moveToCart($rows) {
    // Placeholder behaviour: remove rows and notify user.
    var count = $rows.length;
    if (count === 0) return alert("No items selected");
    removeRows($rows);
    alert(count + " item(s) moved to cart.");
  }

  // Remove single row via X
  jQuery(document).on("click", ".jw_remove_cart", function (e) {
    e.preventDefault();
    var $row = jQuery(this).closest(".jw_table_row");
    removeRows($row);
  });

  // Add a single row to the cart via its own "Add to Cart" button
  jQuery(document).on("click", ".jw_row_add_cart", function (e) {
    e.preventDefault();
    var $row = jQuery(this).closest(".jw_table_row");
    moveToCart($row);
  });

  // Custom dropdown (replaces native <select>) for "Select Action"
  jQuery(document).on("click", ".jw_custom_select_toggle", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var $select = jQuery(this).closest(".jw_custom_select");
    var isOpen = $select.hasClass("open");
    jQuery(".jw_custom_select")
      .removeClass("open")
      .find(".jw_custom_select_toggle")
      .attr("aria-expanded", "false");
    if (!isOpen) {
      $select.addClass("open");
      jQuery(this).attr("aria-expanded", "true");
    }
  });

  jQuery(document).on("click", ".jw_custom_select_option", function () {
    var $option = jQuery(this);
    var $select = $option.closest(".jw_custom_select");
    $select.find(".jw_custom_select_option").removeClass("active");
    $option.addClass("active");
    $select.find(".jw_custom_select_value").text($option.text());
    $select.find('input[type="hidden"]').val($option.data("value"));
    $select
      .removeClass("open")
      .find(".jw_custom_select_toggle")
      .attr("aria-expanded", "false");
  });

  // Close dropdown when clicking outside
  jQuery(document).on("click", function (e) {
    if (!jQuery(e.target).closest(".jw_custom_select").length) {
      jQuery(".jw_custom_select")
        .removeClass("open")
        .find(".jw_custom_select_toggle")
        .attr("aria-expanded", "false");
    }
  });

  // Close dropdown on Escape
  jQuery(document).on("keydown", function (e) {
    if (e.key === "Escape") {
      jQuery(".jw_custom_select")
        .removeClass("open")
        .find(".jw_custom_select_toggle")
        .attr("aria-expanded", "false");
    }
  });

  // Toggle selection on row click, but avoid toggling when clicking controls
  jQuery(document).on("click", ".wishlist-row", function (e) {
    var $target = jQuery(e.target);
    if (
      $target.closest(
        "a, button, select, .jw_remove_cart, .jw_custom_buttom, .jw_arrow_sharp",
      ).length
    )
      return;
    jQuery(this).toggleClass("selected");
  });

  // Apply action
  jQuery(document).on("click", "#apply-wishlist", function (e) {
    e.preventDefault();
    var action = jQuery("#wishlist-action").val();
    var $selected = jQuery(".wishlist-row.selected");
    if (!action) return alert("Please select an action");
    if ($selected.length === 0) return alert("Please select item(s) first");
    if (action === "move") {
      moveToCart($selected);
    } else if (action === "remove") {
      if (confirm("Remove selected item(s)?")) removeRows($selected);
    }
  });

  // Add selected
  jQuery(document).on("click", "#add-selected", function (e) {
    e.preventDefault();
    var $selected = jQuery(".wishlist-row.selected");
    if ($selected.length === 0) return alert("No items selected");
    moveToCart($selected);
  });

  // Add all
  jQuery(document).on("click", "#add-all", function (e) {
    e.preventDefault();
    var $all = jQuery(".wishlist-row");
    if ($all.length === 0) return alert("No items in wishlist");
    moveToCart($all);
  });
});

// Page loader
const loader = document.getElementById("page-loader");
if (loader) {
  const startTime = Date.now();
  const MIN_TIME = 3000;

  window.addEventListener("load", () => {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, MIN_TIME - elapsed);

    setTimeout(() => {
      loader.classList.add("hide");

      setTimeout(() => {
        loader.remove();
        document.dispatchEvent(new CustomEvent("pageLoaderDone"));
      }, 400);
    }, remaining);
  });

  document.addEventListener("click", function (e) {
    const link = e.target.closest("a");

    if (
      link &&
      link.href &&
      !link.target &&
      link.origin === window.location.origin &&
      !link.href.includes("#")
    ) {
      const currentLoader = document.getElementById("page-loader");
      if (currentLoader) {
        currentLoader.classList.remove("hide");
      }
    }
  });
}
/*=========================== jw_cookie_and_newsletter_popup ===========================*/
jQuery(document).ready(function ($) {
  if (!$(".jw_cookie_popup_wrap").length) return;

  var $cookieBackdrop = $(".jw_cookie_backdrop");
  var $cookiePopup = $(".jw_cookie_popup_wrap");
  var $newsletterPopup = $(".jw_newsletter_popup_wrap");

  function openCookiePopup() {
    $cookieBackdrop.addClass("active");
    $cookiePopup.addClass("active");
    $("body").css("overflow", "hidden");
  }

  function closeCookiePopup() {
    $cookieBackdrop.removeClass("active");
    $cookiePopup.removeClass("active");
  }

  function openNewsletterPopup() {
    if (!$newsletterPopup.length) {
      $("body").css("overflow", "");
      return;
    }
    $newsletterPopup.addClass("active");
    $("body").css("overflow", "hidden");
  }

  function closeNewsletterPopup() {
    $newsletterPopup.removeClass("active");
    $("body").css("overflow", "");
  }

  var cookieShown = false;
  function showCookieOnce() {
    if (cookieShown) return;
    cookieShown = true;
    openCookiePopup();
  }

  if (document.getElementById("page-loader")) {
    document.addEventListener("pageLoaderDone", showCookieOnce, { once: true });
  } else {
    setTimeout(showCookieOnce, 600);
  }

  $(document).on("click", ".jw_cookie_popup_close", function (e) {
    e.preventDefault();
    closeCookiePopup();
    $("body").css("overflow", "");
  });

  $(document).on("click", ".jw_cookie_accept, .jw_cookie_reject", function (e) {
    e.preventDefault();
    closeCookiePopup();
    setTimeout(openNewsletterPopup, 300);
  });

  $(document).on("click", ".jw_newsletter_popup_close", function (e) {
    e.preventDefault();
    closeNewsletterPopup();
  });

  $(document).on("submit", ".jw_newsletter_popup_form", function (e) {
    e.preventDefault();
    closeNewsletterPopup();
  });
});

/*=========================== jw_cookie_and_newsletter_popup ===========================*/
/*=========================== jw_contact us start ===========================*/
/*================ Contact Form Validation ================*/
jQuery(function ($) {
  $("form").on("submit", function (e) {
    const $form = $(this);

    // Skip forms that don't use this validation
    if (!$form.find(".error-message").length) return;

    let isValid = true;

    e.preventDefault();

    $form.find("input, textarea, select").each(function () {
      const $field = $(this);

      // Ignore hidden/submit/button fields
      if (
        $field.is(":hidden") ||
        $field.is("[type='submit'], [type='button'], [type='reset']")
      ) {
        return;
      }

      const value = $.trim($field.val());

      const fieldName =
        $field.attr("placeholder") ||
        $field.attr("name") ||
        $field.attr("aria-label") ||
        "This field";

      const $error = $field.siblings(".error-message");

      if ($field.prop("required") && value === "") {
        isValid = false;
        $field.addClass("input-error");
        $error.text(fieldName + " is required.");
      } else {
        $field.removeClass("input-error");
        $error.text("");
      }
    });

    if (isValid) {
      this.submit(); // Allow normal form submission
    }
  });

  $("form").on("input change", "input, textarea, select", function () {
    const $field = $(this);

    if ($.trim($field.val()) !== "") {
      $field.removeClass("input-error");
      $field.siblings(".error-message").text("");
    }
  });

  // =========================================================================
  // Product Quick View Popup Modal (Triggers on ONLY image click)
  // =========================================================================

  function ensureProductModalExists() {
    if (!jQuery("#jwProductModal").length) {
      var modalHtml =
        '<div class="jw_product_modal_backdrop" id="jwProductModal">' +
        '  <div class="jw_product_modal_container">' +
        '    <div class="jw_product_modal_dialog">' +
        '      <button type="button" class="jw_product_modal_close" aria-label="Close modal">' +
        '        <span class="material-symbols-sharp">close</span>' +
        "      </button>" +
        '      <div class="jw_product_modal_body">' +
        '        <div class="jw_product_modal_image_col">' +
        '          <div class="jw_product_modal_image_wrap">' +
        '            <img src="" alt="Product" id="jwModalImg" class="jw_modal_img">' +
        "          </div>" +
        "        </div>" +
        '        <div class="jw_product_modal_content_col">' +
        '          <h2 class="jw_modal_title" id="jwModalTitle">Rings</h2>' +
        '          <p class="jw_modal_price" id="jwModalPrice">$ 100</p>' +
        '          <p class="jw_modal_desc">' +
        "            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit" +
        "            laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure" +
        "            reprehenderit qui in ea voluptate" +
        "          </p>" +
        '          <div class="jw_modal_qty_action">' +
        '            <div class="jw_quantity">' +
        '              <span class="minus">-</span>' +
        '              <input type="text" value="1" readonly>' +
        '              <span class="plus">+</span>' +
        "            </div>" +
        '            <a class="bg-none-btn-two jw_modal_add_to_cart" href="javascript:;">' +
        "              <h6>Add to Cart</h6>" +
        '              <span class="jw_arrow_sharp">' +
        '                <img src="image/arrow.svg" alt="arrow">' +
        "              </span>" +
        "            </a>" +
        "          </div>" +
        '          <div class="jw_modal_accordion">' +
        '            <div class="jw_modal_acc_item active">' +
        '              <div class="jw_modal_acc_tab">' +
        "                <p>Description</p>" +
        '                <span class="material-symbols-sharp accordion_icon">remove</span>' +
        "              </div>" +
        '              <div class="jw_modal_acc_content" style="display: block;">' +
        '                <p class="p2" style="color:#153462C2;">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>' +
        '                <p class="p2" style="color:#153462C2;">Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>' +
        "              </div>" +
        "            </div>" +
        '            <div class="jw_modal_acc_item">' +
        '              <div class="jw_modal_acc_tab">' +
        "                <p>Shipping & Returns</p>" +
        '                <span class="material-symbols-sharp accordion_icon">add</span>' +
        "              </div>" +
        '              <div class="jw_modal_acc_content" style="display: none;">' +
        '                <p class="p2" style="color:#153462C2;">Free standard delivery on orders above $150. Items can be returned within 30 days of receipt in original condition.</p>' +
        '                <p class="p2" style="color:#153462C2;">Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>' +
        "              </div>" +
        "            </div>" +
        "          </div>" +
        "        </div>" +
        "      </div>" +
        "    </div>" +
        "  </div>" +
        "</div>";
      jQuery("body").append(modalHtml);
    }
  }

  // Trigger popup ONLY when clicking on product image
  jQuery(document).on(
    "click",
    ".jw_shop_stores_images, .jw_shop_now_images, .jw_shop_messonary_images, .jw_shop_stores_card_box .jw_shop_stores_images img, .jw_shop_now_card_box .jw_shop_now_images img, .jw_shop_messonary_card_box .jw_shop_messonary_images img",
    function (e) {
      // If clicking directly on text or links inside card content, don't trigger modal
      if (
        jQuery(e.target).closest(
          ".jw_shop_stores_card_box_content, .jw_shop_messonary_card_box_content",
        ).length &&
        !jQuery(e.target).is("img")
      ) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      ensureProductModalExists();

      var $imgContainer =
        jQuery(this).hasClass("jw_shop_stores_images") ||
        jQuery(this).hasClass("jw_shop_now_images") ||
        jQuery(this).hasClass("jw_shop_messonary_images")
          ? jQuery(this)
          : jQuery(this).closest(
              ".jw_shop_stores_images, .jw_shop_now_images, .jw_shop_messonary_images, .jw_shop_stores_card_box, .jw_shop_now_card_box, .jw_shop_messonary_card_box",
            );

      var $card = jQuery(this).closest(
        ".jw_shop_stores_card_box, .jw_shop_now_card_box, .jw_shop_messonary_card_box, .jw_shop_stores_wrap, .jw_shop_now_page_wrap, .jw_shop_messonary_page_wrap",
      );

      var imgSrc = jQuery(this).is("img")
        ? jQuery(this).attr("src")
        : $imgContainer.find("img").first().attr("src");

      var title = "Rings";
      var price = "$ 100";

      if ($card.length) {
        var cardTitle = $card
          .find(
            ".jw_shop_stores_card_box_content h5, .jw_shop_messonary_card_box_content h5, h5",
          )
          .first()
          .text()
          .trim();
        var cardPrice = $card
          .find(
            ".jw_shop_stores_card_box_content p, .jw_shop_messonary_card_box_content p, p:contains('$')",
          )
          .first()
          .text()
          .trim();
        if (cardTitle) title = cardTitle;
        if (cardPrice) price = cardPrice;
      }

      if (imgSrc) {
        jQuery("#jwModalImg").attr("src", imgSrc);
      }
      jQuery("#jwModalTitle").text(title);
      jQuery("#jwModalPrice").text(price);

      // Reset quantity to 1
      jQuery("#jwProductModal .jw_quantity input").val("1");

      // Reset accordion (first item open, second closed)
      jQuery("#jwProductModal .jw_modal_acc_item")
        .first()
        .addClass("active")
        .find(".jw_modal_acc_content")
        .show();
      jQuery("#jwProductModal .jw_modal_acc_item")
        .first()
        .find(".accordion_icon")
        .text("remove");
      jQuery("#jwProductModal .jw_modal_acc_item")
        .not(":first")
        .removeClass("active")
        .find(".jw_modal_acc_content")
        .hide();
      jQuery("#jwProductModal .jw_modal_acc_item")
        .not(":first")
        .find(".accordion_icon")
        .text("add");

      // Open modal
      jQuery("#jwProductModal").addClass("active");
      jQuery("body").addClass("noscroll");
    },
  );

  // Close modal on close button click
  jQuery(document).on("click", ".jw_product_modal_close", function (e) {
    e.preventDefault();
    jQuery("#jwProductModal").removeClass("active");
    jQuery("body").removeClass("noscroll");
  });

  // Close modal when clicking outside dialog (on backdrop)
  jQuery(document).on("click", "#jwProductModal", function (e) {
    if (jQuery(e.target).closest(".jw_product_modal_dialog").length === 0) {
      jQuery("#jwProductModal").removeClass("active");
      jQuery("body").removeClass("noscroll");
    }
  });

  // Close modal on Escape key
  jQuery(document).on("keydown", function (e) {
    if (e.key === "Escape" && jQuery("#jwProductModal").hasClass("active")) {
      jQuery("#jwProductModal").removeClass("active");
      jQuery("body").removeClass("noscroll");
    }
  });

  // Modal Quantity Plus
  jQuery(document).on(
    "click",
    "#jwProductModal .jw_quantity .plus",
    function (e) {
      e.preventDefault();
      var $input = jQuery(this).prev("input");
      var currentVal = parseInt($input.val(), 10) || 1;
      if (currentVal < 99) {
        $input.val(currentVal + 1);
      }
    },
  );

  // Modal Quantity Minus
  jQuery(document).on(
    "click",
    "#jwProductModal .jw_quantity .minus",
    function (e) {
      e.preventDefault();
      var $input = jQuery(this).next("input");
      var currentVal = parseInt($input.val(), 10) || 1;
      if (currentVal > 1) {
        $input.val(currentVal - 1);
      }
    },
  );

  // Modal Accordion Toggle
  jQuery(document).on(
    "click",
    "#jwProductModal .jw_modal_acc_tab",
    function (e) {
      e.preventDefault();
      var $tab = jQuery(this);
      var $item = $tab.closest(".jw_modal_acc_item");
      var $content = $item.find(".jw_modal_acc_content");
      var $icon = $tab.find(".accordion_icon");

      if ($item.hasClass("active")) {
        $item.removeClass("active");
        $content.slideUp(250);
        $icon.text("add");
      } else {
        // Close any other open accordion item in the modal (only one open at a time)
        var $otherItems = $item.siblings(".jw_modal_acc_item.active");
        $otherItems.removeClass("active");
        $otherItems.find(".jw_modal_acc_content").slideUp(250);
        $otherItems.find(".accordion_icon").text("add");

        $item.addClass("active");
        $content.slideDown(250);
        $icon.text("remove");
      }
    },
  );

  // Modal Add To Cart feedback
  jQuery(document).on(
    "click",
    "#jwProductModal .jw_modal_add_to_cart",
    function (e) {
      e.preventDefault();
      var $btn = jQuery(this);
      var $btnText = $btn.find("h6");
      var originalText = $btnText.text();
      $btnText.text("Added to Cart ✓");
      setTimeout(function () {
        $btnText.text(originalText);
      }, 1500);
    },
  );
});
/*=========================== jw_contact us end ===========================*/

$(document).ready(function () {
  // Ensure all input fields have an error message at the bottom
  // and the success message is shown at the bottom of the submit button.
  $("form, .jw_newsletter_form").each(function () {
    var $form = $(this);

    // Make newsletter inputs required
    if ($form.hasClass("jw_newsletter_form")) {
      $form.find("input").attr("required", true);
    }

    // 1. Inputs: add <p class="error-message"></p> after standard inputs and textareas if not present
    $form
      .find(
        'input:not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="checkbox"]):not([type="radio"]):not([type="search"]), textarea',
      )
      .each(function () {
        var $input = $(this);
        if ($form.hasClass("jw_newsletter_form")) {
          if (!$form.children(".error-message").length) {
            $form.append('<p class="error-message"></p>');
          }
        } else {
          if (!$input.next(".error-message").length) {
            $input.after('<p class="error-message"></p>');
          }
        }
      });

    // 2. Success message: move to the bottom of the submit button
    var $successMsg = $form.find(".success-message");

    var $submitBtn = $form.find(
      'button, input[type="submit"], a.bg-none-btn, a.bg-none-btn-two, a.jw_custom_buttom',
    );

    if ($submitBtn.length > 0) {
      if ($successMsg.length === 0) {
        $successMsg = $('<p class="success-message"></p>');
      }
      if ($form.hasClass("jw_newsletter_form")) {
        $form.append($successMsg);
      } else {
        $submitBtn.last().after($successMsg);
      }
    }

    // 3. Validation Logic
    $submitBtn.on("click", function (e) {
      var isValid = true;

      $form.find("input[required], textarea[required]").each(function () {
        var $input = $(this);
        var $errorMsg = $form.hasClass("jw_newsletter_form")
          ? $form.children(".error-message")
          : $input.next(".error-message");
        var fieldName =
          $input.attr("placeholder") || $input.attr("name") || "This field";

        if ($.trim($input.val()) === "") {
          $errorMsg
            .text(fieldName + " is required.")
            .css({ color: "red", "margin-top": "10px", display: "block" });
          isValid = false;
        } else {
          if ($input.attr("type") === "email") {
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test($.trim($input.val()))) {
              $errorMsg
                .text("Please enter a valid email address.")
                .css({ color: "red", "margin-top": "10px", display: "block" });
              isValid = false;
            } else {
              $errorMsg.hide();
            }
          } else {
            $errorMsg.hide();
          }
        }
      });

      if (!isValid) {
        e.preventDefault();
        $successMsg.hide();
      } else {
        e.preventDefault(); // Prevent page reload for demo template functionality
        $successMsg
          .text("Form submitted successfully!")
          .css({ color: "green", "margin-top": "10px", display: "block" });
        if ($form[0].reset) {
          $form[0].reset(); // Clear all fields if it's an actual form
        } else {
          $form.find("input").val("");
        }
      }
    });
  });

  // Clear error messages on input change
  $("form input, form textarea, .jw_newsletter_form input").on(
    "input",
    function () {
      var $wrapper = $(this).closest(".jw_newsletter_form").length
        ? $(this).closest(".jw_newsletter_form")
        : $(this).closest("form");
      if ($wrapper.hasClass("jw_newsletter_form")) {
        $wrapper.children(".error-message").hide();
        $wrapper.children(".success-message").hide();
      } else {
        $(this).next(".error-message").hide();
        $wrapper.find(".success-message").hide();
      }
    },
  );
});
