import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Fieldset from "../../components/Fieldset/Fieldset";

const FormOne = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate()

  const [errors, setErrors] = useState({});

  const handleChange = (target, key) => {
    const value = target.value;
    setValues({
      ...values,
      [key]: value,
    });
    console.log(setValues(values));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values))

    if (Object.keys(errors).length === 0) {
        navigate("/dados-2")
    }
  }


  async function validate() {
    if (!values.firstname.trim()) {
      errors.firstmame = "Nome obrigatório";
      console.log(errors.firstname)
    }

    if (!values.lastname.trim()) {
      errors.lastmame = "Sobrenome obrigatório";
    }

    if (!values.email) {
      errors.email = "Email obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email inválido";
    }

    if (!values.phone) {
      errors.phone = "Telefone obrigatório";
    } else if (values.phone.length < 11) {
      errors.phone = "Telefone inválido";
    }

    return errors;
  }

  return (
    <div>
      <div>
        <Fieldset
          title="Nome:"
          type="text"
          name="firstname"
          placeholder="Escreva seu nome"
          value={values.firstname}
          onChange={({ target }) => handleChange(target, "firstname")}
        />
         {!!errors.firstname && <p>{errors.firstname}</p>}
      </div>
      <div>
        <Fieldset
          title="Sobrenome:"
          type="text"
          name="lastname"
          placeholder="Escreva seu sobrenome"
          value={values.lastname}
          onChange={({ target }) => handleChange(target, "lastname")}
        />
         {!!errors.lastname && <p>{errors.lastname}</p>}
      </div>
      <div>
        <Fieldset
          title="Email:"
          type="text"
          name="email"
          placeholder="Escreva seu email"
          value={values.email}
          onChange={({ target }) => handleChange(target, "email")}
        />
         {!!errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <Fieldset
          title="Telefone:"
          type="number"
          name="phone"
          placeholder="Escreva seu telefone"
          value={values.phone}
          onChange={({ target }) => handleChange(target, "phone")}
        />
         {!!errors.phone && <p>{errors.phone}</p>}
      </div>
      <Button text="Próximo" onClick={handleSubmit} />
    </div>
  );
};

export default FormOne;
