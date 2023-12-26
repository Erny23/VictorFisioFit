import { Link } from 'react-router-dom'

const NavClasTra = () => {
  return (
    <>
        <div>
            <ul className="py-3" style={{listStyle: 'none'}}>
                <li>
                    <Link to={'/VictorFisioFit/Training/Leccion1'}>Leccion 1</Link>
                </li>
                <li>
                    <Link to={'/VictorFisioFit/Training/Leccion2'}>Leccion 2</Link>
                </li>
                <li>
                    <Link to={'/VictorFisioFit/Training/Leccion3'}>Leccion 3</Link>
                </li>
            </ul>
        </div>
    </>
  )
}

export default NavClasTra