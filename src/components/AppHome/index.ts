import { html, css } from "iares";

import { FamTitle, FamContainer, FamImage, FamButton, FamIcon, FamTagline } from "fam-code-ui";
import { AppContent } from "@/components/AppContent";

const template = ({ actions }) => html`
  <div class="wrap-ctx">
    <div class="wrap-bg-ctx"></div>
    <${FamContainer}>
      <slot target="content" ctx="app-home">
        <div class="container-ctx">
          <${AppContent}>
            <slot target="content">
              <${FamTitle} >
                <slot target="content" ctx="app-home">
                  <h1 class="header-ctx">PRECISA DE UM DESENVOLVEDOR EM QUEM POSSA REALMENTE CONFIAR?</h1>
                </slot>
              </>
            </slot>
          </>
          
          <${AppContent}>
            <slot target="content" ctx="app-home">
              <div class="wrap-banner-ctx hide-video" onClick=${actions.showVideo}>
                <${FamImage} src="/assets/images/bg-banner-video.png" fallbackSrc="/assets/images/fallback-black.png" alt="A ajuda que você procura pode estar aqui"/>
                <${FamImage} src="/assets/images/bg-banner-responsive.png" fallbackSrc="/assets/images/fallback-black.png" alt="A ajuda que você procura pode estar aqui"/>
                <div class="wrap-video-ctx">
                  <iframe  src="https://www.youtube-nocookie.com/embed/Q5bjmh9TzlU?rel=0&amp;controls=0&amp&amp;showinfo=0&amp;modestbranding=1" frameborder="0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"></iframe>                
                </div>
              </div>
            </slot>
          </>

          <${AppContent}>
            <slot target="content" ctx="app-home">
              <div class="wrap-button-ctx">
                <${FamButton}>
                  <slot target="content" ctx="app-home">
                    <div type="primary-hole" class="wrap-button-content-ctx">
                      <${FamIcon}
                          name="mode_comment"
                          size="1"
                      /> 
                      <i class="button-text-ctx">WhatsApp</i>
                    </div>
                  </slot>
                </>
              </div>
            </slot>
          </>
        </div>
      </slot>
    </>  

    <${FamContainer}>
      <slot target="content" ctx="app-home">
        <div class="container-ctx container-02">
          <${AppContent}>
            <slot target="content">
              <${FamTitle} >
                <slot target="content" ctx="app-home">
                  <div class="wrap-content-02">
                    <h1 class="header-ctx">TECNOLOGIAS MODERNAS E CONFIÁVEIS</h1>
                  
                    <${FamTagline} >
                      <slot target="content" ctx="app-home">
                        <p class="tagline-ctx">Trabalho com as tecnologias mais modernas e confiáveis, que prezam por segurança e produtividade</p>
                      </slot>
                    </>
                  </div>               
                </slot>
              </>
            </slot>
          </>
          <${AppContent}>
            <slot target="content" ctx="app-home">
                <ul class="wrap-logo-ctx">
                  <li>
                    <a href="#/angular" target="_blank">
                      <${FamImage} src="/assets/images/logo-node-js.png" fallbackSrc="/assets/images/fallback-black.png" alt="Node JS"/>
                      <span>Node JS</span>
                    </a>
                  </li>
                  <li>
                    <a href="#/angular" target="_blank">
                      <${FamImage} src="/assets/images/logo-next-js.png" fallbackSrc="/assets/images/fallback-black.png" alt="Next"/>
                      <span>Next JS</span>
                    </a>
                  </li>
                  <li>
                    <a href="#/angular" target="_blank">
                      <${FamImage} src="/assets/images/logo-tailwind-css.png" fallbackSrc="/assets/images/fallback-black.png" alt="Tailwind"/>
                      <span>Tailwind CSS</span>
                    </a>
                  </li>
                  <li>
                    <a href="#/angular" target="_blank">
                      <${FamImage} src="/assets/images/logo-react-js.png" fallbackSrc="/assets/images/fallback-black.png" alt="React"/>
                      <span>React</span>
                    </a>
                  </li>
                  <li>
                    <a href="#/angular" target="_blank">
                      <${FamImage} src="/assets/images/logo-angular.png" fallbackSrc="/assets/images/fallback-black.png" alt="Angular"/>
                      <span>Angular</span>
                    </a>
                  </li>
                  <li>
                    <a href="#/angular" target="_blank">
                      <${FamImage} src="/assets/images/logo-vue-js.png" fallbackSrc="/assets/images/fallback-black.png" alt="Vue"/>
                      <span>Vue</span>
                    </a>
                  </li>
                  <li>
                    <a href="#/angular" target="_blank">
                      <${FamImage} src="/assets/images/logo-capacitor.png" fallbackSrc="/assets/images/fallback-black.png" alt="Capacitor Framework"/>
                      <span>Capacitor</span>
                    </a>
                  </li>
                </ul>
            </slot>
          </>
          <${AppContent}>
            <slot target="content" ctx="app-home">
              <div class="wrap-button-ctx">
                <${FamButton}>
                  <slot target="content" ctx="app-home">
                    <div type="primary-hole" class="wrap-button-content-ctx">
                      <${FamIcon}
                          name="mode_comment"
                          size="1"
                      /> 
                      <i class="button-text-ctx">WhatsApp</i>
                    </div>
                  </slot>
                </>
              </div>
            </slot>
          </>
        </div>      
      </slot>
    </>


    <${FamContainer}>
      <slot target="content" ctx="app-home">
        <div class="container-ctx container-03">
        <div class="wrap-bg-02-ctx"></div>
          <${AppContent}>
            <slot target="content">
              <${FamTitle} >
                <slot target="content" ctx="app-home">
                  <div class="wrap-content-02">
                    <h1 class="header-ctx">Redução de até 50% no custo do desenvolvimento de software</h1>
                  
                    <${FamTagline} >
                      <slot target="content" ctx="app-home">
                        <p class="tagline-ctx">Nos últimos venho desenvolvendo e mantendo IARES, uma biblioteca open source destinada a construir sistemas com eficiencia</p>
                      </slot>
                    </>
                  </div>               
                </slot>
              </>
            </slot>
          </>
          <${AppContent}>
            <slot target="content" ctx="app-home">
                <ul class="wrap-logo-ctx section-amount">
                  <li>
                    <a href="https://www.npmjs.com/package/iares" target="_blank">
                      <${FamImage} src="/assets/images/logo-npm.png" fallbackSrc="/assets/images/fallback-black.png" alt="IARES no NPM"/>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/to-codando/iares-ui" target="_blank">
                      <${FamImage} src="/assets/images/logo-iares.png" fallbackSrc="/assets/images/fallback-black.png" alt="IARES no Github"/>
                    </a>
                  </li>
                  <li>
                    <a href="https://to-codando.github.io/fam-code-ui/" target="_blank">
                      <${FamImage} src="/assets/images/logo-iares-ui.png" fallbackSrc="/assets/images/fallback-black.png" alt="IARES UI biblioteca de componentes"/>
                    </a>
                  </li>
                </ul>
            </slot>
          </>
          <${AppContent}>
            <slot target="content" ctx="app-home">
              <div class="wrap-button-ctx">
                <${FamButton}>
                  <slot target="content" ctx="app-home">
                    <div type="primary-hole" class="wrap-button-content-ctx">
                      <${FamIcon}
                          name="mode_comment"
                          size="1"
                      /> 
                      <i class="button-text-ctx">WhatsApp</i>
                    </div>
                  </slot>
                </>
              </div>
            </slot>
          </>
        </div>      
      </slot>
    </>
    
    

    <${FamContainer}>
      <slot target="content" ctx="app-home">
        <div class="container-ctx container-02">
          <${AppContent}>
            <slot target="content">
              <${FamTitle} >
                <slot target="content" ctx="app-home">
                  <div class="wrap-content-02">
                    <h1 class="header-ctx">CLIENTES E PARCEIROS</h1>
                  
                    <${FamTagline} >
                      <slot target="content" ctx="app-home">
                        <p class="tagline-ctx">Conheça alguns dos clientes e parceiros que confiaram e fizeram parte dos meus últimos 10 anos</p>
                      </slot>
                    </>
                  </div>               
                </slot>
              </>
            </slot>
          </>
          <${AppContent}>
            <slot target="content" ctx="app-home">
                <ul class="wrap-logo-ctx section-amount">
                  <li>
                      <${FamImage} src="/assets/images/logo-ifood.png" fallbackSrc="/assets/images/fallback-black.png" alt="Ifood"/>
                  </li>
                  <li>
                      <${FamImage} src="/assets/images/logo-samsung.png" fallbackSrc="/assets/images/fallback-black.png" alt="Samsung"/>
                  </li>
                  <li>
                      <${FamImage} src="/assets/images/logo-hotmart.png" fallbackSrc="/assets/images/fallback-black.png" alt="Hotmart"/>
                  </li>
                  <li>
                      <${FamImage} src="/assets/images/logo-crefisa.png" fallbackSrc="/assets/images/fallback-black.png" alt="Crefisa"/>
                  </li>
                  <li>
                      <${FamImage} src="/assets/images/logo-proz.png" fallbackSrc="/assets/images/fallback-black.png" alt="Proz"/>
                  </li>
                  <li>
                      <${FamImage} src="/assets/images/logo-pede-pronto.png" fallbackSrc="/assets/images/fallback-black.png" alt="Pede Pronto"/>
                  </li>
                  <li>
                      <${FamImage} src="/assets/images/logo-bs2.png" fallbackSrc="/assets/images/fallback-black.png" alt="Banco BS2"/>
                  </li>
                  <li>
                      <${FamImage} src="/assets/images/logo-beetech.png" fallbackSrc="/assets/images/fallback-black.png" alt="Beetech"/>
                  </li>
                  <li>
                      <${FamImage} src="/assets/images/logo-riachuelo.png" fallbackSrc="/assets/images/fallback-black.png" alt="Riachuelo"/>
                  </li>
                  <li>
                      <${FamImage} src="/assets/images/logo-porto-seguro.png" fallbackSrc="/assets/images/fallback-black.png" alt="Porto Seguro"/>
                  </li>
                </ul>
            </slot>
          </>         
          <${AppContent}>
            <slot target="content" ctx="app-home">
              <div class="wrap-button-ctx">
                <${FamButton}>
                  <slot target="content" ctx="app-home">
                    <div type="primary-hole" class="wrap-button-content-ctx">
                      <${FamIcon}
                          name="mode_comment"
                          size="1"
                      /> 
                      <i class="button-text-ctx">WhatsApp</i>
                    </div>
                  </slot>
                </>
              </div>
            </slot>
          </>
        </div>      
      </slot>
    </>
    
    
    <${FamContainer}>
      <slot target="content" ctx="app-home">
        <div class="container-ctx container-04">
          <${AppContent}>
            <slot target="content">
              <${FamTitle} >
                <slot target="content" ctx="app-home">
                  <div class="wrap-content-02">
                    <h1 class="header-ctx">MÍDIAS E REDES SOCIAIS</h1>
                  
                    <${FamTagline} >
                      <slot target="content" ctx="app-home">
                        <p class="tagline-ctx">Conheça minhas mídias e redes sociais e me acompanhe no youtube para ficar por dentro dos desafios do momento</p>
                      </slot>
                    </>
                  </div>               
                </slot>
              </>
            </slot>
          </>
          <${AppContent}>
            <slot target="content" ctx="app-home">
                <ul class="wrap-logo-ctx wrap-social">
                  <li>
                    <a href="https://github.com/to-codando/" target="_blank">
                      <${FamImage} src="/assets/images/logo-github.png" fallbackSrc="/assets/images/fallback-black.png" alt="Github"/>
                      <span>Github</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/rodrigo-lima-rocha-59006089/" target="_blank">
                      <${FamImage} src="/assets/images/logo-linkedin.png" fallbackSrc="/assets/images/fallback-black.png" alt="Linkedin"/>
                      <span>Linkedin</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCdJEUSVsNHHXb5ut3nRizng" target="_blank">
                      <${FamImage} src="/assets/images/logo-youtube.png" fallbackSrc="/assets/images/fallback-black.png" alt="Youtube"/>
                      <span>Youtube</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.tabnews.com.br/tocodando" target="_blank">
                      <${FamImage} src="/assets/images/logo-tabnews.png" fallbackSrc="/assets/images/fallback-black.png" alt="Blog"/>
                      <span>Blog</span>
                    </a>
                  </li>
                  
                </ul>
            </slot>
          </>
          <${AppContent}>
            <slot target="content" ctx="app-home">
              <div class="wrap-button-ctx">
                <${FamButton}>
                  <slot target="content" ctx="app-home">
                    <div type="primary-hole" class="wrap-button-content-ctx">
                      <${FamIcon}
                          name="mode_comment"
                          size="1"
                      /> 
                      <i class="button-text-ctx">WhatsApp</i>
                    </div>
                  </slot>
                </>
              </div>
            </slot>
          </>
        </div>      
      </slot>
    </>    
  </div>
`;

