import { css } from "lit-element";

export function rem(px, base = 16) {
  return css`${px / base}rem`;
}