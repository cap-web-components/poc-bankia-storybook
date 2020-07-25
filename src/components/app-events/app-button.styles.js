import { css } from 'lit-element';
import { rem } from '~core/utils/styles';

export default css`
  :host {
    display: block;
    text-align: center;
  }
  button {
    display: block;
    font-size: 1rem;
    box-sizing: border-box;
    text-align: center;
    border-radius: 2px;
    padding: ${rem(12)} ${rem(24)};
    background: var(--primary-color);
    background: linear-gradient(90deg, var(--primary-color-deep) 0%, var(--primary-color) 100%);
    text-transform: uppercase;
    color: white;
    font-weight: bold;
    border: none;
    outline: none;
  }
  :host(.secondary) button {
    background: transparent;
    color: var(--secondary-color);
    border: 2px solid var(--secondary-color);
  }
`;
