```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: Set count only once on mount
    // Add an empty array as the second argument to useEffect 
    // to run only once after the initial render.
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```