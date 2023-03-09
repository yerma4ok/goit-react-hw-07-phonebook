import styled from '@emotion/styled';
import { Field } from 'formik';

export const FormContainer = styled.div`
  margin-top: 20px;
  width: 400px;
  padding: 20px;
  -moz-box-align: center;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 4px, rgba(0, 0, 0, 0.2) 0px 2px 2px,
    rgba(0, 0, 0, 0.2) 0px 2px 2px;
  margin-left: 50px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 400px;
  padding: 20px;
  -moz-box-align: center;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 4px, rgba(0, 0, 0, 0.2) 0px 2px 2px,
    rgba(0, 0, 0, 0.2) 0px 2px 2px;
  margin-left: 50px;
`;

export const Label = styled.label``;
export const LabelName = styled.span`
  margin-left: 40px;
  margin-bottom: 5px;
  display: block;
  color: #757575;
  letter-spacing: 0.03em;
`;

export const Input = styled(Field)`
  margin-left: 40px;
  padding-left: 20px;
  width: 80%;
  height: 40px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  font-size: 20px;
  letter-spacing: 0.06em;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus-within {
    border: 1px solid #2196f3;
  }
  :focus-visible {
    border: 1px solid #2196f3;
    outline: none;
  }

  :first-of-type {
    margin-bottom: 40px;
  }
`;

export const SubmitButton = styled.button`
  margin: 10px auto;
  display: block;
  border: 1px solid lightgray;
  border-radius: 2px;
  text-transform: capitalize;
  padding: 8px;
  font-size: 16px;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 2px, rgba(0, 0, 0, 0.2) 0px 1px 1px,
    rgba(0, 0, 0, 0.2) 0px 1px 1px;
  :hover,
  :focus {
    background-color: #2196f3;
    color: white;
  }
`;
