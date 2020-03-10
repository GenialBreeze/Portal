window.onload=function () {
    let buttons = $(".btn");
    for (let btn in buttons){
        let wid = $(btn).width();
        $(btn).css("height", (wid*0.4)+"px")
    }
};
window.onresize=function () {
    let buttons = $(".btn");
    for (let btn in buttons){
        let wid = $(btn).width();
        $(btn).css("height", (wid*0.4)+"px")
    }
};