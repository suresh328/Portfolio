import React from 'react'
import { Link } from 'react-router-dom';

const Carditem = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Basic -</h3>
          <span className='bar'></span>
          <p className='btc'>$-10</p>
          <p>- 3 days -</p>
          <p>- 3 pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className='btn'>purchase now</Link>
        </div>

        <div className="card">
          <h3>- Premium -</h3>
          <span className='bar'></span>
          <p className='btc'>$-20</p>
          <p>- 2 days -</p>
          <p>- 5 pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className='btn'>purchase now</Link>
        </div>

        <div className="card">
          <h3>- Business -</h3>
          <span className='bar'></span>
          <p className="btc">$-30</p>
          <p>- 2 days -</p>
          <p>- 6 pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className='btn'>purchase now</Link>
        </div>
      </div>
    </div>
  )
}

export default Carditem;
