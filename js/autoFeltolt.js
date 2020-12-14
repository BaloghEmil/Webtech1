$(document).ready(() => {
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", (data) => {
        $.each(data, (key, value) => {
            $("#gyartokValaszto").append("<option value="+value.name+">"+value.name+"</option>");
        })
    })

    $("form").on('submit', (e) => {
        e.preventDefault();
        var nev = $("form").find("input[name='name']").val();
        var fogyasztas = $("form").find("input[name='consumption']").val();
        var szin = $("form").find("input[name='color']").val();
        var gyarto = $("form").find("select[name='manufacturer']").val();
        var elerheto = $("form").find("input[name='available']").val();
        var evjarat = $("form").find("input[name='year']").val();
        var loero = $("form").find("input[name='horsepower']").val();
        let car = {
            name: nev,
            consumption: fogyasztas+"l/100km",
            color: szin,
            manufacturer: gyarto,
            avaiable: elerheto,
            year: evjarat,
            horsepower: loero,
            
        };
        console.log(car);
        if(nev.length>0 && fogyasztas.length>0 && szin.length>0 && gyarto.length>0 && elerheto.length > 0 && evjarat.length > 0 && loero.length > 0)
        $.ajax({
            url: 'https://webtechcars.herokuapp.com/api/cars',
            type: "post",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(car)
        }).succes(clear());
        else alert("hianyzo adat");
    })
})


function clear(){
    $("form").find("input[name='name']").val("");
    $("form").find("input[name='consumption']").val("");
    $("form").find("input[name='color']").val("");
    $("form").find("select[name='manufacturer']").val("");
     $("form").find("input[name='available']").val("");
     $("form").find("input[name='year']").val("");
    $("form").find("input[name='horsepower']").val("");
}