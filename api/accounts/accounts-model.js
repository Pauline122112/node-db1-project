const db = require('../../data/db-config')
const server = require('../server')


const getAll = () => {
  //select * from accounts;
  return db('accounts')
}

const getById = id => {
  //select * from accounts where id = 1;
  return db('accounts').where('id', id).first()
}

const create = async account => {
  const [id] = await db('accounts').insert(account)
  return getById(id)
}

const updateById = async (id, account) => {
  await db('accounts').where('id', id).update(account)
}

const deleteById = id => {
  //delete from account
  return db('accounts').where('id', id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
