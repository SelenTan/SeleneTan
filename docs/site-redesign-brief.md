# 网站内容与风格方案

状态：内容、布局与首页参考图已确认，进入第三步 / 素材拆分清单。用户在接受参考图时明确删除 Notes，并要求主题自动跟随设备、移除手动开关。首页为顶部导航、左侧个人信息、右侧依次为 About Me、Education、Experience 正文。姓名为 Selene Tan 谭涵梓。LinkedIn 将作为后续补充资料。尚未修改页面代码或部署配置。

## 依据与目标

- 用户提供的现有站点：https://selentan.github.io/im-watching-you/
- 结构参考：https://lynie.cc/，以及用户提供的侧栏和顶部导航截图。
- 本地资料：`src/pages/cv.astro`、现有首页、Personal、全部项目和 Blog 内容，以及仓库外用户的 `Tan CV Base.docx`。
- 原始 CV 覆盖 16 个技术项目及一段研究助理经历；现有站点另有 Investate。网站 CV 的 5 项与 Projects 的 4 项并不完全重合。
- 目标：让招聘人员和研究合作者快速了解技术方向、项目证据、教育背景与经历，同时保留现有模板的柔和气质。
- 访客记忆点：模型评估与可靠性、机器学习实验、嵌入式系统与硬件实现。当前方向先以 CV Base 的近期工作为依据；具体求职意向等用户提供 LinkedIn 后再细化，不从学历日期推断当前任职状态。

## 推荐结构

保留 Astro 多页结构。首页顶部导航、左侧身份信息、右侧按顺序放 About Me、Education、Experience 的正文，参照用户给出的 lynie.cc。近期方向并入 About Me，不单独新增 Current Focus 板块。不迁移框架。

已接受的顶部导航为：`About Me | Research & Engineering | CV | Blog | Personal`。

- `About Me` 返回首页。首页右侧依次为 About Me、Education、Experience 的正文；顶部导航是入口，右侧是内容，不在右侧额外重复一套导航。
- `Research & Engineering` 是 Projects 栏目的已接受新名称，不暗示每个课程项目都是正式研究。页面按技术方向组织，覆盖全部项目。
- `CV` 保留完整经历、技能和项目摘要，与首页和详情页保持事实一致；当前未发现可直接下载的公开 CV 文件，不添加虚假下载按钮。
- `Blog` 仅保留专业写作；当前 AI 与新闻媒体文章属于议题分析，不标注为论文或实验研究。
- `Personal` 接收生活文章、猫咪照片、Instagram 和趣味内容。
- `Notes` 整个栏目取消，包括导航入口及对应页面路由；不再作为网站 section。
- 联系方式集中到左栏，不再占用顶部导航位置。
- 不增设缺乏内容的 Publications、Awards 或 Internships 栏目。

### 左侧身份栏

顺序：现有头像 → 英文名和中文名 → 一句话技术定位 → London, UK（待核实当前所在地）→ Email、LinkedIn、GitHub。无手动主题控件。

已确认显示名为 **Selene Tan 谭涵梓**。联系方式沿用网站现有链接；用户稍后提供 LinkedIn 后核对。Instagram 和 WhatsApp 彩蛋转入 Personal；正式页面的联系入口只执行文字所说明的动作。

定位草稿：`Machine learning evaluation and embedded systems`。

移动端：顶部提供清晰可操作的导航，身份栏排在正文之前，不保留占满屏幕的桌面侧栏。

### 个人介绍与 CV 内容

以下是首页右侧三个内容 section 的来源与文案。Education 和 Experience 在首页展示核心事实，CV 保留完整履历、技能和项目摘要。

**About Me — 已接受的文案方向，LinkedIn 到达后再核对：**

> My background spans machine learning and electronic engineering, with MSc study in Integrated Machine Learning Systems at UCL and a First Class BEng in Electronic and Electrical Engineering from Queen Mary University of London.

**近期方向 — 根据 CV Base 整理的文案草稿：**

> My recent work has focused on vision-language model certification, cross-lingual transfer, and visual domain adaptation. My broader engineering experience includes real-time embedded software, sensing systems, and PCB design, with an emphasis on reproducible experiments and reliable system behaviour.

这段作为 About Me 的第二段，只概括 CV 所记录的工作，不声称当前受雇、仍在读或正在寻找某一类职位。用户提供 LinkedIn 后，再补充有依据的当前目标；不沿用已经过期的 “currently studying”，也不新增独立 Current Focus 首页板块。

**Education — ready，待核实当前学位状态：**

