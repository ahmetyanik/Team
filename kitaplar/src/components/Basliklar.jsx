import React from "react";
import {Link} from "react-router-dom";

function Basliklar(props){

    return(
        
        <div className=" ">


            
            <div class="card mt-3 mb-3 bg-warning " style={{width:"12rem"}}>

  <ul class="list-group list-group-flush">
  <Link to={`/kitap/${props.id}`} ><li class="list-group-item">{props.baslik}</li></Link>  
  </ul>
</div>

        </div>
    )
}

export default Basliklar;