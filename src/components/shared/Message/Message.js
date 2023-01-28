import React from 'react';
import css from './Message.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const Message = props => {
  let kind;
  switch (props.kind) {
    case 'info':
      kind = css.Info;
      break;
    case 'success':
      kind = css.Success;
      break;
    case 'error':
      kind = css.Error;
      break;
    default:
      kind = css.Info;
  }

  function defaultMessage(kind) {
    if (kind === 'error') {
      return `Something went wrong. Please try again.`;
    }
    return '';
  }
  return (
    <div
      className={css.Message}
      style={{
        padding: props.padding ? props.padding : '0'
      }}>
        {props.kind === 'error' && !props.noicon && (
          <FontAwesomeIcon data-icon='error' icon={faTriangleExclamation}/>
        )}
        <p className={kind}>{props.children || defaultMessage(props.kind)}</p>
    </div>
  );
};
export default Message;