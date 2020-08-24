import React from "react"

const Noticia = ({key , noticia}) => {

    const imagen = (noticia.urlToImage) ? 
                <div className="card-image">
                    <img src={noticia.urlToImage} />
                    <span className="card-title">{noticia.title}</span>
                </div>
                :
                null;


    return (

            <div className="col s12 m6 l4">
            <div className="card">

                {imagen}

                <div className="card-content">
                <p>{noticia.description}</p>
                </div>

                <div className="card-action">
                <a 
                    href={noticia.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="waves-effect waves-light btn"
                >
                VER NOTICIA COMPLETA</a>
                </div>

            </div>
            </div>

    )
}

export default Noticia;