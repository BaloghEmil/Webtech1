$(document).ready(() => {
    $("#content").load("kezdolap.html");

    $.each($(".nav-elem"), (index, value) => {
        $(value).click((e) => {
            e.preventDefault();
            $('#content').load(value.href);
        })
    })
})