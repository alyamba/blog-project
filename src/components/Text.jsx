export const Text = ({text, onClick, type, size, additionalClasses = ''}) => {
  if (onClick) {
    return <div onClick={onClick}>{text}</div>
  } else {
    return <div className={`${type} ${additionalClasses}`}>{text}</div>
  }
}


// type: paragraph | label | link | logo | title | post | small
// size: 18px | 12px 
// activity: active | hover | click | default