- UCL，MSc Integrated Machine Learning Systems，Sep 2025–Aug 2026，以原始 CV 日期为准；现网站结束日期 Jun 2026 需要更正。
- Queen Mary University of London，BEng Electronic and Electrical Engineering，Sep 2022–Jun 2025，First Class Honours。
- 不从简历写作规则推断硕士成绩；未核实前不自行添加 Distinction。

**Experience — ready：**

- Research Assistant，Jun–Oct 2024。
- 原始 CV 明确给出的研究组：Wind Energy and Autonomous Sailing Research Group，Shenzhen, China。
- 用户已有 CV 规则补充机构名称：Tsinghua Shenzhen International Graduate School；公开前由用户确认采用该机构表述。
- 描述限定为支持自主帆船与 UAV 辅助导航研究、LiDAR 与图像数据处理、基于地标的空间关联。不提升为研究负责人或声称独立完成整个系统。

## 项目清单与已接受的专业命名方向

用户要求 CV Base 中每个项目均展示。覆盖范围为 16 个 CV 技术项目，加现有 Investate，共 17 个独立项目条目，不能因为较早或优先级较低而省略。研究助理经历另放 CV 的 Experience。

以下标题方向已被用户接受；日期、角色、方法和结果保留来源事实。课程/个人/团队属性继续放在元数据中，不靠隐去来源制造资历。项目详情采用问题、贡献、方法、验证、局限和真实链接的结构。

### 模型评估与机器学习

| CV / 现有名称 | 拟议展示标题 | 来源日期 / 内容准备情况 |
| --- | --- | --- |
| Certifying Vision Language Models with Imperfect AI Judges | Vision–Language Model Certification with Imperfect AI Judges | May–Aug 2026；CV 可支持摘要，完整运行最多 10,000 images / 30,000 QA records，不扩大为所有实验规模 |
| Zero Shot Cross Lingual Sentiment Classification with mBERT | Zero-Shot Cross-Lingual Sentiment Transfer with mBERT | Jan–Apr 2026；英语训练、Spanish/Japanese 零样本迁移，待补真实仓库链接 |
| Cross Domain Sketch Classification via Visual Transfer Learning | Cross-Domain Sketch Recognition through Visual Transfer Learning | Jan–Apr 2026；草图域未用于训练，不虚构准确率提升幅度 |
| AI Based Trading Decision System for S&P 500 | Temporal Learning and Cost-Aware Backtesting for S&P 500 Trading Signals | Oct 2025–Jan 2026；强调时间切分和回测约束，不声称稳定盈利 |
| Breast Tumor Classification using Classical ML and CNN | Breast Ultrasound Classification: SVM and CNN Evaluation | Oct 2025–Feb 2026；现有 BreastMNIST 详情与 GitHub 链接可保留，不声称临床可用 |

### 安全与应用系统

| CV / 现有名称 | 拟议展示标题 | 来源日期 / 内容准备情况 |
| --- | --- | --- |
| Security and Privacy Assessment for CRESN Navigation System / Navigation and Security Lab Demo | CRESN Navigation Platform: Security and Privacy Assessment | Jan–Apr 2026；同一项目合并呈现，保留 STRIDE 与授权教学实验语境，不把提议防护措施全部声称为已部署 |
| Investate | Investate: Property Application Prototype | 现有站点来源；保留 Imperial FinTech Hackathon 背景，用户贡献和功能细节不足，维持简短条目 |

### 嵌入式系统与硬件

| CV / 现有名称 | 拟议展示标题 | 来源日期 / 内容准备情况 |
| --- | --- | --- |
| Real Time Snake Game on STM32 with FreeRTOS | Real-Time Interactive Firmware on STM32 and FreeRTOS | Oct–Dec 2025；明确使用 Snake 作为验证场景，不包装为工业部署系统 |
| Smart Solar Powered Planter System Hardware and PCB Design | Solar-Powered Environmental Sensing and Irrigation PCB | Sep–Oct 2025；电路与四层 PCB 设计、ERC/DRC 验证，不把设计写成量产产品 |
| Indoor Visible Light Positioning System | Angle-of-Arrival Indoor Localization with Visible Light | Sep 2024–Jun 2025；现有详情基于角度测量与几何求交，不沿用 CV 页不准确的 trilateration 表述 |
| Modeling and Simulation of Microstrip Using CST Studio Suite | RF Transmission-Line Characterisation and Impedance Matching | Sep 2024–Jan 2025；CST 仿真及 VNA 测量 |
| Embedded Programming with Cyclic and RTOS Systems | Interrupt-Driven and RTOS Embedded Control | Sep 2024–Jan 2025；周期控制、GPIO/SysTick 中断、ADC、RTOS 线程 |
| Conceptualising a High Precision Capacitive Rain Gauge | Capacitive Rainfall Sensing: Modelling and Simulation | Jan–Apr 2024；概念与 COMSOL 仿真，不能声称已制造高精度成品 |
| Autonomous Sumo Robot | Autonomous Mobile Robot: Reactive Navigation and Control | Jan–Apr 2024；保留 sumo 竞赛场景、团队负责人身份及已记录预算/尺寸约束 |
| Keypad Interfacing with the 8051 Microcontroller | 8051 Peripheral Integration: Matrix Input and Display Multiplexing | Nov–Dec 2023；8051、8255、按键扫描与数码管复用 |
| Design and Implementation of a Modular Power Supply Circuit for Low AC Input | Low-Voltage AC–DC Power Supply Design and Validation | Sep–Dec 2023；整流、滤波、稳压、集成验证 |
| Design and Implementation of a Multivibrator Circuit | Analogue Timing Circuits for Coordinated Audio–Visual Signalling | Jan–Apr 2023；多谐振荡、声音与灯光协调，不扩大为安全认证设备 |

