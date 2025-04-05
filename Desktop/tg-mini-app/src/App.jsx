import React, { useEffect, useState } from "react";

const App = () => {
  const [isInTelegram, setIsInTelegram] = useState(false);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      tg.expand();
      setIsInTelegram(true);
    } else {
      console.log("Открыто вне Telegram");
    }
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>🚀 TG Mini App</h1>
      <p>{isInTelegram ? "✅ Внутри Telegram WebApp" : "❌ Не в Telegram"}</p>
    </div>
  );
};

export default App;