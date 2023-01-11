(()=> {
    const btn = document.getElementById('btn_show');
    btn.addEventListener("click", function () {

    const width = document.getElementById("input_width").value;
    const height = document.getElementById("input_height").value;
    const radius = document.getElementById("input_radius").value;
    const color = document.getElementById("input_color").value;
    const count = document.getElementById("input_count").value;

    const playground = document.getElementById("playground");

    for (let i = 0; i < count; i++) {
        const block = document.createElement("div");
        block.style.width = width + "px";
        block.style.height = height + "px";
        block.style.borderRadius = radius + "px";
        block.style.backgroundColor = color;
        block.style.margin = '20px 0px';

        const firstChild = playground.firstChild;
        playground.insertBefore(block, firstChild);
        }
    });
})();