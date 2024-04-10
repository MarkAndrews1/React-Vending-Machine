import  React from 'react'
import { Link } from 'react-router-dom';

const VendingMachine = () => {  
    return (
      <div>
        <h1>Vending Machine</h1>
        <Link to='/Chips' className="Link">Chips</Link>
        <Link to='/Soda' className="Link">Soda</Link>
        <Link to='/Candy' className="Link">Candy</Link>
      </div>
    );
  };

export default VendingMachine
