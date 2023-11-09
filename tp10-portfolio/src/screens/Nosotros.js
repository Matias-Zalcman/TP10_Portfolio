import Cv from "../components/Cv";

const Nosotros = ({navigation}) => {
    return(
        <div className="row">
            <div className="col-6">
                <Cv foto="/bryan.jpg" nombre="Bryan Gitman" titulacion="Mayor a 9" certificado="https://www.hackerrank.com/certificates/b3a8a64a4402" nivelSql="Intermediate" aptitudes={["Liderazgo", "Resolución de problema", "Responsabilidad", "Atención al detalle", "Diseño UX/UI", "Planificación de proyecto"]} lenguajes={["HTML", "C#", "JavaScript", "React.js", "React Native", "Node.js"]}></Cv>
            </div>
            <div className="col-6">
                <Cv foto="/mati.jpg" nombre="Matias Zalcman" titulacion="9,16/10" certificado="https://www.hackerrank.com/certificates/9f746d53648e" nivelSql="Basic" aptitudes={["Compromiso", "Creatividad", "Investigación", "Microsoft Office", "Figma", "GitHub"]} lenguajes={["HTML", "CSS", "JavaScript", "React.js", "React Native", "Node.js"]}></Cv>
            </div>
        </div>
    )
}

export default Nosotros;