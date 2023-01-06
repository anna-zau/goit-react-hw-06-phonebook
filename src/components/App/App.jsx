// При добавлении и удалении контакта, контакты сохраняются в локальное хранилище.
// При загрузке приложения, контакты, если таковые есть, считываются из локального хранилища и записываются в состояние.

// import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { addContact, deteleContact } from '../../redux/contactsSlice';

import { DivSection, Title, TitleTwo } from './App.styled';
import { Form } from '../Form/Form';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

export const App = () => {
  return (
    <DivSection>
      <Title>PhoneBook</Title>
      <Form />
      <TitleTwo>Contacts</TitleTwo>
      <Filter />

      <ContactList />
    </DivSection>
  );
};
