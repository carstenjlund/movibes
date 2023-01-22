import styled from "@emotion/styled";
import { theme } from "../themes/theme";

const OnlyTextButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.something};
  font-size: 1rem;
  text-align: left;
  font-weight: bold;
  font-family: "Poppins", sans-serif;

  & svg {
    margin-right: 0.75rem;
    transform: translateY(0.125rem);
  }
`;
export default OnlyTextButton;
