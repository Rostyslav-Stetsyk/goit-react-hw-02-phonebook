export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.length ? (
        contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button type="button" id={id} onClick={e => onDelete(e.target.id)}>
              Delete
            </button>
          </li>
        ))
      ) : (
        <p>No contacts</p>
      )}
    </ul>
  );
};
