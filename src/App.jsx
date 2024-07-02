import { useEffect, useState } from 'react'
import styled from 'styled-components'

function App() {
  const storageKeyName = "count";
  // const storedCount = localStorage.getItem(storageKeyName);
  // const retrieveCountValue = () => Number( storedCount ? storedCount : 0);
  const retrieveCountValue = () => Number( localStorage.getItem(storageKeyName) || 0);
  const [count, setCount] = useState(retrieveCountValue());
  const addNumber = (count) => setCount(Number(count) + 1);

  useEffect(() => {
    localStorage.setItem(storageKeyName, String(count));
  }, [count]);

  return (
    <>
    Hello
    <button onClick={() => addNumber(count)}>
      count is {count}
    </button>
    </>
  )
}

export default App
