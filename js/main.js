(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var products = document.querySelectorAll(".product");

  if (reduceMotion) {
    document.body.classList.add("ready");
    products.forEach(function (product) {
      product.classList.add("seen");
    });
    return;
  }

  window.requestAnimationFrame(function () {
    window.requestAnimationFrame(function () {
      document.body.classList.add("ready");
    });
  });

  if (!("IntersectionObserver" in window)) {
    products.forEach(function (product) {
      product.classList.add("seen");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("seen");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  products.forEach(function (product) {
    observer.observe(product);
  });
})();
