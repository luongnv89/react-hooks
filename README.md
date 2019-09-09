# react-hooks
A collection of useful react-hooks

## Install

```
npm install --save react-hooks-crocode
```

## Use

```
import { useLocalStorage } from 'react-hooks-crocode';

const MyComponent = (props) => {
  const [token, setToken] = useLocalStorage('TOKEN'); // by default, token = null
}
```

## Hooks

### `useSessionStorage`

### `useLocalStorage`