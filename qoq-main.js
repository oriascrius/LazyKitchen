import "./assets/scss/all.scss";
import "./assets/scss/pages/shoppingcart.scss";
import "./assets/scss/pages/productOverview.scss";
import "./assets/scss/pages/feature.scss";
import "bootstrap/dist/js/bootstrap.min.js";

// 回到上方按鈕判斷
$(document).ready(function () {
  const $backToTop = $(".backTotop");

  $(window).scroll(function () {
    const windowScrollTop = $(this).scrollTop(); // 取得当前滚动高度
    const documentHeight = $(document).height(); // 取得文件总高度
    const windowHeight = $(this).height(); // 取得窗口高度

    // 判断是否需要显示按钮
    if (windowScrollTop > documentHeight / 2 - windowHeight / 2) {
      if (!$backToTop.hasClass("show")) {
        $backToTop.addClass("show");
      }

      // 根据窗口宽度设置 right 值
      const rightValue = $(this).width() >= 992 ? "40px" : "24px";
      $backToTop.css({ right: rightValue, top: "40px" }); // 固定 top 为 40px
    } else {
      if ($backToTop.hasClass("show")) {
        $backToTop.removeClass("show");
      }
    }
  });

  $backToTop.click(function () {
    $("html, body").animate({ scrollTop: 0 }, 100); // 返回顶端
  });
});
