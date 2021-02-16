import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";




function Kitaplar(props){

  const [kitaplarState,setKitaplarState]=useState([]);

 
  console.log(props.resim);
   

  function kitaplariAl(){

      axios
      .get("http://localhost:3000/api/bilgiler.json")
      .then(function(gelenVeriler){
          setKitaplarState(gelenVeriler.data);
      })

  }

  

  


  useEffect(kitaplariAl,[]);



    return(
        


<div class="card m-2" style={{width:"18rem"}}>
  <div class="card-header">
    {props.baslik}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{props.yazar}- <img  src={props.resim} style={{width:"1rem"}} ></img> </li>
    <li class="list-group-item">{props.aciklama.substring(0,150)+"..."}</li>
    <li class="list-group-item"> 
    <Link class="btn btn-danger" to={`/kitap/${props.id}`} >
     {props.baslik}
    </Link></li>
  </ul>
 
</div>
       
    )
}

export default Kitaplar;