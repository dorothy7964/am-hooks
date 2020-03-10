# useClick
클릭 이벤트 <br><br>

## Installation

#### yarn

`yarn add @am-hooks/use-click`

#### npm

`npm i @am-hooks/use-click` <br><br>

## Usage

```js
import React from "react";
import useClick from "@am-hooks/use-click";

const App = () => {
  const sayHello = () => console.log("클릭");
  const title = useClick(sayHello);

  return <h1 ref={title}>HELLO</h1>;
}
```

<br><br>
