jQuery(document).ready(function () {
  var swiper = new Swiper("#js-gallery-swiper", {
    // Swiperオプション
    loop: true, // 無限ループの有効化
    autoplay: {
      delay: 0, // 2.5秒ごとに自動再生
      disableOnInteraction: false, // ユーザーの操作後も自動再生を継続
    },
    slidesPerView: 3, // 一度に表示するスライドの数
    spaceBetween: -40, // スライド間のスペース
    speed: 4000, // スライドのスピード（ミリ秒）

    breakpoints: {
      730: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      550: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      450: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });
});
