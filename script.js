
$.ajax({
    url: 'http://localhost:8000/countries',
    success: function getCountries  (data, statuts, response) {
        console.log(data[0]);
    }
});
