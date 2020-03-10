# useAxios
HTTP requests client axios 을 위한 wrapper 같은 것 <br><br>

## Installation

#### yarn

`yarn add @am-hooks/use-axios`

#### npm

`npm i @am-hooks/use-axios` <br><br>

## Usage

```js
import React from "react";
import useAxios from "@am-hooks/use-axios";

const App = () => {
  const { loading, error, data, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json"
  });
  console.log(
    `loading = ${loading},\n error = ${error},\n data = ${JSON.stringify(data)}`
  );

  return (
    <>
      <div>{data && data.status}</div>
      <div>{loading && "Loading..."}</div>
      <button onClick={refetch}>Refetch</button>
    </>
  )
}
```

<br><br>
