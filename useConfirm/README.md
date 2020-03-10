# useConfirm
 사용자가 삭제 버튼을 클릭하는 작업을 하면 이벤트를 실행하기 전 메시지 보여주기<br><br>

## Installation

#### yarn

`yarn add @am-hooks/use-confirm`

#### npm

`npm i @am-hooks/use-confirm` <br><br>

## Usage

```js
import useConfirm from "@am-hooks/use-confirm";

const App = () => {
  const deleteWorld = () => console.log("onConfirm");
  const abort = () => console.log("onCancel");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);

  return <button onClick={confirmDelete}>Delete the world</button>;
}
```

<br><br>
