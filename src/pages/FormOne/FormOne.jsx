import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Fieldset from "../../components/Fieldset/Fieldset";
import S from './FormOne.module.css'

const FormOne = () => {

//cria estado inicial de valores de input a serem alterados

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate()

//cria estado inicial de erro

  const [errors, setErrors] = useState({
    type: "",
    message: ""
  });

//observa alterações e com o spread, coloca os valores em seus lugares específicos

  const handleChange = (target, key) => {
    const value = target.value;
    setValues({
      ...values,
      [key]: value
    });
    console.log(values);
    validate(setErrors({type: "success", message: ""}))
  };

//função assíncrona que confere a validação e em caso de sucesso, manda para a próxima etapa

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

   //leva para proxima pagina de form caso tenha sucesso na validação

    navigate("/dados-2")
  }

  //função que faz cada uma das validaçoes necessárias e mostra na tela o erro quando houver.

function validate() {
    if (!values.firstname.trim()) {
        return setErrors({
            type: "error",
            message: "Necessário preencher nome!"
        })
    }

    if (!values.lastname.trim()) {
        return setErrors({
            type: "error",
            message: "Necessário preencher sobrenome!"
        })
    }

    if (!values.email) {
        return setErrors({
            type: "error",
            message: "Necessário preencher email!"
        })
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        return setErrors({
            type: "error",
            message: "Email inválido!"
        })
    }

    if (!values.phone) {
        return setErrors({
            type: "error",
            message: "Necessário preencher telefone!"
        })
    } else if (values.phone.length < 10) {
        return setErrors({
            type: "error",
            message: "Telefone inválido!"
        })
    }

    return true;
  }

  //retorno trazendo componente fieldset, recebendo value e continuando a observação de alterações

  return (
    <div className={S.container}>
      <div className={S.fieldContainer}>
        <Fieldset
          title="Nome:"
          type="text"
          name="firstname"
          placeholder="Escreva seu nome"
          value={values.firstname}
          onchange={({ target }) => handleChange(target, "firstname")}
        />

        {/* em caso de erro, a mensagem aparece na tela */}
         {errors.type === "error" && <p>{errors.message}</p>}
      </div>
      <div className={S.fieldContainer}>
        <Fieldset
          title="Sobrenome:"
          type="text"
          name="lastname"
          placeholder="Escreva seu sobrenome"
          value={values.lastname}
          onchange={({ target }) => handleChange(target, "lastname")}
        />
         {errors.type === "error" && <p>{errors.message}</p>}
      </div>
      <div className={S.fieldContainer}>
        <Fieldset
          title="Email:"
          type="text"
          name="email"
          placeholder="Escreva seu email"
          value={values.email}
          onchange={({ target }) => handleChange(target, "email")}
        />
         {errors.type === "error" && <p>{errors.message}</p>}
      </div>
      <div className={S.fieldContainer}>
        <Fieldset
          title="Telefone:"
          type="number"
          name="phone"
          placeholder="Escreva seu telefone"
          value={values.phone}
          onchange={({ target }) => handleChange(target, "phone")}
        />
         {errors.type === "error" && <p>{errors.message}</p>}
      </div>
      <Button text="Próximo" onclick={handleSubmit} />
    </div>
  );
};

export default FormOne;