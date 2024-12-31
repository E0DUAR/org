import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/img/footer.png"}}>
        <div className="redes">
            <a href="https://www.aluracursos.com">
                <img src="/public/img/facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.aluracursos.com">
                <img src="/public/img/twitter.png" alt="Twiter" />
            </a>
            <a href="https://www.aluracursos.com">
                <img src="/public/img/instagram.png" alt="Instagram" />
            </a>
        </div>
        <img src="/public/img/Logo.png" alt="Logo" />
        <strong>Desarrollado por Eduardo Mendez</strong>
    </footer>
}
export default Footer;