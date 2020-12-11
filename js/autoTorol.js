$(document).ready(() => {
    getCars();
    $("#autoTorol").on('submit', (e) => {

        e.preventDefault();
        let id = $("form").find("select[name='name']").val();
        console.log(id);
        $.ajax({
            url: 'https://webtechcars.herokuapp.com/api/cars/'+id,
            type: "DELETE",
            success: () => {
                getCars();
            }
        })

    })
})

function getCars(){
    $("select").children().remove();
    $.getJSON("https://webtechcars.herokuapp.com/api/cars", (data) => {
        $.each(data, (key, value) => {
            $("select").append("<option value="+value._id+">"+value.name+"</option>");
        })
    })
}