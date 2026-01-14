# 常见问题解答 (FAQ)

## 后端 (LinCMS.NET Core)

**Q1: 如何切换数据库类型？**

A1: 修改 `src/LinCms.Web/appsettings.json` (或 `appsettings.Production.json`) 中的 `ConnectionStrings` 和 `DbType` 节点。例如，要切换到 MySQL，你需要：
1.  提供 MySQL 的连接字符串。
2.  将 `DbType` 的值改为 `MySql`。
详细配置请参考 [后端快速入门 - 数据库配置](./backend-quickstart.md#数据库配置)。

