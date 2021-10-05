const router = require('express').Router()
const md = require('./accounts-middleware')
const Account = require('./accounts-model')


router.get('/', async (req, res, next) => {
  try {
    const accounts = await Account.getAll()
  res.json(accounts)
  } catch (err) {
    next({ status: 422, message: 'this is horrible'})
  }
})

router.get('/:id', md.checkAccountId, async (req, res, next) => {
  try {
    const account = await Account.getById(req.params.id)
    res.json(account)
  } catch (err) {
    next(err)
  }
})

router.post(
  '/', 
md.checkAccountPayload, 
md.checkAccountNameUnique, 
async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const newAccount = await Account.create(req.body)
res.status(201).json(newAccount);
  } catch (err) {
    next(err)
  }
})

router.put(
	"/:id",
	md.checkAccountId,
	md.checkAccountPayload,
	md.checkAccountNameUnique,
	(req, res, next) => {
		// DO YOUR MAGIC
		try {
			res.json("update accounts by id");
		} catch (err) {
			next(err);
		}
	}
);

router.delete('/:id', md.checkAccountId,(req, res, next) => {
  // DO YOU
  try {
res.json("delete accounts by id");
  }catch (err) {
    next(err)
  } 
})

router.use((err, req, res, next) => { // 	// eslint-disable-line
	res.status(err.status || 500).json({
		customMessage: "something tragic inside projects router",
		error: err.message,

	});
})

module.exports = router;
