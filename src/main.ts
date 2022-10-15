/* eslint-disable @typescript-eslint/no-non-null-assertion */
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <button id="create">chrome.tabs.create</button>
  <button id="reload">chrome.tabs.reload</button>
  <button id="update">chrome.tabs.update</button>
`;

document.getElementById("create")?.addEventListener("click", () => {
  chrome.tabs.create({ url: "https://zenn.dev/eetann" });
});
document.getElementById("reload")?.addEventListener("click", () => {
  chrome.tabs.reload();
});
document.getElementById("update")?.addEventListener("click", () => {
  chrome.tabs.update({ url: "https://github.com/eetann" });
});
