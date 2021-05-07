import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const Button = ({ variant, size, children }) => {
  if (variant === "outline") {
    return <OutlineButton size={size}>{children}</OutlineButton>;
  }
  if (variant === "ghost") {
    return <GhostButton size={size}>{children}</GhostButton>;
  }
  return <FilledButton size={size}>{children}</FilledButton>;
};

const ButtonBase = styled.button`
  --btn-font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return 16;
      case "medium":
        return 18;
      default:
        return 21;
    }
  }};
  --btn-line-height: ${(props) => {
    switch (props.size) {
      case "small":
        return 19;
      case "medium":
        return 21;
      default:
        return 25;
    }
  }};
  --btn-padding: ${(props) => {
    switch (props.size) {
      case "small":
        return "6px 14px";
      case "medium":
        return "14px 22px";
      default:
        return "18px 34px";
    }
  }};
  --btn-border-radius: ${(props) => {
    switch (props.size) {
      case "small":
        return "2px";
      case "medium":
        return "2px";
      default:
        return "4px";
    }
  }};

  display: inline-block;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: calc((var(--btn-font-size) / 16) * 1rem);
  line-height: calc((var(--btn-line-height) / 16) * 1rem);
  letter-spacing: -0.02em;
  text-transform: uppercase;

  padding: var(--btn-padding);
  border: 2px solid;
  border-radius: var(--btn-border-radius);

  &:focus {
    outline: 2px solid var(--btn-outline-color);
    outline-offset: 2px;
  }
`;

const FilledButton = styled(ButtonBase)`
  color: ${COLORS.white};
  border-color: ${COLORS.primary};
  background: ${COLORS.primary};
  --btn-outline-color: ${COLORS.primary};

  &:hover {
    background: ${COLORS.primaryLight};
  }
`;

const OutlineButton = styled(ButtonBase)`
  color: ${COLORS.primary};
  border-color: ${COLORS.primary};
  background: ${COLORS.white};
  --btn-outline-color: ${COLORS.primary};

  &:hover {
    background: ${COLORS.offwhite};
  }
`;

const GhostButton = styled(ButtonBase)`
  color: ${COLORS.gray};
  border-color: transparent;
  background: transparent;
  --btn-outline-color: ${COLORS.transparentGray75};

  &:hover {
    color: ${COLORS.black};
    background: ${COLORS.transparentGray15};
  }
`;

export default Button;
