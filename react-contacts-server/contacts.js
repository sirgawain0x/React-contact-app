const clone = require('clone')
const config = require('./config')

const db = {}

const defaultData = {
  contacts: [
    {
      id: 1,
      name: 'Adam White',
      companyName: 'Florida Blue',
      email: 'adam.white@floridablue.com',
      contactNumber: '904-555-5555',
      designation: 'Software Developer',
      avatarURL: config.origin + '/ryan.jpg'
    },
    {
      id: 2,
      name: 'Michael Jackson',
      companyName: 'Times Union',
      email: 'michael@reacttraining.com',
      contactNumber: '904-777-7777',
      designation: 'Senior Software Developer',
      avatarURL: config.origin + '/michael.jpg'
    },
    {
      id: 3,
      name: 'Tyler McGinnis',
      companyName: 'TIAA',
      email: 'tyler@reacttraining.com',
      contactNumber: '818-777-7777',
      designation: 'Quality Assurance',
      avatarURL: config.origin + '/tyler.jpg'
    },
    {
      id: 4,
      name: 'Michelle West',
      companyName: 'Black Knight',
      email: 'west.michelle@blackknight.com',
      contactNumber: '585-888-8888',
      designation: 'Technical Lead',
      avatarURL: config.origin + '/ryan.jpg'
    },
    {
      id: 5,
      name: 'David Greene',
      companyName: 'Allstate',
      email: 'e@allstate.com',
      contactNumber: '313-666-6666',
      designation: 'Manager',
      avatarURL: config.origin + '/michael.jpg'
    }
  ]
}

const get = (token) => {
  let data = db[token]

  if (data == null) {
    data = db[token] = clone(defaultData)
  }

  return data
}

const add = (token, contact) => {
  if (!contact.id) {
    contact.id = Math.random().toString(36).substr(-8)
  }

  get(token).contacts.push(contact)

  return contact
}

const remove = (token, id) => {
  const data = get(token)
  const contact = data.contacts.find(c => c.id === id)

  if (contact) {
    data.contacts = data.contacts.filter(c => c !== contact)
  }

  return { contact }
}

module.exports = {
  get,
  add,
  remove
}
