export const Button = ({ label, onPress = () => {}, type = "primary", size = "large" }) => {
  return (
    <button onClick={onPress} className={`${type}`}>
        {label}
    </button>
  );
};
// type: 'primary' | 'secondary' | ...
// size: 'large' | 'medium' | 'small'
