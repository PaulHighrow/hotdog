import styled from 'styled-components';

import { DatePicker } from '@mui/x-date-pickers';

export const StyledDatePicker = styled(DatePicker)`
  width: 260px;
  font-family: var(--main-font-family);
  font-size: 18px;
  color: var(--main-color);
  background-color: var(--secondary-color);
  padding: 10px 5px;
  border:none;
  border-radius: 15px;
  outline: none;

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

  & .MuiOutlinedInput-notchedOutline {
    border: none;
    outline: none;
  }

  & .MuiOutlinedInput-input {
    font-family: var(--main-font-family);
    height: auto;
    padding: 13px 5px;
    font-size: 18px;

    @media screen and (min-width: 360px) {
      font-size: 20px;
    }

    @media screen and (min-width: 768px) {
      font-size: 22px;
    }
  }

  & .react-calendar {
    width: 260px;
    max-width: none;
    font-family: var(--main-font-family);
    font-size: 12px;
    color: var(--main-color);
    background-color: var(--secondary-color);

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
