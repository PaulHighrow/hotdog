import axios from 'axios';
import { Backdrop } from 'components/LeadForm/Backdrop/Backdrop.styled';
import {
  CloseIcon,
  FormBtn,
  FormCloseBtn,
  FormTitle,
  HiddenInput,
  Input,
  InputNote,
  Label,
  StyledForm,
} from 'components/LeadForm/LeadForm.styled';
import { MarqueeCloseBtn } from 'components/MarqueeModal/MarqueeModal.styled';
import { Loader } from 'components/SharedLayout/Loader/Loader';
import { Formik } from 'formik';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';
import * as yup from 'yup';
import { StyledDatePicker } from './DatePickerMUI.styled';
import {
  OrderModal,
  StyledSelect
} from './TranslationsOrderModal.styled';

export const TranslationsOrderModal = ({ closeOrderModal, utms }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const services = [
    { value: 'Комплексний догляд', label: 'Комплексний догляд' },
    { value: 'Гігієнічний догляд', label: 'Гігієнічний догляд' },
    { value: 'Експрес линька', label: 'Експрес линька' },
    { value: 'Тримінг', label: 'Тримінг' },
    { value: 'Догляд за котами', label: 'Догляд за котами' },
    { value: 'Догляд за гризунами', label: 'Догляд за гризунами' },
  ];

  const time = [
    { value: '10:00', label: '10:00' },
    { value: '11:00', label: '11:00' },
    { value: '12:00', label: '12:00' },
    { value: '13:00', label: '13:00' },
    { value: '14:00', label: '14:00' },
    { value: '15:00', label: '15:00' },
    { value: '16:00', label: '16:00' },
    { value: '17:00', label: '17:00' },
    { value: '18:00', label: '18:00' },
    { value: '19:00', label: '19:00' },
  ];

  const initialValues = {
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    utm_content: '',
    utm_medium: '',
    utm_campaign: '',
    utm_source: '',
    utm_term: '',
    utm_referrer: '',
    referrer: '',
    gclientid: '',
    gclid: '',
    fbclid: '',
  };

  const leadSchema = yup.object().shape({
    name: yup
      .string()
      .required("Будь ласка, вкажіть своє ім'я!")
      .matches(
        /^[A-Za-zА-Яа-яіІїЇ]+(?:[-'\s][A-Za-zА-Яа-яіІїЇ]+)*$/,
        "Ім'я не має містити цифр та спецсимволів!"
      )
      .min(2, "Ім'я має складатися не менше ніж з 2 символів!")
      .max(50, "Ім'я має складатися не більше ніж з 50 символів!"),
    phone: yup
      .string()
      .required('Будь ласка, вкажіть свій номер телефону!')
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Будь ласка, введіть валідний номер телефону!'
      )
      .min(10, 'Номер телефону має складатися не менше ніж з 10 символів!')
      .max(20, 'Номер телефону має складатися не більше ніж з 20 символів!'),
    service: yup.string().optional('Будь ласка, оберіть послугу зі списку!'),
    date: yup.string().optional('Будь ласка, оберіть валідну дату!'),
    time: yup.string().optional('Будь ласка, оберіть час запису зі списку!'),
    utm_content: yup.string().optional(),
    utm_medium: yup.string().optional(),
    utm_campaign: yup.string().optional(),
    utm_source: yup.string().optional(),
    utm_term: yup.string().optional(),
    utm_referrer: yup.string().optional(),
    referrer: yup.string().optional(),
    gclientid: yup.string().optional(),
    gclid: yup.string().optional(),
    fbclid: yup.string().optional(),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const formattedDate = new Date(selectedDate)
      .toLocaleString('uk-UA')
      .split(',')[0];
    values.date = formattedDate;
    values.service = selectedService.value;
    values.time = selectedTime.value;
    values.utm_content = utms.utm_content;
    values.utm_medium = utms.utm_medium;
    values.utm_campaign = utms.utm_campaign;
    values.utm_source = utms.utm_source;
    values.utm_term = utms.utm_term;
    values.utm_referrer = utms.utm_referrer;
    values.referrer = utms.referrer;
    values.gclientid = utms.gclientid;
    values.gclid = utms.gclid;
    values.fbclid = utms.fbclid;
    console.log(values);
    setIsLoading(isLoading => (isLoading = true));

    try {
      const response = await axios.post('/tr-leads', values);
      console.log(response);
      resetForm();
      closeOrderModal();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(isLoading => (isLoading = false));
    }
  };

  return (
    <>
      <Backdrop onClick={closeOrderModal} />
      <OrderModal>
        <MarqueeCloseBtn onClick={closeOrderModal}>
          <CloseIcon />
        </MarqueeCloseBtn>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={leadSchema}
        >
          <StyledForm>
            <FormCloseBtn onClick={closeOrderModal}>
              <CloseIcon />
            </FormCloseBtn>
            <FormTitle>
              Залишіть заявку на переклад і наш менеджер вам зателефонує
            </FormTitle>
            <Label>
              <Input type="text" name="name" placeholder="Ім'я" />
              <InputNote component="p" name="name" />
            </Label>
            <Label>
              <Input type="tel" name="phone" placeholder="Телефон" />
              <InputNote component="p" name="phone" />
            </Label>
            <Label>
              <StyledSelect
                value={selectedService}
                onChange={setSelectedService}
                options={services}
                placeholder="Послуга"
                name="service"
              />
              <InputNote component="p" name="service" />
            </Label>
            <Label>
              <StyledDatePicker
                locale="uk-UA"
                disablePast
                placeholder="Дата"
                onChange={setSelectedDate}
              />
            </Label>
            <Label>
              <StyledSelect
                value={selectedTime}
                onChange={setSelectedTime}
                options={time}
                placeholder="Час"
                name="time"
              />
              <InputNote component="p" name="time" />
            </Label>
            <HiddenInput type="text" name="utm_content" />
            <HiddenInput type="text" name="utm_medium" />
            <HiddenInput type="text" name="utm_campaign" />
            <HiddenInput type="text" name="utm_source" />
            <HiddenInput type="text" name="utm_term" />
            <HiddenInput type="text" name="utm_referrer" />
            <HiddenInput type="text" name="referrer" />
            <HiddenInput type="text" name="gclientid" />
            <HiddenInput type="text" name="gclid" />
            <HiddenInput type="text" name="fbclid" />
            <FormBtn type="submit">Надіслати</FormBtn>
            {isLoading && <Loader />}
          </StyledForm>
        </Formik>
      </OrderModal>
    </>
  );
};
