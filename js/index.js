var toggle = true;
function despliega() {
    if(toggle) {
        $("nav").css("height","20%");
        toggle = false;
    } else {
        $("nav").css("height","0");
        toggle = true;
    }
}
