import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Fieldset from '../../components/Fieldset/Fieldset';
import Button from '../../components/Button/Button';

const FormThree = () => {
    const [values, setValues] = useState({
        dob: "",
        cpf: "",
        income: ""
      });
      const navigate = useNavigate()
    
      const [errors, setErrors] = useState({
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
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
       if (!validate()) return
    
       setValues({
        dob: values.dob,
        cpf: values.cpf,
        income: values.income
       })
    
       console.log(values)
       console.log(errors)
    
       alert("Uhum")
    
        navigate("/sucesso")
      }
    
    
    function validate() {
        if (!values.dob.trim()) {
            return setErrors({
                type: "error",
                message: "Necessário preencher Data de Nascimento!"
            })
        }
    
        if (!values.cpf.trim()) {
            return setErrors({
                type: "error",
                message: "Necessário preencher CPF!"
            })
        } else if (values.cpf.length != 11) {
            return setErrors({
                type: "error",
                message: "CPF inválido!"
            })
        }
    
        if (!values.income) {
            return setErrors({
                type: "error",
                message: "Necessário preencher renda mensal!"
            })
        }

        return true;
      }
    
      return (
        <div>
          <div>
            <Fieldset
              title="Data de Nascimento:"
              type="date"
              name="dob"
              value={values.dob}
              onchange={({ target }) => handleChange(target, "dob")}
            />
             {errors.type === "error" && <p>{errors.message}</p>}
          </div>
          <div>
            <Fieldset
              title="CPF:"
              type="number"
              name="cpf"
              placeholder="Escreva seu CPF"
              value={values.cpf}
              onchange={({ target }) => handleChange(target, "cpf")}
            />
             {errors.type === "error" && <p>{errors.message}</p>}
          </div>
          <div>
            <Fieldset
              title="Renda Mensal:"
              type="number"
              name="income"
              placeholder="Escreva sua Renda Mensal"
              value={values.income}
              onchange={({ target }) => handleChange(target, "income")}
            />
             {errors.type === "error" && <p>{errors.message}</p>}
          </div>
          <Button text="Salvar" onclick={handleSubmit} />
        </div>
      );
}

export default FormThree
