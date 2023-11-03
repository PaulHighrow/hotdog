import { lazy } from 'react';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import ScrollToTop from 'utils/ScrollToTop/ScrollToTop';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/uk';

const Home = lazy(() =>
  import(/* webpackChunkName: "Homepage" */ '../pages/Home/Home')
);
const NotFound = lazy(() =>
  import(/* webpackChunkName: "Not Found" */ '../pages/NotFound/NotFound')
);

export const App = () => {
  // eslint-disable-next-line
  const [searchParams, _] = useSearchParams();

  const utm_tags = [
    'utm_content',
    'utm_medium',
    'utm_campaign',
    'utm_source',
    'utm_term',
    'utm_referrer',
    'referrer',
    'gclientid',
    'gclid',
    'fbclid',
  ];

  const localStorageTagSetter = tags =>
    tags.map(tag => localStorage.setItem(tag, searchParams.get(tag) || ''));

  localStorageTagSetter(utm_tags);

  const localStorageTagGetter = tag => localStorage.getItem(tag);

  const utms = {};
  utm_tags.forEach(tag => (utms[tag] = localStorageTagGetter(tag)));

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="uk">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<SharedLayout utms={utms} />}>
            <Route index element={<Home utms={utms} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </LocalizationProvider>
    </>
  );
};
