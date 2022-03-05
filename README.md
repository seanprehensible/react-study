# react-study

## Note

- [웹팩 설정](Note/웹팩-설정.md)

## Error

### Uncaught Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.

- `App.jsx`에서 export 하는 방식과 `client.jsx`에서 import 하는 방식이 서로 달라 생긴 에러

#### App.jsx

```js
export default App;
```

#### client.jsx 변경 전

```js
const App = require("./App");
```

#### client.jsx 변경 후

```js
import App from "./App";
```
