import { useState, useEffect } from "react";
import { convertUnit } from "../../services/convertService";
import { getDataMesurement } from "../../services/dataMesurementService";
import styles from "./FormUnit.module.css";

function FormUnit({ label, onResult, API_WORD }) {
  const [value, setValue] = useState(0);
  const [from, setFrom] = useState("default");
  const [to, setTo] = useState("default");
  const [mesurements, setMesurements] = useState([]);

  //data processing
  const loadMesurements = async () => {
    const data = await getDataMesurement(API_WORD);
    setMesurements(data);
  };

  const capitalize = (data) => {
    return data.charAt(0).toUpperCase() + data.slice(1);
  };

  //render
  const renderOptions = () => {
    return (
      <>
        {mesurements.map((mesurement) => (
          <option key={mesurement} value={mesurement}>
            {capitalize(mesurement)}
          </option>
        ))}
      </>
    );
  };

  //events
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (from !== "default" && to !== "default") {
      const result = await convertUnit(value, from, to, API_WORD);
      onResult(result);
    }
  };

  useEffect(() => {
    loadMesurements();
  }, []);

  return (
    <>
      <form className={styles.formContainer} onSubmit={handleOnSubmit}>
        <label className={styles.label}>Enter value of {label}</label>
        <input
          className={styles.inputField}
          type="number"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="Enter number"
        />
        <label className={styles.label}>Choose from</label>
        <select
          className={styles.selectField}
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        >
          <option value="default">From</option>
          {renderOptions()}
        </select>
        <label>Choose to</label>
        <select
          className={styles.selectField}
          value={to}
          onChange={(e) => setTo(e.target.value)}
        >
          <option value="default">To</option>
          {renderOptions()}
        </select>
        <button type="submit">Convert</button>
      </form>
    </>
  );
}

export default FormUnit;
