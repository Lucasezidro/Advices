import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  height: 300px;
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 300px;
  background-color: hsl(217, 19%, 24%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;

  .title-advice {
    margin: 0 auto;
    color: hsl(150, 100%, 66%);
    font-weight: lighter;
    font-family: "Monrepo", sans-serif;
    margin-bottom: 24px;
    backgroud: transparent;
  }

  .content {
    margin: 0 auto;
    text-align: center;
    font-size: 28px;
    max-width: 380px;
    font-weight: bold;
    font-family: sans-serif;
  }

  .footer {
    margin: 32px 0 16px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
  }

  button {
    position: absolute;
    top: 39rem;
    padding: 16px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: 0.5s;
    background: hsl(150, 100%, 66%);

    &:hover {
      box-shadow: 2px 2px 10px hsl(150, 100%, 66%);
    }
  }
`