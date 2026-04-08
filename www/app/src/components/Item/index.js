import React from "react";
import Image from "react-image-webp";

import {
  Container,
  Text,
  Title,
  ContentText
} from "./styles";

export default function Item(props) {
  return (
    <>
      <Container>
        <div className="main">
          <Image
            src={require(`../../images/${props.ico}.png`)}
            webp={require(`../../images/${props.ico}.webp`)}
            alt={props.title}
            width="120"
            height="120"
            loading="lazy"
          />
          <ContentText>
            <Title dangerouslySetInnerHTML={{
              __html: props.title
            }} />
            <Text dangerouslySetInnerHTML={{ __html: props.modal.content }} />
          </ContentText>
        </div>
      </Container>
    </>
  );
}
