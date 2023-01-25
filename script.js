(()=> {
    // const btn = document.getElementById('btn_show');
    // btn.addEventListener("click", function () {
    //
    // const width = document.getElementById("input_width").value;
    // const height = document.getElementById("input_height").value;
    // const radius = document.getElementById("input_radius").value;
    // const color = document.getElementById("input_color").value;
    // const count = document.getElementById("input_count").value;
    //
    // const playground = document.getElementById("playground");
    //
    // for (let i = 0; i < count; i++) {
    //     const block = document.createElement("div");
    //     block.style.width = width + "px";
    //     block.style.height = height + "px";
    //     block.style.borderRadius = radius + "px";
    //     block.style.backgroundColor = color;
    //     block.style.margin = '20px 0px';
    //
    //     const firstChild = playground.firstChild;
    //     playground.insertBefore(block, firstChild);
    //     }
    // });
    $(document).ready(function(){
        $("#btn_show").on('click',function(){
            const width = $("#input_width").val();
            const height = $("#input_height").val();
            const radius = $("#input_radius").val();
            const color = $("#input_color").val();
            const count = $("#input_count").val();

            for (let i = 0; i < count; i++) {
                $("#playground").prepend(`<div style="width: ${width}px; height: ${height}px; border-radius: ${radius}px; background-color: ${color}; margin: 20px 0px;"></div>`);
            }
        });
    });

})();
