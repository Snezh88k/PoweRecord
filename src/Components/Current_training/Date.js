const Datetime = () => {
  const showdate = new Date();

  const displaytodaydate =
    showdate.getDate() +
    "/" +
    showdate.getMonth() +
    1 +
    "/" +
    showdate.getFullYear();
  return (
    <div style={{ marginLeft: "100px" }}>
      <span>{displaytodaydate}</span>
    </div>
  );
};

export default Datetime;
