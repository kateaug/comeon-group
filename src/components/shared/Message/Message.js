import React from 'react';
import css from './Message.module.scss';

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

  console.log(props)
  function defaultMessage(kind) {
    if (kind === 'error') {
      return `Something went wrong... Please try again.`;
    }
    return '';
  }
  return (
    <div
      className={css.Message}
      style={{
        padding: props.padding ? props.padding : '0'
      }}>
      {props.kind === 'success' && !props.noicon && (
        <svg
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          x='0px'
          y='0px'
          viewBox='0 0 512 512'
          xmlSpace='preserve'>
          <polygon
            fill={'#44e09f'}
            points='202.624,478.016 0,291.36 70.512,214.8 191.968,326.656 431.44,33.984 512,99.904 '
          />
        </svg>
      )}
      <p className={kind}>{props.children || defaultMessage(props.kind)}</p>
    </div>
  );
};
export default Message;