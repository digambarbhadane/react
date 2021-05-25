import React from "react";
import { firstName, lastName } from "../../App";

const ComponentC = () => {
  return (
    <div>
      <firstName.Consumer>
        {(fName) => {
          return (
            <lastName.Consumer>
              {(lName) => {
                return (
                  <h1>
                    Hello {fName} {lName}
                  </h1>
                );
              }}
            </lastName.Consumer>
          );
        }}
      </firstName.Consumer>
    </div>
  );
};

export default ComponentC;
