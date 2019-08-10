import React from 'react';
function Square(props) {
  const status = 'Next player: X';
  const [state, setState] = React.useState(props.value);

  return (<button className="square" onClick={() => setState("x")}>
    {props.value}
  </button>);

}

export default Square;