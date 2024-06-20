# 使用方法

```js
import { useState } from "react";
import { Select } from "antd";

const MySelect = ({ onBeforeChange, onChange, ...restProps }) => {
  const handlebeforeChange = async (value, callback) => {
    if (typeof onBeforeChange === "function") {
      const result = await onBeforeChange(value);
      if (result) callback();
    } else {
      callback();
    }
  };
  const handleChange = (value) => {
    handlebeforeChange(value, () => onChange(value));
  };
  return <Select {...restProps} onChange={handleChange} />;
};

export default () => {
  const [value, setValue] = useState(1);
  return (
    <>
      <MySelect
        options={[
          { label: 1, value: 1 },
          { label: 2, value: 2 },
        ]}
        value={value}
        onBeforeChange={() => {
          // 阻止切换
          Promise.resolve(false);
        }}
        onChange={setValue}
      />
    </>
  );
};
```
