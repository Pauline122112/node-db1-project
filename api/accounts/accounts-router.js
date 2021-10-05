const router = require('express').Router()
const md = require('./accounts-middleware')


router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  try {
  res.json('get accounts')
  } catch (err) {
    next({ status: 422, message: 'this is horrible'})
  }
})

router.get('/:id', md.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('get accounts by id')
  } catch (err) {
    next(err)
  }
})

router.post(
  '/', 
md.checkAccountPayload, 
md.checkAccountNameUnique, 
(req, res, next) => {
  // DO YOUR MAGIC
  try {
res.json("post accounts");
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
