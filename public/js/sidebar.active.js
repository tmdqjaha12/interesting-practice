$.widget.bridge("uibutton", $.ui.button);
console.log("test");

window.addEventListener("load", (event) => {
  const navLink = document.getElementsByClassName("nav-link");

  for (let i = 0; i < navLink.length; i++) {
    // pathname
    console.log(window.location.pathname);
    if (
      navLink[i].getAttribute("href")?.split("?")[0] ===
      window.location.pathname
    ) {
      navLink[i].className += " active";
      if (navLink[i].parentElement.parentElement?.parentElement) {
        navLink[i].parentElement.parentElement.parentElement.className +=
          " menu-is-opening menu-open";
        navLink[
          i
        ].parentElement.parentElement.parentElement.children[0].className +=
          " active";
      }
    }
  }
});
