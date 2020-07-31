import React from 'react';

const Greeting = props => {
  const { name, isGreeting } = props;

  if (isGreeting) {
    return <h1>Hello {name}</h1>;
  }
  return <strong>Goodbye {name}</strong>;
};

export default Greeting;
