import './App.css';
import logo from './logo.svg';
import { FormattedDate, FormattedMessage } from 'react-intl';
import React from 'react';
import { connect } from 'react-redux';
import { changeLocale } from './redux';

function App({ date, locale, changeLocale }) {
  const handleChange = e => {
    const newLocale = e.target.value;
    changeLocale(newLocale);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <select value={locale} onChange={handleChange}>
          <option value="en-US">English</option>
          <option value="es-MX">Spanish</option>
          <option value="fr-CA">French</option>
        </select>
        <p>
          <FormattedMessage
            id="app.header"
            defaultMessage="Edit <code>{fileName}</code> and save to reload."
            values={{
              fileName: 'src/App.js',
              code: text => <code>{text}</code>,
            }}
          />
        </p>
        <a href="https://reactjs.org" target="__blank" className="App-link">
          <FormattedMessage id="app.content" defaultMessage="Learn React" />
        </a>
        <span>
          <FormattedMessage
            defaultMessage="Demo brought to you by {presenterName}"
            id={'app.demo.plug'}
            values={{ presenterName: 'Brandon Melendez' }}
          />
        </span>
        <br />
        <FormattedDate
          value={date}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </header>
    </div>
  );
}
const mapStateToProps = ({ locale }) => {
  return { locale };
};

const mapDispatchToProps = {
  changeLocale,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
