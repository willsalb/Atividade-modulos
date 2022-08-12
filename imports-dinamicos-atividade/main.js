const bt = document.getElementById("bt");
const body = document.getElementsByTagName("body")[0];

const listener = function () {
  bt.addEventListener("click", async () => {
    const { paintPink } = await import("./modules/module.mjs");

    paintPink(body);
  });
};

listener();
