
Put this inside:

```js
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch("https://snapshot.vinjan-inc.com/republic/log.json");
    const data = await res.json();
    const info = data.snapshot_info;

    document.getElementById("height").textContent = info.block_height;
    document.getElementById("size").textContent = info.size;

    const createdAt = new Date(info.created_at);
    const now = new Date();
    const diff = Math.floor((now - createdAt) / 60000);

    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;

    document.getElementById("last-updated").textContent =
      hours > 0
        ? hours + "h " + minutes + "m ago"
        : minutes + "m ago";

  } catch (err) {
    console.error(err);
  }
});
