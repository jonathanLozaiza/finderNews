import React, {Fragment, useState, useEffect} from 'react';
import Header from "./component/Header";
import Formulario from "./component/Formulario";
import useSelect from "./Hooks/useSelect";
import Noticias from './component/Noticias';
import ListaNoticias from './component/ListaNoticias';

function App() {

  //state para guardar la categoria
  const [categoria, guardarCategoria] = useState('');

  //state de noticias
  const [noticias, guardarNoticias] = useState([]);

  useEffect(()=>{
    const consultarAPI = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${'co'}&category=${categoria}&apiKey=${'d148a087cad346d3ad23fef60bf7fff0'}`;
        const resultado = await fetch(url);
        const respuesta = await resultado.json()
        guardarNoticias(respuesta.articles);
    }
    consultarAPI();
  }, [categoria])

  return (
    <Fragment>
      <Header titulo="Buscador de Noticias"/>
      <div className="continer white">
        <Formulario guardarCategoria={guardarCategoria}/>
      </div>
        <ListaNoticias noticias={noticias}/>
    </Fragment>
  );
}

export default App;
