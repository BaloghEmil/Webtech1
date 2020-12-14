$(document).ready(() => {
    $("#gyartoFelvisz").on('submit', (e) => {
        e.preventDefault();
        var nev=$("form").find("input[name='name']").val();
        var orszag=$("form").find("input[name='country']").val();
        var alapitas=$("form").find("input[name='founded']").val();
        let gyarto = {
            name: nev,
            country: orszag,
            founded: alapitas,
        };
        //így üres adat nem kerülhet be
        if(nev.length>0 && orszag.length>0 && alapitas.length>0)
        $.ajax({
            url: 'https://webtechcars.herokuapp.com/api/manufacturers',
            type: "post",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(gyarto),
        });
        $("form").find("input[name='name']").val("");
        $("form").find("input[name='country']").val("");
        $("form").find("input[name='founded']").val("");
    })
})