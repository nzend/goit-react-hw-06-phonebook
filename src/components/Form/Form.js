import css from './Form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const Form = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      name: e.target.name.value,
      number: e.target.number.value,
    };

    if (contacts.find(contact => contact.name === e.target.name.value)) {
      alert('Такий контакт вже є');
      return;
    }

    dispatch(addContact(contact));

    e.currentTarget.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.formLabel}>
        Name
        <input
          className={css.formInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={css.formLabel}>
        Number
        <input
          className={css.formInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={css.addBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default Form;
