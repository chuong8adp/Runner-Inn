const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// * --------------------------------------------------------->
// * header
let flag = false;
let account = $(".account");
let recover = $(".js-link1");
let login = $(".js-link2");
let recover_panel = $(".recover_panel");
let login_panel = $(".login_panel");
let recover_panels = $(".recover_panels");
let login_panels = $(".login_panels");
let icon_down = $(".icon_down");
let cart = $(".cart");
let accounts = $(".scroll-account");
let carts = $(".scroll-cart");
let search = $(".scroll-search");
let restore = $(".restorepass");
let return_login = $(".returnlogin");

function box_account() {
  if (flag == false) {
    account.classList.remove("hide");
    icon_down.classList.add("rotate");
    icon_down.classList.remove("rotate_2");
    flag = true;
  } else {
    account.classList.add("hide");
    icon_down.classList.add("rotate_2");
    icon_down.classList.remove("rotate");
    flag = false;
  }
}

function box_accounts() {
  if (flag == false) {
    accounts.classList.remove("hide");
    flag = true;
  } else {
    accounts.classList.add("hide");
    flag = false;
  }
}

recover.onclick = function () {
  recover_panel.classList.remove("hide");
  login_panel.classList.add("hide");
};

login.onclick = function () {
  recover_panel.classList.add("hide");
  login_panel.classList.remove("hide");
};

function box_search() {
  if (flag == false) {
    search.classList.remove("hide");
    flag = true;
  } else {
    search.classList.add("hide");
    flag = false;
  }
}

restore.onclick = function () {
  recover_panels.classList.remove("hide");
  login_panels.classList.add("hide");
};

return_login.onclick = function () {
  recover_panels.classList.add("hide");
  login_panels.classList.remove("hide");
};

function box_cart() {
  if (flag == false) {
    cart.classList.remove("hide");
    flag = true;
  } else {
    cart.classList.add("hide");
    flag = false;
  }
}

function box_carts() {
  if (flag == false) {
    carts.classList.remove("hide");
    flag = true;
  } else {
    carts.classList.add("hide");
    flag = false;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let header = $(".header-scroll");
  window.addEventListener("scroll", function () {
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      header.classList.remove("hide")
    } else {
      header.classList.add("hide")
    }
  });
});
// * --------------------------------------------------------->
// * product

var product = localStorage.getItem("product")
  ? JSON.parse(localStorage.getItem("product"))
  : [];

const products = $$(".col-md");

products.forEach(function (element, index) {
  element.addEventListener("click", function (event) {
    let p1 = element.querySelector(".pro-name").innerText;
    let p2 = element.querySelector(".pro-price").innerText;
    product = {
      name: p1,
      price: p2,
    };
    localStorage.setItem("product", JSON.stringify(product));
  });
});

