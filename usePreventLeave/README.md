# usePreventLeave
유저가 변경 사항을 저장하지 않고 페이지를 벗어나가길 원할 때 알림 메시지 표시<br><br>

## Installation

#### yarn

`yarn add @am-hooks/use-preventLeave`

#### npm

`npm i @am-hooks/use-preventLeave` <br><br>

## Usage

```js
import usePreventLeave from "@am-hooks/use-preventLeave";

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  
  return (
    <>
      <button onClick={enablePrevent}>protect</button>
      <button onClick={disablePrevent}>unprotect</button> 
    </>
  )
}
```

<br><br>
