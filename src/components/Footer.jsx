import { Link } from "react-router-dom";

function Footer() {  
    return (  
        <footer style={{ backgroundColor: "#00b4d8", padding: "10px", textAlign: "center", marginTop: "20px" }}>  
            <Link to="/about" style={{ color: "#fff" }}>About</Link>
            <p>&copy; 2025 - Tienda Online</p>  
        </footer>  
    );  
}  

export default Footer;  