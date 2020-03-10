# useTab
현재 선택한 Section 의 content 만 보여주기 <br><br>

## Installation

#### yarn

`yarn add @am-hooks/use-tab`

#### npm

`npm i @am-hooks/use-tab` <br><br>

## Usage

```js
import useTitle from "@am-hooks/use-tab";

const App = () => {
  const content = [
    {
      tab: "Secton 01",
      content: "Secton 01 Content"
    },
    {
      tab: "Secton 02",
      content: "Secton 02 Content"
    }
  ];
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <>
      <h2>useTab</h2>
      {content.map((sectoin, index) => (
          <button onClick={() => changeItem(index)}>{sectoin.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </>
  )
}
```

<br><br>
