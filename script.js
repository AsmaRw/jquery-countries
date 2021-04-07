function getCountries() {
    $.ajax({
        url: "http://localhost:8000/countries",
        success: function (data, status, response) {
            for (var i = 0; i < data.length; i++) {
                $("ul").append(`<li>${data.reverse()[i]}</li>`)
            }
        }
    })
}

$(function () {

    $("#btnShowCountries").click(function () {

        getCountries()

    })

})

