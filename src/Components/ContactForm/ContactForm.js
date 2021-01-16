import { Component } from 'react';

class ContactForm extends Component {
  render() {
    const { name, number } = this.props;

    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.props.onSubmit}>
          <label htmlFor="new-name">Name</label>
          <input
            type="text"
            name="name"
            id="new-name"
            placeholder="Enter name"
            onChange={this.props.onChangeName}
            value={name}
          />
          <label htmlFor="new-phone">Number</label>
          <input
            type="tel"
            name="phone"
            id="new-phone"
            placeholder="Enter phone number"
            onChange={this.props.onChangeNum}
            value={number}
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            required
          />
          <span>Format phone number 000-00-00</span>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
      </div>
    );
  }
}

export default ContactForm;
