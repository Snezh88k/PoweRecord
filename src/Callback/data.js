import React from "react";

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
      <input type="text" value={displaytodaydate} readOnly="true" />
    </div>
  );
};

export default Datetime;
