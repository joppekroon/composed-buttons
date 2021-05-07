import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const SIZES = {
  small: {
    "--btn-font-size": 16,
    "--btn-line-height": 19,
    "--btn-border-radius": "2px",
    "--btn-padding": "6px 14px"
  },
  medium: {
    "--btn-font-size": 18,
    "--btn-line-height": 21,
    "--btn-border-radius": "2px",
    "--btn-padding": "14px 22px"
  },
  large: {
    "--btn-font-size": 21,
    "--btn-line-height": 25,
    "--btn-border-radius": "4px",
    "--btn-padding": "18px 34px"
  }
};

const Button = ({ variant, size, children }) => {
  const styles = SIZES[size];
  if (variant === "outline") {
    return <OutlineButton style={styles}>{children}</OutlineButton>;
  }
  if (variant === "ghost") {
    return <GhostButton style={styles}>{children}</GhostButton>;
  }
  return <FilledButton style={styles}>{children}</FilledButton>;
};

const ButtonBase = styled.button`
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
