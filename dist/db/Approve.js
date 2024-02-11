import React from 'react';

const ApproveVerificationButton = ({ onClick }) => {
  return React.createElement(
    'button',
    { onClick: onClick },
    'Approve Verification'
  );
};

export default ApproveVerificationButton;
