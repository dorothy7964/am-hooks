# useTitle
브라우저 탭 제목을 변경 <br><br>

## Installation

#### yarn

`yarn add @am-hooks/use-title`

#### npm

`npm i @am-hooks/use-title` <br><br>

## Usage 1

```js
import React from "react";
import useTitle from "@am-hooks/use-title";

const App = () => {
  useTitle("change title");

  return <h1>HELLO</h1>;
}
```

## Usage 2

```js
import React from "react";
import useTitle from "@am-hooks/use-title";

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 3000);

  return <h1>HELLO</h1>;
}
```
<br><br>

### Arguments

| Argument | Type   | Description                                | Required |
| -------- | ------ | ------------------------------------------ | -------- |
| title    | string | The title you want to use on your document | yes      |

<br><br>
