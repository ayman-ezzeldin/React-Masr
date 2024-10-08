import {Link, NavLink} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>

        <nav className='d-flex justify-content-center'>
            <Link to='/'>Home </Link>
            <Link to='/about'>About </Link>
            <Link to='/posts'>Posts </Link>
            <Link to='/products'>Products </Link>

        </nav>
        
      </div>
    </footer>
  )
}

export default Footer