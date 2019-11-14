### OutsideClick

##### 描述：
##### 创建人：sophiehui
##### 创建时间：
##### 仓库地址：

#### 参数描述
| 参数名 | 类型  | 是否必须 | 说明  |  默认值 |
| --- | --- | ---- | --- | --- |

#### Blog
-

##### example
```
import OutSideClick from 'OutSideClick';
import React from 'react';

const InsideComponent = () =>{
    return(
        <OutSideClick >
            <div onClickOutside = {()=>{console.log('点击我的外侧，我就会被打印')}}>
                    我是内部，请点击我的内外部测试
                </div>
        </OutSideClick>
        )
}


```

