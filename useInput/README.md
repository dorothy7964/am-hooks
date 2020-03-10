# useInput
input 유효성 검사 및 최대 텍스트 숫자 검증 가능 <br><br>

## Installation

#### yarn

`yarn add @am-hooks/use-input`

#### npm

`npm i @am-hooks/use-input` <br><br>

## Usage 1

```js
import useInput from "@am-hooks/use-input";

const App = () => {
  const maxLen = value => value.length <= 10;
  const name = useInput("", maxLen);

  return (
    <input placeholder="Name" {...name} />
  )
}
```

## Usage 2

```js
import useInput from "@am-hooks/use-input";

const App = () => {
  const validator = value => !value.includes("@");
  const name = useInput("", validator);

  return (
    <input placeholder="Name" {...name} />
  )
}
```

<br><br>

