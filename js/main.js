
function showHide(paraId) {
    var text = document.getElementById(paraId);

    if (text.style.display === "none") {
        text.style.display = "block";
    }
    else {
        text.style.display = "none";
    }
}

function showHide2(showLyst, hideLyst) {

    for (let show of showLyst) {
        document.getElementById(show).style.display = "block";
    }

    for (let hide of hideLyst) {
        document.getElementById(hide).style.display = "none";
    }

}