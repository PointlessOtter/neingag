import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="Home">Home</a>
                </div>
                {/*<ul class="nav navbar-nav">
                    <li class="active"><a href="home">Home</a></li>
                    <li><a href="#">Fresh</a></li>
                    <li><a href="#">Hot</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>*/}
            </div>
        </nav>

    );
}

export default Navbar;