import React, { useState ,useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from './ThemeContext';
const Theme = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  const { changeBackgroundColor } = useContext(ThemeContext);

  const handleColorChange = (color) => {
    changeBackgroundColor(color);
  };
  
  const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    

    // Q:- how to pass a props from child to parent            /////////// Importent
    
    // Ans - for passing prop from child to parent component , // step-1 is define a callback function in parent component and then pass this callback function to Child component as a prop  // step-2 is access this function in child component and give the value what you want like :- color,background-color & etc...
    // const {onChangeColor}=props;
    

    // const handleDark=()=>{
    //     const color='black'
    //     onChangeColor(color)
    // }
    // const handleLight=()=>{
    //     onChangeColor('white')
    // }
  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-blue-500 text-white px-4 py-2 rounded inline-flex items-center">
           
        Theme
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10.293 13.293a1 1 0 001.414 0l3-3a1 1 0 10-1.414-1.414L10 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 000 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200" role="menuitem"
            onClick={()=> handleColorChange('black')}
            
            >
            <FontAwesomeIcon icon={faSun} /> &nbsp;
                Dark
                </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200" role="menuitem"
            onClick={()=> handleColorChange('white')}
            >
            <FontAwesomeIcon icon={faMoon} /> &nbsp;
                Light
                </a>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Theme;
