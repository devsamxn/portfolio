import MovingComponent from "react-moving-text";
const SwingText = () => {
  return (
    <MovingComponent
      type="typewriter"
      dataText={[`A passionate Full Stack Web Developer.`]}
    />
  );
};

export default SwingText;
