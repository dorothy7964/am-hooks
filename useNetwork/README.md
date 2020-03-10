# useNetwork
온라인 오프라인 상태를 감지 <br><br>

## Installation

#### yarn

`yarn add @am-hooks/use-network`

#### npm

`npm i @am-hooks/use-network` <br><br>

## Usage

```js
import React from "react";
import useNetwork from "@am-hooks/use-network";

const App = () => {
  const handleNetworkChange = online => {
    console.log(online ? "We just went online" : "We are offline");
  };
  const onLine = useNetwork(handleNetworkChange);

  return <h2>{onLine ? "OnLine" : "Offline"}</h2>
}
```

<br><br>
