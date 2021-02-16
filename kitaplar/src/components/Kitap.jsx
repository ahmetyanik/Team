import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";




function Kitap(props){

  const [kitaplarState,setKitaplarState]=useState([]);

   console.log(props.baslik);

  function kitaplariAl(){

      axios
      .get("http://localhost:3000/api/bilgiler.json")
      .then(function(gelenVeriler){
          setKitaplarState(gelenVeriler.data);
      })

  }


  useEffect(kitaplariAl,[]);



    return(
        
<div>

<div className="row">

<div className="col-lg-9">

<div class="card m-2" style={{width:"36rem"}}>
  <div class="card-header">
    {props.baslik}-{props.yazar}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{props.aciklama}</li>

  </ul>

</div>
</div>

  <div className="col-lg-3">

<img  src={props.resim} style={{width:"10rem"}} ></img>



</div>
 


</div>

</div>
       
    )
}

export default Kitap;