import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import searlizeForm from 'form-serialize'
import ImageInput from './ImageInput'

class CreateContact extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const values = searlizeForm(e.target, { hash: true });
    if(this.props.onCreateContact) {
      this.props.onCreateContact(values)
    }
  }

  render() {
    return (
      <div>
        <Link to='/' className='close-create-contact'>Close</Link>
        <form onSubmit={this.handleSubmit} className='create-contact-form'>
          <ImageInput
            className='create-contact-avatar-input'
            name='avatarURL'
            maxHeight={64}
          />
          <div className='create-contact-details'>
            <input type='text' placeholder='Name' name='name' />
            <input type='text' placeholder='Company Name' name='companyName' />
            <input type='text' placeholder='Email' name='email' />
            <input type='text' placeholder='Contact Number' name='contactNumber' />
            <input type='text' placeholder='Designation' name='designation' />

            <button>Add Contact</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateContact
