# useScroll
스크롤 사용할 때 감지 <br><br>

## Installation

#### yarn

`yarn add @am-hooks/use-scroll`

#### npm

`npm i @am-hooks/use-scroll` <br><br>

## Usage

```js
import React from "react";
import useScroll from "@am-hooks/use-scroll";

const App = () => {
  const { y } = useScroll();

  return (
    <div className="App" style={{ height: "500vh" }}>
      <h1
        style={{
          position: "fixed",
          color: y > 100 ? "red" : "blue"
        }}
      >
        Hello
      </h1>
    </div>
  )
}
```

<br><br>
