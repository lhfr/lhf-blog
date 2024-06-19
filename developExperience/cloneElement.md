# 使用方法

```js
export default ({ children, onChange, restProps }) => {
  const handleChange = (e) => {
    const value = e?.target?.value || value;
    console.log(value, "value");
    onChange(value);
  };

  return React.cloneElement(children, {
    ...restProps,
    onChange: handleChange,
  });
};
```
