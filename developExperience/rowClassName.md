# 使用方法

```js
import { Table } from "antd";
import "./table.less";

export default () => {
  return (
    <Table
      rowClassName={(record) => {
        if (record.isTotal === "1") return "table-color-summary";
      }}
    />
  );
};
```

```less
// table.less
.ant-table-tbody > tr.table-color-summary > td {
  background: #fffaeb;
}
```
