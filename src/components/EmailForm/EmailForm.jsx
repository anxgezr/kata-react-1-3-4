import { useState } from 'react';
import './EmailForm.scss';

function EmailForm() {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState(null);

  const validateEmail = (value) => {
    const emailPattern = /^[A-Za-z0-9!#$%&'*+\-/=?^_`{|}~]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+$/;
    return emailPattern.test(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = validateEmail(email);

    setResult(isValid ? 'success' : 'error');
  };

  const handleChange = (event) => {
    setEmail(event.target.value);

    // При вводе валидация НЕ выполняется.
    // Результат предыдущей проверки не изменяем.
  };

  return (
    <form className="email-form" onSubmit={handleSubmit}>
      <label className="email-form__label" htmlFor="email">
        Email
      </label>

      <input
        className="email-form__input"
        id="email"
        name="email"
        type="text"
        value={email}
        onChange={handleChange}
        placeholder="Введите email"
      />

      {result === 'error' && (
        <p className="email-form__error">
          Введен некорректный email
        </p>
      )}

      <button className="email-form__button" type="submit">
        Проверить
      </button>

      {result === 'success' && (
        <p className="email-form__success">
          Отличный email-адрес
        </p>
      )}
    </form>
  );
}

export default EmailForm;