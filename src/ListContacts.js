import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


// Components, class method

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render() {
    const { contacts, onDeleteContact } = this.props
    const { query } = this.state
    let showingContacts

    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingContacts = contacts.filter((contact) => match.test(contact.name))
    } else {
      showingContacts = contacts
    }

    showingContacts.sort(sortBy('name'))

    return (
      <div className='list-contacts'>
        <h3 className='page-title'>Contacts Directory</h3>

        <div className='list-contacts-top'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Search contacts..'
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}/>
            <Link
              to='/create'
              className='add-contact'>
              Add Contact</Link>
        </div>

        {showingContacts.length !== contacts.length && (
          <div className='showing-contacts'>
            <span>{showingContacts.length} of {contacts.length} | </span>
            <button onClick={this.clearQuery}>Show All</button>
          </div>
        )}

        <ol className='contact-list'>
          {showingContacts.map( contact => (
            <li key={contact.id} className='contact-list-item'>
              <div className='contact-avatar' style={{
                backgroundImage: `url(${contact.avatarURL})`
              }}> </div>
              <div className='contact-details'>
                <p>{contact.name}</p>
                <p>{contact.companyName}</p>
                <p>{contact.email}</p>
                <p>{contact.contactNumber}</p>
                <p>{contact.designation}</p>
              </div>
              <button className='contact-edit'>Edit</button>
              <button className='contact-remove' onClick={() => onDeleteContact(contact)}>
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}





export default ListContacts
