import { StyledBtn } from './Button.styled';

export const Button = ({ loadMore }) => {
  return (
    <StyledBtn type="button" onClick={loadMore}>
      Load More
    </StyledBtn>
  );
};
