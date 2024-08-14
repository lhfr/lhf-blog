# 使用方法

```js
import { useRef } from "react";
import { InputNumber } from "antd";
import BigNumber from "bignumber.js";

export default ({ onChange, ...props }) => {
  const ref = useRef();

  return (
    <InputNumber
      ref={ref}
      min={0}
      maxLength={20}
      onChange={() => {
        const value = ref.current?.value;
        onChange(value);
      }}
      onStep={(_, { type }) => {
        // 大数计算
        let value = new BigNumber(ref.current?.value);
        value = type === "down" ? value.minus(1) : value.plus(1);
        onChange(value.toString());
      }}
      style={{ width: "100%" }}
      {...props}
    />
  );
};
```
