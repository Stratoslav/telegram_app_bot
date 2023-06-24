import React from "react";
import Button from "../Button/Button";
const tg = window.Telegram.WebApp;
export default function Header() {
  const onClose = () => {
    tg.close();
  };
  return (
    <div className="header">
      <Button onClick={onClose}>Close</Button>
      <span className="username">{tg.initDataUnsafe?.user?.username}</span>
    </div>
  );
}
