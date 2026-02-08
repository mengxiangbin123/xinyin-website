# 心音科技官网界面

本目录包含心音科技（心声环）产品官网的**静态页面原型**、**SEO 配置说明**与 **Shopify 搭建指南**，风格参考 [Alveos](https://www.alveoslabs.com)。

## 内容说明

| 文件 | 说明 |
|------|------|
| `index.html` | 官网首页：Hero、产品卖点、产品展示、AI 闭环、App、隐私、价格、证言、FAQ、背书、联系表单、Footer。含完整 SEO：meta、Open Graph、JSON-LD。 |
| `product.html` | 产品页：心声环 / 心声环 Pro 详情、特点、适用人群、预约 CTA。 |
| `science.html` | 科学与临床：心音+心电原理、临床与科研背书、MindLoop 与数据库。 |
| `contact.html` | 联系我们：预约/咨询表单（体验、购买、商务、媒体）、其他联系方式说明。 |
| `privacy.html` | 隐私政策：数据收集、使用、共享、安全与用户权利。 |
| `terms.html` | 服务条款：接受条款、服务说明、使用规范、医疗免责、知识产权等。 |
| `styles.css` | 全局样式：Alveos 风格版式、配色（青绿主色）、响应式布局及内页样式。 |
| `main.js` | FAQ 手风琴、移动端菜单、表单提交占位、Footer 年份。 |
| `sitemap.xml` | 站点地图（含首页与上述各子页；正式上线时请将域名改为实际域名）。 |
| `robots.txt` | 爬虫规则与 sitemap 地址。 |
| `SEO与页面结构.md` | 关键词、每页 Title/Description、JSON-LD 规划、技术 SEO 要点。 |
| `Shopify搭建与SEO指南.md` | 使用 Shopify 建站的步骤、主题与 section 建议、从本静态站迁移到 Shopify 的要点、上线后 SEO 检查清单。 |

## 本地预览

在项目目录下用本地服务器打开首页，例如：

```bash
cd "/Users/llm/Desktop/心音项目/心音优先的健康管理BP/官网界面"
python3 -m http.server 8080
```

浏览器访问：http://localhost:8080

## 产品与文案来源

- 产品信息来自《心音科技-2026.2.1.pdf》商业计划书。
- 产品名：**心声环**（心音+心电智能项链挂坠）、**心声环 Pro**；配套 **MindLoop** AI 与专属 App；卖点包括双模态、每天 30 秒、临床级准确率、从发现到就医闭环。

## 下一步

1. **替换占位图**：将「产品图」「佩戴示意」等占位块替换为真实产品图，并补全 `og-image.jpg` 等用于分享的图片。
2. **对接表单**：将联系表单的 `action` 改为实际接口或 Shopify/第三方表单地址。
3. **迁移到 Shopify**：按《Shopify搭建与SEO指南.md》在 Shopify 中选主题、建 section、填文案并配置 SEO。
4. **上线前**：将 `index.html` 与 `sitemap.xml`、`robots.txt` 中的 `https://mindheart.health` 改为最终域名。
