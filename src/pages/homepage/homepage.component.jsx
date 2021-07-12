import "./homepage.styles.css";
import Container from "@material-ui/core/Container";

const HomePage = (props) => {
  console.log(props);
  return (
    <Container>
      <div className="hero__section">
        Welcome{" "}
        {props.currentUser ? `${props.currentUser.displayName}` : `Viewer`} !!!
      </div>
    </Container>
  );
};

export default HomePage;
