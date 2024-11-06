import FormUnit from "../../components/FormUnit";
import { useState } from "react";

function Temperature() {
  const [resultOk, setResultOk] = useState(0);

  const handleResult = (result) => {
    setResultOk(result);
  };

  return (
    <>
      <h3>TEMPERATURE UNIT CONVERTER</h3>
      <FormUnit
        label={"temperature"}
        onResult={handleResult}
        API_WORD={"temperature"}
      />
      <div id="resultOk">{resultOk}</div>
    </>
  );
}

export default Temperature;
