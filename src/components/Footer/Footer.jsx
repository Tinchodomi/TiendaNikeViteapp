
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footerDiv'>

        <div>
        <Link to="/" className='linkfoot' >
            BUSCAR EN LA TIENDA
        </Link>
        </div>
        <div>
            <ul className='ulfoot'>
                <li className='lifoot'>AYUDA</li>
                <li className='lifoot'>Envios y entregas</li>
                <li className='lifoot'>Cambios y devoluciones</li>
                <li className='lifoot'>Opciones de Pago</li>
                <li className='lifoot'>Contactate</li>
                <li className='lifoot'><strong>Boton de arrepentimiento</strong></li>
            </ul>
        </div>
        <div>
            <ul className='ulfoot'>
                <li className='lifoot'>ACECA DE NIKE</li>
                <li className='lifoot'>noticias</li>
                <li className='lifoot'>inversiones</li>
                <li className='lifoot'>sustentabilidad</li>
            </ul>
        </div>

    </div>
  )
}

export default Footer