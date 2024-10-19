import "./assets/scss/all.scss";
import "./assets/scss/pages/shoppingcart.scss";
import "./assets/scss/pages/productOverview.scss";
import "./assets/scss/pages/feature.scss";
import "bootstrap/dist/js/bootstrap.min.js";



// $(document).ready(function () {
//   // 計算總金額
//   function updateGrandTotal() {
//     let grandTotal = 0;
//     const productTotals = {};

//     // 計算每個商品的總價
//     $(".product:visible").each(function () {
//       const productId = $(this).data("id");
//       const totalPrice = parseInt(
//         $(this).find(".total-price").text().replace("$", "")
//       );

//       // 記錄每個商品的總價
//       if (productTotals[productId]) {
//         productTotals[productId] += totalPrice;
//       } else {
//         productTotals[productId] = totalPrice;
//       }
//     });

//     // 累加總金額
//     for (const id in productTotals) {
//       grandTotal += productTotals[id];
//     }

//     $("#grandTotal").text(`$  ${grandTotal}`);
//   }

//   // 處理商品數量的變動
//   $(".product-quantity button").click(function () {
//     const product = $(this).closest(".product");
//     const productId = product.data("id");
//     const unitPrice = parseInt(product.data("unit-price")); // 獲取單價
//     const counter = product.find(".counter-value");
//     let value = parseInt(counter.text());

//     // 增加或減少數量
//     if ($(this).hasClass("plusBtn") && value < 9) {
//       value += 1;
//     } else if ($(this).hasClass("minusBtn")) {
//       if (value > 1) {
//         value -= 1;
//       } else if (value === 1) {
//         // 當數量為1時，點擊減號按鈕會刪除該商品
//         const listItem = $(this).closest(".cartListProduct"); // 获取最近的cartListProduct元素
//         Swal.fire({
//           title: "確定要刪除這個商品嗎？",
//           icon: "warning",
//           showCancelButton: true,
//           confirmButtonColor: "#7E7E7E",
//           cancelButtonColor: "#AD4214",
//           confirmButtonText: "確定",
//           cancelButtonText: "取消",
//           customClass: {
//             popup: "swal2-small-popup", // 使用自定義類來調整小視窗
//             title: "swal2-small-title", // 調整標題大小
//           },
//         }).then((result) => {
//           // 刪除按鈕跳出的對話框的結果
//           if (result.isConfirmed) {
//             Swal.fire({
//               title: "商品已刪除！",
//               icon: "success",
//               showConfirmButton: false,
//               timer: 1000,
//               position: "top",
//               toast: true,
//             });
//             if (listItem.length) {
//               listItem.remove(); // 刪除該商品的li元素
//               updateGrandTotal(); // 刪除後更新總計
//             }
//           }
//         });
//         return; // 停止後續執行，避免在刪除後還繼續更新價格
//       }
//     }

//     // 同步更新相同 data-id 的其他元素
//     $(`.product[data-id="${productId}"] .counter-value`).text(value);

//     // 更新單一商品的總價
//     const totalPrice = unitPrice * value;
//     $(`.product[data-id="${productId}"] .total-price`).text("$" + totalPrice);

//     // 更新所有商品的總計
//     updateGrandTotal();
//   });

//   // 刪除功能 + 刪除確認對話框
//   const deleteButtons = $(".delete-btn");

//   deleteButtons.each(function () {
//     $(this).on("click", function (event) {
//       event.preventDefault(); // 防止按鈕的預設行為
//       const listItem = $(this).closest(".cartListProduct"); // 获取最近的cartListProduct元素

//       // 顯示 SweetAlert2 確認對話框
//       Swal.fire({
//         title: "確定要刪除這個商品嗎？",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#7E7E7E",
//         cancelButtonColor: "#AD4214",
//         confirmButtonText: "確定",
//         cancelButtonText: "取消",
//       }).then((result) => {
//         if (result.isConfirmed) {
//           Swal.fire({
//             title: "商品已刪除！",
//             icon: "success",
//             showConfirmButton: false,
//             timer: 1000,
//             position: "top",
//             toast: true,
//           });
//           // 刪除商品並更新總計
//           if (listItem.length) {
//             listItem.remove();
//             updateGrandTotal();
//           }
//         }
//       });
//     });
//   });

//   // 初次載入頁面時更新總計
//   updateGrandTotal();
// });

// // 回到上方按鈕判斷
// $(document).ready(function () {
//   const $backToTop = $(".backTotop");

//   $(window).scroll(function () {
//     const windowScrollTop = $(this).scrollTop(); // 取得当前滚动高度
//     const documentHeight = $(document).height(); // 取得文件总高度
//     const windowHeight = $(this).height(); // 取得窗口高度

//     // 判断是否需要显示按钮
//     if (windowScrollTop > documentHeight / 2 - windowHeight / 2) {
//       if (!$backToTop.hasClass("show")) {
//         $backToTop.addClass("show");
//       }

//       // 根据窗口宽度设置 right 值
//       const rightValue = $(this).width() >= 992 ? "40px" : "24px";
//       $backToTop.css({ right: rightValue, top: "40px" }); // 固定 top 为 40px
//     } else {
//       if ($backToTop.hasClass("show")) {
//         $backToTop.removeClass("show");
//       }
//     }
//   });

//   $backToTop.click(function () {
//     $("html, body").animate({ scrollTop: 0 }, 100); // 返回顶端
//   });
// });

// AOS
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    easing: "ease",
    duration: 400,
  });
});
