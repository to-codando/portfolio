import { html, css } from "iares";

export const template = () => html`
  <div class="wrap-ctx">
      <slot id="content"></slot>
  </div>
`;

export const AppHeader = () => {
	return {
		template,
		styles,
	};
};

const styles = () => css`
  app-header,
  .wrap-ctx {
    display: flex;
    flex-wrap: wrap;
    width:100%;
    max-width:60em;
    margin: 0 auto
  }

  .wrap-ctx {
    margin-bottom: 6em;
  }
`;
