import * as yup from 'yup';

export const rentalValidationSchema = yup.object().shape({
  rental_start: yup.date().required(),
  rental_end: yup.date().nullable(),
  customer_id: yup.string().nullable(),
  bike_id: yup.string().nullable(),
});
