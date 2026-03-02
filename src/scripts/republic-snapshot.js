Put this inside:

```js
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch(
      "https://snapshot.vinjan-inc.com/republic/log.json"
    );

    if (!response.ok) throw new Error("Network error");

    const data = await response.json();
    const info = data.snapshot_info;

    document.getElementById("height").textContent = info.block_height;
    document.getElementById("size").textContent = info.size;

    const createdAt = new Date(info.created_at);
    const now = new Date();
    const diffMinutes = Math.floor((now - createdAt) / 60000);

    const hours = Math.floor(diffMinutes / 60);
    const minutes = diffMinutes % 60;

    document.getElementById("last-updated").textContent =
      hours > 0
        ? hours + "h " + minutes + "m ago"
        : minutes + "m ago";

  } catch (error) {
    console.error("Snapshot fetch failed:", error);
    document.getElementById("height").textContent = "Unavailable";
    document.getElementById("last-updated").textContent = "Unavailable";
    document.getElementById("size").textContent = "Unavailable";
  }
});
