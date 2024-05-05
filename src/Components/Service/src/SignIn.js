import React from "react";
import "./signinbody.css";
import styled from "styled-components";
import AccountBox from "./components/accountBox/index"

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top:50px;
`;

export default function SignIn() {
  return <AppContainer>
    <AccountBox />
  </AppContainer>
}