export const AppHome = () => {
  const actions = {
    showVideo: ({ target }) => {
      const video = document.querySelector(".hide-video");
      if (!video) return;
      console.log(video);
      video.classList.remove("hide-video");
      video.classList.add("show-video");
    },
  };
  return {
    template,
    styles,
    actions,
  };
};

const styles = () => css`
  app-home,
  .wrap-ctx {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%
  }

  .wrap-ctx {
      height:100vh;
  }
  

  .wrap-bg-ctx {
    display: flex;
    min-height: 100vh;
    width: 100%;

    background: url('/assets/images/site-bg-blue.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    filter: blur(3px);    

    position:fixed;
    top:30px;
    left:0;
    right:0;
    bottom:0;

    z-index: -1;
  }

  .header-ctx {
    line-height: 1.2em
  }

  .container-ctx {
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width:100%;
    min-height: 100vh
  }

  .wrap-banner-ctx {
    cursor: pointer;
    margin: 0 auto;
    position: relative;
    max-height: 450px;
    overflow: hidden
  }

  .wrap-banner-ctx fam-image + fam-image {
    display:none
  }

  .wrap-video-ctx {
    position: absolute;
    top:50%;
    left:50%;

    transform: translate(-50%, -50%);

    height:100%;
    width:100%;
    overflow: hidden;

    border-radius: 20px;
  }

  .wrap-video-ctx iframe {
    width:100%;
    height: calc(100% + 120px);
    margin-top: -60px
  }

  .wrap-button-ctx {
    margin:0 auto;
  }

  .button-text-ctx {
    margin-left: 5px;
  }

  .wrap-button-content-ctx span {
    margin-top:5px
  }

  /*Segunda seção*/

  .container-ctx.container-02 {
    background: #04061b;
  }

  .tagline-ctx {
    text-align: center;
    font-size: 1.2em;
    max-width:30em;
    margin:0 auto;
  }

  .wrap-logo-ctx {
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .wrap-logo-ctx li {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 160px;
    text-align:center;
    color: var(--fam-tagline-color);
    font-weight: var(--fam-tagline-font-weight)
  }

   .wrap-logo-ctx li span {
     display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 1em
   }

/** SECTION 03 */

  .container-ctx.container-03 {
    position: relative;
    background: #061124
  }   

  .wrap-logo-ctx.section-amount {
    width: 100%;
  }

  .wrap-logo-ctx.section-amount li {
    width: 100%;
    max-width: 200px
  }

  /* SECTION 04 */

  .container-ctx.container-04 {
    position: relative;
    background: #011d4c
  }  
  
  .wrap-logo-ctx.wrap-social {
    width: 100%
  }

  .wrap-logo-ctx.wrap-social li {
    max-width: 170px
  }

@media all and (max-width: 680px) {
    .wrap-ctx {
      align-items: center
    }
    .header-ctx  {
      font-size: 2.2em!important;
      margin-top:0;
    }
    .wrap-banner-ctx fam-image {
      display:none
    }


    .wrap-banner-ctx.hide-video .wrap-video-ctx{
      display:none
    }
    .wrap-banner-ctx.show-video .wrap-video-ctx{
      max-height: 212px;
      width: calc(100% - 2em)
    }

     .wrap-banner-ctx.show-video fam-image {
      opacity:0
     }

    .wrap-banner-ctx fam-image + fam-image {
      display:flex
    }

    .wrap-button-ctx {
      margin:0 auto !important;
    }

    .wrap-logo-ctx.section-amount li {
      width: 50%;
      max-width: 160px
    }    
  }

  @media all and (max-width: 580px) {


    .header-ctx  {
      font-size: 1.8em!important;
    }

    .wrap-logo-ctx li {
      max-width: 120px;
    }    

  }

`;
