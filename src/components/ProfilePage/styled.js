import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 90%;
`;
export const CardSecundary = styled.div`
  background-color: #c4c4c4;
  display: flex;
  flex-direction: column;
  height: 390px;
  width: 350px;
  border: 1px solid #c4c4c4;
  border-radius: 3px;
`;
export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  height: 130px;
  width: 370px;
`;
export const CardName = styled.div`
  font-family: Arial;
  font-style: normal;
  font-size: 24px;
  padding: 15px;
`;
export const CardBio = styled.div`
  font-family: Arial;
  font-style: normal;
  font-size: 16px;
  padding-right: 15px;
  padding-left: 15px;
`;
export const CardPhoto = styled.img`
  height: 350px;
  width: 320px;
  padding: 15px;
  align-items: center;
`;
export const ContainerButton = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-around;
  padding-bottom: 30px;
`;
