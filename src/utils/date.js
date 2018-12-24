const DATE_LOCALE = 'en-US';
const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };

const converDateString = (dateString) =>
  new Date(dateString).toLocaleDateString(DATE_LOCALE, dateOptions);

export default converDateString;
