import React from "react"
import style from "./Formulario.module.css"
import useSelect from "../Hooks/useSelect"

const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        {value: 'general', label: 'general'},
        {value: 'business', label: 'business'},
        {value: 'entertainment', label: 'entertainment'},
        {value: 'health', label: 'health'},
        {value: 'science', label: 'science'},
        {value: 'sports', label: 'sports'},
        {value: 'technology', label: 'technology'}
    ]

    //utilizar custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    // pasamos la categoria al componente principal
    const selectCategoria = e => {
        e.preventDefault();
        guardarCategoria(categoria);
    }

    return (
        <div className={`${style.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={selectCategoria}
                >
                    <h2 className={style.heading}>Encuentra Noticias por Categoria</h2>
                    <SelectNoticias />
                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${style['btn-block']} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formulario;

//d148a087cad346d3ad23fef60bf7fff0