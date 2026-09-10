const Notification = ({ msg, notificationStyle }) => {
  if (msg == null) {
    return null;
  }
  return <div className={notificationStyle}>{msg}</div>;
};

export default Notification;
