const root = document.querySelector("html");

const cursor = document.createElement("div");
cursor.innerHTML = "Kay";
cursor.classList.add("cursor");
root.appendChild(cursor);

const cursor_follower = document.createElement("div");
cursor_follower.innerHTML = "Kyaw";
cursor_follower.classList.add("cursor", "cursor_follower");
root.appendChild(cursor_follower);

root.addEventListener("mousemove", (e) => {
  setPosition(cursor, e);
  setPosition(cursor_follower, e);
});

function setPosition(element, e) {
  element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px,0)`;
}
