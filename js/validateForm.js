$('#contactForm').submit(function() {
  let name = $('#contactName');
  let email = $('#contactEmail');
  let subject = $('#contactSubject');
  let message = $('#contactMessage');
  let check = true
  var eregex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  $('#messageFail').hide();
  $('#subjectFail').hide();
  $('#nameFail').hide();
  $('#emailFail').hide();

  if (name.val().length == 0){
    $('#nameFail').show();
    check = false;
  }

  if (email.val().length == 0 || !eregex.test(email.val())){
    $('#emailFail').show();
    check = false;
  }
  if (subject.val().length <5){
    $('#subjectFail').show();
    check = false;
  }
  if (message.val().length <20){
    $('#messageFail').show();   
    check = false;
  }
  if(!check){
    return false;
  }
})

