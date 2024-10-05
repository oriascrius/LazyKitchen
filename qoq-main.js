import "./assets/scss/all.scss";
import "./assets/scss/pages/shoppingcart.scss";
import "./assets/scss/pages/productOverview.scss";
import "./assets/scss/pages/feature.scss";
import "bootstrap/dist/js/bootstrap.min.js";

// 回到按鈕上方
$(document).ready(function () {
  const $backToTop = $(".backTotop");

  $(window).scroll(function () {
    const windowScrollTop = $(this).scrollTop(); // 取得當前滾動高度
    const documentHeight = $(document).height(); // 取得文件總高度
    const windowHeight = $(this).height(); // 取得視窗高度

    // 判斷是否需要顯示按鈕
    if (windowScrollTop > documentHeight / 2 - windowHeight / 2) {
      $backToTop.fadeIn();

      // 根據視窗寬度設置 right 值
      const rightValue = $(this).width() >= 992 ? "40px" : "24px";
      $backToTop.css({ right: rightValue, top: "40px" }); // 固定 top 為 40px
    } else {
      $backToTop.fadeOut(); // 隱藏按鈕
    }
  });

  $backToTop.click(function () {
    $("html, body").animate({ scrollTop: 0 }, 100); // 返回頂端
  });
});
