import React from 'react'
import logo from "../assets/logo.svg";

const optionss = [
    {
        iconName: "Person_outline",
        lable: "Sign-In",
    },
    {
        iconName: "Shopping_bag",
        lable: "Cart",
    },
    {
        iconName: "Support",
        lable: "Help",
    },
    {
        iconName: "Search",
        lable: "Search",
    },

];


const Navbar = (props) => {
  return (
    <section className="navbar">
        <div className="container">
            <img className="logo" src={logo}/>
            <div className="location">
                <span className="city"> {props.city}</span>
                <span className="state">{props.state}, {props.country}
                </span>
            </div>
            <div className="navbar-options">
                {/* {optionss.map((elem) => (
                    <div  className="navbar-option">
                        <span className="material-icons">{elem.iconName} </span> {elem.lable}
                    </div>
                ))} */}

                {/* ****** USED THIS INSIDE THE JAVA SCRIPT ******** */}
                <div className="navbar-option">
                    <span className="material-icons"> person_outline</span> Sign In
                </div>
                <div className="navbar-option">
                    <span className="material-icons">
                        shopping_bag
                        </span> Cart
                </div>
                <div className="navbar-option">
                    <span className="material-icons">support</span> Help
                </div>
                <div className="navbar-option">
                    <span className="material-icons">search</span> Search
                </div>

            </div>
        </div>
    </section>
  )
}

export default Navbar