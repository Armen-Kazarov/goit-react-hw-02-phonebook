import { Component } from 'react';

class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;

    return (
      <div>
        <label htmlFor="contact-filter">Find contacts by name</label>
        <input
          type="tel"
          name="filter"
          id="contact-filter"
          placeholder="Enter name for search"
          onChange={({ target }) => onChange(target.value)}
          value={filter}
        />
      </div>
    );
  }
}

export default Filter;
