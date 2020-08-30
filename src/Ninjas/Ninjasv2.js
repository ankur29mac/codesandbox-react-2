import React from "react";

const Ninjas = ({ ninjas }) => {
  // const ninjaList = ninjas.map((ninja) => {
  //   if (ninja.age > 31) {
  //     return (
  //       <div className="ninja-list" key={ninja.id}>
  //         <div>Name: {ninja.name}</div>
  //         <div>Age: {ninja.age}</div>
  //         <div>Belt: {ninja.belt}</div>
  //       </div>
  //     );
  //   } else {
  //     return null;
  //   }
  // });

  // const ninjaList = ninjas.map((ninja) => {
  //   return ninja.age > 31 ? (
  //     <div className="ninja-list" key={ninja.id}>
  //       <div>Name: {ninja.name}</div>
  //       <div>Age: {ninja.age}</div>
  //       <div>Belt: {ninja.belt}</div>
  //     </div>
  //   ) : null;
  // });

  return (
    <div className="ninja">
      {ninjas.map((ninja) => {
        return ninja.age > 31 ? (
          <div className="ninja-list" key={ninja.id}>
            <div>Name: {ninja.name}</div>
            <div>Age: {ninja.age}</div>
            <div>Belt: {ninja.belt}</div>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Ninjas;
