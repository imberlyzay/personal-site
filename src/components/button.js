import React from 'react';

const Button = (target) => {
  const targetSite = target.target;

  return (
    <button>
      View {targetSite}
    </button>
  )
}

export default Button;
