import React from "react";

const MyComponent = ({ childern, name }) => {
  return (
    <>
      <div>나의 컴포넌트 이름은 {name}</div>
      <p>{childern}</p>
    </>
  );
};

MyComponent.defaultProps = {
  name: "기본 값",
};

export default MyComponent;
