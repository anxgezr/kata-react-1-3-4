import EmailForm from './components/EmailForm/EmailForm';
import './App.scss';

function App() {
  return (
    <main className="app">
      <section className="email-checker">
        <h1>Email-проверка</h1>

        <p className="email-checker__description">
          Введите email-адрес и нажмите «Проверить»
        </p>

        <EmailForm />
      </section>
    </main>
  );
}

export default App;