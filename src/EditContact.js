import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import searlizeForm from 'form-serialize';
import ImageInput from './ImageInput';

export default class EditContact extends Component {
  constructor(props){
    super(props);

    this.state = {
        isEdit : false
    };
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }
    onEdit(){
      this.setState({isEdit: true});
  }

  onEditSubmit(event){
      event.preventDefault();
      this.props.onEditSubmit(this.name.value,this.companyName.value,this.email.value,this.contactNumber.value,this.designation.value,this.props.name);

      this.setState({isEdit: false});
  }
    render() {
        return (
                <div>
                  {
                    this.state.onEdit
                  }
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

            <button>Update Contact</button>
          </div>
        </form>
      </div>
        )
    }
}
