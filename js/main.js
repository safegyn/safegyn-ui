$(document).ready(function () {

    $('#banner-search-select').select2({
    }); 
    
});


function handleAjaxError(response) {
    var response = JSON.parse(response.responseText);
    alert(response.message);
}