# useFadeIn
fadeIn 애니메이션<br><br>

## Installation

#### yarn

`yarn add @am-hooks/use-fade-in`

#### npm

`npm i @am-hooks/use-fade-in` <br><br>

## Usage

```js
import React from "react";
import useFadeIn from "@am-hooks/use-fade-in";

const App = () => {
  const fadeIn = useFadeIn(1, 3);
  return <p {...fadeIn}>HELLO</p>
}
```

<br><br>
