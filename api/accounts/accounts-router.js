const router = require('express').Router()

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  try {
  res.json('get accounts')
  } catch (err) {
    next({ status: 422, message: 'this is horrible'})
  }
})

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('get accounts by id')
  } catch (err) {
    next(err)
  }
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
  try {
res.json("post accounts");
  } catch (err) {
    next(err)
  }
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  try {
res.json("update accounts by id");
  } catch (err) {
    next(err)
  }
});

router.delete('/:id', (req, res, next) => {
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
