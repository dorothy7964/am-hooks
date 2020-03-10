# useBeforeLeave
마우스가 벗어날 때 실행하는 것<br><br>

## Installation

#### yarn

`yarn add @am-hooks/use-mouseleave`

#### npm

`npm i @am-hooks/use-mouseleave` <br><br>

## Usage

```js
import React from "react";
import useBeforeLeave from "@am-hooks/use-mouseleave";

const App = () => {
  const beForLife = () => {
    console.log("Pls don`t leave");
  };
  useBeforeLeave(beForLife);
  
  return <h1>HELLO</h1>;
}
```

<br><br>
