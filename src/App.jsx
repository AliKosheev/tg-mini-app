import React, { useEffect, useState } from 'react';

const tg = window.Telegram.WebApp;

useEffect(() => {
  if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
    // Дополнительный код, использующий tg
  } else {
    console.log("Приложение запущено вне Telegram.");
  }
}, []);

const mockTrips = [
  {
    id: 1,
    from: 'Нальчик',
    to: 'Москва',
    date: '6 апреля, 09:00',
    driver: 'Айдар',
    price: 2500,
    seats: 3,
    parcels: true,
  },
  {
    id: 2,
    from: 'Москва',
    to: 'Нальчик',
    date: '7 апреля, 12:00',
    driver: 'Марат',
    price: 3000,
    seats: 1,
    parcels: false,
  },
];

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    tg.expand();
    setUser(tg.initDataUnsafe?.user || null);
  }, []);

  return (
    <div style={styles.container}>
      <h2>Привет, {user?.first_name || 'гость'}!</h2>
      <h3>🚗 Поездки</h3>

      {mockTrips.map((trip) => (
        <div key={trip.id} style={styles.card}>
          <strong>{trip.from} → {trip.to}</strong>
          <p>Дата: {trip.date}</p>
          <p>Водитель: {trip.driver}</p>
          <p>Цена: {trip.price} ₽ | Мест: {trip.seats} | 📦 {trip.parcels ? 'Посылки принимаются' : 'Без посылок'}</p>
          <button style={styles.button}>Откликнуться</button>
        </div>
      ))}

      <button style={styles.addButton}>+ Добавить поездку</button>
    </div>
  );
}

const styles = {
  container: {
    padding: 16,
    fontFamily: 'sans-serif',
  },
  card: {
    background: '#f1f1f1',
    padding: 12,
    marginBottom: 12,
    borderRadius: 10,
  },
  button: {
    padding: 8,
    backgroundColor: '#2ea7e0',
    color: 'white',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    marginTop: 8,
  },
  addButton: {
    marginTop: 24,
    padding: 10,
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: 6,
    width: '100%',
    fontWeight: 'bold',
  },
};

export default App;
