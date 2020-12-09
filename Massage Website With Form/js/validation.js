const stateAbbreviations = [
  'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA',
  'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA',
  'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
  'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
  'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
];

function initValidation(formName) {

  let $form = $(formName);

  $(':input').change(function (ev) {
    validateForm();
    if (!this.checkValidity())
      $(this).addClass("was-validated")
  });

  $("#myform").submit(function (event) {
    $form = $("#myform");
    formEl = $form.get(0);

    event.preventDefault();
    event.stopPropagation();

    validateForm();

    if (!formEl.checkValidity()) {
      $(":input").addClass("was-validated")
    }
    else {
      $('#myform').hide()
      $('#formTitle').hide()
      $('#newVisitor').show()
    }


  });
}

function validateForm() {
  validateState("#state", "You must enter a valid two character state code, e.g., UT");
  validateCheckboxGroup("#newspaper", "you must select at least one!");

}
function validateState(id, msg) {
  $el = $(id).val().toUpperCase();
  let valid = false;
  if (stateAbbreviations.includes($el)) {
    valid = true
  }
  setElementValidity(id, valid, msg);
}

function validateCheckboxGroup(fieldName, message) {
  let valid = false;
  $('input[type="checkbox"]').each(function () {
    if ($(this).is(":checked")) {
      valid = true;
    }
  });

  setElementValidity(fieldName, valid, message);

  return valid;
}

function setElementValidity(fieldName, valid, message) {
  let $field = $(fieldName);
  let el = $field.get(0);
  if (valid) {

    el.setCustomValidity('');
  } else {

    el.setCustomValidity(message);

  }

}