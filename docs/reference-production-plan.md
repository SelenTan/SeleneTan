# 首页参考图制作计划

状态：首页参考图已被用户接受，并明确批准两项局部删除：Notes 导航/栏目、Dark mode 手动控件。设备主题自动同步。原始图片不可修改，实际目标由锁定图片与 `docs/restoration-plan.md` 中的明确修订共同定义。此次批次只覆盖首页三个 section，不能因此声称其他路由已完成参考或 QA。

当前候选：`references/drafts/v1/01-about-v2.png`、`references/drafts/v1/02-education.png`、`references/drafts/v1/03-experience.png`。初稿 About Me 保留用于追溯。独立审查见 `docs/fresh-review.md`；准确提示词见 `docs/reference-prompts.json`。

已接受版本位于 `references/locked/v1/`，SHA-256 见 `docs/identity-evidence.json`。下方 STYLE_FINGERPRINT 是生成时的历史提示词，保留用于复现；其中 Notes 与 Dark mode 已被用户的明确修订取消，不能再据此生成或实现这两个控件。

## 已确认内容与来源

- 身份：Selene Tan 谭涵梓，用户明确提供。
- 头像：`public/profile.jpg`，已目视检查，是用户现有的游戏角色头像；保持原图，不生成真人替代。
- 结构：参照 lynie.cc，顶部导航、左侧身份栏、右侧连续正文。
- 导航：About Me / Research & Engineering / CV / Blog / Personal / Notes。
- 教育与研究助理经历：CV Base 与已接受的 `site-redesign-brief.md`。
- 机构表述：Tsinghua Shenzhen International Graduate School，Wind Energy and Autonomous Sailing Research Group。
- 不展示未经确认的当前职位、在读状态、硕士成绩或求职意向。LinkedIn 后续补充。

## STYLE_FINGERPRINT

以下英文块在本批每个生成 prompt 中原样复用：

```text
Create a landscape, straight-on, realistic desktop website section screenshot for Selene Tan 谭涵梓. Quiet professional academic/engineering homepage with a small amount of the existing Animal Crossing warmth. Use warm off-white #F7F3E7 for the page, pale cream #ECE6D4 only for the identity sidebar, near-white #FFFDF8 for the reading surface, dark grey-green #37413F for body copy, and teal #1F9489 for links and the active navigation underline. No terracotta, gradients, glow, paper texture, cards, heavy shadows, ornamental diagrams or oversized hero typography. Use Nunito-like clean rounded sans for Latin and clear modern Chinese sans for 谭涵梓; normal-weight body with distinct semibold headings. A slim 76px top navigation spans the page, with a subtle bottom rule; its six labels are exactly About Me, Research & Engineering, CV, Blog, Personal, Notes. About Me is active in every homepage section. Below the header the centered layout has a 260px left identity column and a right reading column approximately 760px wide with a 64px gap. Left column has the supplied original game-avatar image cropped in a 104px circle, then Selene Tan on one line and 谭涵梓 on the next, then Machine learning on one line and & embedded systems on the next, then simple consistent line-icon links Email, LinkedIn, GitHub and a small Dark mode control. Keep the original avatar appearance and proportions; do not invent a person or replace the character. No visible email address or location. Main headings are 32px, identity name 28px, body 18px with 1.65 line height, nav 16px. All text is left aligned; soft corners are limited to the sidebar boundary and avatar, without floating containers. The identity sidebar and header belong to the same shared shell across all three reference images. Output a landscape section crop with enough height for all section content and the shared sidebar, without browser chrome, presentation framing, title labels or added footer artwork. This is a visual reference; all words and controls will be live HTML in the build, and the original avatar will be reused as its own image.
```

## 共享 render contract

- Archetype：各正文为 C0 code-only；全站共享 shell 引用一个已有 independent-media 头像（不是每个 section 新增媒体）。
- Code layer：所有文字、导航、联系方式、主题控件、分隔线、布局和圆角。
- Global shared material：none；无新背景或纹理素材。
- Shared independent media：`public/profile.jpg`，保持完整识别区域，圆形适配，不把文字或控件烘入该素材。
- Integrated scene：none；section-specific raster：0；参考截图不作为页面背景或切片素材。
- 禁止融合：头像、导航和正文互不遮挡；不生成学校 logo、人物照片、假项目截图或没有来源的图表。
- Safe regions：头像圆形、姓名文字块、导航行、正文矩形均为闭合 exclusion zone；任何装饰不得进入或覆盖。
- Responsive：桌面固定列宽和受控正文长度；超宽屏保持最大阅读宽度；手机将身份信息放到正文前，单列换行；导航通过可访问的菜单呈现，不压缩字号。
- 交互：普通导航、真实链接和主题切换；无新增动效。
- 图片仅用于审阅，不代表已测试响应式；实际构建后必须拍摄三个 viewport 的证据。

