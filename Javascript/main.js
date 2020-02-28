$(document).ready(function () {
    console.log("ready");
    $(".j_number").click(function () {
        console.log(this.value);
    })
    $(".j_operator").click(function () {
        console.log(this.value);
    })
    $(".j_clear").click(function () {
        console.log(this.value);
        $(".j_tela").val('');
    })
    $(".j_equal").click(function () {
        console.log(this.value);
    })
})