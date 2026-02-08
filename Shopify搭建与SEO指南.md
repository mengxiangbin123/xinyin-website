# 心音科技官网 · Shopify 搭建与 SEO 指南

## 一、为什么用 Shopify

- **快速上线**：无需自建服务器，选主题、填内容即可上线。
- **支付与订单**：支持预售/预约、优惠码、多货币（若做海外）。
- **SEO 基础完善**：自动 sitemap、可编辑 meta、友好 URL；配合本项目的 SEO 文档即可落地。
- **风格参考**：Alveos 类官网多为单页/多 section 结构，用 Shopify 的「自定义 Liquid」或「HTML section」即可复刻当前静态页的版块。

## 二、Shopify 建站步骤概要

1. **注册与域名**
   - 在 [Shopify 官网](https://www.shopify.com) 注册店铺（可先选 14 天试用）。
   - 绑定自有域名（如 `mindheart.health`）或在 Shopify 购买域名。

2. **选择主题**
   - 推荐：Dawn（默认）、Craft、Sense 等偏「品牌/单页展示」的免费/付费主题。
   - 在「在线商店 → 主题 → 自定义」里用 section 拼出：Hero、产品特点、产品展示、AI/闭环、隐私、价格、证言、FAQ、联系、Footer。

3. **页面结构建议**
   - **首页**：当前 `index.html` 的所有 section 作为首页内容（Hero、核心卖点、产品形态、智能闭环、App、隐私、价格、证言、FAQ、背书、CTA、Footer）。
   - **产品页**：为「心声环」「心声环 Pro」各建一个 Product，填写标题、描述、价格、图片；在主题中可加「预约/咨询」按钮跳转联系表单或第三方预约工具。
   - **其他页面**：可增加「科学与临床」「关于我们」「隐私政策」「服务条款」等页面，并在导航与 Footer 中链接。

4. **SEO 设置（关键）**
   - **每页 Title / Description**：按《SEO与页面结构.md》填写（首页、产品页、科学页等）。
   - **主题 SEO**：在「主题 → 编辑代码」中检查 `<title>`、`meta name="description"` 是否可从后台编辑；若不能，用「Meta 字段」或主题文档中的 SEO 区块。
   - **结构化数据**：在主题的 `theme.liquid` 或产品/首页模板的 `<head>` 中粘贴《SEO与页面结构.md》中的 JSON-LD（Organization、Product、FAQ 等），注意把 `https://mindheart.health` 和价格等信息改成实际域名与价格。
   - **图片**：所有产品图、Banner 图务必加 `alt`，包含「心音」「心电」「心声环」等关键词。
   - **Sitemap**：Shopify 自动生成 `https://你的店铺.myshopify.com/sitemap.xml`，在 Google Search Console / 百度站长中提交该 URL。

5. **表单与预约**
   - 用 Shopify App 安装「表单/联系/预约」类应用（如 Form Builder、HubSpot 等），或使用第三方表单服务，把表单提交地址替换当前静态页中的 `#`。
   - 在「预约体验」按钮或 CTA 区块链接到该表单页面或弹窗。

6. **多语言（可选）**
   - 若做中英双语：使用 Shopify Markets 或多语言 App，为中文/英文各设一套 Title、Description 和内容，并设置 `hreflang`（部分主题或 App 支持）。

## 三、从当前静态站迁移到 Shopify 的要点

- **版块对应**：将 `index.html` 中每个 `<section>` 在 Shopify 中做成一个 Section 或自定义 Liquid 区块（复制 HTML 结构，样式放入 theme.css 或 section 的 `<style>`）。
- **样式**：把 `styles.css` 合并到主题的 CSS 中，或单独作为「资产」上传后在主题中引用，保持与 Alveos 风格一致的配色与字体（如 Noto Sans SC）。
- **脚本**：FAQ 手风琴、移动端菜单、表单提交等逻辑从 `main.js` 迁移到主题的 `theme.js` 或 section 的 `<script>`，避免冲突。
- **Canonical 与 OG**：在 Shopify 后台「偏好设置」或主题设置中填写默认 OG 图与站点描述；每页的 canonical 一般由 Shopify 自动输出，无需手写。

## 四、上线后 SEO 检查清单

- [ ] 所有主要页面有唯一且准确的 Title、Meta Description。
- [ ] 首页及产品页已添加 Organization、Product（及可选 FAQ）的 JSON-LD。
- [ ] 图片均带语义化 `alt`。
- [ ] 已向 Google Search Console、百度站长提交 sitemap 与首页 URL。
- [ ] 移动端访问与速度正常（可用 Google PageSpeed Insights 检查）。
- [ ] 若有英文版，已配置 hreflang 或等效多语言标记。

按以上步骤，即可在 Shopify 上复刻当前官网界面并落实 SEO 优化。静态站文件（`index.html`、`styles.css`、`main.js`）保留作设计稿与文案参考，便于后续迭代或交给设计师/开发做主题定制。
