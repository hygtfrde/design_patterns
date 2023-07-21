function toggleSpecificSubmenu(event) {
  event.stopPropagation();
  const subMenu = event.target.nextElementSibling;
  if (subMenu) {
    toggleSubMenu(subMenu);
  }
}

function closeAllChildSubmenus(subMenu) {
  const childSubmenus = subMenu.querySelectorAll(".sub-menu");
  childSubmenus.forEach(child => {
    child.setAttribute("data-visible", "false");
    closeAllChildSubmenus(child);
  });
}

function closeAllSubmenusExcept(exceptSubMenu) {
  const parentMenu = exceptSubMenu.parentElement.parentElement;
  const childSubmenus = parentMenu.querySelectorAll(".sub-menu");
  childSubmenus.forEach(subMenu => {
    if (subMenu !== exceptSubMenu) {
      subMenu.setAttribute("data-visible", "false");
      closeAllChildSubmenus(subMenu);
    }
  });
}

function toggleSubMenu(subMenu) {
  const isVisible = subMenu.getAttribute("data-visible") === "true";
  if (isVisible) {
    subMenu.setAttribute("data-visible", "false");
    const childSubmenus = subMenu.querySelectorAll(".sub-menu");
    childSubmenus.forEach(child => {
      child.setAttribute("data-visible", "false");
    });
  } else {
    subMenu.setAttribute("data-visible", "true");
  }
}
