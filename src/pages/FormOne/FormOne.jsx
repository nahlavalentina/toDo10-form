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

  const [errors, setErrors] = useState({
    type: "",
    message: ""
  });

  const [errors2, setErrors2] = useState({
    type: "",
    message: ""
  });

  const [errors3, setErrors3] = useState({
    type: "",
    message: ""
  });

  const [errors4, setErrors4] = useState({
    type: "",
    message: ""
  });

  const handleChange = (target, key) => {
    const value = target.value;
    setValues({
      ...values,
      [key]: value
    });
    console.log(values);
    validate()
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   if (!validate()) return

   setValues({
    firstname: values.firstname,
    lastname: values.lastname,
    email: values.email,
    phone: values.phone
   })

   console.log(values)
   console.log(errors)

   alert("Uhum")

    navigate("/dados-2")
  }


function validate() {
    
    if (!values.firstname.trim()) {
        return setErrors({
            type: "error",
            message: "Necessário preencher nome!"
        })
    } else if (!values.lastname.trim()) {
        return setErrors2({
            type: "error",
            message: "Necessário preencher sobrenome!"
        })
    } else if (!values.email) {
        return setErrors3({
            type: "error",
            message: "Necessário preencher email!"
        })
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        return setErrors3({
            type: "error",
            message: "Email inválido!"
        })
    } else if (!values.phone) {
        return setErrors4({
            type: "error",
            message: "Necessário preencher telefone!"
        })
    } else if (values.phone.length < 11) {
        return setErrors4({
            type: "error",
            message: "Telefone inválido!"
        })
    } else {
        return setErrors({
            type: "success",
            message: ""
        }),
        setErrors2({
            type: "success",
            message: ""
        }), setErrors3({
            type: "success",
            message: ""
        }), setErrors4({
            type: "success",
            message: ""
        })
    }

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
          onchange={({ target }) => handleChange(target, "firstname")}
        />
         {errors.type === "error" ? <p>{errors.message}</p> : ""}
      </div>
      <div>
        <Fieldset
          title="Sobrenome:"
          type="text"
          name="lastname"
          placeholder="Escreva seu sobrenome"
          value={values.lastname}
          onchange={({ target }) => handleChange(target, "lastname")}
        />
         {errors2.type === "error" ? <p>{errors2.message}</p> : ""}
      </div>
      <div>
        <Fieldset
          title="Email:"
          type="text"
          name="email"
          placeholder="Escreva seu email"
          value={values.email}
          onchange={({ target }) => handleChange(target, "email")}
        />
         {errors3.type === "error" ? <p>{errors3.message}</p> : ""}
      </div>
      <div>
        <Fieldset
          title="Telefone:"
          type="number"
          name="phone"
          placeholder="Escreva seu telefone"
          value={values.phone}
          onchange={({ target }) => handleChange(target, "phone")}
        />
         {errors4.type === "error" ? <p>{errors4.message}</p> : ""}
      </div>
      <Button text="Próximo" onclick={handleSubmit} />
    </div>
  );
};

export default FormOne;