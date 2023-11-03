import { RouteModal } from 'components/EdCenter/EdCenterModal/EdCenterModal.styled';
import DatePicker from 'react-date-picker';
import Select from 'react-select';
import styled from 'styled-components';

export const OrderModal = styled(RouteModal)``;

export const StyledSelect = styled(Select)`
  width: 260px;

  font-size: 18px;
  color: var(--main-color);
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
  }

  &:-webkit-autofill {
    &,
    &:hover,
    &:focus {
      font-family: var(--main-font-family);
      -webkit-text-fill-color: var(--main-color);
      -webkit-box-shadow: 0 0 0px 1000px var(--main-transparent-color) inset;
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
    border: none;
    padding: 6.5px 5px;
  }

  & [class$='placeholder'],
  & [class$='singleValue'] {
    text-align: left;
  }
`;

export const StyledDate = styled(DatePicker)`
  width: 260px;

  font-size: 18px;
  color: var(--main-color);
  background-color: var(--secondary-color);
  -webkit-text-stroke: 0.5px var(--main-color);
  padding: 10px 5px;
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

  &::placeholder {
    color: var(--main-color);
    -webkit-text-stroke: 0.5px var(--main-color);
  }

  & .react-date-picker__wrapper {
    border: none;
  }

  & .react-date-picker__inputGroup {
    text-align: left;
  }

  & .react-calendar {
    width: 260px;
    max-width: none;
font-family: var(--main-font-family);
    font-size: 12px;
    color: var(--main-color);
    background-color: var(--secondary-color);
    padding: 10px 5px;
    border-color: transparent;
    border-radius: 15px;

    @media screen and (min-width: 360px) {
      width: 300px;
      font-size: 16px;
    }

    @media screen and (min-width: 768px) {
      width: 500px;
      font-size: 18px;
    }
  }
`;

