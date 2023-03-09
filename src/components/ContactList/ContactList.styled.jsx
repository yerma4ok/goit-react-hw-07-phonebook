import styled from '@emotion/styled';

export const ListContact = styled.ul`
  list-style: none;
  margin-left: 20px;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Contact = styled.p`
  font-size: 16px;
  letter-spacing: 0.03em;
  color: #778899;
`;
export const ContactNumber = styled.span`
  margin-left: 20px;
  color: #2f4f4f;
`;

export const DeleteBtn = styled.button`
  width: 60px;
  height: 20px;
  margin-left: 50px;
  border: 1px solid lightgray;
  border-radius: 2px;
  font-size: 14px;
  letter-spacing: 0.03em;
  background-color: white;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: #2196f3;
    color: white;
  }
`;
