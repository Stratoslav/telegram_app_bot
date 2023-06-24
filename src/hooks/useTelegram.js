export default function useTelegram() {
  const tg = window.Telegram.WebApp;
  const onCloseApp = () => {
    tg.close();
  };
  const onToogleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };
  return {
    user: tg.initDataUnsafe?.user,
    onCloseApp,
    onToogleButton,
    tg,
  };
}
