import React from 'react';
import MainNav from './main-nav';
import Copyright from './copyright';

const Footer = () => {
    return (
        <footer className='bg-slate-100 pt-5'>
            <MainNav />
            <Copyright />
        </footer>
    );
};

export default Footer;