展示策略：先展示 5 个近期 ML 项目和 CRESN，再按方向列出其他项目。早期项目用紧凑条目，全部可读；只有有足够资料的项目才使用现有详情页结构展开。研究助理经历放在 Experience，不重复计为第 18 个项目。

### 已有报告与详情页资料

已检查仓库外 `cv_base_extracted_text/` 的 7 份文本，开头内容可对应：

| 文件 | 项目 |
| --- | --- |
| `958764_Selene_Tan_DAPS_Report_25187537_8061738_1187811192.txt` | S&P 500 交易决策与回测 |
| `958764_Selene_Tan_elec0138_report_8321842_893681930.txt` | CRESN 安全与隐私评估 |
| `AMLS_report_8415071_1386161178.txt` | 跨域草图分类 |
| `report_8415083_1491945910.txt` | mBERT 跨语言情感分类 |
| `Report_AMLS_25_26__SN25187537.txt` | BreastMNIST SVM/CNN 评估 |
| `IOT_Software.txt` | STM32 / FreeRTOS 实时交互固件 |
| `Smart_Watering_Report.txt` | 智能灌溉硬件与 PCB |

这些文本可支持后续内容核对，但目前只检查了开头以建立映射，未完成逐份报告全文审阅。现有 VLP 详情另外有项目图片。其余项目先使用 CV 中有依据的摘要，不虚构报告正文、实验或链接。

用户愿意按需提供原始 coursework report。若需在项目详情中原样呈现报告，使用用户提供的原始 PDF 保留图表、公式和版式；可配网页摘要与原文入口。文本提取版不能被称为原始排版报告。不要求用户重复提供已有文本。

## 内容迁移

| 现有内容 | 目的地 / 处理 |
| --- | --- |
| I Hope My Cat Could Stop Trying to Assassinate Me | Personal，保留原文和照片 |
| Tian Ju, the Cat With Four Names | Personal，保留原文和照片 |
| How Artificial Intelligence Is Reshaping News Media | Blog，保留为 AI / media / ethics 专业议题文章；未重新完成引用准确性审查 |
| 首页 Notice Board、Meet my cat、监视玩笑、WhatsApp surprise | 趣味内容移到 Personal；职业首页使用事实性介绍 |
| I'm watching you Ø-Ø 站点标题 | 专业页改为姓名和技术方向；Personal 可保留原趣味表达 |

迁移必须覆盖列表、标签页、RSS、文章内链和图片路径，确保专业 Blog 不再混入生活文章。以真实内容迁移实现，不只隐藏卡片。URL 是否调整在实现方案中明确，不添加未要求的兼容重定向。

## 视觉方向：柔和的专业个人主页（已接受）

