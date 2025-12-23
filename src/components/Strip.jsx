import React from 'react';

const Strip = ({ items, powerLevel }) => {
  const totalItems = items.length;
  const activeCount = Math.floor((totalItems * powerLevel) / 100);

  let startDegree = 280;

  return (
    <>
      {items.map(function (item, index) {
        let backgColor = 'gray';

        if (index < activeCount) {
          const degree = startDegree - index * 7;

          backgColor = `hsl(${degree}, 100%, 50%)`;
        }

        return <div className="strip" style={{ backgroundColor: backgColor }}></div>;
      })}
    </>
  );
};

export default Strip;
