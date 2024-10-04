import './assets/scss/all.scss';
import './assets/scss/pages/shoppingcart.scss';
import './assets/scss/pages/productOverview.scss';
import './assets/scss/pages/feature.scss';
import "bootstrap/dist/js/bootstrap.min.js";


$(document).ready(function () {
    const $backToTop = $('.backTotop');

    $(window).scroll(function () {
        const windowScrollTop = $(this).scrollTop(); // 当前滚动高度
        const documentHeight = $(document).height(); // 文件总高度
        const windowHeight = $(this).height(); // 视窗高度

        // 判断是否需要显示按钮
        if (windowScrollTop > documentHeight / 2 - windowHeight / 2) {
            $backToTop.fadeIn();

            // 设置 right 值根据窗口宽度
            const rightValue = $(this).width() >= 992 ? '40px' : '24px';
            $backToTop.css({ right: rightValue, top: '40px' }); // 固定 top 为 40px
        } else {
            $backToTop.fadeOut(); // 隐藏按钮
        }
    });

    $backToTop.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 100); // 返回顶部
    });
});
