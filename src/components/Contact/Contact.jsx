import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/contactsSlice";

import { Item, Button } from "./Contact.styled";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <Item>
      <span>
        {contact.name}: {contact.number}
      </span>

      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </Item>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
