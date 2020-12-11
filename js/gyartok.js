var counter=0;
$(document).ready(() => {
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", (data) => {
        $.each(data, (key, value) => {
            $(".gyartok").append(createGyarto(value));
            counter++;
            gyartoInfo(counter);
        })
    })
    //$("#gyartoInformacio").append(gyartoInfo(counter));
})

function createGyarto(manufacturer){
    return `<div class='gyarto'>
                <h1 class="gyartoh1">Gyártó:</h1>
                <h1>`+manufacturer.name+`</h1>
                <p>Ország: `+manufacturer.country+`</p>
                <p>Alapítva: `+manufacturer.founded+`</p>
            </div>`;
}

function gyartoInfo(darab){
    $("#gyartoInformacio").html("");
    $("#gyartoInformacio").html(`<h1>Jelenleg az adatbázisban `+darab+`db gyártó szerepel.</h1>`);
}
