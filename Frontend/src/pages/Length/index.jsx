import FormUnit from "../../components/FormUnit";
import { useState } from "react";

function Length() {
  const [resultOk, setResultOk] = useState(0);

  const handleResult = (result) => {
    setResultOk(result);
  };

  return (
    <>
      <h3>LENGTH UNIT CONVERTER</h3>
      <FormUnit label={"length"} onResult={handleResult} API_WORD={"length"} />
      <div id="resultOk">{resultOk}</div>
    </>
  );
}
export default Length;
