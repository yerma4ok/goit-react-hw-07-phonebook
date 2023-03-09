import styled from '@emotion/styled';

export const SearchContainer = styled.div`
  /* width: 400px; */
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
`;

export const TextTitle = styled.span`
  display: block;
  margin-bottom: 10px;
  margin-left: 40px;
  color: #000;
  font-size: 16px;
`;

export const SearchInput = styled.input`
  border: 1px solid lightgray;
  /* margin: 20px; */
  margin-top: 5px;
  margin-left: 50px;
  font-size: 16px;
  width: 360px;
  outline: none;
  border-radius: 2px;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.2),
      0px 1px 1px rgba(0, 0, 0, 0.2);
  }
`;
