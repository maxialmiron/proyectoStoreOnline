import Navbar from "./Navbar";

function Header() {  
    return (  
        <header style={{ backgroundColor: "#00b4d8", padding: "10px", textAlign: "center", color: "white" }}>  
            <Navbar />
            <h1>Bienvenidos a Tienda Online</h1> 
        </header>  
    );  
}

export default Header;