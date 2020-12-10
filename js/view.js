
function showHide(paraId) {
    $('#' + paraId).toggle();
}

function showHide2(showLyst, hideLyst) {
    for (let show of showLyst) {
        $('#' + show).show();
    }

    for (let hide of hideLyst) {
        $('#' + hide).hide();
    }

}




function renderTable(containerId, visitors) {//renders table from global 'visitors' object array
}

function showVisitors() {//shows visitor container and hides all other site content containers
}

function showList() {//shows visitor list and hides form
}

function showForm() {//shows visitor form and hides list
}

function clearForm() {//clears values on inputs so next time form is loaded they don't have old contents
}