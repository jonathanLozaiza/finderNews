import React from "react"

const Noticias = ({key, noticia}) => {

    return (
        <div className="row">
            <div className="col s12 m7">
            <div className="card">

                <div className="card-image">
                <img src={noticia.urlToImage} />
                <span className="card-title">{noticia.title}</span>
                </div>

                <div className="card-content">
                <p>{noticia.description}</p>
                </div>

                <div className="card-action">
                <a href={noticia.url}>This is a link</a>
                </div>

            </div>
            </div>
        </div>
    )
}

export default Noticias;