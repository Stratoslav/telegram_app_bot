import React, { useCallback, useEffect, useState } from "react";
import "./Form.css";
import useTelegram from "../../hooks/useTelegram";
function Form() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const [subject, setSubject] = useState("physical");
  const { tg } = useTelegram();

  useEffect(() => {
    if (!city && !country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [tg, city, country]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Send data",
    });
  }, [tg]);
  const onSendData = useCallback(() => {
    const data = {
      city,
      country,
      subject,
    };

    tg.sendData(JSON.stringify(data));
  }, [city, country, subject, tg]);
  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData, tg]);
  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const onChangeCity = (e) => {
    setCity(e.target.value);
  };
  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };
  return (
    <div className="form">
      <h3>Enter your data</h3>
      <input
        value={country}
        onChange={onChangeCountry}
        className="input"
        type="text"
        placeholder="Country"
      />
      <input
        value={city}
        onChange={onChangeCity}
        className="input"
        type="text"
        placeholder="City"
      />
      <select value={subject} onChange={onChangeSubject} className="select">
        <option value={"physical"}>Phys.face</option>
        <option value={"legal"}>Legal face</option>
      </select>
    </div>
  );
}

export default Form;
