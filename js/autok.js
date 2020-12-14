$(document).ready(() => {
    $("#autokInformacio").append(informacioKiir());
    $.getJSON("https://webtechcars.herokuapp.com/api/cars", (data) => {
        $.each(data, (key, value) => {
            $(".autok").append(autoPeldany(value));
        })
    })
})

function informacioKiir(){
    return `<h2>A 20 évnél fiatalabb autók lilával vannak jelölve, míg az idősebbek barnával.</h2>`;
}

function autoPeldany(car){
   var aktualisIdo=new Date();
   var aktualisEv=aktualisIdo.getFullYear();
   //alert(aktualisEv);
    hanyeves=aktualisEv-car.year;
    
    if(hanyeves<20){
        return `<div class='auto fiatal'>
                    <h1>`+car.manufacturer+`</h1>
                    <h3>`+car.name+`</h3>
                    <p>Évjárat: `+car.year+`</p>
                    <p>Szín: `+car.color+`</p>
                    <p>Elérhető: `+car.avaiable+`</p>
                    <p>Lóerő: `+car.horsepower+`</p>
                </div>`;
    } else {
        return `<div class='auto oreg'>
                    <h1>`+car.manufacturer+`</h1>
                    <h3>`+car.name+`</h3>
                    <p>Évjárat: `+car.year+`</p>
                    <p>Szín: `+car.color+`</p>
                    <p>Elérhető: `+car.avaiable+`</p>
                    <p>Lóerő: `+car.horsepower+`</p>
                </div>`;
    }
}
