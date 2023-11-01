import { RouteModal } from 'components/EdCenter/EdCenterModal/EdCenterModal.styled';
import styled from 'styled-components';
import Select from 'react-select';

export const OrderModal = styled(RouteModal)``;

export const StyledSelect = styled(Select)`
  width: 260px;

  font-size: 18px;
  color: var(--main-color);
  -webkit-text-stroke: 0.5px var(--main-color);
  border-color: transparent;
  border-radius: 15px;

  @media screen and (min-width: 360px) {
    width: 300px;
    font-size: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 500px;
    font-size: 22px;
  }

  &:hover,
  &:focus {
    background-color: var(--secondary-burnt-color);
    outline: transparent;
  }

  &:-webkit-autofill {
    &,
    &:hover,
    &:focus {
      font-family: var(--main-font-family);
      -webkit-text-fill-color: var(--main-color);
      -webkit-box-shadow: 0 0 0px 1000px var(--accent-color) inset;
    }
  }

  &::placeholder {
    color: var(--main-color);
    -webkit-text-stroke: 0.5px var(--main-color);
  }

  & [class$='ValueContainer'] {
    padding: 0px;
  }

  & [class$='control'] {
    border-radius: 15px;
    padding: 5px;
  }

  & [class$='placeholder'],
  & [class$='singleValue'] {
    text-align: left;
  }
`;
