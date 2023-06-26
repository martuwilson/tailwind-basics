
const Cards = () => {
  return (
    <div id="cards" className="flex flex-nowrap justify-between">
        <div className="card">
            <p className="card-icon">
                H
            </p>
            <h2 className="card-category">
                Desarrollo web
            </h2>
            <p className="card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>

        <div className="card">
            <p className="card-icon">
                _
            </p>
            <h2 className="card-category">
                Sistemas Operativos
            </h2>
            <p className="card-description">
                Aprende a administrar sistemas operativos
            </p>
        </div>

        <div className="card">
            <p className="card-icon">
                S
            </p>
            <h2 className="card-category">
                Hardware
            </h2>
            <p className="card-description">
                Conoce todo del mundo del hardware
            </p>
        </div>

        <div className="card">
            <p className="card-icon">
                u
            </p>
            <h2 className="card-category">
                Redes e Internet
            </h2>
            <p className="card-description">
                Aprende a configurar redes e internet
            </p>
        </div>

        <div className="card">
            <p className="card-icon">
                a
            </p>
            <h2 className="card-category">
                Base de Datos
            </h2>
            <p className="card-description">
               Aprende a trabajar con base de datos
            </p>
        </div> 
    </div>
  )
}

export default Cards