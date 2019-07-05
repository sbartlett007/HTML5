sample_data = "Mobil-17: 3.49; Kroger-03: 3.36;Exxon-01: 3.59; Kroger-04: 3.49;Valero-A: 3.41; Chevron-01: 3.52";
of_interest = "Kroger-04";

function init() {
    var paragraph_object =
    document.getElementById("paragraph");
    var data_list = sample_data.split(';');
    for (j = 0; j < data_list.length; j++) {
    parts = data_list[j].split(':');
    var site = parts[0].trim()
    if (site == of_interest) {
        var message = "Given the sample data '" +
        sample_data + "', this program parsed out the price $" + parts[1].trim() + " for the " + site +
        " site.";
        paragraph_object.innerHTML = message;
    }
}
}