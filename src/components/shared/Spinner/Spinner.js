import React from 'react';
import { string } from 'prop-types';

const Spinner = ({
  padding = '20px 0 20px 5px',
  size = '100px',
  fill = '#8caa37'
}) => (
  <div style={{ padding }}>
    <svg
      width={size}
      height={size}
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'>
      <path
        stroke='none'
        d='M10 50A40 40 0 0 0 90 50A40 44 0 0 1 10 50'
        fill={fill}
        transform='rotate(317.339 50 52)'>
        <animateTransform
          attributeName='transform'
          type='rotate'
          calcMode='linear'
          values='0 50 52;360 50 52'
          keyTimes='0;1'
          dur='1s'
          begin='0s'
          repeatCount='indefinite'
        />
      </path>
    </svg>
  </div>
);

Spinner.propTypes = {
  padding: string
};

export default Spinner;