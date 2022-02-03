import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import background from '../assets/logo.svg';

export const GlobalStyle = createGlobalStyle`
  :root{
  --background:#f8f2f5;
  --red:#e52e4d;
  --green:#33CC95;
  --blue:#5429cc;
  --blue-light:#6933ff;
  --text-tilte:#363f5f;
  --text-body:#969cb3;
  --shape:#ffff;
    --dark:#2d2d2d;
}
*{
  margin:0;
  padding: 0;
  box-sizing:border-box
}
body,input, textarea ,button{
  font-family:'Poppins',sans-serif;
  font-weight:400;
}
h1,h2,h3,h4,h5,h6 , strong{
  font-weight: 600;
}
html{
  @media(max-width: 1888px){
    font-size: 93.75%;
  }
  @media(max-width: 720px){
    font-size: 87.5%;
  }  
  }
body{
  background:#191919 url(${background}) no-repeat center top;
  color:var(---shape);
  -webkit-font-smoothing:antialised;
 }
button{
  border:none;
  cursor: pointer;
}
[disable]{
  opacity: 0.6;
  cursor: not-allowed;
}
#root{
    max-width:1020px;
    margin:0 auto;
    padding:0 20px 50px;
  }
`;
