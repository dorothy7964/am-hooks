# useHover
마우스를 올렸을 때 감지 <br><br>

## Installation

#### yarn

`yarn add @am-hooks/use-hover`

#### npm

`npm i @am-hooks/use-hover` <br><br>

## Usage

```js
import React from "react";
import useHover from "@am-hooks/use-hover";

const App = () => {
  const sayHover = () => console.log("마우스 올림");
  const title = useHover(sayHover);

  return <h1 ref={title}>HELLO</h1>;
}
```

<br><br>
