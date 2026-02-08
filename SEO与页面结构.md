# 心音科技官网 SEO 与页面结构

## 一、核心关键词与语义

| 类型 | 关键词/短语（中文） | 英文备选 |
|------|---------------------|----------|
| 品牌 | 心音科技、心声环、MindHeart | MindHeart, HeartSound |
| 产品 | 心音检测项链、心电心音一体、智能心音挂坠、居家心脏监测 | heart sound necklace, ECG heart sound wearable |
| 场景 | 居家心脏健康、心脏日常监测、心音+心电、心律失常筛查 | home cardiac monitoring, heart sound ECG |
| 长尾 | 心音仪家用、心音心电双模态、心脏杂音筛查、房颤早筛 | heart murmur screening at home |

## 二、页面级 SEO 设置

### 首页 (index)

- **Title**: `心声环 | 心音+心电智能项链，每天30秒听懂心脏 — 心音科技`
- **Meta Description**: `心声环是心音科技推出的心音与心电双模态智能项链挂坠，搭配专属 App，居家 30 秒完成心脏健康筛查。临床级准确率，AI 一键解读，从发现到就医闭环。`
- **H1**: 仅保留一个主标题，如「听懂心脏，从每天 30 秒开始」或「心音+心电，随身听懂你的心脏」

### 产品页 (product)

- **Title**: `心声环 - 心音心电智能挂坠 | 心音科技官方`
- **Meta Description**: `心声环：心音+心电双模态、三导联心电可选，一次检出率 80%+，临床金标准准确率 95%。磁吸佩戴、长续航，搭配 MindLoop AI 与专属 App。`

### 通用

- **OG Title / Twitter Title**: 与上述 Title 一致或缩短为 60 字内
- **OG Description**: 与 Meta Description 一致或 155 字内
- **Canonical**: 每个页面唯一 canonical URL，避免重复收录
- **hreflang**: 若中英双语，为 zh-CN / en 分别设置

## 三、结构化数据 (JSON-LD)

- **Organization**: 心音科技 / MindHeart，官网 URL、logo、sameAs（社交媒体）
- **Product**: 心声环，name、description、image、brand、offers（价格、货币、库存）
- **WebSite**: 站内搜索（若启用），name、url
- **FAQPage**: 若单独 FAQ 页或首页 FAQ 区块，用 FAQPage 包裹问答

## 四、技术 SEO（Shopify 与静态站通用）

- 所有图片：`alt` 描述产品/场景（含「心音」「心电」「心声环」等关键词）
- 链接：使用语义化锚文本，避免「点击这里」
- 内链：首页 → 产品页 → 科学/临床页 → 购买/预约
- 移动端：视口、字体与触控区域适配
- 速度：图片 WebP、懒加载、关键 CSS 内联（若自建）；Shopify 选轻量主题

## 五、站点地图与索引

- 静态站：提供 `sitemap.xml`，列出所有正式页面
- Shopify：使用后台「在线商店 → 偏好设置」中的 sitemap 链接，提交至百度/Google
- robots.txt：允许爬取产品与主要页面，按需屏蔽后台/参数

## 六、页面版块与 H 层级（参考 Alveos 结构）

1. **Hero**：主标题 + 副标题 + 主 CTA（预约/购买/了解更多）
2. **核心价值**：3–4 个卖点（心音+心电、30 秒、临床级、AI 闭环）
3. **产品形态**：项链/挂坠展示、佩戴方式、无感日常
4. **AI 与闭环**：MindLoop、一键解读、是否就医/如何就医
5. **隐私与安全**：数据本地/云端、医疗合规、用户控制
6. **续航与硬件**：续航、充电方式、防水/耐用
7. **价格与套装**：心声环 / 心声环 Pro、价格、Kickstarter/预售链接（若适用）
8. **用户/专家证言**：简短引用 + 身份
9. **FAQ**：6–10 条常见问题（是否二类械、支持机型、保修、订阅等）
10. **团队/背书**：创始人或合作医院、国家项目
11. **Footer**：联系、隐私政策、服务条款、备案号

以上结构可直接用于静态 HTML 与 Shopify 主题的 section 规划。
