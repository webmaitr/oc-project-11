
import iconUp from './../assets/icon-up.svg';
import iconDown from './../assets/icon-down.svg';
import './dropdown.scss';
import {useState} from 'react';





function DropDown (props) {
  const dropTitle = props.dropTitle;
  const content = props.content;
  const [icon, setIcon] = useState(iconUp);
  // const [displayText, setDisplayText] = useState('nodisplay');
  const [displayText, setDisplayText] = useState(false);
  
  function handleList () {
    setIcon(icon==iconUp?iconDown:iconUp);
    setDisplayText(icon==iconUp?true:false);
  }

  return (
    <>
    <div className="drop-down-list">
      <p>
        {dropTitle}
      </p>
      <img src={icon} onClick={handleList} />
      
    </div>
    <p className={displayText?'displayList':'nodisplay'}>
      {content}
    </p>
    </>
  )
}

export default DropDown