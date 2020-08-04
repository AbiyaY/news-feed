import React,{Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarText } from 'reactstrap';
 

const Header = () => {    
    
    return (
        <Fragment>
            <Navbar className="Navbar" >
             <NavbarText className="Text"  text-align="center">News Feed</NavbarText>
            </Navbar>
           

        </Fragment>
    );
};

export default Header;