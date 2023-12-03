import React from "react";

const Semi = () => {
  const object = { method: () => {} }

  var name = "ESLint"

  object.method = function () {
    // ...
  }

  class Foo {
    bar = 1
  }

  return <>Test Semi</>;
};

export default Semi;
