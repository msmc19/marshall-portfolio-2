import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://imagekit.io/tools/asset-public-link?detail=%7B%22name%22%3A%22Aaron.JPG%22%2C%22type%22%3A%22image%2Fjpeg%22%2C%22signedurl_expire%22%3A%222028-04-22T01%3A28%3A40.576Z%22%2C%22signedUrl%22%3A%22https%3A%2F%2Fmedia-hosting.imagekit.io%2F6de4b3a015a14527%2FAaron.JPG%3FExpires%3D1839979721%26Key-Pair-Id%3DK2ZIVPTIP2VGHC%26Signature%3DWQ2DQxP-mrKkvi3Xifyz5Kn41NFBZcknAQMD1NjBt4iZyB10tcHuo2oFVwJGMoQN~DWbxZdvrKKkmfObHmD1CsIImUl--Ger~NMY7NkI3pd-QF~Z1KwB6Qc4QB0YGqcraycUOMwITE9GVEcuCXTVG2RRGgtjbX0blqxRR6H8JYijRYaa1fT3Wwi8pBjqZA6viPv6iQ~8OlDPA~bAVY6kXGp0iHFh~NxChBjC882tyjuwznDATUsL68Zf~GxTv8mYcRPaLANoI0~3xo39bviVxT9WA8ec0enVN08rcVZ3OLZgJwiw0vdEVVJNn~lw~z2Vo1hyPvWDSB7NDy0kxp-Pzw__%22%7D" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/msmc19" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/aaronmarshallit/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Aaron Marshall</h1>
          <p>Full Stack Engineer / Data Analyst</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/msmc19" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/aaronmarshallit/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
