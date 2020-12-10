
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