import React from 'react'
import useApiContext from '../context/ApiContext'
import Tevekenyseg from './Tevekenyseg';

export default function Todo({data}) {
    const {tevekenysegLista} = useApiContext();
  return (
    <div className="card">
        <div classNameName='card-header'>
            <h2>{data.kategoriaks.katnev}</h2>
        </div>
        <div className="card-body">
            <form>
                <div className="mb-3 mt-3">
                    <input type="tevekenyseg" className="form-control" id="tevekenyseg" placeholder="Tevékenység..." name="tevekenyseg" />
                </div>
                <button>+</button>
            </form>
            {tevekenysegLista.map((element, index)=>{
                return <Tevekenyseg adat={element} key={index} />
            })}
        </div>
    </div>
  )
}
