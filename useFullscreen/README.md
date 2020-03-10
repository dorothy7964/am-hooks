# useFullscreen
스크린 크게 만들었다가 원래 사이즈로 가도록 하는 하기 <br><br>

## Installation

#### yarn

`yarn add @am-hooks/use-full-screen`

#### npm

`npm i @am-hooks/use-full-screen` <br><br>

## Usage

```js
import React from "react";
import useFullscreen from "@am-hooks/use-full-screen";

const App = () => {
  const [exitView, setExitView] = useState(false);
  const onFull = isFull => {
    setExitView(isFull);
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFull);

  return (
    <>
      <div ref={element}>
        <img src="https://cdn.pixabay.com/photo/2020/01/14/13/11/sport-4765008__340.jpg" />
        {exitView && <button onClick={exitFull}>Exit Full Screen</button>}button>}
      </div>
      <button onClick={triggerFull}>Full Screen</button>
    </>
  )
}
```

<br><br>
