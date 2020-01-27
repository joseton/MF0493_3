var toggle = true;
function despliega() {
    if(toggle) {
        $("nav").css("height","200px");
        toggle = false;
    } else {
        $("nav").css("height","0");
        toggle = true;
    }
}
