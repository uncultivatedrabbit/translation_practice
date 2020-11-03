import React from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

function Wrapper({ children, locale, messages }) {
  let currentMessages;
  if (locale === 'en-US') {
    currentMessages = messages.English;
  } else if (locale === 'es-MX') {
    currentMessages = messages.Spanish;
  } else {
    currentMessages = messages.French;
  }

  return (
    <IntlProvider messages={currentMessages} locale={locale}>
      {children}
    </IntlProvider>
  );
}

const mapStateToProps = ({ locale, messages }) => {
  return { locale, messages };
};

export default connect(mapStateToProps, null)(Wrapper);
