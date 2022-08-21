import React from "react";
import Fieldset from "../../components/Fieldset/Fieldset";
import Button from "../../components/Button/Button";

const FormTwo = () => {
  return (
    <div>
      <Fieldset title="CEP:" type="number" />
      <Fieldset title="Endereço:" type="text" />
      <Fieldset title="Complemento:" type="text" />
      <Button text="Próximo" />
    </div>
  );
};

export default FormTwo;
