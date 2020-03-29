import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

import Routes from './src/routes';

// React-Native não tem as mesmas <tags> que o HTML
// Não tem semântica | Tags para textos é <Text>
// Estilização recebe a <tag> {styles}
// Todos os elementos já possui display flex por padrãoptimize
// As propriedades não possuem - | a segunda palavra começa com upperCase
// Não existe herança de estilos | Tem que ter estilização própria por elemento


export default function App() {
  return (
    <Routes />
  );
}
