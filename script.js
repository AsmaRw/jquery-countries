$(document).ready(function () {
    $('#btnShowCountries').click(function () {
        function getCountries() {

            $.ajax({
                url: 'http://localhost:8000/countries',
                success: function (data, statuts, response) {
                    console.log(data);
                }
        })
    }
    })
})

