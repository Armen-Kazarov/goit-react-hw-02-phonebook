import { Component } from 'react';

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => this.props.onRemove(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
