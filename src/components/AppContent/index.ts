import { html, css } from "iares";

export const template = () => html`
  <div class="wrap-ctx">
      <slot id="content"></slot>
  </div>
`;

export const AppContent = () => {
	return {
		template,
		styles,
	};
};

const styles = () => css`
  app-content,
  .wrap-ctx {
    display: flex;
    flex-wrap: wrap;
    width:100%;
    max-width:50em;
    margin: 0  calc((100% - 50em) / 2)
  }

  @media all and (max-width: 680px) {
    app-content,
    .wrap-ctx {
      margin: 0 auto
    }
  }
`;
