import React from "react";
import { Link } from 'react-router-dom';


function Soda(){
    return(
        <div>
            <h1>So Refreshing!</h1>

            <Link to='/' className="Link">Go Back</Link>
        </div>
    )
}

export default Soda