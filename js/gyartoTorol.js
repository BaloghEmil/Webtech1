$(document).ready(() => {
    getManufacturers();

    $("#gyartoTorol").on('submit', (e) => {
        e.preventDefault();
        let id = $("form").find("select[name='manufacturer']").val();

        $.ajax({
            url: 'https://webtechcars.herokuapp.com/api/manufacturers/'+id,
            type: "DELETE",
            success: () => {
                getManufacturers();
            }
        })

    })
})

function getManufacturers(){
    $("select").children().remove();
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", (data) => {
        $.each(data, (key, value) => {
            $("select").append("<option value="+value._id+">"+value.name+"</option>");
        })
    })
}