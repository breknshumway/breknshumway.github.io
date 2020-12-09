$(document).ready(function () {
    initValidation('#myform');

});

function loadVisitors() {
    //called when 'visitors' menu item is clicked 
    //calls view 'showVisitors' 
    //calls view 'renderTable' 
    //calls view 'showTable'
}

function submitForm() {
    //called on form submit. Gets contents of form, creates visitor object, 
    //calls model 'modelAddVisitor' function
    //calls view 'renderTable' 
    //calls view 'showTable'
}

function addVisitor(visitor) {
    //called on 'click' of 'New Visitor' button 
    //calls view 'clearForm' to clear form contents
    //calls view 'showForm'
}

function deleteVisitor(id) {
    //called on 'click' of 'delete' icon in visitor list 
    //calls model.js modelDeleteVisitor
    //calls view 'renderTable' 
    //calls view 'showTable'
}