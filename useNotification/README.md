# useNotification
notification API 를 사용할 때 유저에게 알림을 보내주기 <br><br>

## Installation

#### yarn

`yarn add @am-hooks/use-notification`

#### npm

`npm i @am-hooks/use-notification` <br><br>

## Usage

```js
import useNotification from "@am-hooks/use-notification";

const App = () => {
  const triggerNotif = useNotification("Title writing place", {
    body: "Write on the body using options"
  });

  return <button onClick={triggerNotif}>Woooow!</button>;
}
```

<br><br>
