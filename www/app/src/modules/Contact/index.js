import React from "react";
// import * as Yup from "yup";

import { Icon } from '../../components/icon';

import {
  Container,
  // FForm, 
  // Label, 
  // LabelFull, 
  // FInput 
} from "./styles";
// import { Button } from "../../styles/global";
import { colors } from "../../styles/variables";

// const schema = Yup.object().shape({
//   name: Yup.string().required("Campo Obrigatório"),
//   email: Yup.string()
//     .email("E-mail inválido")
//     .required("Campo Obrigatório "),
//   message: Yup.string().required("Mensagem Obrigatória")
// });

export default function Contact() {
  // function submitHandler(data, { resetForm }) {
  //   console.log(data);
  //   resetForm();
  // }

  return (
    <Container>
      <div className="content">
        <h2>Contato</h2>
        <p>
          Entre em contato comigo, pelo e-mail abaixo, que terei o maior prazer em atende-lo.<br />
          <a href="mailto:contato@tatianepraxedes.com.br"><Icon name={"FaEnvelope"} size={13} color={colors.darkRed.hexa} />  contato@tatianepraxedes.com.br</a>
        </p>
        {/* <FForm schema={schema} onSubmit={submitHandler}>
          <Label htmlFor={"name"}>
            <FInput
              name={"name"}
              id={"iptName"}
              placeholder={"Digite seu nome"}
            />
          </Label>
          <Label htmlFor={"email"}>
            <FInput
              name={"email"}
              id={"iptEmail"}
              placeholder={"Digite seu e-mail"}
            />
          </Label>
          <Label htmlFor={"phone"}>
            <FInput
              name={"phone"}
              id={"iptPhone"}
              placeholder={"Digite seu telefone"}
            />
          </Label>
          <LabelFull htmlFor={"message"}>
            <FInput
              multiline
              className="textarea"
              name={"message"}
              id={"txtMessage"}
              placeholder={"Digite sua mensagem"}
            />
          </LabelFull>
          <Label>
            <Button>ENVIAR MENSAGEM</Button>
          </Label>
        </FForm> */}
      </div>
    </Container>
  );
}
