import { Formik, Field, Form } from 'formik';
import { SearchFormBtn, SearchbarWrapper } from './Searchbar.styled';

import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarWrapper>
      <Formik
        initialValues={{
          searchQuery: '',
        }}
        onSubmit={(values, actions) => {
          onSubmit(values.searchQuery);
          actions.resetForm();
        }}
      >
        <Form className={css.SearchForm}>
          <SearchFormBtn type="submit"></SearchFormBtn>
          <Field
            className={css.SearchFormInput}
            name="searchQuery"
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </SearchbarWrapper>
  );
};
