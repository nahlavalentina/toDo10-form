import React from "react";
import S from './Fieldset.module.css'

const Fieldset = (props) => {

    //componente reutilizável para os formulários. Por chamar nas pages, é necessário criar o props de cada aspecto passado nelas

  return (
    <fieldset className={S.container}>
      <label>{props.title}</label>
      <input
      className={S.formInput}
        type={props.type}
        onChange={props.onchange}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
      />
    </fieldset>
  );
};

export default Fieldset;
