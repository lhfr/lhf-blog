# 使用方法

```js
import { useState, useRef, forwardRef, useImperativeHandle } from "react";
import { Button } from "antd";

// 子组件
const Children = forwardRef(({ value }, ref) => {
  const [state] = useState(value);
  useImperativeHandle(ref, () => state);
  return state;
});

export default () => {
  const refs = useRef([]);
  return (
    <>
      <p>
        {[1, 2, 3].map((item, index) => {
          return (
            <Children
              value={item}
              key={index}
              ref={(el) => (refs.current[index] = el)}
            />
          );
        })}
      </p>
      <Button
        onClick={() => {
          console.log(refs.current, "refs");
        }}
      >
        获取循环子组件状态
      </Button>
    </>
  );
};
```
