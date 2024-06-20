# 使用方法

> 方法一：使用子路由

```js
export default () => {
  return (
    <>
      <div>Home</div>
      {/* 子路由 */}
      <Routes>
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
};
```

> 方法二: 使用第三方插件

```js
// index.js
import { AliveScope, KeepAlive } from 'react-activation'

<AliveScope>
    <App />
</AliveScope>

// routes.js
{
    path: 'test/*',
    element: (<KeepAlive><Test /></KeepAlive>)
}
```

> [详细介绍](https://www.qy.cn/jszx/detail/43251.html)
