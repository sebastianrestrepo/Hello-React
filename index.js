import React from 'react';
import ReactDOM from 'react-dom';
import Media from './src/playlist/components/media';

//console.log('Hola Mundo!');

const app = document.getElementById('app');
const holaMundo = <h1>Hola Mundo! :3</h1>;
//ReactDOM.render(que voy a renderizar, donde lo haré);
ReactDOM.render(<Media title="¿Por qué React?"/>, app);