import "./styles.scss";
import ParticlesComponent from "../ParticlesComponent";

const PageHeaderContent = (props) => {
    const { headerText, icon } = props;

    return (
        <div className="wrapper">
            <ParticlesComponent id="tsparticles-header" />
            <div className="content">
                <h2>{headerText}</h2>
                <span>{icon}</span>
            </div>
        </div>
    );
};

export default PageHeaderContent;