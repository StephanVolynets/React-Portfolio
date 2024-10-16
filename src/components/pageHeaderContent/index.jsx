import "./styles.scss";
import ParallaxComponent from "../Parallax";

const PageHeaderContent = (props) => {
    const { headerText, icon } = props;

    return (
        <div className="wrapper">
            <ParallaxComponent />
            <div className="content">
                <h2>{headerText}</h2>
                <span>{icon}</span>
            </div>
        </div>
    );
};

export default PageHeaderContent;