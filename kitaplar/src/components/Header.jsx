import React from "react";
import {Link} from "react-router-dom";

function Header(){

    return(

        
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand" >Kitaplar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
   
      <form action="/arama" method="get" class="d-flex ">
        <input name="kelime" class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    )
}

export default Header;