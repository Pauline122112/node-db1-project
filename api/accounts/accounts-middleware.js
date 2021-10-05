exports.checkAccountPayload = (req, res, next) => {
  console.log("checkAccountPayload middleware");
}

exports.checkAccountNameUnique = (req, res, next) => {
  console.log("checkAccountNameUnique middleware");
}

exports.checkAccountId = (req, res, next) => {
  console.log('checkAccountId middleware')
}
