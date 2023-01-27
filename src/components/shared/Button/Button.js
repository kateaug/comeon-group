import React from 'react';
import css from './Button.module.scss'
import { func, bool, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';



function Button ({ onClick, type, text, disabled = false, kind, iconForward, iconBack }) {
    
    
        switch (kind) {
        case 'primary':
             kind = css.ButtonPrimary
             break; 
        case 'secondary':
             kind = css.ButtonSecondary   
             break; 
        default:
            return;
    }

  
    
  return (
    <button className={kind} disabled={disabled} type={type} onClick={onClick} >
        {iconBack && <FontAwesomeIcon data-atr='btn-back' icon={faChevronLeft}/>}
        {text}
        {iconForward && <FontAwesomeIcon data-atr='btn-forward' icon={faChevronRight} />}
    </button>    
  )
}

export default Button;

Button.propTypes = {
    onClick: func,
    type: string,
    text: string,
    disabled: bool,
    kind: string.isRequired,
    iconForward: bool,
    iconBack: bool
}
