# 使用方法

```js
import { Radio, Modal } from "antd";

export default ({ value, onChange, ...restProps }) => {
  const handleChange = (e) => {
    Modal.confirm({
      title: "确定切换吗？",
      onOk() {
        onChange(e.target.value);
      },
    });
  };
  return (
    <Radio.Group
      placeholder={locale("请选择")}
      {...restProps}
      value={value}
      onChange={handleChange}
    />
  );
};
```
