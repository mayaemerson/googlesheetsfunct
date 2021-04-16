function userEmail() {
  var emailUser = Session.getEffectiveUser().getUsername()
  console.log(emailUser)
}