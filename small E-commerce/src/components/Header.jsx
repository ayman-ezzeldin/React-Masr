import {Link, NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>

          <div className='logo'>
            <h2 className="brand">React</h2>
          </div>

          <nav className='nav nav-pills'>
            <Link to='/'>Home </Link>
            <Link to='/about'>About </Link>
            <Link to='/posts'>Posts </Link>
            <Link to='/products'>Products </Link>
          </nav>

        </div>
      </div>
    </header>
  )
}

export default Header