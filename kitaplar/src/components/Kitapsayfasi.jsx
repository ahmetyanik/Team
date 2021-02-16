import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Kitap from "./Kitap.jsx";
import { useParams } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";




function Kitapsayfasi(props){

    const parametreler=useParams();

  const [kitaplarState,setKitaplarState]=useState([]);

   console.log(kitaplarState);

  function kitaplariAl(){

      axios
      .get("http://localhost:3000/api/kitap"+parametreler.id+".json")
      .then(function(gelenVeriler){
          setKitaplarState(gelenVeriler.data);
      })

  }


  useEffect(kitaplariAl,[]);



    return(
        <div className="bg-light">
<Header/>

<div className="row p-2">

<div className="col-lg-9 col-md-9 col-sm-12">
      {kitaplarState.map(function (yazi) {
        return (
          <Kitap
            id={yazi.id}
            key={yazi.id}
            baslik={yazi.baslik}
            yazar={yazi.yazar}
            aciklama={yazi.aciklama}
            resim={yazi.resim}
          />
        );
      })}

    </div>








</div>


<Footer/>
    
</div>

       
    )
}

export default Kitapsayfasi;