## Section contracts

### 01 About Me（anchor）

- 内容：两个已接受的英文介绍段落，见 brief；不新增 CTA、身份 badge 或项目精选。
- THREE_SECOND_MESSAGE：Selene 的工作涉及 ML 评估、迁移学习和嵌入式系统。
- PERSONAL_EVIDENCE：UCL MSc study、QMUL First Class BEng、VLM certification、cross-lingual learning、embedded systems。
- AUTHORED_MOVE：左侧原有角色头像保持个性，右侧以学术介绍的阅读秩序承载具体技术方向。
- PRIMARY_FOCAL_POINT：About Me 标题与正文的完整阅读组；头像降至辅助身份线索。
- SECONDARY_ANCHORS：姓名、近期技术方向。
- READING_PATH：姓名/头像 → About Me → 两段正文 → 下一个真实内容 section。
- WHITESPACE_MAP：列间空隙区分身份与正文；正文周围留白维持可读性；不建立固定满屏 hero。
- SEMANTIC_GRAPHIC：none。
- OVERLAP_LEDGER：none。
- VIEWPORT_PAYLOAD：桌面与超宽屏完整显示姓名、导航和介绍；手机在正常滚动中先显示身份和介绍开头，正文不裁切。

### 02 Education

- 内容：University College London，MSc Integrated Machine Learning Systems，Sep 2025–Aug 2026；Queen Mary University of London，BEng Electronic and Electrical Engineering，Sep 2022–Jun 2025，First Class Honours。
- THREE_SECOND_MESSAGE：研究生 ML 系统与本科电子电气工程的教育背景。
- PERSONAL_EVIDENCE：两所学校、学位、日期与本科成绩均来自 CV。
- AUTHORED_MOVE：学校/学位左对齐，日期为窄右列，建立两段教育的可扫读对应关系；不做成并列大卡片。
- PRIMARY_FOCAL_POINT：Education 的两条教育记录。
- SECONDARY_ANCHORS：学位和日期。
- READING_PATH：标题 → UCL 记录 → QMUL 记录。
- WHITESPACE_MAP：条目之间留白表达时间顺序；日期不脱离对应条目；自然内容高度，不虚构额外条目填屏。
- SEMANTIC_GRAPHIC：条目分隔细线仅分隔学校记录，无假 timeline 图形。
- OVERLAP_LEDGER：none。
- VIEWPORT_PAYLOAD：三种 viewport 的每个学位、日期与学校名称都能完整读取；手机日期移到学位下方。

### 03 Experience

- 内容：Research Assistant；Tsinghua Shenzhen International Graduate School；Wind Energy and Autonomous Sailing Research Group；Shenzhen, China；Jun–Oct 2024。
- 两段贡献：Supported research on autonomous sailing vessels and UAV-assisted navigation, including route planning, visual sensing and environmental data collection. Assisted with LiDAR and image processing, associating observations with known landmarks and spatial locations.
- THREE_SECOND_MESSAGE：用户参与自主帆船与 UAV 辅助导航研究。
- PERSONAL_EVIDENCE：明确角色、研究组、日期和支持性贡献，不提升为独立负责人。
- AUTHORED_MOVE：一个完整的研究经历块，以角色、机构、研究组、贡献的不同字重呈现职责层次。
- PRIMARY_FOCAL_POINT：Research Assistant 角色及对应研究主题。
- SECONDARY_ANCHORS：机构、日期。
- READING_PATH：Experience → role / institution → group / date → contributions。
- WHITESPACE_MAP：机构与研究组紧密相邻；贡献两段保持可读；section 高度随内容缩短，不创造全屏留白。
- SEMANTIC_GRAPHIC：none。
- OVERLAP_LEDGER：none。
- VIEWPORT_PAYLOAD：桌面和超宽屏完整经历；手机按角色、机构、日期、贡献单列自然换行。

## 批次与审查

1. 先生成 01 About Me；查看其主体、头像来源、字体、色彩、拓扑与可读性。
2. Anchor 合格后将其作为后两张的构图/风格参考，逐字复用 fingerprint；分别生成 Education 和 Experience，不生成拼贴看板。
3. 逐张检查视觉意义、全站一致性、阅读节奏和可复刻性。此站点已明确采用克制学术结构，保持共享外壳，以段落、双条记录、单段研究经历形成内容节奏，不强行增加不同视觉世界。
4. 保存候选图、准确 prompt 和审查记录；候选图通过后展示用户。未接受前不写入 locked/ 或宣称全站参考完成。
5. 用户确认本批后进入素材拆分清单，保留原头像；不把截图文字作为实际网页。
