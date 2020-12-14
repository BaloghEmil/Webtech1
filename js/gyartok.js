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

function createGyarto(gyarto){
    return `<div class='gyarto'>
                <h1 class="gyartoh1">Gyártó:</h1>
                <h1>`+gyarto.name+`</h1>
                <p>Ország: `+gyarto.country+`</p>
                <p>Alapítva: `+gyarto.founded+`</p>
            </div>`;
}

function gyartoInfo(darab){
    $("#gyartoInformacio").html("");
    $("#gyartoInformacio").html(`<h1>Jelenleg az adatbázisban `+darab+`db gyártó szerepel.</h1>`);
}
