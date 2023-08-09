# Sticky Scroll

A rectangular <div></div> element that when the scroll position reaches the top of the screen (scrollY), becomes sticky or fixed in position. 
When the user scrolls past a certain distance, defined as `document.documentElement.scrollHeight` minus `window.innerHeight`, the element will toggle back to sticky position.
Currently, working on re-insertion component, as default behavior is to go back to original DOM level. The full effect of the feature includes re-inserting the relative positioned element at the exact height it no longer becomes sticky.

https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
