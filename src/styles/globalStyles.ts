import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  box-sizing: border-box;
  margin    : 0;
  padding   : 0;
  outline   : 0;
}

html {
  font-size: 64.5%;
}


body {
  text-rendering        : optimizelegibility;
  -webkit-font-smoothing: antialiased;
  background: '#f5f5f5';
  font-family: 'roboto',sans-serif;
}



code {
  font-family: 'source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New',
    monospace;
}
`