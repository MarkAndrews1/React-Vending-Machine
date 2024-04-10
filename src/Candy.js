import React from "react";
import { Link } from 'react-router-dom';


function Candy(){
    return(
        <div>
            <h1>So Sweet!</h1>

            <Link to='/' className="Link">Go Back</Link>
        </div>
    )
}

export default Candy