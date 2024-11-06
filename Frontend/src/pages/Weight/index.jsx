import FormUnit from "../../components/FormUnit";
import { useState } from "react";

function Weight() {
  const [resultOk, setResultOk] = useState(0);

  const handleResult = (result) => {
    setResultOk(result);
  };

  return (
    <>
      <h3>WEIGHT UNIT CONVERTER</h3>
      <FormUnit
        label={"weight"}
        onResult={handleResult}
        API_WORD={"weight"}
      />
      <div id="resultOk">{resultOk}</div>
    </>
  );
}

export default Weight;
