import MovingComponent from "react-moving-text";
const SwingText = () => {
  return (
    <MovingComponent
      type="typewriter"
      dataText={[`A passionate self-taught <Software Developer/>.`]}
    />
  );
};

export default SwingText;
