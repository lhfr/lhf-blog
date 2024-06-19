# 使用方法

```js
import { useState } from "react";
import dayjs from "dayjs";
import { DatePicker } from "antd";

const MyDatePicker = ({ value, onChange, monthNum }) => {
  const [date, setDate] = useState([]);
  const [hackValue, setHackValue] = useState();

  const disabledDate = (current) => {
    if (!Array.isArray(date)) return;
    const isEarly =
      date[1] && date[1].diff(current, "month") === (monthNum ?? 1);
    const isLate =
      date[0] && current.diff(date[0], "month") === (monthNum ?? 1);
    return isEarly || isLate;
  };

  const handleOpenChange = (open) => {
    if (open) {
      setHackValue([]);
      setDate([]);
    } else {
      setHackValue(null);
    }
  };

  return (
    <DatePicker.RangePicker
      value={hackValue || value}
      allowClear={false}
      onChange={onChange}
      disabledDate={disabledDate}
      onCalendarChange={setDate}
      onOpenChange={handleOpenChange}
    />
  );
};

export default () => {
  const [value, setValue] = useState([dayjs().subtract(1, "month"), dayjs()]);

  console.log(value, "====value====");

  return <MyDatePicker value={value} onChange={setValue} />;
};
```
