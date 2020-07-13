var toggle_box_label = document.getElementsByClassName("toggle-box__label");

for (var i = 0; i < toggle_box_label.length; i++) {
    toggle_box_label[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var toggle_box_content = this.nextElementSibling;

        if (toggle_box_content.style.maxHeight)
            toggle_box_content.style.maxHeight = null;
        else
            toggle_box_content.style.maxHeight = toggle_box_content.scrollHeight + "px";
    });
}