import React from "react";
import "./header.css"

class Header extends React.Component{
    render(){
        return (
           <nav className="Nav">
             <div className="Nav-menus">
               <div className="Nav-brand">
                 <a className="Nav-brand-logo" href="/">
                   Instagram
                 </a>
                 </div>
                 <div className="Nav-icons">
                 <a  className="icon" href="/">
                 <i class="material-icons md-48 w3-spin ">  trending_up </i>
                 </a>
                 <a  className="icon" href="/">
                 <i class="material-icons w3-spin">thumb_up</i>
                 </a>
                 <a className="icon" href="/">
                 <i class="material-icons w3-spin">face</i>
                 </a>
                 </div>

               
             </div>
           </nav>
       );
    }   
}
export default Header;