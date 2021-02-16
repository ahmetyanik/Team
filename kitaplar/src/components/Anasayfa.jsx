import React,{useState,useEffect} from "react";
import Basliklar from "./Basliklar";
import Footer from "./Footer";
import Header from "./Header";
import Kitaplar from "./Kitaplar";
import axios from "axios";
import Arama from "./Arama";

function Anasayfa(){

    const [kitaplarState,setKitaplarState]=useState([]);

   

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
            <Header/>
            <div className="row mb-5 ">

            <div className="col-9 d-flex flex-wrap">

            {
      kitaplarState.map(function(kitap){

          return (
              <Kitaplar
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






            </div>

            <div className="col-3">
            {
      kitaplarState.map(function(kitap){

          return (
              <Basliklar
                  id={kitap.id}
                  key={kitap.id}
                  baslik={kitap.baslik}
                  />

          )
      })
  }

            </div>

            </div>
            
            
            <Footer/>
        </div>

    )
}

export default Anasayfa;