import React, { useEffect, useState } from "react";
import {Link, useLocation} from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer.jsx";
import Kitap from "./Kitap";




function Arama(){

    const parametreler=useParams();

    const query= new URLSearchParams(useLocation().search);

    const arananKelime=query.get("kelime");

  const [kitaplarState,setKitaplarState]=useState([]);

   console.log(kitaplarState);

  function kitaplariAl(){

      axios
      .get("http://localhost:3000/api/bilgiler.json")
      .then(function(gelenVeriler){
          var bosArray=gelenVeriler.data.filter(function(veri){
              return veri.baslik.toLowerCase().includes(arananKelime.toLowerCase());
          })

          setKitaplarState(bosArray);
      })

  }

   

  useEffect(kitaplariAl,[]);


    return(
        
<div>

<Header/>

{
      kitaplarState.map(function(kitap){

          return (
              <Kitap
                  key={kitap.id}
                  id={kitap.id}
                  baslik={kitap.baslik}
                  aciklama={kitap.aciklama}
                  yazar={kitap.yazar}
                  resim={kitap.resim}
                  />

          )
      })
  }

<Footer/>

</div>
       
    )
}

export default Arama;