- 色彩：沿用暖白 `#F7F3E7`、浅米色 `#ECE6D4`、青绿 `#1F9489`；正文改用更深的中性色候选 `#37413F`，上线前实测对比度。颜色值是候选，后续编排为 OKLCH 语义 tokens。
- 字体：继续使用已安装的 Nunito 与 HarmonyOS Sans SC；姓名和标题使用清晰字重，正文常规字重和舒适行距，不再所有内容同等圆润、同等加粗。
- 布局：顶部单行文字导航；下面约 250px 身份栏和有阅读宽度限制的正文。左对齐，以留白和小标题区分内容，避免大量同款卡片。
- 保留：原头像、柔和配色、少量圆角。浅色/深色主题随设备设置自动改变；删除手动开关，不读取或保存手动主题偏好，设备偏好变化时即时更新，页面导航后继续保持一致。现有插画如保留在专业页，应缩小到页脚等次要位置，不能挤走首屏履历信息。
- 收敛：彩色游戏菜单图标不再作为专业导航；联系方式采用统一且可识别的图标；专业页无彩蛋、猫咪大图和戏谑文案。
- Personal 可以继续使用原有生活叙事、照片与更活泼的装饰。
- 动效：仅导航和必要反馈，不新增大面积自动动画。
- 直观印象：一份有温度、易读的工程与 ML 个人主页；结构学习参考站，视觉沿用用户现有身份。
- 取舍：比纯白学术主页更有个性，但装饰必须控制在内容之外；专业感主要来自可核实的贡献与证据。

## 域名路径

GitHub Pages 可继续托管，无需购买额外服务器。

1. 选择并购买个人域名，核对首年与续费价格；未查询任何候选域名可注册性。
2. 在 GitHub 账户验证域名所有权，再在仓库 Settings → Pages → Custom domain 中设置域名。
3. 根据注册商功能设置根域 A / ALIAS / ANAME；如果使用 A，采用 GitHub 官方当前列出的四个地址。`www` CNAME 指向 `selentan.github.io`，不包含 `/im-watching-you/`。
4. DNS 生效、证书就绪后开启 Enforce HTTPS。
5. 本项目还需要把 `astro.config.mjs` 的 `site` 改为新域名，并去掉部署流程里的项目子路径 `BASE_URL: /im-watching-you/`；同时清理内容中硬编码的旧路径。只改 DNS 会让现有资源地址不完整。
6. 当前使用自定义 GitHub Actions 部署，GitHub 官方说明无需依赖 `CNAME` 文件；以仓库 Pages 设置为准。

免费替代方案：用户主页仓库使用 `selentan.github.io`，可获得没有项目子路径的 GitHub 地址，但仍带 `github.io`。这是另一种站点形态，当前不改仓库名或部署。

官方依据：

- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

## 后续预计修改的文件（确认后再实施）

- `src/components/Header.astro`、`SideBar.astro`、`SideBarMenu.astro`、`SideBarFooter.astro`：导航与身份栏。
- `src/layouts/BaseLayout.astro`、`src/styles/global.css`：页面结构、视觉层级、响应式和主题。
- `src/config.ts`、`src/pages/index.astro`、`src/pages/cv.astro`：姓名、专业介绍和履历。
- `src/content/projects/`、`src/pages/projects/[...page].astro`：项目覆盖、命名和分组；视必要性增加一个共享项目数据文件，避免首页、CV 与项目列表内容分歧。
- `src/content/blog/`、`src/content/config.ts`、`src/pages/personal.astro`、相关文章/标签路由与 `src/pages/rss.xml.js`：生活内容迁移。
- `src/pages/notes/`、`src/layouts/NotesLayout.astro`、`src/content/config.ts` 及 Notes 相关引用：移除该栏目；同步处理已有内容来源，确保构建不再生成 Notes 页面。
- 域名确定后才修改 `astro.config.mjs` 和 `.github/workflows/deploy.yml`。

## 验收与下一步

- 所有 16 个 CV 技术项目和 Investate 都能找到，无重复 CRESN 条目；角色和指标有来源。
- 已确认姓名准确显示为 Selene Tan 谭涵梓；顶部导航和身份栏存在，首页右侧依次展示 About Me、Education、Experience 正文。
- Blog、标签和 RSS 无生活文章混入；Personal 可正常阅读原文及图片。
- 检查桌面和手机、键盘导航、所有真实联系方式和内容路径。设备偏好为浅色/深色时主题正确，设备设置改变时自动同步，站内导航后仍一致，无手动主题开关或旧 localStorage 偏好覆盖。导航、生成页面和 sitemap 中不再出现 Notes 栏目。
- 项目当前没有测试脚本；实现后先运行最快相关检查，再运行生产构建，验证含 `/im-watching-you/` 的现有部署路径。只有实际行为变化需要时才增加有意义的测试。
- 布局、主体方案与首页参考图已接受；原图中的 Notes 和 Dark mode 控件为用户明确要求删除的局部修订，详见 `docs/restoration-plan.md`。用户稍后提供 LinkedIn，用于补充当前状态与目标。当前不为缺失的 LinkedIn 新资料编造在读、任职或求职主张。
- 确认完整 brief 后进入第二步，准备参考图；按已安装 identity-skill 的流程，在接受参考图、素材拆分和执行 brief 后才修改页面代码。
