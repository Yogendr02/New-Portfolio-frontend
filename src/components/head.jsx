import React from 'react';

import classname from "classnames";
function projecthead({title}) {
   
  return (
    <div className={classname('border-r-2 border-b-2 border-black font-bold text-4xl w-1/4 py-2 px-2 rounded-lg -mx-2 text-right')}>
      {title}
    </div>
  )
}

export default projecthead
