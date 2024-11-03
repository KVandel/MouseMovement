const root = document.querySelector("html");

const cursor = document.createElement("div");
//cursor.innerHTML = "Kay";
cursor.classList.add("cursor");
root.appendChild(cursor);

const cursor_follower = document.createElement("div");
//cursor_follower.innerHTML = "Kyaw";
cursor_follower.classList.add("cursor", "cursor_follower");
root.appendChild(cursor_follower);

root.addEventListener("mousemove", (e) => {
  setPosition(cursor, e.clientX, e.clientY, 0, 0);
  setPosition(cursor_follower, e.clientX, e.clientY, 30, 20);
});
/*
function setPosition(element, e, offx, offy) {
  element.style.transform = `translate3d(${e.clientX + offx}px, ${
    e.clientY + offy
  }px,0)`;
}*/

root.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  setPosition(cursor, touch.clientX, touch.clientY, 0, 0);
  setPosition(cursor_follower, touch.clientX, touch.clientY, 30, 20);
});

function setPosition(element, x, y, offX, offY) {
  element.style.transform = `translate3d(${x + offX}px, ${y + offY}px,0)`;
}
