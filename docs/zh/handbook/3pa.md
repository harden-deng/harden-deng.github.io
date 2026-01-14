# 3PA

Base URLs:

# Authentication

# 公共分类

## POST 密码登录

POST /api/auth/password

> Body 请求参数

```json
{
  "username": "string",
  "password": "string"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 | title|none|
|» username|body|string| 是 ||登录名或手机号|
|» password|body|string| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "phone": "string"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|object|true|none||none|
|»» id|number|true|none||none|
|»» phone|string|true|none||none|

## POST 验证码登录

POST /api/auth

> Body 请求参数

```json
{
  "user_id": 0,
  "code": "string"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 | title|none|
|» user_id|body|number| 是 ||none|
|» code|body|string| 是 ||940422|

> 返回示例

> 200 Response

```json
{
  "access_token": "string",
  "refresh_token": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» access_token|string|false|none||none|
|» refresh_token|string|false|none||none|

## POST 手机号有效性验证

POST /api/auth/phone/check

> Body 请求参数

```json
{
  "phone": "string"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 | title|none|
|» phone|body|string| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "phone": "string"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|object|false|none||none|
|»» id|number|false|none||none|
|»» phone|string|false|none||none|

## POST 重置密码

POST /api/password/reset

> Body 请求参数

```json
{
  "user_id": 0,
  "code": "string",
  "new_password": "string"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 | title|none|
|» user_id|body|number| 是 ||none|
|» code|body|string| 是 ||none|
|» new_password|body|string| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## POST 退出登录

POST /api/logout

> Body 请求参数

```json
{}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 | title|none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## POST Token刷新

POST /api/refresh

> Body 请求参数

```json
{
  "refresh_token": "string"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Content-Type|header|string| 是 ||none|
|Authorization|header|string| 是 ||none|
|body|body|object| 否 | title|none|
|» refresh_token|body|string| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "access_token": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» access_token|string|false|none||none|

# 短信

## POST 发送短信

POST /api/sms/code/send

> Body 请求参数

```json
{
  "phone": "string",
  "type": "string"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 | title|none|
|» phone|body|string| 是 ||none|
|» type|body|string| 是 ||重置密码传 reset_password|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## POST 验证短信

POST /api/sms/code/verify

> Body 请求参数

```json
{
  "phone": "string",
  "code_type": "string"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 ||none|
|» phone|body|string| 是 ||none|
|» code_type|body|string| 否 ||重置密码传reset_password|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

# 用户

## GET Current User信息

GET /api/3pa/user/info

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "name": "string",
    "email": "string",
    "phone": "string",
    "role": {
      "id": 0,
      "name": "string",
      "code": "string"
    },
    "three_pa": {
      "id": 0,
      "name": "string",
      "code": "string"
    },
    "finding_columns": "string"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|object|false|none||none|
|»» id|number|false|none||none|
|»» name|string|false|none||none|
|»» email|string|false|none||none|
|»» phone|string|false|none||none|
|»» role|object|false|none||none|
|»»» id|number|false|none||none|
|»»» name|string|false|none||none|
|»»» code|string|false|none||none|
|»» three_pa|object|false|none||none|
|»»» id|number|false|none||none|
|»»» name|string|false|none||none|
|»»» code|string|false|none||none|
|»» finding_columns|string|false|none||none|

## GET 用户列表

GET /api/3pa/user/list

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|role|query|string| 否 ||auditor 传入 3pa_auditor|
|three_pa|query|string| 否 ||根据3pa名称模糊匹配|
|three_pa_id|query|string| 否 ||根据3pa id精确匹配|
|name|query|string| 否 ||none|
|phone|query|string| 否 ||none|
|not_role|query|string| 否 ||查询未分配角色的用户|
|page|query|string| 否 ||none|
|size|query|string| 否 ||none|
|email|query|string| 否 ||none|
|login|query|string| 否 ||none|
|fulltext|query|string| 否 ||查询name phone email login四个字段|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "name": "string",
      "phone": "string",
      "email": "string",
      "role": {
        "id": 0,
        "name": "string",
        "code": "string"
      },
      "three_pa": {
        "id": 0,
        "name": "string",
        "code": "string"
      },
      "finding_columns": "string"
    }
  ],
  "total": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» id|number|true|none||none|
|»» name|string|true|none||none|
|»» phone|string|true|none||none|
|»» email|string|true|none||none|
|»» role|object|true|none||none|
|»»» id|number|true|none||none|
|»»» name|string|true|none||none|
|»»» code|string|true|none||none|
|»» three_pa|object|true|none||none|
|»»» id|number|true|none||none|
|»»» name|string|true|none||none|
|»»» code|string|true|none||none|
|»» finding_columns|string|true|none||none|
|» total|number|false|none||none|

## POST User 创建

POST /api/3pa/user/create

> Body 请求参数

```json
{
  "name": "string",
  "phone": "string",
  "email": "string",
  "login": "string",
  "password": "string"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 ||none|
|» name|body|string| 是 ||none|
|» phone|body|string| 是 ||none|
|» email|body|string| 否 ||none|
|» login|body|string| 否 ||none|
|» password|body|string| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## PUT User 更新/删除

PUT /api/3pa/user/{user_id}/update

> Body 请求参数

```json
{
  "name": "string",
  "phone": "string",
  "email": "string",
  "active": true,
  "role_id": 0,
  "three_pa_id": 0,
  "finding_columns": "string"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|user_id|path|string| 是 ||none|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 ||none|
|» name|body|string| 否 ||none|
|» phone|body|string| 否 ||none|
|» email|body|string| 否 ||none|
|» active|body|boolean| 否 ||none|
|» role_id|body|number| 否 ||none|
|» three_pa_id|body|number| 否 ||none|
|» finding_columns|body|string| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## GET 角色列表

GET /api/3pa/role/list

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "name": "string",
      "code": "string",
      "three_pa": true
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» id|number|true|none||none|
|»» name|string|true|none||none|
|»» code|string|true|none||none|
|»» three_pa|boolean|true|none||none|

# 供应商

## GET Supplier Site Excel

GET /api/3pa/supplier/site/template

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

*title*

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|

## POST Supplier Site Upload

POST /api/3pa/supplier/site/import

> Body 请求参数

```yaml
file: string

```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 ||none|
|» file|body|string(binary)| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## GET Supplier Site 列表

GET /api/3pa/supplier/site/list

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|name|query|string| 否 ||none|
|supplier_id|query|string| 否 ||none|
|page|query|string| 否 ||none|
|size|query|string| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "supplier": {
        "id": 0,
        "name": "string"
      },
      "name": "string",
      "region": "string",
      "dri": "string",
      "report_cadence": "string",
      "address_en": "string",
      "latitude": 0,
      "longitude": 0
    }
  ],
  "total": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» id|number|true|none||none|
|»» supplier|object|true|none||none|
|»»» id|number|false|none||none|
|»»» name|string|false|none||none|
|»» name|string|true|none||none|
|»» region|string|true|none||none|
|»» dri|string|true|none||none|
|»» report_cadence|string|true|none||none|
|»» address_en|string|true|none||none|
|»» latitude|number|true|none||none|
|»» longitude|number|true|none||none|
|» total|number|false|none||none|

## DELETE Supplier Site 删除

DELETE /api/3pa/supplier/site/{site_id}/delete

> Body 请求参数

```yaml
{}

```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|site_id|path|string| 是 ||none|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## POST Supplier Site创建

POST /api/3pa/supplier/site/create

> Body 请求参数

```json
[
  {
    "supplier": "string",
    "supplier_id": 0,
    "name": "string",
    "region": "string",
    "dri": "string",
    "report_cadence": "string",
    "address_en": "string",
    "latitude": 0,
    "longitude": 0
  }
]
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Content-Type|header|string| 是 ||none|
|body|body|array[object]| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## PUT Supplier Site更新

PUT /api/3pa/supplier/site/{site_id}/update

> Body 请求参数

```json
{
  "supplier": "string",
  "supplier_id": 0,
  "name": "string",
  "region": "string",
  "dri": "string",
  "report_cadence": "string",
  "address_en": "string",
  "latitude": 0,
  "longitude": 0
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|site_id|path|string| 是 ||none|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 ||none|
|» supplier|body|string| 否 ||none|
|» supplier_id|body|number| 否 ||none|
|» name|body|string| 否 ||none|
|» region|body|string| 否 ||none|
|» dri|body|string| 否 ||none|
|» report_cadence|body|string| 否 ||none|
|» address_en|body|string| 否 ||none|
|» latitude|body|number| 否 ||none|
|» longitude|body|number| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## DELETE Supplier 删除

DELETE /api/3pa/supplier/{supplier_id}/delete

> Body 请求参数

```yaml
{}

```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|supplier_id|path|string| 是 ||none|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## GET Supplier列表查询

GET /api/3pa/supplier/list

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|name|query|string| 否 ||none|
|page|query|string| 否 ||none|
|size|query|string| 否 ||none|
|Authorization|header|string| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "total": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» id|number|false|none||none|
|»» name|string|false|none||none|
|» total|number|false|none||none|

## GET Site查询

GET /api/3pa/supplier/{supplier_id}/sites

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|supplier_id|path|string| 是 ||int|
|Authorization|header|string| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "supplier": {
        "id": 0,
        "name": "string"
      },
      "name": "string",
      "region": "string",
      "dri": "string",
      "report_cadence": "string",
      "address_en": "string",
      "latitude": 0,
      "longitude": 0
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» id|number|false|none||none|
|»» supplier|object|false|none||none|
|»»» id|number|false|none||none|
|»»» name|string|false|none||none|
|»» name|string|false|none||none|
|»» region|string|false|none||none|
|»» dri|string|false|none||none|
|»» report_cadence|string|false|none||none|
|»» address_en|string|false|none||none|
|»» latitude|number|false|none||none|
|»» longitude|number|false|none||none|

## GET 获取项目代码

GET /api/3pa/supplier/project/getProjectCodes

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|supplier_site_id|query|string| 是 ||供应商站点ID|
|Authorization|header|string| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "1": {
      "id": 1,
      "code": "string",
      "n1ka_code": "string",
      "component": "string"
    }
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|object|false|none||项目ID为键的对象|
|»» id|number|true|none||项目ID|
|»» code|string|true|none||项目代码|
|»» n1ka_code|string|true|none||N1KA代码|
|»» component|string|true|none||组件|

# Project

## GET Project Allocation

GET /api/3pa/project/{project_id}/allocation

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|project_id|path|string| 是 ||项目ID|
|year|query|string| 是 ||年份|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "year": "string",
    "version": "string",
    "project": {
      "id": 0,
      "code": "string",
      "n1ka_code": "string",
      "activate": true,
      "supplier_site": {
        "id": 0,
        "name": "string",
        "supplier": {
          "id": 0,
          "name": "string"
        }
      }
    },
    "ssm": {
      "id": 0,
      "name": "string"
    },
    "ssm_secondary": {
      "id": 0,
      "name": "string"
    },
    "ssm_manager": {
      "id": 0,
      "name": "string"
    },
    "dd": {
      "id": 0,
      "name": "string"
    },
    "dd_secondary": {
      "id": 0,
      "name": "string"
    },
    "dd_manager": {
      "id": 0,
      "name": "string"
    },
    "ps_dri_1_user": {
      "id": 0,
      "name": "string"
    },
    "ps_dri_2_user": {
      "id": 0,
      "name": "string"
    },
    "ps_dri_3_user": {
      "id": 0,
      "name": "string"
    },
    "es_dri_1_user": {
      "id": 0,
      "name": "string"
    },
    "es_dri_2_user": {
      "id": 0,
      "name": "string"
    },
    "es_dri_3_user": {
      "id": 0,
      "name": "string"
    },
    "three_pa_allocations": [
      {
        "id": 0,
        "type": {
          "code": "string",
          "value": "string"
        },
        "three_pa": {
          "id": 0,
          "name": "string",
          "code": "string"
        }
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|object|false|none||none|
|»» id|number|false|none||分配ID|
|»» year|string|false|none||年份|
|»» version|string|false|none||版本|
|»» project|object|false|none||项目信息|
|»»» id|number|false|none||项目ID|
|»»» code|string|false|none||项目代码|
|»»» n1ka_code|string|false|none||N1KA代码|
|»»» activate|boolean|false|none||是否激活|
|»»» supplier_site|object|false|none||供应商站点|
|»»»» id|number|false|none||站点ID|
|»»»» name|string|false|none||站点名称|
|»»»» supplier|object|false|none||供应商|
|»»»»» id|number|false|none||供应商ID|
|»»»»» name|string|false|none||供应商名称|
|»» ssm|object|false|none||SSM用户|
|»»» id|number|false|none||用户ID|
|»»» name|string|false|none||用户名称|
|»» ssm_secondary|object|false|none||SSM副用户|
|»»» id|number|false|none||用户ID|
|»»» name|string|false|none||用户名称|
|»» ssm_manager|object|false|none||SSM经理|
|»»» id|number|false|none||用户ID|
|»»» name|string|false|none||用户名称|
|»» dd|object|false|none||DD用户|
|»»» id|number|false|none||用户ID|
|»»» name|string|false|none||用户名称|
|»» dd_secondary|object|false|none||DD副用户|
|»»» id|number|false|none||用户ID|
|»»» name|string|false|none||用户名称|
|»» dd_manager|object|false|none||DD经理|
|»»» id|number|false|none||用户ID|
|»»» name|string|false|none||用户名称|
|»» ps_dri_1_user|object|false|none||物理DRI-1用户|
|»»» id|number|false|none||用户ID|
|»»» name|string|false|none||用户名称|
|»» ps_dri_2_user|object|false|none||物理DRI-2用户|
|»»» id|number|false|none||用户ID|
|»»» name|string|false|none||用户名称|
|»» ps_dri_3_user|object|false|none||物理DRI-3用户|
|»»» id|number|false|none||用户ID|
|»»» name|string|false|none||用户名称|
|»» es_dri_1_user|object|false|none||电子DRI-1用户|
|»»» id|number|false|none||用户ID|
|»»» name|string|false|none||用户名称|
|»» es_dri_2_user|object|false|none||电子DRI-2用户|
|»»» id|number|false|none||用户ID|
|»»» name|string|false|none||用户名称|
|»» es_dri_3_user|object|false|none||电子DRI-3用户|
|»»» id|number|false|none||用户ID|
|»»» name|string|false|none||用户名称|
|»» three_pa_allocations|[object]|false|none||3PA分配|
|»»» id|number|false|none||分配ID|
|»»» type|object|false|none||类型|
|»»»» code|string|false|none||类型代码|
|»»»» value|string|false|none||类型值|
|»»» three_pa|object|false|none||3PA信息|
|»»»» id|number|false|none||3PA ID|
|»»»» name|string|false|none||3PA名称|
|»»»» code|string|false|none||3PA代码|

## GET Project Allocation 列表

GET /api/3pa/project/allocation/list

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|page|query|string| 否 ||页码|
|size|query|string| 否 ||每页数量|
|code|query|string| 否 ||项目代码，支持模糊查询|
|project_id|query|string| 否 ||项目ID，可以是数字ID或项目编号(模糊匹配)|
|year|query|string| 否 ||年份|
|supplier_id|query|string| 否 ||供应商ID|
|supplier_site_id|query|string| 否 ||供应商站点ID|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "year": "string",
      "version": "string",
      "project": {
        "id": 0,
        "code": "string",
        "n1ka_code": "string",
        "activate": true,
        "supplier_site": {
          "id": 0,
          "name": "string",
          "supplier": {
            "id": 0,
            "name": "string"
          }
        }
      },
      "ssm": {
        "id": 0,
        "name": "string"
      },
      "ssm_secondary": {
        "id": 0,
        "name": "string"
      },
      "ssm_manager": {
        "id": 0,
        "name": "string"
      },
      "dd": {
        "id": 0,
        "name": "string"
      },
      "dd_secondary": {
        "id": 0,
        "name": "string"
      },
      "dd_manager": {
        "id": 0,
        "name": "string"
      },
      "ps_dri_1_user": {
        "id": 0,
        "name": "string"
      },
      "ps_dri_2_user": {
        "id": 0,
        "name": "string"
      },
      "ps_dri_3_user": {
        "id": 0,
        "name": "string"
      },
      "es_dri_1_user": {
        "id": 0,
        "name": "string"
      },
      "es_dri_2_user": {
        "id": 0,
        "name": "string"
      },
      "es_dri_3_user": {
        "id": 0,
        "name": "string"
      },
      "three_pa_allocations": [
        {
          "id": 0,
          "type": {
            "code": "string",
            "value": "string"
          },
          "three_pa": {
            "id": 0,
            "name": "string",
            "code": "string",
            "auditors": [
              {
                "id": 0,
                "user": {
                  "id": 0,
                  "name": "string"
                }
              }
            ]
          }
        }
      ]
    }
  ],
  "total": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» id|number|false|none||分配ID|
|»» year|string|false|none||年份|
|»» version|string|false|none||版本|
|»» project|object|true|none||项目信息|
|»»» id|number|true|none||项目ID|
|»»» code|string|true|none||项目代码|
|»»» n1ka_code|string|true|none||N1KA代码|
|»»» activate|boolean|true|none||是否激活|
|»»» supplier_site|object|true|none||供应商站点|
|»»»» id|number|true|none||站点ID|
|»»»» name|string|true|none||站点名称|
|»»»» supplier|object|true|none||供应商|
|»»»»» id|number|true|none||供应商ID|
|»»»»» name|string|true|none||供应商名称|
|»» ssm|object|false|none||SSM用户|
|»»» id|number|false|none||用户ID|
|»»» name|string|false|none||用户名称|
|»» ssm_secondary|object|false|none||SSM副用户|
|»»» id|number|false|none||用户ID|
|»»» name|string|false|none||用户名称|
|»» ssm_manager|object|false|none||SSM经理|
|»»» id|number|false|none||用户ID|
|»»» name|string|false|none||用户名称|
|»» dd|object|false|none||DD用户|
|»»» id|number|false|none||用户ID|
|»»» name|string|false|none||用户名称|
|»» dd_secondary|object|false|none||DD副用户|
|»»» id|number|false|none||用户ID|
|»»» name|string|false|none||用户名称|
|»» dd_manager|object|false|none||DD经理|
|»»» id|number|false|none||用户ID|
|»»» name|string|false|none||用户名称|
|»» ps_dri_1_user|object|false|none||物理DRI-1用户|
|»»» id|number|false|none||用户ID|
|»»» name|string|false|none||用户名称|
|»» ps_dri_2_user|object|false|none||物理DRI-2用户|
|»»» id|number|false|none||用户ID|
|»»» name|string|false|none||用户名称|
|»» ps_dri_3_user|object|false|none||物理DRI-3用户|
|»»» id|number|false|none||用户ID|
|»»» name|string|false|none||用户名称|
|»» es_dri_1_user|object|false|none||电子DRI-1用户|
|»»» id|number|false|none||用户ID|
|»»» name|string|false|none||用户名称|
|»» es_dri_2_user|object|false|none||电子DRI-2用户|
|»»» id|number|false|none||用户ID|
|»»» name|string|false|none||用户名称|
|»» es_dri_3_user|object|false|none||电子DRI-3用户|
|»»» id|number|false|none||用户ID|
|»»» name|string|false|none||用户名称|
|»» three_pa_allocations|[object]|false|none||3PA分配|
|»»» id|number|false|none||分配ID|
|»»» type|object|false|none||类型|
|»»»» code|string|false|none||类型代码|
|»»»» value|string|false|none||类型值|
|»»» three_pa|object|false|none||3PA信息|
|»»»» id|number|false|none||3PA ID|
|»»»» name|string|false|none||3PA名称|
|»»»» code|string|false|none||3PA代码|
|»»»» auditors|[object]|false|none||审计人员列表|
|»»»»» id|number|true|none||审计人员分配ID|
|»»»»» user|object|true|none||用户信息|
|»»»»»» id|number|true|none||用户ID|
|»»»»»» name|string|true|none||用户名称|
|» total|number|false|none||总记录数|

## POST Project Allocation 创建

POST /api/3pa/project/allocation/create

> Body 请求参数

```json
{
  "project_id": 0,
  "year": "string",
  "ssm_id": 0,
  "ssm_secondary_id": 0,
  "ssm_manager_id": 0,
  "dd_id": 0,
  "dd_secondary_id": 0,
  "dd_manager_id": 0,
  "three_pa_allocations": [
    {
      "id": 0,
      "three_pa_id": 0,
      "type": "string",
      "auditor_name": [1, 2, 3]
    }
  ]
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 ||none|
|» project_id|body|number| 是 ||项目ID|
|» year|body|string| 是 ||年份|
|» ssm_id|body|number| 否 ||SSM用户ID|
|» ssm_secondary_id|body|number| 否 ||SSM副用户ID|
|» ssm_manager_id|body|number| 否 ||SSM经理ID|
|» dd_id|body|number| 否 ||DD用户ID|
|» dd_secondary_id|body|number| 否 ||DD副用户ID|
|» dd_manager_id|body|number| 否 ||DD经理ID|
|» three_pa_allocations|body|[object]| 否 ||3PA分配列表|
|»» id|body|number| 否 ||分配ID，更新时使用|
|»» three_pa_id|body|number| 是 ||3PA ID|
|»» type|body|string| 是 ||类型，可选值: PHYSICAL | ELECTRONIC|
|»» auditor_name|body|array| 否 ||审计员ID列表|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "id": 0
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||操作结果状态|
|» code|number|false|none||状态码|
|» message|string|false|none||提示信息|
|» data|object|false|none||返回数据|
|»» id|number|false|none||创建的分配ID|

## POST Project Allocation 导入

POST /api/3pa/project/allocation/import

> Body 请求参数

```yaml
project_id: string
file: string

```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 ||none|
|» project_id|body|string| 是 ||none|
|» file|body|string(binary)| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## GET Project Allocation 导入模板

GET /api/3pa/project/allocation/template

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Content-Type|header|string| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## GET Project Chart electronic

GET /api/3pa/site/project/chart/electronic

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|project_id|query|string| 是 ||none|
|start_date|query|string| 否 ||none|
|end_date|query|string| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "occurrence_date": "string",
      "total": 0,
      "npi_area_count": 0,
      "network_segragarion_count": 0,
      "non_npi_activity_count": 0
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» occurrence_date|string|true|none||2022-11|
|»» total|number|true|none||none|
|»» npi_area_count|number|true|none||none|

## PUT Project Allocation 更新

PUT /api/3pa/project/allocation/{allocation_id}/update

> Body 请求参数

```json
{
  "project_id": 0,
  "year": "string",
  "ssm_id": 0,
  "ssm_secondary_id": 0,
  "ssm_manager_id": 0,
  "dd_id": 0,
  "dd_secondary_id": 0,
  "dd_manager_id": 0,
  "three_pa_allocations": [
    {
      "id": 0,
      "three_pa_id": 0,
      "type": "string"
    }
  ]
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|allocation_id|path|string| 是 ||none|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 ||none|
|» project_id|body|number| 否 ||none|
|» year|body|string| 否 ||none|
|» ssm_id|body|number| 否 ||none|
|» ssm_secondary_id|body|number| 否 ||none|
|» ssm_manager_id|body|number| 否 ||none|
|» dd_id|body|number| 否 ||none|
|» dd_secondary_id|body|number| 否 ||none|
|» dd_manager_id|body|number| 否 ||none|
|» three_pa_allocations|body|[object]| 否 ||none|
|»» id|body|number| 是 ||none|
|»» three_pa_id|body|number| 是 ||none|
|»» type|body|string| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## GET Project Chart physical

GET /api/3pa/site/project/chart/physical

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|project_id|query|string| 是 ||none|
|start_date|query|string| 否 ||none|
|end_date|query|string| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "occurrence_date": "string",
      "total": 0,
      "npi_area_count": 0,
      "checkpoint_count": 0,
      "inventory_count": 0
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» occurrence_date|string|true|none||2022-11|
|»» total|number|true|none||none|
|»» npi_area_count|number|true|none||none|
|»» checkpoint_count|number|true|none||后台过滤条件写死为了Checkpoint，如果category的name更改了，这里也要改|
|»» inventory_count|number|true|none||后台过滤条件写死为了Inventory，如果category的name更改了，这里也要改|

## GET Project Chart category(site info 图三)

GET /api/3pa/site/project/chart/category

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|project_allocation_id|query|string| 是 ||none|
|audit_type|query|string| 是 ||ELECTRONIC|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "audit_quantity": 0,
      "npi_area_count": 0,
      "category": {
        "checkpoints": 0,
        "non_npi_activity": 0,
        "containiment": 0
      },
      "occurrence_date": "string"
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» audit_quantity|number|true|none||none|
|»» npi_area_count|number|true|none||none|
|»» category|object|true|none||PHY：<br />containment<br />inventory<br />checkpoints<br />devices<br />security_camera_system<br />leadership<br />all<br />other<br /><br />ELE：<br />network_segragation<br />internal_audit<br />non_npi_activity<br />leadership<br />endpoint|
|»»» checkpoints|number|false|none||none|
|»»» non_npi_activity|number|false|none||none|
|»»» containiment|number|false|none||none|
|»» occurrence_date|string|true|none||none|

## GET Project Excel

GET /api/3pa/project/template

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

*title*

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|

## GET Project Site info

GET /api/3pa/site/project/info

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|project_id|query|string| 是 ||none|
|audit_type|query|string| 是 ||PHYSICAL | ELECTRONIC|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "npi_area": 0,
    "finding_qty": 0,
    "completion_rate": 0,
    "hit_rate": 0,
    "mttc": 0,
    "pending_qty": 0,
    "reject_drop_qty": 0,
    "due_qty": 0
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|object|false|none||none|
|»» npi_area|number|false|none||none|
|»» finding_qty|number|false|none||none|
|»» completion_rate|number|false|none||none|
|»» hit_rate|number|false|none||none|
|»» mttc|number|false|none||none|
|»» pending_qty|number|false|none||none|
|»» reject_drop_qty|number|false|none||none|
|»» due_qty|number|false|none||none|

## GET Project Site info

GET /api/3pa/site/project/allocation/info

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|project_allocation_id|query|string| 是 ||项目分配ID|
|audit_type|query|string| 是 ||PHYSICAL | ELECTRONIC|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "npi_area": 0,
    "finding_qty": 0,
    "completion_rate": 0,
    "hit_rate": 0,
    "mttc": 0,
    "pending_qty": 0,
    "reject_drop_qty": 0,
    "due_qty": 0
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|object|false|none||none|
|»» npi_area|number|false|none||NPI区域数量|
|»» finding_qty|number|false|none||发现项数量|
|»» completion_rate|number|false|none||完成率|
|»» hit_rate|number|false|none||命中率|
|»» mttc|number|false|none||平均修复时间|
|»» pending_qty|number|false|none||待处理数量|
|»» reject_drop_qty|number|false|none||拒绝/丢弃数量|
|»» due_qty|number|false|none||即将到期数量|

## GET Project site chart group by state

GET /api/3pa/site/project/chart/state

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|project_allocation_id|query|string| 是 ||项目分配ID|
|audit_type|query|string| 是 ||PHYSICAL | ELECTRONIC 审计类型|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "open_count": 0,
      "close_count": 0,
      "overdue_count": 0,
      "occurrence_date": "string"
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» open_count|number|true|none||未过期的开放状态数量|
|»» close_count|number|true|none||已关闭状态数量|
|»» overdue_count|number|true|none||已过期的开放状态数量|
|»» occurrence_date|string|true|none||发生日期|

## GET Project 列表

GET /api/3pa/project/list

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|code|query|string| 否 ||项目代码，支持模糊查询|
|n1ka_code|query|string| 否 ||N1KA代码，精确匹配|
|supplier_site_id|query|string| 否 ||供应商站点ID，精确匹配|
|activate|query|string| 否 ||激活状态，0或1|
|project_id|query|string| 否 ||项目ID，支持模糊查询|
|page|query|string| 否 ||页码|
|size|query|string| 否 ||每页数量|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "supplier_site": {
        "id": 0,
        "name": "string",
        "site": "string"
      },
      "project_id": "string",
      "code": "string",
      "n1ka_code": "string",
      "component": null,
      "activate": true,
      "physical_score": null,
      "electronic_score": null,
      "mean_time": null,
      "mean_time_phys": null,
      "mean_time_elec": null,
      "hit_rate": null,
      "hit_rate_phys": null,
      "hit_rate_elec": null,
      "date_modified": "string",
      "sg50_phys_phase": null,
      "sg80_phys_phase": null,
      "sg90_phys_phase": null,
      "sg100_phys_phase": null,
      "sg50_elec_phase": null,
      "sg80_elec_phase": null,
      "sg90_elec_phase": null,
      "sg100_elec_phase": null,
      "phys_sg50_past": null,
      "phys_sg80_past": null,
      "phys_sg90_past": null,
      "phys_sg100_past": null,
      "elect_sg50_past": null,
      "elect_sg80_past": null,
      "elect_sg90_past": null,
      "elect_sg100_past": null,
      "phys_sg50_projected": null,
      "phys_sg80_projected": null,
      "phys_sg100_projected": null,
      "phys_sg90_projected": null,
      "elect_sg50_projected": null,
      "elect_sg80_projected": null,
      "elect_sg90_projected": null,
      "elect_sg100_projected": null
    }
  ],
  "total": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» id|number|true|none||项目ID|
|»» supplier_site|object|true|none||供应商站点信息|
|»»» id|number|false|none||站点ID|
|»»» name|string|false|none||供应商名称|
|»»» site|string|false|none||站点名称|
|»» project_id|string|true|none||项目编号|
|»» code|string|true|none||项目代码|
|»» n1ka_code|string|true|none||N1KA代码|
|»» component|null¦null|true|none||组件|
|»» activate|boolean|true|none||项目激活状态|
|»» physical_score|null|true|none||物理评分|
|»» electronic_score|null|true|none||电子评分|
|»» mean_time|null|true|none||平均时间|
|»» mean_time_phys|null|true|none||物理平均时间|
|»» mean_time_elec|null|true|none||电子平均时间|
|»» hit_rate|null|true|none||命中率|
|»» hit_rate_phys|null|true|none||物理命中率|
|»» hit_rate_elec|null|true|none||电子命中率|
|»» date_modified|string|true|none||修改日期|
|»» sg50_phys_phase|null|true|none||物理SG50阶段|
|»» sg80_phys_phase|null|true|none||物理SG80阶段|
|»» sg90_phys_phase|null|true|none||物理SG90阶段|
|»» sg100_phys_phase|null|true|none||物理SG100阶段|
|»» sg50_elec_phase|null|true|none||电子SG50阶段|
|»» sg80_elec_phase|null|true|none||电子SG80阶段|
|»» sg90_elec_phase|null|true|none||电子SG90阶段|
|»» sg100_elec_phase|null|true|none||电子SG100阶段|
|»» phys_sg50_past|null|true|none||物理SG50过去|
|»» phys_sg80_past|null|true|none||物理SG80过去|
|»» phys_sg90_past|null|true|none||物理SG90过去|
|»» phys_sg100_past|null|true|none||物理SG100过去|
|»» elect_sg50_past|null|true|none||电子SG50过去|
|»» elect_sg80_past|null|true|none||电子SG80过去|
|»» elect_sg90_past|null|true|none||电子SG90过去|
|»» elect_sg100_past|null|true|none||电子SG100过去|
|»» phys_sg50_projected|null|true|none||物理SG50预测|
|»» phys_sg80_projected|null|true|none||物理SG80预测|
|»» phys_sg100_projected|null|true|none||物理SG100预测|
|»» phys_sg90_projected|null|true|none||物理SG90预测|
|»» elect_sg50_projected|null|true|none||电子SG50预测|
|»» elect_sg80_projected|null|true|none||电子SG80预测|
|»» elect_sg90_projected|null|true|none||电子SG90预测|
|»» elect_sg100_projected|null|true|none||电子SG100预测|
|» total|number|false|none||总记录数|

## POST Project 创建

POST /api/3pa/project/create

> Body 请求参数

```json
[
  {
    "supplier_site_id": 0,
    "project_id": "string",
    "code": "string",
    "n1ka_code": "string",
    "component": "string",
    "physical_score": "string",
    "electronic_score": "string",
    "mean_time": "string",
    "mean_time_phys": "string",
    "mean_time_elec": "string",
    "hit_rate": "string",
    "hit_rate_phys": "string",
    "hit_rate_elec": "string",
    "sg50_phys_phase": "string",
    "sg80_phys_phase": "string",
    "sg90_phys_phase": "string",
    "sg100_phys_phase": "string",
    "sg50_elec_phase": "string",
    "sg80_elec_phase": "string",
    "sg90_elec_phase": "string",
    "sg100_elec_phase": "string",
    "phys_sg50_past": "string",
    "phys_sg80_past": "string",
    "phys_sg90_past": "string",
    "phys_sg100_past": "string",
    "elect_sg50_past": "string",
    "elect_sg80_past": "string",
    "elect_sg90_past": "string",
    "elect_sg100_past": "string",
    "phys_sg50_projected": "string",
    "phys_sg80_projected": "string",
    "phys_sg100_projected": "string",
    "phys_sg90_projected": "string",
    "elect_sg50_projected": "string",
    "elect_sg80_projected": "string",
    "elect_sg90_projected": "string",
    "elect_sg100_projected": "string"
  }
]
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Content-Type|header|string| 是 ||none|
|body|body|array[object]| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## POST Project 导入

POST /api/3pa/project/import

> Body 请求参数

```yaml
file: string

```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 ||none|
|» file|body|string(binary)| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## PUT Project 更新

PUT /api/3pa/project/{project_id}/update

> Body 请求参数

```json
{
  "supplier_site_id": 0,
  "project_id": "string",
  "code": "string",
  "n1ka_code": "string",
  "component": "string"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|project_id|path|string| 是 ||none|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 ||none|
|» supplier_site_id|body|number| 否 ||none|
|» project_id|body|string| 否 ||none|
|» code|body|string| 否 ||none|
|» n1ka_code|body|string| 否 ||none|
|» component|body|string| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## GET Project查询

GET /api/3pa/supplier/site/{site_id}/projects

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|site_id|path|string| 是 ||int|
|Authorization|header|string| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "project_id": "string",
      "supplier_site": {
        "id": 0,
        "name": "string"
      },
      "code": "string",
      "n1ka_code": "string",
      "component": null,
      "physical_score": null,
      "electronic_score": null,
      "mean_time": null,
      "mean_time_phys": null,
      "mean_time_elec": null,
      "hit_rate": null,
      "hit_rate_phys": null,
      "hit_rate_elec": null,
      "date_modified": "string",
      "sg50_phys_phase": null,
      "sg80_phys_phase": null,
      "sg90_phys_phase": null,
      "sg100_phys_phase": null,
      "sg50_elec_phase": null,
      "sg80_elec_phase": null,
      "sg90_elec_phase": null,
      "sg100_elec_phase": null,
      "phys_sg50_past": null,
      "phys_sg80_past": null,
      "phys_sg90_past": null,
      "phys_sg100_past": null,
      "elect_sg50_past": null,
      "elect_sg80_past": null,
      "elect_sg90_past": null,
      "elect_sg100_past": null,
      "phys_sg50_projected": null,
      "phys_sg80_projected": null,
      "phys_sg100_projected": null,
      "phys_sg90_projected": null,
      "elect_sg50_projected": null,
      "elect_sg80_projected": null,
      "elect_sg90_projected": null,
      "elect_sg100_projected": null
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» id|number|true|none||none|
|»» project_id|string|true|none||none|
|»» supplier_site|object|true|none||none|
|»»» id|number|false|none||none|
|»»» name|string|false|none||none|
|»» code|string|true|none||none|
|»» n1ka_code|string|true|none||none|
|»» component|null¦null|true|none||none|
|»» physical_score|null|true|none||none|
|»» electronic_score|null|true|none||none|
|»» mean_time|null|true|none||none|
|»» mean_time_phys|null|true|none||none|
|»» mean_time_elec|null|true|none||none|
|»» hit_rate|null|true|none||none|
|»» hit_rate_phys|null|true|none||none|
|»» hit_rate_elec|null|true|none||none|
|»» date_modified|string|true|none||none|
|»» sg50_phys_phase|null|true|none||none|
|»» sg80_phys_phase|null|true|none||none|
|»» sg90_phys_phase|null|true|none||none|
|»» sg100_phys_phase|null|true|none||none|
|»» sg50_elec_phase|null|true|none||none|
|»» sg80_elec_phase|null|true|none||none|
|»» sg90_elec_phase|null|true|none||none|
|»» sg100_elec_phase|null|true|none||none|
|»» phys_sg50_past|null|true|none||none|
|»» phys_sg80_past|null|true|none||none|
|»» phys_sg90_past|null|true|none||none|
|»» phys_sg100_past|null|true|none||none|
|»» elect_sg50_past|null|true|none||none|
|»» elect_sg80_past|null|true|none||none|
|»» elect_sg90_past|null|true|none||none|
|»» elect_sg100_past|null|true|none||none|
|»» phys_sg50_projected|null|true|none||none|
|»» phys_sg80_projected|null|true|none||none|
|»» phys_sg100_projected|null|true|none||none|
|»» phys_sg90_projected|null|true|none||none|
|»» elect_sg50_projected|null|true|none||none|
|»» elect_sg80_projected|null|true|none||none|
|»» elect_sg90_projected|null|true|none||none|
|»» elect_sg100_projected|null|true|none||none|

## GET 激活/停用项目

GET /api/3pa/project/{project_id}/activate

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|project_id|path|string| 是 ||项目ID|
|Authorization|header|string| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

# 3PA

## GET 3PA Allocation 列表

GET /api/3pa/3pa/allocation/list

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|project_allocation_id|query|string| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "project_allocation": {
        "id": 0,
        "year": "string",
        "project": {
          "id": 0,
          "code": "string",
          "n1ka_code": "string",
          "supplier_site": {}
        }
      },
      "type": {
        "code": "string",
        "value": "string"
      },
      "three_pa": {
        "id": 0,
        "name": "string"
      },
      "auditors": [
        {
          "id": 0,
          "name": "string"
        }
      ]
    }
  ],
  "total": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» id|number|false|none||none|
|»» project_allocation|object|false|none||none|
|»»» id|number|false|none||none|
|»»» year|string|false|none||none|
|»»» project|object|false|none||none|
|»»»» id|number|false|none||none|
|»»»» code|string|false|none||none|
|»»»» n1ka_code|string|false|none||none|
|»»»» supplier_site|object|false|none||none|
|»»»»» id|number|false|none||none|
|»»»»» name|string|false|none||none|
|»»»»» supplier|object|false|none||none|
|»»»»»» id|number|false|none||none|
|»»»»»» name|string|false|none||none|
|»» type|object|false|none||none|
|»»» code|string|false|none||none|
|»»» value|string|false|none||none|
|»» three_pa|object|false|none||none|
|»»» id|number|false|none||none|
|»»» name|string|false|none||none|
|»» auditors|[object]|false|none||none|
|»»» id|number|true|none||none|
|»»» name|string|true|none||none|
|» total|number|false|none||none|

## POST 3PA Allocation 创建

POST /api/3pa/3pa/allocation/create

> Body 请求参数

```json
{
  "project_allocation_id": 0,
  "auditor_id": 0,
  "type": "string",
  "three_pa_id": 0
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 ||none|
|» project_allocation_id|body|number| 是 ||none|
|» auditor_id|body|number| 否 ||none|
|» type|body|string| 是 ||none|
|» three_pa_id|body|number| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## PUT 3PA Allocation 更新

PUT /api/3pa/3pa/allocation/{allocation_id}/update

> Body 请求参数

```json
{
  "auditors": {
    "action": "string",
    "data": [
      0
    ]
  },
  "three_pa_id": 0
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|allocation_id|path|string| 是 ||none|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 ||none|
|» auditors|body|object| 否 ||none|
|»» action|body|string| 是 ||默认传update，如果要清空auditor，传delete|
|»» data|body|[number]| 是 ||auditor id|
|» three_pa_id|body|number| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## GET 3PA allocation auditor 列表

GET /api/3pa/3pa/allocation/auditor/list

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|page|query|string| 否 ||none|
|size|query|string| 否 ||none|
|project_allocation_id|query|string| 否 ||none|
|type|query|string| 否 ||none|
|three_pa_id|query|string| 否 ||none|
|project_id|query|string| 否 ||none|
|all|query|string| 否 ||默认值筛选生效的分配，当all = true时，包含已经删除的auditor|
|auditor_order|query|string| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "auditor": {
        "id": 0,
        "name": "string"
      },
      "three_pa_allocation": {
        "id": 0,
        "three_pa": {
          "id": 0,
          "name": "string"
        },
        "type": {
          "code": "string",
          "value": "string"
        },
        "project_allocation": {
          "id": 0,
          "year": "string",
          "project": {}
        }
      }
    }
  ],
  "total": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» id|number|false|none||none|
|»» auditor|object|false|none||none|
|»»» id|number|false|none||none|
|»»» name|string|false|none||none|
|»» three_pa_allocation|object|false|none||none|
|»»» id|number|false|none||none|
|»»» three_pa|object|false|none||none|
|»»»» id|number|false|none||none|
|»»»» name|string|false|none||none|
|»»» type|object|false|none||none|
|»»»» code|string|false|none||none|
|»»»» value|string|false|none||none|
|»»» project_allocation|object|false|none||none|
|»»»» id|number|false|none||none|
|»»»» year|string|false|none||none|
|»»»» project|object|false|none||none|
|»»»»» id|number|false|none||none|
|»»»»» code|string|false|none||none|
|»»»»» n1ka_code|string|false|none||none|
|»»»»» supplier_site|object|false|none||none|
|»»»»»» id|number|false|none||none|
|»»»»»» name|string|false|none||none|
|»»»»»» supplier|object|false|none||none|
|»»»»»»» id|number|false|none||none|
|»»»»»»» name|string|false|none||none|
|» total|number|false|none||none|

## DELETE 3PA allocation auditor 删除

DELETE /api/3pa/3pa/allocation/auditor/{3pa_allocation_auditor_id}/delete

> Body 请求参数

```yaml
{}

```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|3pa_allocation_auditor_id|path|string| 是 ||none|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## PUT 3PA allocation auditor 更新

PUT /api/3pa/3pa/allocation/auditor/{3pa_allocation_auditor_id}/update

> Body 请求参数

```json
{
  "auditor_id": 0
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|3pa_allocation_auditor_id|path|string| 是 ||none|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 ||none|
|» auditor_id|body|number| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## POST 3PA allocation auditor创建

POST /api/3pa/3pa/allocation/{3pa_allocation_id}/auditor/create

> Body 请求参数

```json
{
  "auditor_id": 0
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|3pa_allocation_id|path|string| 是 ||none|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 ||none|
|» auditor_id|body|number| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## POST 3PA create

POST /api/3pa/3pa/create

> Body 请求参数

```json
{
  "name": "string",
  "code": "string",
  "remark": "string"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 ||none|
|» name|body|string| 否 ||none|
|» code|body|string| 否 ||none|
|» remark|body|string| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## GET 3PA 列表

GET /api/3pa/3pa/list

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|page|query|string| 否 ||none|
|size|query|string| 否 ||none|
|Authorization|header|string| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": "string",
      "name": "string",
      "code": "string"
    }
  ],
  "total": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» id|string|true|none||none|
|»» name|string|true|none||none|
|»» code|string|true|none||none|
|» total|number|false|none||none|

## PUT 3PA 更新

PUT /api/3pa/3pa/{three_pa_id}/update

> Body 请求参数

```json
{
  "name": "string",
  "code": "string",
  "remark": "string"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|three_pa_id|path|string| 是 ||none|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 ||none|
|» name|body|string| 否 ||none|
|» code|body|string| 否 ||none|
|» remark|body|string| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

# Finding

## GET Finding Excel Template

GET /api/3pa/audit/report/template

直接返回一个流文件

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

*title*

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|

## GET Finding todo list

GET /api/3pa/audit/report/todo/list

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "3536336051019776": {
      "name": "string",
      "3536336069894144": {
        "name": "string",
        "3536336095059968": {
          "open": null,
          "overdue": null,
          "overdue_lt7": null,
          "code": null,
          "n1ka_code": null,
          "has_physical": null
        }
      }
    }
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|object|false|none||none|
|»» 3536336051019776|object|false|none||supplier_id|
|»»» name|string|false|none||none|
|»»» 3536336069894144|object|false|none||site_id|
|»»»» name|string|false|none||none|
|»»»» 3536336095059968|object|false|none||project_id|
|»»»»» open|number|false|none||none|
|»»»»» overdue|number|false|none||none|
|»»»»» overdue_lt7|number|false|none||none|
|»»»»» code|string|false|none||none|
|»»»»» n1ka_code|string|false|none||none|
|»»»»» has_physical|boolean|false|none||none|

## POST Finding 导入

POST /api/3pa/audit/report/import

> Body 请求参数

```yaml
project_id: string
project_allocation_id: string
file: string

```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 ||none|
|» project_id|body|string| 是 ||none|
|» project_allocation_id|body|string| 是 ||none|
|» file|body|string(binary)| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "ids": [
      0
    ],
    "exists": [
      0
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|object|false|none||none|
|»» ids|[number]|true|none||none|
|»» exists|[number]|true|none||none|

## GET Finding数量查询接口

GET /api/3pa/audit/report/count

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|audit_type|query|string| 是 ||PHYSICAL | ELECTRONIC|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "state": "string",
      "count": 0
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» state|string|false|none||none|
|»» count|number|false|none||none|

## GET Finding查询

GET /api/3pa/audit/reports

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|page|query|string| 否 ||none|
|size|query|string| 否 ||none|
|state|query|string| 是 ||多个状态用英文逗号分隔|
|auditor_id|query|string| 否 ||none|
|supplier_id|query|string| 否 ||none|
|supplier_site_id|query|string| 否 ||none|
|project_id|query|string| 否 ||none|
|auditor_ids|query|string| 否 ||none|
|three_pa_id|query|string| 否 ||none|
|occurrence_date|query|string| 否 ||none|
|audit_type|query|string| 否 ||PHYSICAL | ELECTRONIC|
|building|query|string| 否 ||none|
|floor|query|string| 否 ||none|
|npi_area|query|string| 否 ||none|
|question_no|query|string| 否 ||none|
|due_date|query|string| 否 ||none|
|completion_date|query|string| 否 ||none|
|orderby|query|string| 否 ||不涉及 _id字段的|
|Authorization|header|string| 是 ||none|

#### 详细说明

**state**: 多个状态用英文逗号分隔
Tab页签 | 对应state值
Draft列表 | draft
Pending for Approvel列表 | pending,pending_approval (pending为首次提交，pending_approval为修改后提交，这种状态的按钮不能出现Clarification)
Clarification列表 | pending_edit
Open列表 | open
Close列表 | close

        ('draft', 'Draft'),
        ('pending', 'Pending for Approval'),
        ('pending_edit', 'Pending for Edit'),
        ('pending_approval', 'Pending for Approval'),
        ('clarification', 'Clarification'),
        ('open', 'Open'),
        ('close', 'Close'),
        ('drop', 'Drop'),

**orderby**: 不涉及 _id字段的
所有字段直接传。
auditor_id传auditor，剩下的类似
project.code
project.n1ka_code
category
measurement
reject_user

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "supplier_name": "string",
      "supplier_site_name": "string",
      "project_code": "string",
      "project_n1ka_code": "string",
      "audit_type": {
        "code": "string",
        "value": "string"
      },
      "auditor": {
        "id": 0,
        "name": "string"
      },
      "date": "string",
      "time": "string",
      "building": "string",
      "floor": "string",
      "npi_area": "string",
      "audit_method": {
        "code": "string",
        "value": "string"
      },
      "scs_ip": "string",
      "question_no": "string",
      "project": {
        "id": 0,
        "code": "string",
        "n1ka_code": "string",
        "supplier_site": {
          "id": 0,
          "name": "string",
          "region": "string",
          "dri": "string",
          "report_cadence": "string",
          "address_en": "string",
          "latitude": "string",
          "longitude": "string",
          "supplier": {}
        }
      },
      "project_allocation": {
        "id": 0,
        "year": "string"
      },
      "category": {
        "id": 0,
        "name": "string",
        "type": {
          "code": "string",
          "value": "string"
        },
        "score_gate": "string"
      },
      "measurement": {
        "id": 0,
        "name": "string",
        "requirement": null
      },
      "occurrence_date": "string",
      "occurrence_time": "string",
      "description": "string",
      "root_cause": "string",
      "action_plan": "string",
      "owner": "string",
      "due_date": "string",
      "completion_date": "string",
      "repeat": true,
      "close_on_time": null,
      "days_of_exposure": null,
      "no_finding_issued": true,
      "reject_user": {},
      "reject_date": "string",
      "comment": "string",
      "duplicate": true,
      "state": {
        "code": "string",
        "value": "string"
      }
    }
  ],
  "total": 0,
  "counts": [
    {
      "state": "string",
      "count": 0
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» id|number|true|none||none|
|»» supplier_name|string|true|none||none|
|»» supplier_site_name|string|true|none||none|
|»» project_code|string|true|none||none|
|»» project_n1ka_code|string|true|none||none|
|»» audit_type|object|true|none||none|
|»»» code|string|false|none||none|
|»»» value|string|false|none||none|
|»» auditor|object|true|none||none|
|»»» id|number|false|none||none|
|»»» name|string|false|none||none|
|»» date|string|true|none||none|
|»» time|string|true|none||none|
|»» building|string|true|none||none|
|»» floor|string|true|none||none|
|»» npi_area|string|true|none||none|
|»» audit_method|object|true|none||none|
|»»» code|string|false|none||none|
|»»» value|string|false|none||none|
|»» scs_ip|string|true|none||none|
|»» question_no|string|true|none||none|
|»» project|object|true|none||none|
|»»» id|number|false|none||none|
|»»» code|string|false|none||none|
|»»» n1ka_code|string|false|none||none|
|»»» supplier_site|object|true|none||none|
|»»»» id|number|true|none||none|
|»»»» name|string|true|none||none|
|»»»» region|string|true|none||none|
|»»»» dri|string|true|none||none|
|»»»» report_cadence|string|true|none||none|
|»»»» address_en|string|true|none||none|
|»»»» latitude|string|true|none||none|
|»»»» longitude|string|true|none||none|
|»»»» supplier|object|true|none||none|
|»»»»» id|number|true|none||none|
|»»»»» name|string|true|none||none|
|»» project_allocation|object|true|none||none|
|»»» id|number|true|none||none|
|»»» year|string|true|none||none|
|»» category|object|true|none||none|
|»»» id|number|false|none||none|
|»»» name|string|false|none||none|
|»»» type|object|false|none||none|
|»»»» code|string|false|none||none|
|»»»» value|string|false|none||none|
|»»» score_gate|string|false|none||none|
|»» measurement|object|true|none||none|
|»»» id|number|false|none||none|
|»»» name|string|false|none||none|
|»»» requirement|null|false|none||none|
|»» occurrence_date|string|true|none||none|
|»» occurrence_time|string|true|none||none|
|»» description|string|true|none||none|
|»» root_cause|string¦null|true|none||none|
|»» action_plan|string¦null|true|none||none|
|»» owner|string¦null|true|none||none|
|»» due_date|string¦null|true|none||none|
|»» completion_date|string¦null|true|none||none|
|»» repeat|boolean¦null|true|none||none|
|»» close_on_time|null|true|none||none|
|»» days_of_exposure|null|true|none||none|
|»» no_finding_issued|boolean¦null|true|none||none|
|»» reject_user|object|true|none||none|
|»» reject_date|string|true|none||none|
|»» comment|string|true|none||none|
|»» duplicate|boolean|true|none||none|
|»» state|object|true|none||none|
|»»» code|string|false|none||none|
|»»» value|string|false|none||none|
|» total|number|false|none||none|
|» counts|[object]|false|none||none|
|»» state|string|false|none||none|
|»» count|number|false|none||none|

## GET Finding Category查询

GET /api/3pa/finding/category/list

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|type|query|string| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "type": "string",
      "name": "string",
      "score_gate": "string"
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» id|number|false|none||none|
|»» type|string|false|none||none|
|»» name|string|false|none||none|
|»» score_gate|string|false|none||none|

## GET Finding Measurement查询

GET /api/3pa/finding/measurement/list

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|category_id|query|string| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "name": "string",
      "requirement": null
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» id|number|false|none||none|
|»» name|string|false|none||none|
|»» requirement|null|false|none||none|

## GET 类别测量列表

GET /api/3pa/finding/categoryMeasurement/list

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||认证token|
|page|query|integer| 否 ||页码，默认为1|
|size|query|integer| 否 ||每页大小，默认为20|
|category_id|query|integer| 否 ||类别ID|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "category_id": 0,
      "category_name": "string",
      "measurement_id": 0,
      "measurement_name": "string"
    }
  ],
  "total": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» id|number|true|none||记录ID|
|»» category_id|number|true|none||类别ID|
|»» category_name|string|true|none||类别名称|
|»» measurement_id|number|true|none||测量ID|
|»» measurement_name|string|true|none||测量名称|
|» total|number|false|none||总记录数|

## POST 创建类别测量

POST /api/3pa/finding/categoryMeasurement/create

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||认证token|
|Content-Type|header|string| 是 ||application/json|
|body|body|object| 是 ||none|
|» category_id|body|integer| 是 ||类别ID|
|» measurement_id|body|integer| 是 ||测量ID|

> 请求示例

```json
{
  "category_id": 1,
  "measurement_id": 2
}
```

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## POST 更新类别测量

POST /api/3pa/finding/categoryMeasurement/update

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||认证token|
|Content-Type|header|string| 是 ||application/json|
|body|body|object| 是 ||none|
|» id|body|integer| 是 ||记录ID|
|» category_id|body|integer| 是 ||类别ID|
|» measurement_id|body|integer| 是 ||测量ID|

> 请求示例

```json
{
  "id": 1,
  "category_id": 1,
  "measurement_id": 2
}
```

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## POST 删除类别测量

POST /api/3pa/finding/categoryMeasurement/delete

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||认证token|
|id|query|integer| 是 ||记录ID|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## POST 导入类别测量

POST /api/3pa/finding/categoryMeasurement/import

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||认证token|
|Content-Type|header|string| 是 ||multipart/form-data|
|file|formData|file| 是 ||Excel文件|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## GET 获取类别测量版本

GET /api/3pa/finding/categoryMeasurement/version

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||认证token|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "version": "string",
    "update_time": "string"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|object|false|none||none|
|»» version|string|true|none||版本号|
|»» update_time|string|true|none||更新时间|

## GET 获取测量信息

GET /api/3pa/finding/measurement/info

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||认证token|
|id|query|integer| 是 ||测量ID|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "name": "string",
    "code": "string",
    "description": "string"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|object|false|none||none|
|»» id|number|true|none||测量ID|
|»» name|string|true|none||测量名称|
|»» code|string|true|none||测量代码|
|»» description|string|false|none||测量描述|

## POST 创建测量

POST /api/3pa/finding/measurement/create

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||认证token|
|Content-Type|header|string| 是 ||application/json|
|body|body|object| 是 ||none|
|» name|body|string| 是 ||测量名称|
|» code|body|string| 是 ||测量代码|
|» description|body|string| 否 ||测量描述|

> 请求示例

```json
{
  "name": "测量名称",
  "code": "TEST_CODE",
  "description": "测量描述"
}
```

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## POST 更新测量

POST /api/3pa/finding/measurement/update

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||认证token|
|Content-Type|header|string| 是 ||application/json|
|body|body|object| 是 ||none|
|» id|body|integer| 是 ||测量ID|
|» name|body|string| 是 ||测量名称|
|» code|body|string| 是 ||测量代码|
|» description|body|string| 否 ||测量描述|

> 请求示例

```json
{
  "id": 1,
  "name": "测量名称",
  "code": "TEST_CODE",
  "description": "测量描述更新"
}
```

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## POST 删除测量

POST /api/3pa/finding/measurement/delete

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||认证token|
|id|query|integer| 是 ||测量ID|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## GET 点赞功能

GET /api/3pa/finding/like

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||认证token|
|query|query|string| 是 ||查询条件|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "name": "string"
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» id|number|true|none||ID|
|»» name|string|true|none||名称|

## POST Finding Create

POST /api/3pa/audit/report/create

> Body 请求参数

```json
[
  {
    "audit_type": "string",
    "auditor_id": 0,
    "date": "string",
    "time": "string",
    "building": "string",
    "floor": "string",
    "npi_area": "string",
    "audit_method": "string",
    "scs_ip": "string",
    "project_id": 0,
    "project_allocation_id": 0,
    "category_id": 0,
    "measurement_id": 0,
    "occurrence_date": "string",
    "occurrence_time": "string",
    "description": "string",
    "state": "string",
    "root_cause": "string",
    "action_plan": "string",
    "owner": "string",
    "due_date": "string",
    "completion_date": "string",
    "repeat": true
  }
]
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Content-Type|header|string| 是 ||none|
|body|body|array[object]| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "ids": [
      0
    ],
    "exists": [
      0
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|object|false|none||none|
|»» ids|[number]|true|none||none|
|»» exists|[number]|true|none||none|

## PUT Finding Update

PUT /api/3pa/audit/report/{report_id}/update

> Body 请求参数

```json
{
  "root_cause": "string",
  "action_plan": "string",
  "owner": "string",
  "due_date": "string",
  "completion_date": "string",
  "repeat": true
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|report_id|path|string| 是 ||none|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 ||none|
|» root_cause|body|string| 否 ||none|
|» action_plan|body|string| 否 ||none|
|» owner|body|string| 否 ||none|
|» due_date|body|string| 否 ||none|
|» completion_date|body|string| 否 ||none|
|» repeat|body|boolean| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## PUT Finding Submit

PUT /api/3pa/audit/report/submit

> Body 请求参数

```json
{
  "finding_ids": [
    0
  ]
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 ||none|
|» finding_ids|body|[number]| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## PUT Finding Confirm

PUT /api/3pa/audit/report/confirm

> Body 请求参数

```json
{
  "action": "string",
  "comment": "string",
  "finding_ids": [
    0
  ]
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 ||none|
|» action|body|string| 否 ||'confirm', 'drop', 'clarification'|
|» comment|body|string| 否 ||none|
|» finding_ids|body|[number]| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## POST DRI开放处理

POST /api/3pa/finding/report/driOpenHandle

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||认证token|
|Content-Type|header|string| 是 ||application/json|
|body|body|object| 是 ||none|
|» action|body|string| 是 ||操作类型："confirm"或"clarification"|
|» finding_ids|body|array| 是 ||发现项ID数组|

> 请求示例

```json
{
  "action": "confirm",
  "finding_ids": [1, 2, 3]
}
```

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 说明

- 当`action`为`"confirm"`时：
  - 系统会检查`root_cause`、`action_plan`和`due_date`是否都已填写
  - 验证通过后，状态会变更为`"3pa_verification"`，并记录验证时间

- 当`action`为`"clarification"`时：
  - 系统会检查`re_clarify_time`是否已存在
  - 验证通过后，状态会变更为`"re_clarify"`，并记录澄清时间

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## POST DRI三方验证处理

POST /api/3pa/finding/report/driThreePaVerificationHandle

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||认证token|
|Content-Type|header|string| 是 ||application/json|
|body|body|object| 是 ||none|
|» action|body|string| 是 ||操作类型："close"或"fail"|
|» finding_ids|body|array| 是 ||发现项ID数组|
|» comment|body|string| 否 ||失败原因（当action为"fail"时必需）|

> 请求示例

```json
{
  "action": "close",
  "finding_ids": [1, 2, 3]
}
```

> 当action为"fail"时的请求示例

```json
{
  "action": "fail",
  "finding_ids": [1, 2, 3],
  "comment": "验证失败原因说明"
}
```

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 说明

- 当`action`为`"close"`时：
  - 系统会检查`completion_date`是否已填写
  - 验证通过后，状态会变更为`"close"`

- 当`action`为`"fail"`时：
  - 系统会检查`comment`参数是否已提供
  - 验证通过后，状态会变更为`"pending_approval"`，并保存失败原因

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## GET 获取报告日志

GET /api/3pa/finding/report/logs

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||认证token|
|finding_id|query|integer| 是 ||发现项ID|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "finding_id": 0,
      "user_id": 0,
      "user_name": "string",
      "state": "string",
      "action": "string",
      "comment": "string",
      "create_date": "string"
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» id|number|true|none||日志ID|
|»» finding_id|number|true|none||发现项ID|
|»» user_id|number|true|none||用户ID|
|»» user_name|string|true|none||用户名称|
|»» state|string|true|none||状态|
|»» action|string|true|none||操作|
|»» comment|string|false|none||评论|
|»» create_date|string|true|none||创建日期|

## POST 重新澄清处理

POST /api/3pa/finding/report/reClarifyHandle

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Authorization|header|string| 是 ||认证token|
|Content-Type|header|string| 是 ||application/json|
|body|body|object| 是 ||none|
|» finding_id|body|integer| 是 ||发现项ID|
|» clarify_comment|body|string| 是 ||澄清评论|

> 请求示例

```json
{
  "finding_id": 1,
  "clarify_comment": "需要重新澄清"
}
```

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## GET SSM短信通知(用于定时任务)

GET /api/3pa/finding/report/sms

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|test|query|integer| 否 ||测试标识，1表示测试环境|
|key|query|string| 否 ||安全密钥|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "count": 0
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|object|false|none||none|
|»» count|number|true|none||发送数量|

# 首页报表

## GET 图一，supplier 3pa site coverd

GET /api/3pa/report/finding/supplier

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|supplier_id|query|string| 否 ||none|
|occurrence_date_start|query|string| 否 ||none|
|occurrence_date_end|query|string| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "2022-11": {
      "site": 0,
      "auditor": 0
    },
    "2023-12": {
      "site": 0,
      "auditor": 0
    },
    "2023-01": {
      "site": 0,
      "auditor": 0
    }
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|object|false|none||none|
|»» 2022-11|object|false|none||none|
|»»» site|number|false|none||none|
|»»» auditor|number|false|none||none|
|»» 2023-12|object|false|none||none|
|»»» site|number|false|none||none|
|»»» auditor|number|false|none||none|
|»» 2023-01|object|false|none||none|
|»»» site|number|false|none||none|
|»»» auditor|number|false|none||none|

## GET 图二， 状态统计

GET /api/3pa/report/state/count

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|audit_type|query|string| 否 ||none|
|project_allocation_id|query|string| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "2022-11": {
      "open": 0,
      "closed": 0,
      "overdue": 0
    },
    "2023-12": {
      "open": 0,
      "closed": 0,
      "overdue": 0
    },
    "2023-01": {
      "open": 0,
      "closed": 0,
      "overdue": 0
    }
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|object|false|none||none|
|»» 2022-11|object|false|none||none|
|»»» open|number|false|none||none|
|»»» closed|number|false|none||none|
|»»» overdue|number|false|none||none|
|»» 2023-12|object|false|none||none|
|»»» open|number|false|none||none|
|»»» closed|number|false|none||none|
|»»» overdue|number|false|none||none|
|»» 2023-01|object|false|none||none|
|»»» open|number|false|none||none|
|»»» closed|number|false|none||none|
|»»» overdue|number|false|none||none|

## GET 图四， supplier  category

GET /api/3pa/report/finding/category

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|supplier_id|query|string| 否 ||none|
|occurrence_date_start|query|string| 否 ||none|
|occurrence_date_end|query|string| 否 ||none|
|type|query|string| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "name": "string",
      "code": "string",
      "count": 0
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» name|string|true|none||none|
|»» code|string|true|none||none|
|»» count|number|true|none||none|

## GET 雷达图一

GET /api/3pa/report/finding/category/3pa

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|project_id|query|string| 否 ||none|
|occurrence_date_start|query|string| 否 ||none|
|occurrence_date_end|query|string| 否 ||none|
|type|query|string| 否 ||none|
|three_pa_id|query|string| 否 ||none|
|project_allocation_id|query|string| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "category code": {
      "TÜV SÜD ": {
        "qty": 0,
        "avg": 0
      },
      "all": 0,
      "avg": 0
    }
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|object|false|none||none|
|»» category code|object|false|none||checkpoints ...|
|»»» TÜV SÜD|object|false|none||none|
|»»»» qty|number|false|none||none|
|»»»» avg|number|false|none||none|
|»»» all|number|false|none||none|
|»»» avg|number|false|none||none|

## GET 雷达图二

GET /api/3pa/report/finding/category/3pa/auditor

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|project_id|query|string| 否 ||none|
|occurrence_date_start|query|string| 否 ||none|
|occurrence_date_end|query|string| 否 ||none|
|type|query|string| 否 ||none|
|three_pa_id|query|string| 否 ||none|
|project_allocation_id|query|string| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "category code": {
      "TÜV SÜD ": {
        "null": {
          "name": null,
          "qty": null,
          "avg": null
        },
        "avg": {
          "name": null,
          "count": null
        }
      }
    }
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|object|false|none||none|
|»» category code|object|false|none||checkpoints ....|
|»»» TÜV SÜD|object|false|none||none|
|»»»» null|object|false|none||none|
|»»»»» name|string|false|none||none|
|»»»»» qty|number|false|none||none|
|»»»»» avg|number|false|none||none|
|»»»» avg|object|false|none||none|
|»»»»» name|string|false|none||none|
|»»»»» count|number|false|none||none|

# 评分管理

## GET 评分模板列表

GET /api/3pa/score/template/list

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|page|query|string| 否 ||页码|
|size|query|string| 否 ||每页大小|
|Authorization|header|string| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "year": "string",
      "score": 0,
      "item": "string",
      "active": true
    }
  ],
  "total": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» id|number|true|none||none|
|»» year|string|true|none||年份|
|»» score|number|true|none||分数|
|»» item|string|true|none||评分项|
|»» active|boolean|true|none||是否激活|
|» total|number|false|none||总数|

## POST 保存评分模板

POST /api/3pa/score/template/store

> Body 请求参数

```json
{
  "id": 0,
  "year": "string",
  "score": 0,
  "item": "string",
  "active": true
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 ||none|
|» id|body|number| 否 ||模板ID，新增时不传|
|» year|body|string| 是 ||年份|
|» score|body|number| 是 ||分数|
|» item|body|string| 是 ||评分项|
|» active|body|boolean| 否 ||是否激活|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## GET 获取评分信息

GET /api/3pa/score/scoring/info

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|year|query|string| 是 ||年份|
|auditor_id|query|string| 是 ||被评分人ID|
|monthly|query|string| 是 ||月份|
|Authorization|header|string| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "year": "string",
      "score": 0,
      "item": "string",
      "last_month": 0,
      "score_month": 0
    }
  ]
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» id|number|true|none||模板ID|
|»» year|string|true|none||年份|
|»» score|number|true|none||分数|
|»» item|string|true|none||评分项|
|»» last_month|number|true|none||上月得分|
|»» score_month|number|true|none||当月得分|

## POST 保存评分

POST /api/3pa/score/scoring/store

> Body 请求参数

```json
{
  "year": "string",
  "auditor_id": 0,
  "monthly": 0,
  "items": [
    {
      "id": 0,
      "score": 0
    }
  ]
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 ||none|
|» year|body|string| 是 ||年份|
|» auditor_id|body|number| 是 ||被评分人ID|
|» monthly|body|number| 是 ||月份|
|» items|body|[object]| 是 ||评分项目|
|»» id|body|number| 是 ||模板ID|
|»» score|body|number| 是 ||分数|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

## GET 评分详情列表

GET /api/3pa/score/detail/list

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|year|query|string| 是 ||年份|
|auditor_id|query|string| 否 ||被评分人ID|
|three_pa_id|query|string| 否 ||三方评估机构ID|
|template|query|string| 否 ||模板名称搜索|
|monthly|query|string| 否 ||月份|
|ssm_id|query|string| 否 ||评分人ID|
|page|query|string| 否 ||页码|
|size|query|string| 否 ||每页大小|
|Authorization|header|string| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "year": "string",
      "auditor": "string",
      "three_pa": "string",
      "ssm_id": "string",
      "item": "string",
      "score": 0,
      "monthly": 0,
      "create_date": "string"
    }
  ],
  "total": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» id|number|true|none||详情ID|
|»» year|string|true|none||年份|
|»» auditor|string|true|none||被评分人|
|»» three_pa|string|true|none||三方评估机构|
|»» ssm_id|string|true|none||评分人|
|»» item|string|true|none||评分项|
|»» score|number|true|none||分数|
|»» monthly|number|true|none||月份|
|»» create_date|string|true|none||创建日期|
|» total|number|false|none||总数|

## GET 评分摘要列表

GET /api/3pa/score/summary/list

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|year|query|string| 是 ||年份|
|auditor_id|query|string| 否 ||被评分人ID|
|three_pa_id|query|string| 否 ||三方评估机构ID|
|page|query|string| 否 ||页码|
|size|query|string| 否 ||每页大小|
|Authorization|header|string| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "year": "string",
      "auditor": "string",
      "three_pa": "string",
      "item": "string",
      "score_list": {
        "jan": 0,
        "feb": 0,
        "mar": 0,
        "apr": 0,
        "may": 0,
        "jun": 0,
        "jul": 0,
        "aug": 0,
        "sep": 0,
        "oct": 0,
        "nov": 0,
        "dec": 0,
        "q1": 0,
        "q2": 0,
        "q3": 0,
        "q4": 0
      }
    }
  ],
  "total": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» year|string|true|none||年份|
|»» auditor|string|true|none||被评分人|
|»» three_pa|string|true|none||三方评估机构|
|»» item|string|true|none||评分项|
|»» score_list|object|true|none||得分列表|
|»»» jan|number|true|none||一月|
|»»» feb|number|true|none||二月|
|»»» mar|number|true|none||三月|
|»»» apr|number|true|none||四月|
|»»» may|number|true|none||五月|
|»»» jun|number|true|none||六月|
|»»» jul|number|true|none||七月|
|»»» aug|number|true|none||八月|
|»»» sep|number|true|none||九月|
|»»» oct|number|true|none||十月|
|»»» nov|number|true|none||十一月|
|»»» dec|number|true|none||十二月|
|»»» q1|number|true|none||第一季度|
|»»» q2|number|true|none||第二季度|
|»»» q3|number|true|none||第三季度|
|»»» q4|number|true|none||第四季度|
|» total|number|false|none||总数|

## POST 获取待评分列表

POST /api/3pa/score/scoring/list

> Body 请求参数

```json
{
  "year": "string",
  "monthly": 0,
  "auditor_id": 0,
  "three_pa_id": 0,
  "page": 1,
  "size": 20
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 ||none|
|» year|body|string| 是 ||年份|
|» monthly|body|number| 是 ||月份|
|» auditor_id|body|number| 否 ||被评分人ID|
|» three_pa_id|body|number| 否 ||三方评估机构ID|
|» page|body|number| 否 ||页码|
|» size|body|number| 否 ||每页大小|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": [
    {
      "year": "string",
      "monthly": 0,
      "auditor_id": 0,
      "name": "string",
      "3pa": "string",
      "status": "string"
    }
  ],
  "total": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|[object]|false|none||none|
|»» year|string|true|none||年份|
|»» monthly|number|true|none||月份|
|»» auditor_id|number|true|none||被评分人ID|
|»» name|string|true|none||被评分人姓名|
|»» 3pa|string|true|none||三方评估机构|
|»» status|string|true|none||状态(Open/Done)|
|» total|number|false|none||总数|

# 隐私政策

## GET 获取隐私政策

GET /api/3pa/privacy/get

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "content": "string"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|object|false|none||none|
|»» id|number|true|none||ID|
|»» content|string|true|none||内容|

## POST 更新隐私政策

POST /api/3pa/privacy/update

> Body 请求参数

```json
{
  "content": "string"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|Content-Type|header|string| 是 ||none|
|body|body|object| 否 ||none|
|» content|body|string| 是 ||内容|

> 返回示例

> 200 Response

```json
{
  "success": 0,
  "code": 0,
  "message": "string",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|number|false|none||none|
|» code|number|false|none||none|
|» message|string|false|none||none|
|» data|null|false|none||none|

