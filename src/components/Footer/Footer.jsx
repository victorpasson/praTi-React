import "./Footer.module.css"

const Footer = ({props}) => {
    return (
        <footer>
            <p>Desenvolvido por {props.desenvolvedor} - {props.ano}</p>
            <p>&copy; Todos os Direitos Reservados </p>
        </footer>
    )
}

export default Footer;