# 首页素材拆分与还原方案

当前阶段：第三步 / 素材拆分清单，等待用户接受此清单。已接受参考图，不代表清单及第四步执行 brief 已自动接受；尚未编辑页面代码。

## 已接受参考及明确修订

| Section | 锁定参考 |
| --- | --- |
| About Me | `references/locked/v1/01-about.png` |
| Education | `references/locked/v1/02-education.png` |
| Experience | `references/locked/v1/03-experience.png` |

用户接受上述视觉方向，并明确要求：

1. 删除全站 Notes 导航入口和栏目页面。
2. 删除侧栏 Dark mode 图标、文案和开关，不保留任何手动主题控件。
3. 浅色/深色完全跟随设备偏好，设备设置改变时即时同步；旧 localStorage 手动主题值不再参与决策，也不再写入主题值。

这些是用户批准的局部控件删除与行为修订；姓名、头像来源、内容顺序、整体色彩/字体和两栏关系不变。保留锁定原图，不通过修改像素掩盖原图与最终目标的差异。最终视觉对照必须明确扣除这两项已授权删除，不把它们误报为保真失败。

## 共享结构与三轴裁决

共享结构名：`profile-reading-shell`。三段共用顶部导航、身份栏、正文起始线与响应式列布局；正文内部结构分别为段落、双条教育记录、单条研究经历，不能用一种卡片抹平差异。

| 区域 | 语义与边界 A | 媒介 B | 图片层级 C / 状态 |
| --- | --- | --- | --- |
| 现有游戏头像 | identity/source；独立来源、替换和响应式裁切 | 现有 raster，不能用代码重画或生成替代 | independent-media / source，global |
| 姓名与定位 | live-content；用户身份及可编辑文案 | 标准文字 | none / code-native |
| 顶部五项导航 | live-content；独立导航和手机 reflow | HTML/CSS，必要的菜单行为由代码实现 | none / code-native |
| Email、LinkedIn、GitHub | live-content；真实外链、独立点击 | 标准链接与统一简单 SVG 图标 | none / code-native |
| 正文、学位、日期、角色及贡献 | live-content；事实、可更新、独立换行 | 语义 HTML 与普通布局 | none / code-native |
| 背景、分隔线和圆角 | 简单界面外观，无独立 raster 来源 | 纯色、border、radius | none / code-native |
| Notes / 手动主题控件 | 已获授权删除 | 不渲染 | none / code-native |

Fusion graph：头像是唯一 raster 节点，被真实性与独立替换边界锁定。其余区域全部在代码白名单内，不存在需要合并的融合 raster 组件。

## 素材 manifest

全站 unique 图片：1 张已有头像；新生成图片：0；融合场景：0；背景材质：0。三段都复用同一头像，不计为三张素材。

| Asset | Role / Boundary | Raster signal / Fusion | Placement / Reuse | Provenance | Reference geometry | Responsive mode | Status / Final path |
| --- | --- | --- | --- | --- | --- | --- | --- |
| profile-avatar | 用户身份；独立更新/裁切，不与文字融合 | 既有游戏角色图像；single locked identity node | independent-media / global，覆盖三个 section | 用户现有 `public/profile.jpg`，已目视检查 | 参考图 1774×887 中约 x46 y149 w218 h218；约 12.3% 画布宽；原图以居中圆形 mask 呈现，识别部分完整 | 桌面固定圆形容器；手机按空间缩小，保持主体安全区与比例，不拉伸 | source / `public/profile.jpg`；沿用文件，不新增副本 |

不存在 blocked、replace-later 或 redesign-required 项。不生成真人、学校 logo、项目截图、装饰背景或新图标图片。不裁切参考图作为实际网页素材。

## 首页 · About Me

- Code layer：标题、两段已接受的英文介绍、共享导航/身份栏/联系方式、留白和背景。
- Raster：仅共享头像；section-specific 素材为 0。
- Topology：shared `profile-reading-shell`；正文为两个自然高度段落。
- Personal evidence：UCL / QMUL 背景，VLM certification、迁移学习、嵌入式与硬件经历。
- Reference-safe box：正文从约 x440 开始，所有文字与头像矩形互不遮挡；头像圆形为闭合识别安全区。
- Reflow：手机先身份后正文，正文按可读行宽重排；不将两段文本固化为图片。
- 裁决理由：与 splitter 示例 4 一致，1 个已有独立头像，其余简单几何与语义内容保留代码。

## 首页 · Education

- Code layer：两所学校、学位、日期、First Class Honours、分隔线和共享外壳。
- Raster：仅共享头像；section-specific 素材为 0。
- Topology：共享外壳，教育记录采用学校/学位主列与日期副列；手机将日期移到对应学位下方。
- Personal evidence：具体学校、专业、日期与本科成绩。
- Safe box：每条学校与日期构成独立完整记录；日期不能与校名碰撞。
- 裁决理由：全部教育内容是可维护事实，无需学校 logo、卡片插画或新图片。高度由两条内容决定，不复刻截图下方空白。

## 首页 · Experience

- Code layer：角色、机构、研究组、地点、日期、两段贡献与共享外壳。
- Raster：仅共享头像；section-specific 素材为 0。
- Topology：共享外壳，单条完整研究经历；日期可作为副列，手机自然换行。
- Personal evidence：研究助理角色、自主帆船/UAV/LiDAR 任务和具体研究组。
- Safe box：角色、机构和研究组关联展示，贡献文字不进入侧栏或日期区域。
- 裁决理由：语义文字与普通排版均为 code-native；不新增虚构实验室照片或额外工作经历。

## 主题与栏目行为

- 初次加载在首屏绘制前读取 `prefers-color-scheme`，应用相应主题。
- 监听该设备偏好的变化，同步正文、背景和现有明暗主题素材。
- Astro 页面切换后重新同步到设备当前偏好；不保留全局 toggleTheme API 或手动主题按钮。
- 删除旧主题 localStorage 读写逻辑；不添加兼容旧偏好的分支。
- Notes 不再出现在顶部导航、侧栏、生成路由或 sitemap；取消相关 collection / 页面引用时核对构建依赖。
- 不增加遥测、分析或网络请求。

## 素材清单确认后的第四步

无新素材需要生成或下载。按已批准清单核验原头像与文件路径、整理最后的复刻执行 brief，并展示素材审核结果；用户接受后再实施页面代码。

第五步的验证至少包括设备浅/深偏好、运行中切换设备偏好、站内导航后主题、无手动开关、无 Notes 导航及路由，以及三段在 desktop/ultrawide/mobile 的截图。当前这些实现结果均为 not verified。
