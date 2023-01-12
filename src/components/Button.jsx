export const Button = ({ label, onPress = () => {}, type = "primary", size = "large" }) => {
  return (
    <button onClick={onPress}>
      <div
        style={
          type === "primary"
            ? { color: "red", fontWeight: 700 }
            : { color: "blue", fontWeight: 300 }
        }
      >
        {label}
      </div>
    </button>
  );
};
// type: 'primary' | 'secondary' | ...
// size: 'large' | 'medium' | 'small'
