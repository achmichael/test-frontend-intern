import { useState, useEffect, useRef } from "react";
export function Navbar (){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navMenuRef = useRef();
    //Use Ref digunakan untuk mengakses Elemen DOM pada suatu komponen
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    //current (status saat ini, atau nilai saat ini)

    const handleClickOutside = (event) => {
        //melakukan pengecekan apakah navMenuRef sudah memiliki referensi elemen
        //kemudian ketika event tidak mengeklik pada nav-menu, maka setIsMenuOpen akan di false (agar nav-menu ditutup dari sidebar)
        if(navMenuRef.current && !navMenuRef.current.contains(event.target)){
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        //Berguna untuk mendeteksi klik diluar nav-menu
        document.addEventListener('mousedown', handleClickOutside);
        //Menghapus Event Listener ketika elemen Di Unmount ini bisa terjadi karena perubah state, dalam kode saya adalah IsMenuOpen
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, []);
    return (
    <nav className="navbar">
        <Navlogo></Navlogo>
        <Navlink isMenuOpen={isMenuOpen} navMenuRef={navMenuRef}></Navlink> 
        <HamburgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/> 
    </nav> 
    );
}

function HamburgerMenu({ toggleMenu, isMenuOpen }) {
    return (
        <a className="menu-icon" onClick={toggleMenu}>
            <i className={isMenuOpen ? 'menu-open' : 'menu-close'} data-feather="menu"></i>
        </a>
    )   
}
function Navlogo() {
    return (
        <div className="navbar-logo">
            {/* Gunakan require untuk gambar jika berada di dalam direktori src */}
            <h4 className="title">Currency Xchange</h4>      
        </div>
    );
}
function Navlink ({ isMenuOpen, navMenuRef }) {
    return (
        <div ref={navMenuRef} className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
            <Links link={'#'} label={'Home'}/>
            <Links link={'#currency-conversion'} label={'Konversi'}/>
            <Links link={'#about'} label={'About'}/>
        </div>
    );
}
function Links({ link, label} ){
    return(
        <a href={link}>{label}</a>
    )
}
