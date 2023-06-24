import React from "react";
import Button from "../Button/Button";
import useTelegram from "../../hooks/useTelegram";
// const tg = window.Telegram.WebApp;
export default function Header() {
  const { tg, user } = useTelegram();
  const onClose = () => {
    tg.close();
  };
  return (
    <div className="header">
      <Button onClick={onClose}>Close</Button>
      <span className="username">{user?.username}</span>
    </div>
  );
}
