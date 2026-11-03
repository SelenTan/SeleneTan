# 首页参考图独立审查

范围：第二步首页三个 section 的桌面静态参考；不是已实现网页的 QA。用户尚未接受本批图片。

审查方式：按 identity-skill 的 visual-quality-gate，由独立 reviewer 查看原图与身份/内容 brief；初稿审查后 About Me 修订，再次独立查看。

## 当前交付候选

| Section | 图片 | 桌面参考结论 |
| --- | --- | --- |
| About Me | `references/drafts/v1/01-about-v2.png` | pass：学历与近期技术工作分为两段，消除重复，阅读宽度较初稿收窄 |
| Education | `references/drafts/v1/02-education.png` | pass：学校、学位、日期和 First Class Honours 的对应关系清晰 |
| Experience | `references/drafts/v1/03-experience.png` | pass：角色、机构、研究组、日期和支持性贡献完整 |

初稿 `01-about.png` 保留用于追溯，不属于当前交付候选。生成使用内置 imagegen，准确提示词和迭代记录在 `docs/reference-prompts.json`。

## 独立 reviewer 结论

- 三秒信息分别为 ML/嵌入式背景、UCL/QMUL 教育、自主航行与感知研究经历。
- 头像具有较强视觉重量，但能够作为共享身份线索；正文区仍有清楚的标题与信息层次。
- 三张图的顶部导航、侧栏、配色、字体和正文起始位置一致。
- 未发现意外裁切、文字碰撞、遮挡或姓名错误。
- Education 最利于扫读；About Me 初稿重复且行宽偏长，已通过 v2 修订解决。
- 个人证据来自特定教育组合与 VLM、跨语言、嵌入式及自主航行经历，不需要增加装饰性图表。
- 各 section 应按内容自然结束衔接下一段，不能在实现时照参考图片高度制造整屏空白。

来源复核：reviewer 最初要求核实 certification、route planning、environmental data collection、known landmarks。主代理已在原始 CV Base 正文中逐项找到支持，修订复审不再存在该疑点。

## 四向审查摘要

- 视觉意义：三个职责明确；About Me v2 解决了重复背景说明。
- 一致性：共享 shell 与头像来源一致，无新增品牌或无来源身份素材。
- 节奏：段落介绍、双条教育记录和单条研究经历形成不同内容密度。用户明确要求克制学术结构，因此不强制引入不同风格、背景或卡片体系。
- 可实施性：文字、导航、线条、布局和控件均使用代码；仅头像使用现有独立图片。候选图不能作为页面截图切片或背景使用。

## 尚未验证

- 连续网页中的 section 高度与转场。
- 移动端、超宽屏和深色主题的实际渲染。
- 键盘操作、链接、导航和主题切换。
- 实际网页与已接受参考图的 fidelity 对照和确定性证据验证。

整体实现 QA：not verified。当前仅可请求用户接受这些桌面参考作为首页构建目标；接受后进入素材拆分，不直接跳到页面实现。
