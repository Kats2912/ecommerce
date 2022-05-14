import React from "react";

export default function Header(props){
    const {countCartItems}=props;
    return (
        <header className="row block center">
            <div>
                <a href="#"/>
                <h1>Small Shoping Cart</h1>
            </div>
            <div>
                <a href="#/cart">
                    Cart{''}
                    {countCartItems?(
                        <button className="badge">{countCartItems}</button>
                    ):(
                        ''
                    )}
                </a>{' '}
                <a href="#/signin">SignIn</a>
            </div>
        </header>
    );
}