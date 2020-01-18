import React from "react";
import Container from "@material-ui/core/Container";
import Phonebook from "../phonebook-form/PhonebookForm";

const App = () => {
  return (
    <Container maxWidth="sm">
      <Phonebook />
    </Container>
  );
};

export default App;
