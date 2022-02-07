import React from 'react';

const FullName = ({la9ab,amor,alertme}) => {
  return <div>
<h1 className="name">my name is amani {la9ab} and my age is {amor}</h1>
<button onClick={alertme}>click me</button>

  </div>;
};

export default FullName;
