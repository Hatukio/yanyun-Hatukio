const archive = [
  {
    type: "武学",
    title: "无名剑法",
    desc: "剑类基础武学，来源资料显示流派为鸣金·虹，战斗定位偏输出。",
    tags: ["剑", "鸣金·虹", "输出"],
    coord: "待采集",
  },
  {
    type: "武学",
    title: "积矩九剑",
    desc: "剑类进阶武学，来源资料显示流派为鸣金·影，适合单独维护获取方式和版本来源。",
    tags: ["剑", "鸣金·影", "待补获取"],
    coord: "待采集",
  },
  {
    type: "武学",
    title: "九曲惊魂枪",
    desc: "枪类武学，来源资料显示流派为鸣金·影，武器类别为枪。",
    tags: ["枪", "鸣金·影", "已修正"],
    coord: "待采集",
  },
  {
    type: "武学",
    title: "嗟夫刀法",
    desc: "陌刀武学，来源资料显示流派为裂石·威，战斗定位偏承伤。",
    tags: ["陌刀", "裂石·威", "承伤"],
    coord: "待采集",
  },
  {
    type: "武学",
    title: "明川药典",
    desc: "治疗/支援倾向的武学条目。后续应补技能定位、可搭配武器与可靠获取来源。",
    tags: ["治疗", "支援", "待补字段"],
    coord: "待采集",
  },
  {
    type: "武学",
    title: "无名枪法",
    desc: "枪类基础武学，来源资料显示流派为鸣金·虹，战斗定位为输出。",
    tags: ["枪", "鸣金·虹", "输出"],
    coord: "待采集",
  },
  {
    type: "武学",
    title: "八方风雷枪",
    desc: "枪类武学，来源资料显示流派为裂石·威，战斗定位为承伤，获取来源标注为门派商店。",
    tags: ["枪", "裂石·威", "门派商店"],
    coord: "待采集",
  },
  {
    type: "武学",
    title: "青山执笔",
    desc: "扇类武学，来源资料显示流派为牵丝·玉，获取方式标注为偷师。",
    tags: ["扇", "牵丝·玉", "偷师"],
    coord: "待采集",
  },
  {
    type: "武学",
    title: "九重春色",
    desc: "伞类武学，来源资料显示流派为牵丝·玉，资料中提到有时楼相关偷师流程。",
    tags: ["伞", "牵丝·玉", "偷师"],
    coord: "待采集",
  },
  {
    type: "奇术",
    title: "金玉手",
    desc: "可在探索、解谜和战斗中改变目标状态，是最有辨识度的奇术之一。",
    tags: ["探索", "控制", "解谜"],
    coord: "待采集",
  },
  {
    type: "奇术",
    title: "太白醉月",
    desc: "公开攻略常提到饮酒触发后习得，适合作为奇术条目补坐标、酒类来源和触发条件。",
    tags: ["奇术", "触发条件", "待补坐标"],
    coord: "待采集",
  },
  {
    type: "奇术",
    title: "凌云踏",
    desc: "公开攻略常将其作为探索/移动类奇术记录，后续需要补充准确触发点和前置。",
    tags: ["移动", "探索", "待核验"],
    coord: "待采集",
  },
  {
    type: "奇术",
    title: "狮吼正声",
    desc: "官网奇术介绍中出现的音波类奇术，适合作为官方来源条目继续补充用途。",
    tags: ["官网提及", "战斗", "奇术"],
  },
  {
    type: "奇术",
    title: "金蟾腾跃",
    desc: "官网奇术介绍中出现的奇术名称，适合标注为官方来源条目。",
    tags: ["官网提及", "移动", "趣味"],
  },
  {
    type: "心法",
    title: "心法记录模板",
    desc: "每条心法建议记录适用武器、核心词条、获取来源、升级成本和版本状态，避免只写推荐结论。",
    tags: ["养成", "模板", "待补"],
  },
  {
    type: "心法",
    title: "无名心法",
    desc: "社区心法资料显示可通过侠客行第 3 天获得，用作新手心法条目的占位索引。",
    tags: ["心法", "侠客行", "第3天"],
    coord: "非坐标来源",
  },
  {
    type: "心法",
    title: "剑气纵横",
    desc: "社区心法资料显示可在鬼市子处购买旧书获得，适合与鬼市人物和开封地图联动。",
    tags: ["心法", "鬼市子", "旧书"],
    coord: "开封：待精确坐标",
  },
  {
    type: "心法",
    title: "移经易武",
    desc: "社区心法资料显示与清河地区相关，页面先建立区域索引并等待精确坐标。",
    tags: ["心法", "清河", "待补坐标"],
    coord: "清河：待精确坐标",
  },
  {
    type: "武学",
    title: "泥梨三垢",
    desc: "公开攻略资料中常见为双刀武学，属性写作破竹·风；本站按待复核条目保留来源字段。",
    tags: ["双刀", "破竹·风", "待复核"],
    coord: "待采集",
  },
  {
    type: "武学",
    title: "千香引魂蛊",
    desc: "来源资料显示为伞类武学，属性为牵丝·霖；获取与突破内容仍待更新。",
    tags: ["伞", "牵丝·霖", "待补获取"],
    coord: "待采集",
  },
  {
    type: "武学",
    title: "粟子游尘",
    desc: "来源资料显示武器类别为绳标，属性为破竹·风；原型站误写为双刀/牵丝，已修正。",
    tags: ["绳镖", "破竹·风", "已修正"],
    coord: "开封：待精确坐标",
  },
  {
    type: "心法",
    title: "输出向心法",
    desc: "按单体、群体、爆发、持续四种场景拆分，后续用实测数据补充优先级。",
    tags: ["输出", "实测", "待补"],
  },
  {
    type: "装备",
    title: "装备词条",
    desc: "装备页应区分基础属性、套装效果、强化成本和副本掉落来源，避免和武学页混在一起。",
    tags: ["词条", "掉落", "养成"],
  },
  {
    type: "任务",
    title: "武学造诣",
    desc: "公开资料显示可通过齐声五音启太平、试剑、据点、协力清剿、侠境等玩法获得武学心得。",
    tags: ["养成", "武学心得", "周常"],
    coord: "多来源",
  },
  {
    type: "任务",
    title: "游侠手札",
    desc: "适合记录每日路线、奇遇证据、坐标截图和版本状态，是玩家贡献线索的入口。",
    tags: ["记录模板", "坐标", "社区贡献"],
    coord: "每条必填",
  },
  {
    type: "区域",
    title: "青州",
    desc: "官方 2026 年 4 月内容展望提到的首个主题区域，资料站先作为版本观察条目维护。",
    tags: ["主题区域", "官方展望", "待上线"],
  },
  {
    type: "区域",
    title: "江南",
    desc: "官方展望提到下半年大区域方向，当前只建立观察位，不预设具体地图与任务名。",
    tags: ["大区域", "官方展望", "观察"],
  },
  {
    type: "任务",
    title: "每日开荒清单",
    desc: "记录今日优先级：主线解锁、区域探索、奇术收集、强敌实测和门派声望。",
    tags: ["开荒", "清单", "效率"],
    coord: "按路线生成",
  },
  {
    type: "门派",
    title: "天泉",
    desc: "侠义气质较强的门派体系，常与正面江湖秩序和武学传承相关。",
    tags: ["门派", "侠义", "武学"],
  },
  {
    type: "门派",
    title: "三更天",
    desc: "带有夜行、刺探和暗线气质的江湖组织，适合做人物关系与秘密任务入口。",
    tags: ["暗线", "势力", "潜行"],
  },
  {
    type: "门派",
    title: "九流门",
    desc: "市井与杂学色彩浓厚，适合承载伪装、骗术、民间江湖和奇遇任务。",
    tags: ["市井", "奇遇", "身份"],
  },
  {
    type: "人物",
    title: "鬼市子",
    desc: "开封鬼市相关的重要人物，可作为鬼市、黑市交易和暗线剧情的索引节点。",
    tags: ["开封", "鬼市", "剧情"],
  },
  {
    type: "人物",
    title: "容鸢",
    desc: "清河早期玩家常接触的角色之一，可关联不羡仙、清河支线与江湖初识。",
    tags: ["清河", "早期", "支线"],
  },
  {
    type: "人物",
    title: "张议潮",
    desc: "河西叙事中的历史人物线索，适合与归义军、边地地图和历史考据关联。",
    tags: ["河西", "历史", "归义军"],
  },
  {
    type: "任务",
    title: "侠迹",
    desc: "偏角色故事和江湖见闻的任务类型，适合记录触发条件、关键 NPC 和奖励。",
    tags: ["角色", "支线", "剧情"],
    coord: "每条任务必填",
  },
  {
    type: "任务",
    title: "残章",
    desc: "常用于补全人物、历史或地区故事的碎片化内容，是百科站最需要沉淀的部分。",
    tags: ["文本", "收集", "剧情"],
    coord: "每条残章必填",
  },
  {
    type: "副本",
    title: "定极分更",
    desc: "社区攻略中出现的五人本名称，当前先作为待核验条目，等待官方公告或实测记录确认。",
    tags: ["五人本", "待核验", "社区来源"],
  },
  {
    type: "副本",
    title: "玉魄染青苍",
    desc: "社区攻略中出现的十人本名称，当前先作为待核验条目，机制与首领名不可直接定稿。",
    tags: ["十人本", "待核验", "社区来源"],
  },
  {
    type: "试炼",
    title: "试炼玩法",
    desc: "用于整理单人或小队挑战、限时目标、词缀变化和推荐武学搭配。",
    tags: ["挑战", "词缀", "配装"],
  },
  {
    type: "试炼",
    title: "镇守强敌",
    desc: "记录强敌机制、破招窗口、推荐奇术和掉落奖励，是副本外战斗攻略的核心栏目。",
    tags: ["Boss", "破招", "奖励"],
  },
  {
    type: "区域",
    title: "清河",
    desc: "玩家早期探索区域，包含不羡仙、百草野、隐月山等地点和大量入门任务。",
    tags: ["地图", "入门", "探索"],
    coord: "区域坐标系",
  },
  {
    type: "区域",
    title: "开封",
    desc: "市井、官府、鬼市和强敌交织的核心区域，适合建立任务密度最高的资料页。",
    tags: ["城市", "鬼市", "主线"],
    coord: "区域坐标系",
  },
  {
    type: "区域",
    title: "河西",
    desc: "边地叙事浓厚的区域，与归义军、敦煌文化和历史人物线索关联紧密。",
    tags: ["边地", "历史", "新区域"],
    coord: "区域坐标系",
  },
  {
    type: "任务",
    title: "万事知",
    desc: "参考社区资料的区域任务树，后续按清河、开封、河西、不见山、青州拆分触发 NPC、坐标、流程和奖励。",
    tags: ["任务库", "区域", "栏目蓝图"],
    coord: "按条目补坐标",
  },
  {
    type: "任务",
    title: "见闻",
    desc: "轻量探索任务栏目，适合记录触发物、地点、流程摘要和是否限时。",
    tags: ["见闻", "探索", "待补流程"],
    coord: "按区域补坐标",
  },
  {
    type: "人物",
    title: "人物图鉴",
    desc: "借鉴社区资料的人物树，按世界、门派人物、清河、开封、河西、不见山建立索引。",
    tags: ["人物", "区域", "势力"],
    coord: "初见地点待采集",
  },
  {
    type: "门派",
    title: "全门派入门和门规",
    desc: "以门派、入门、门规、关联武学、退派影响为主字段，服务长期身份规划。",
    tags: ["门派", "入门", "门规"],
    coord: "门派驻地待采集",
  },
  {
    type: "装备",
    title: "博物录",
    desc: "生活与收藏体系索引，包含食饮、书画、民器、兵戈、乐舞、诗话、娱戏等类别。",
    tags: ["收藏", "生活玩法", "栏目蓝图"],
    coord: "按藏品补坐标",
  },
  {
    type: "装备",
    title: "前尘旧物",
    desc: "书信、众生录、杂闻录、江湖录等收集内容，适合按拾取位置、解锁条件和文本出处维护。",
    tags: ["收集", "文本", "旧物"],
    coord: "拾取坐标待采集",
  },
  {
    type: "任务",
    title: "清河区域全收集",
    desc: "世界探索主栏目之一，后续汇总清河地标、宝箱、奇遇、商人、据点和首领。",
    tags: ["清河", "全收集", "世界探索"],
    coord: "区域坐标系",
  },
  {
    type: "任务",
    title: "开封区域全收集",
    desc: "世界探索主栏目之一，后续汇总开封城、鬼市、勾栏瓦肆、百工坊等地点资料。",
    tags: ["开封", "全收集", "世界探索"],
    coord: "区域坐标系",
  },
  {
    type: "任务",
    title: "青州万事知",
    desc: "社区资料已出现青州相关万事知条目，可作为后续版本区域任务的观察入口。",
    tags: ["青州", "万事知", "版本观察"],
    coord: "青州：待上线核验",
  },
  {
    type: "试炼",
    title: "战斗指南",
    desc: "系统介绍类条目，按战斗技巧、卸势、真气、气竭和武林录解释规则。",
    tags: ["系统", "战斗", "新手"],
    coord: "非坐标来源",
  },
];

const feedbackUrl = "#sources";
const defaultContributor = "社区游侠待署名";

function needsCommunityLead(item = {}) {
  const text = `${item.status || ""} ${item.coord || ""} ${item.obtain || ""} ${item.steal || ""} ${item.desc || ""} ${(item.tags || []).join(" ")}`;
  return /待核验|待复核|待采集|待补|待更新|待精确|待实测|待录入|待上线|需补|需实测/.test(text);
}

function contributorLine(item = {}) {
  return item.contributor || defaultContributor;
}

const wikiFeaturedEntries = [
  {
    title: "武学介绍和获取",
    type: "来源摘录",
    desc: "把武器类别、属性、获取方式、升级材料和偷师地点拆成可检索字段。",
    href: "#gamekee-martial",
    meta: "12 条武学字段",
  },
  {
    title: "偷师路径图",
    type: "核心玩法",
    desc: "按 NPC、坐标、前置、资源和门派约束记录偷师，不再只写一句“可偷师”。",
    href: "#steal",
    meta: "待补坐标优先",
  },
  {
    title: "地图索引",
    type: "开放世界",
    desc: "区域、奇遇、心法旧书和偷师点统一挂到地图入口，方便后续替换真实地图。",
    href: "#map",
    meta: "清河 / 开封 / 河西",
  },
  {
    title: "版本快照",
    type: "更新记录",
    desc: "把 2.6.0B、青州、江南等版本观察拆出，后续记录削弱、增强和修复。",
    href: "#versions",
    meta: "数值变动预留",
  },
];

const wikiUpdateFeed = [
  ["刚刚", "接入社区武学资料字段", "补齐获取、材料、偷师字段"],
  ["今日", "新增 Wiki 首页式资料枢纽", "分类目录、置顶条目、更新流"],
  ["待核", "坐标字段仍需玩家截图", "所有坐标保留待采集状态"],
  ["持续", "贡献入口覆盖待核验条目", "方便老玩家直接补线索"],
];

const contentAtlas = [
  {
    title: "新手入门",
    source: "社区栏目参考",
    desc: "优先做成“开荒手册”：系统解释、路线选择、日常周常、货币、配置和基础养成。",
    entries: ["公测前期指引", "开局选择攻略", "日常周常要点", "武学造诣提升方式", "货币积分介绍", "心法效果和获取方式"],
    fields: ["适用阶段", "解锁条件", "每日/每周上限", "版本状态"],
  },
  {
    title: "世界探索",
    source: "区域栏目参考",
    desc: "按区域拆成全收集、商人、武林录、侠迹、据点、野外首领、镇守，后续接地图坐标。",
    entries: ["清河区域全收集", "开封区域全收集", "河西区域全收集", "青州·侠迹", "清河·镇守", "开封皇宫·野外首领"],
    fields: ["区域", "坐标", "前置", "奖励", "截图证据"],
  },
  {
    title: "人物",
    source: "人物栏目参考",
    desc: "人物不只写名字，要记录归属、登场任务、可互动条件和相关条目。",
    entries: ["世界人物", "门派人物", "清河人物", "开封人物", "河西人物", "不见山人物"],
    fields: ["所属区域", "所属势力", "任务关联", "初见地点"],
  },
  {
    title: "江湖势力",
    source: "势力栏目参考",
    desc: "门派、入门、门规和区域势力分开维护，方便玩家规划长期身份。",
    entries: ["天泉", "青溪", "狂澜", "三更天", "九流门", "墨山道", "全门派入门"],
    fields: ["入门条件", "门规风险", "关联武学", "退派影响"],
  },
  {
    title: "万事知",
    source: "任务栏目参考",
    desc: "把清河、开封、河西、不见山、青州的万事知作为任务数据库主干。",
    entries: ["荒祠暗影", "妙妙庙", "赌圣秘藏", "万古明灯", "绣云朵", "种葱有道"],
    fields: ["触发 NPC", "触发坐标", "流程节点", "奖励"],
  },
  {
    title: "见闻",
    source: "见闻栏目参考",
    desc: "见闻适合做成轻量任务卡，重点维护区域、触发物、步骤和是否错过。",
    entries: ["青州·见闻", "初来乍到", "货殖经营", "世代小馆", "旧地异闻", "访学之风"],
    fields: ["区域", "触发条件", "流程摘要", "是否限时"],
  },
  {
    title: "前尘旧物",
    source: "收集栏目参考",
    desc: "书信、众生录、杂闻录、江湖录要按收藏品处理：位置、解锁方式、文本归档分离。",
    entries: ["离思赋", "严君皓家书", "琴经", "青山残注", "悬剑刍议", "氿留断案集"],
    fields: ["收集类型", "拾取坐标", "解锁条件", "文本出处"],
  },
  {
    title: "博物录",
    source: "博物栏目参考",
    desc: "把食饮、书画、民器、兵戈、乐舞、诗话、娱戏作为生活/收藏体系维护。",
    entries: ["佳肴·格物", "食饮·食材", "书画·绘画", "铸造·材料", "乐舞·古谱", "弈棋"],
    fields: ["分类", "获取方式", "用途", "关联玩法"],
  },
  {
    title: "系统介绍",
    source: "系统栏目参考",
    desc: "系统页负责解释规则，不和攻略结论混写，适合做新玩家查概念的入口。",
    entries: ["战斗技巧", "卸势", "真气和气竭", "五音启太平", "探索玩法", "战力系统"],
    fields: ["规则说明", "操作要点", "常见误区", "相关攻略"],
  },
];

const weapons = [
  {
    weapon: "剑",
    note: "轻巧均衡，首发资料中至少对应两套剑法。",
    arts: [
      { name: "无名剑法", attribute: "鸣金·虹", role: "输出", obtain: "出生自带。", coord: "非坐标来源", steal: "无偷师地点", materials: "松节膏、赤焰膏、鸣金·虹心得", status: "来源已录" },
      { name: "积矩九剑", attribute: "鸣金·影", role: "剑系输出", obtain: "拜入孤云，或通过偷师取得。", coord: "待采集", steal: "孤云 / 偷师点待补坐标", materials: "松节膏、赤焰膏、鸣金·影心得", status: "来源已录" },
    ],
  },
  {
    weapon: "枪",
    note: "长兵器，适合控距、群战与稳定输出。",
    arts: [
      { name: "无名枪法", attribute: "鸣金·虹", role: "基础输出", obtain: "出生自带。", coord: "非坐标来源", steal: "无偷师地点", materials: "青石锁、黑钨石锁、鸣金·虹心得", status: "来源已录" },
      { name: "九曲惊魂枪", attribute: "鸣金·影", role: "枪系输出", obtain: "拜入狂澜，或通过偷师取得。", coord: "待采集", steal: "来源资料标注偷师地点为无；具体路径待玩家复核", materials: "青石锁、黑钨石锁、鸣金·影心得", status: "来源已录" },
      { name: "八方风雷枪", attribute: "裂石·威", role: "承伤", obtain: "门派商店购得。", coord: "待采集", steal: "门派商店，非偷师优先", materials: "青石锁、黑钨石锁、裂石·威心得", status: "来源已录" },
    ],
  },
  {
    weapon: "陌刀",
    note: "重兵器，偏正面压制和高强度对抗。",
    arts: [
      { name: "嗟夫刀法", attribute: "裂石·威", role: "承伤", obtain: "五音启太平-开平之乐一；拜入天泉。", coord: "待采集", steal: "来源资料标注偷师地点为无", materials: "虎骨酒、换骨醪、裂石·威心得", status: "来源已录" },
    ],
  },
  {
    weapon: "扇",
    note: "可支援也可输出，是多人环境里最需要标明定位的武器。",
    arts: [
      { name: "明川药典", attribute: "牵丝·霖", role: "治疗/支援", obtain: "五音启太平-开平之乐一；拜入青溪；偷师。", coord: "待采集", steal: "青溪 / 偷师路线待补坐标", materials: "松节膏、赤焰膏、牵丝·霖心得", status: "来源已录" },
      { name: "青山执笔", attribute: "牵丝·玉", role: "扇系输出", obtain: "通过偷师取得。", coord: "待采集", steal: "偷师 NPC、消耗和前置待补", materials: "松节膏、赤焰膏、牵丝·玉心得", status: "来源已录" },
    ],
  },
  {
    weapon: "伞",
    note: "风格化防护武器，兼具机动和反击空间。",
    arts: [
      { name: "九重春色", attribute: "牵丝·玉", role: "伞系输出", obtain: "五音启太平-开平之乐一；随后走开封时楼线索链取得偷师信物。", coord: "开封时楼：待精确坐标", steal: "王平安、江听儿、夏云、姚可人、杨枝、白玉霜、允棠、殷怜安等线索；完成偷听、取钥匙、交信物后偷师", materials: "松节膏、赤焰膏、牵丝·玉心得", status: "来源已录" },
      { name: "千香引魂蛊", attribute: "牵丝·霖", role: "伞系武学", obtain: "来源资料标注待更新。", coord: "待采集", steal: "待补 NPC / 前置 / 资源", materials: "待更新", status: "待补获取" },
    ],
  },
  {
    weapon: "双刀",
    note: "高频贴身武器，公开资料中常与爆发和连段关联。",
    arts: [
      { name: "泥梨三垢", attribute: "破竹·风", role: "双刀输出", obtain: "五音启太平-开平之乐一；拜入三更天；偷师。", coord: "待采集", steal: "三更天 / 偷师路线待补坐标", materials: "青石锁、黑钨石锁、破竹·风心得", status: "来源已录" },
    ],
  },
  {
    weapon: "手甲",
    note: "官方后续内容提到的新武器方向，资料仍需持续补证。",
    arts: [
      { name: "天志垂象", attribute: "待补", role: "手甲武学", obtain: "公开攻略指向墨山道门派商店；需继续用版本实测核验。", coord: "待采集", steal: "门派商店，偷师状态待核", status: "待核验" },
    ],
  },
  {
    weapon: "绳镖",
    note: "机动牵制型武器，资料页也把“绳标”作为武器类别写法出现。",
    arts: [
      { name: "千机索天", attribute: "待补", role: "绳镖武学", obtain: "公开攻略指向河西谒星道附近切磋/偷师线索；需实测核验。", coord: "河西：待精确坐标", steal: "谒星道附近线索待核", status: "待核验" },
      { name: "粟子游尘", attribute: "破竹·风", role: "绳镖输出", obtain: "拜入九流门，或在开封通过偷师取得。", coord: "开封：待精确坐标", steal: "九流门 / 开封偷师路线待补", materials: "待更新", status: "来源已录" },
    ],
  },
];

const gamekeeMartialDetails = weapons
  .flatMap((weapon) =>
    weapon.arts.map((art) => ({
      ...art,
      weapon: weapon.weapon,
      source: "https://www.gamekee.com/yysls/644041.html",
      sourceTitle: "社区武学介绍和获取",
      updated: "2024-12-27",
    }))
  )
  .filter((art) => art.status.includes("来源已录") || art.status.includes("待补获取"));

const sects = [
  ["无门无派", "不加入门派的身份路线，适合标注为独立江湖身份而非门派。"],
  ["天泉", "侠义、传承、正面江湖秩序。"],
  ["狂澜", "豪放、酒意、江湖气与强攻风格。"],
  ["三更天", "夜行、暗线、刺探与秘密任务。"],
  ["九流门", "市井、骗术、杂学和奇遇触发。"],
  ["青溪", "医理、疗愈与悬壶济世气质。"],
  ["无心谷", "隐逸、内功、山野传说。"],
  ["醉花阴", "雅集、风月、音律与身份互动。"],
  ["墨山道", "机关、百工、技艺与探索解谜。"],
  ["孤云", "边地、孤旅、对抗与守望。"],
  ["文津馆", "书卷、考据、文本收集。"],
  ["梨园", "戏曲、伪装、舞台任务。"],
];

const peopleByRegion = {
  清河: [
    ["容鸢", "社区资料常见角色名，先保留为待核验人物条目，后续补登场任务与来源。"],
    ["时一墨", "待核验人物条目，需补充具体任务、地点、对话来源。"],
    ["冯继升", "待核验人物条目，需确认是否为当前版本可接触 NPC。"],
    ["寻心", "待核验人物条目，后续以任务截图或可靠攻略补证。"],
    ["不羡仙住民", "适合作为清河早期支线和奇遇触发人的集合索引，后续拆成单个 NPC。"],
    ["百草野线索", "用于挂接采集、草药、治疗心法和探索类任务。"],
  ],
  开封: [
    ["鬼市子", "待核验人物/称号条目，需确认版本内身份、位置和任务关联。"],
    ["郑鄂", "待核验强敌或剧情节点，需补前置、地点和奖励来源。"],
    ["黑财神", "待核验称号/人物条目，先不写死与常平仓的关系。"],
    ["花解语", "待核验人物条目，需补剧情脉络和出现条件。"],
    ["九流门接引", "用于记录九流门入门、偷师、伪装和市井奇遇的入口人物。"],
    ["鬼市旧书商", "用于记录心法旧书、价格、刷新和购买前置。"],
  ],
  河西: [
    ["张议潮", "历史人物，可作为河西/归义军考据条目；是否游戏登场需另行标注。"],
    ["张淮深", "历史人物，可作为河西叙事背景条目；游戏内登场状态待核验。"],
    ["归义军", "确定的历史与区域叙事关键词，比未核验 NPC 名更适合做一级索引。"],
    ["玉门关", "河西区域关键词，可关联地图探索、历史背景与后续任务资料。"],
    ["谒星道线索", "用于记录千机索天、河西偷师和边地探索的待核验入口。"],
    ["敦煌文书", "用于归档边地文本、历史考据和残章收集。"],
  ],
};

const questLanes = [
  {
    title: "主线",
    desc: "推进时代背景和核心人物关系。",
    items: ["记录章节名", "关键战斗", "不可逆选择", "奖励与解锁"],
  },
  {
    title: "侠迹",
    desc: "围绕角色展开的江湖故事。",
    items: ["触发 NPC", "前置区域", "结局分支", "相关人物"],
  },
  {
    title: "奇遇",
    desc: "更依赖地图、时间、交互和偶遇。",
    items: ["触发坐标", "触发条件", "失败条件", "后续任务"],
  },
  {
    title: "镇守",
    desc: "强敌、副本和区域挑战。",
    items: ["Boss 机制", "推荐武学", "掉落", "成就"],
  },
];

const practicalGuides = [
  {
    title: "新手武学组合",
    type: "开局",
    body: "公开攻略常把无名剑法、无名枪法、明川药典作为早期可理解成本较低的基础条目。页面先按“输出 / 承伤 / 治疗支援”拆开，方便玩家按场景替换。",
    bullets: ["无名剑法：剑 / 鸣金·虹 / 输出", "无名枪法：枪 / 鸣金·虹 / 输出", "明川药典：治疗或支援方向"],
    status: "待补具体获取流程",
  },
  {
    title: "门派商店优先核验",
    type: "门派",
    body: "门派商店是武学来源的重要路径。八方风雷枪、积矩九剑等条目需要记录门派、商店等级、兑换货币和退派影响。",
    bullets: ["记录门派名称", "记录兑换货币", "记录是否可偷师替代"],
    status: "待补商店截图",
  },
  {
    title: "偷师条目必填字段",
    type: "偷师",
    body: "每条偷师武学都要补 NPC、坐标、前置、消耗、失败风险和是否受门派身份影响。没有这些字段，条目只能作为线索。",
    bullets: ["NPC / 地点", "坐标 / 截图", "资源消耗 / 前置条件"],
    status: "字段规范已建立",
  },
  {
    title: "心法来源索引",
    type: "心法",
    body: "先建立来源型索引：侠客行、鬼市子旧书、区域探索、商店购买。后续再补数值收益和版本强度。",
    bullets: ["无名心法：侠客行第 3 天", "剑气纵横：鬼市子旧书", "移经易武：清河线索待补"],
    status: "待补数值",
  },
  {
    title: "武学造诣来源",
    type: "养成",
    body: "武学造诣不只来自单一任务，应按玩法来源拆分，避免玩家漏掉周常和挑战玩法。",
    bullets: ["齐声五音启太平", "试剑 / 据点 / 协力清剿", "侠境与其他挑战"],
    status: "待补每周上限",
  },
  {
    title: "奇术记录规则",
    type: "奇术",
    body: "奇术更依赖触发条件和地图互动。条目不只写名字，要写触发物、天气、道具、坐标和用途。",
    bullets: ["金玉手：用途与目标类型", "太白醉月：饮酒触发线索", "凌云踏：移动/探索用途"],
    status: "待补触发坐标",
  },
];

const mapData = {
  清河: [
    { title: "奇遇触发点", type: "任务", coord: "(x, y) 待采集", note: "每条奇遇必须记录触发坐标、时间、天气和失败条件。" },
    { title: "早期武学线索", type: "武学", coord: "(x, y) 待采集", note: "用于挂接主线/支线获得的基础武学证据。" },
    { title: "残章收集", type: "文本", coord: "(x, y) 待采集", note: "截图证据和拾取位置分开记录，防止误把剧情地名当坐标。" },
    { title: "移经易武线索", type: "心法", coord: "(x, y) 待采集", note: "社区心法资料指向清河区域，需补精确地点和获取步骤。" },
  ],
  开封: [
    { title: "粟子游尘偷师", type: "武学", coord: "(x, y) 待采集", note: "社区资料指向开封偷师；需要补 NPC、路线入口和资源消耗。" },
    { title: "鬼市线索", type: "人物", coord: "(x, y) 待采集", note: "人物条目要绑定可抵达地点，而不是只写势力名。" },
    { title: "剑气纵横旧书", type: "心法", coord: "(x, y) 待采集", note: "社区心法资料显示可在鬼市子处购买旧书，需补购买条件。" },
    { title: "青山执笔偷师", type: "武学", coord: "(x, y) 待采集", note: "扇类偷师条目，需补 NPC、路线和前置。" },
  ],
  河西: [
    { title: "千机索天线索", type: "武学", coord: "(x, y) 待采集", note: "公开攻略提到谒星道附近，需实测精确坐标和前置。" },
    { title: "归义军叙事点", type: "区域", coord: "(x, y) 待采集", note: "历史背景、任务触发点和地图探索点分开维护。" },
    { title: "玉门关探索", type: "区域", coord: "(x, y) 待采集", note: "适合记录边地探索、历史文本和区域强敌。" },
  ],
  青州: [
    { title: "主题区域入口", type: "版本", coord: "待官方上线", note: "当前只放观察位，正式上线后补坐标系。" },
  ],
};

const stealGuides = [
  {
    art: "九曲惊魂枪",
    path: "狂澜 / 偷师",
    npc: "待采集",
    coord: "(x, y) 待采集",
    cost: "待采集",
    prereq: "门派或偷师前置待核验",
  },
  {
    art: "泥梨三垢",
    path: "三更天 / 偷师",
    npc: "待采集",
    coord: "(x, y) 待采集",
    cost: "待采集",
    prereq: "五音启太平-开平之乐一 / 门派条件待核验",
  },
  {
    art: "粟子游尘",
    path: "九流门 / 开封偷师",
    npc: "待采集",
    coord: "开封 (x, y) 待采集",
    cost: "待采集",
    prereq: "身份、天气、声望条件待核验",
  },
  {
    art: "青山执笔",
    path: "偷师",
    npc: "待采集",
    coord: "(x, y) 待采集",
    cost: "待采集",
    prereq: "路线入口和前置待核验",
  },
  {
    art: "九重春色",
    path: "有时楼相关偷师",
    npc: "待采集",
    coord: "(x, y) 待采集",
    cost: "待采集",
    prereq: "有时楼线索、身份限制和路线入口待核验",
  },
  {
    art: "千机索天",
    path: "河西线索 / 偷师状态待核",
    npc: "待采集",
    coord: "河西 (x, y) 待采集",
    cost: "待采集",
    prereq: "谒星道附近线索、版本开放状态待核验",
  },
];

const sectWarnings = [
  {
    sect: "三更天",
    rule: "暗线身份风险",
    impact: "可能影响正面势力互动、奇遇触发或声望观感，需实测记录。",
    status: "待实测",
  },
  {
    sect: "九流门",
    rule: "市井身份与骗术线",
    impact: "偷师和伪装收益高，但需记录是否影响官府/市井任务分支。",
    status: "待实测",
  },
  {
    sect: "狂澜",
    rule: "门派声望与兑换",
    impact: "与枪类武学获取相关，需记录退派、换派或偷师替代成本。",
    status: "待实测",
  },
  {
    sect: "墨山道",
    rule: "机关百工路线",
    impact: "可能影响手甲或机关解谜资源，需补门规和商店兑换限制。",
    status: "待核验",
  },
  {
    sect: "醉花阴",
    rule: "雅集与身份互动",
    impact: "适合记录是否影响风雅类任务、伞/治疗相关武学和社交玩法。",
    status: "待实测",
  },
  {
    sect: "无门无派",
    rule: "自由路线成本",
    impact: "需要记录不入门派时是否能通过偷师补齐关键武学，以及声望/商店损失。",
    status: "待实测",
  },
];

const versionSnapshots = [
  {
    item: "无名剑法",
    v25: "待录入",
    v26: "待录入",
    latest: "2.6.0B 待比对",
    source: "需要公告或实测表",
    verdict: "不下强度结论",
  },
  {
    item: "九曲惊魂枪",
    v25: "待录入",
    v26: "待录入",
    latest: "2.6.0B 待比对",
    source: "需要公告或实测表",
    verdict: "不下强度结论",
  },
  {
    item: "粟子游尘",
    v25: "未上线/待确认",
    v26: "待录入",
    latest: "2.6.0B 待比对",
    source: "社区条目 + 后续公告",
    verdict: "只记录来源，不写加强/削弱",
  },
  {
    item: "千机索天",
    v25: "未收录/待确认",
    v26: "待录入",
    latest: "2.6.0B 待比对",
    source: "官方武器介绍 + 后续攻略",
    verdict: "先做版本观察",
  },
  {
    item: "天志垂象",
    v25: "未收录/待确认",
    v26: "待录入",
    latest: "2.6.0B 待比对",
    source: "官方手甲介绍 + 后续实测",
    verdict: "先做版本观察",
  },
  {
    item: "心法收益",
    v25: "待录入",
    v26: "待录入",
    latest: "待实测",
    source: "公告 / 实测表 / 截图",
    verdict: "数值页未完成",
  },
];

const buildGuides = [
  {
    scene: "新手游历",
    summary: "优先使用获取稳定、操作压力低、容错高的组合，先把主线、探索和早期强敌推进顺。",
    weapons: ["无名剑法", "明川药典", "无名枪法"],
    focus: ["生存容错", "基础破招", "探索泛用"],
    notes: ["保留一套支援或回复手段", "奇术先补移动和控制", "心法先看通用收益，不急着追极限"],
  },
  {
    scene: "单人强敌",
    summary: "按强敌机制选择武器，避免只追面板。能稳定处理红圈、点名和破招窗口，比高风险贪刀更重要。",
    weapons: ["九曲惊魂枪", "嗟夫刀法", "积矩九剑"],
    focus: ["破招窗口", "位移保命", "爆发节奏"],
    notes: ["先观察三轮技能循环", "把控制奇术留给关键机制", "记录低练度打法和容错点"],
  },
  {
    scene: "多人支援",
    summary: "多人玩法要把定位写清楚：治疗、控制、增益、转火或补伤害。资料站需要保留队伍职责字段。",
    weapons: ["明川药典", "千香引魂蛊", "队伍职责字段"],
    focus: ["队伍职责", "资源分配", "机制提示"],
    notes: ["标注推荐队伍而不是唯一配置", "记录团长口令", "区分普通、挑战和首通打法"],
  },
  {
    scene: "探索解谜",
    summary: "探索页把奇术、地形互动、机关、轻功和区域条件放在一起，方便按地点倒查。",
    weapons: ["金玉手", "金蟾腾跃", "狮吼正声"],
    focus: ["移动能力", "机关交互", "坐标证据"],
    notes: ["截图保存触发点", "记录时间和天气", "同一谜题保留多种解法"],
  },
];

const routeSteps = [
  {
    title: "第一天：解锁基础能力",
    tag: "入门",
    items: ["推进主线到开放核心系统", "拿到稳定武学和基础奇术", "记录早期教学强敌机制"],
  },
  {
    title: "第二步：按区域清图",
    tag: "探索",
    items: ["清河先按地点整理支线", "开封按市井、官府、鬼市分组", "河西按边地叙事和历史线索分层"],
  },
  {
    title: "第三步：建立养成循环",
    tag: "养成",
    items: ["记录门派声望和商店兑换", "拆分心法、装备、武学升级成本", "把副本和镇守奖励接到养成页"],
  },
  {
    title: "第四步：版本核验",
    tag: "维护",
    items: ["官方公告优先更新", "社区攻略标记待核验", "过期打法保留版本号"],
  },
];

const raidGuides = [
  {
    type: "五人本",
    title: "定极分更",
    status: "社区来源，待核验",
    setup: "暂不写死固定配置。确认副本入口、首领和版本后，再补推荐队伍。",
    mechanics: ["核验副本名称与开放版本", "确认首领数量和技能名", "实测后补充点名、转火、打断等机制"],
    calls: ["先核名", "再实测", "后定稿"],
  },
  {
    type: "十人本",
    title: "玉魄染青苍",
    status: "社区来源，待核验",
    setup: "暂不写死团队分工。确认官方名称、首领机制和难度后，再补团长轴。",
    mechanics: ["核验副本名称与开放版本", "确认转阶段机制是否存在", "实测后补充站位、减伤、转火责任"],
    calls: ["名称待核", "机制待测", "口令待补"],
  },
  {
    type: "试炼",
    title: "个人试炼速查",
    status: "持续更新",
    setup: "按词缀选择武器和奇术，先保证生存，再追求压秒输出。",
    mechanics: ["识别破招窗口", "把位移留给连续范围", "控制技能不要交在免控阶段"],
    calls: ["看红圈", "等破绽", "留位移"],
  },
  {
    type: "镇守",
    title: "强敌打法模板",
    status: "可复用模板",
    setup: "每个强敌条目记录地点、前置任务、技能轴、掉落和低练度打法。",
    mechanics: ["先看三轮技能再输出", "用奇术处理特殊机制", "低练度优先拉长战斗而不是贪刀"],
    calls: ["先观察", "奇术解", "不贪刀"],
  },
];

const cards = document.querySelector("#cards");
const searchInput = document.querySelector("#searchInput");
const searchSuggest = document.querySelector("#searchSuggest");
const tabButtons = [...document.querySelectorAll(".tab")];
const wikiCategoryList = document.querySelector("#wikiCategoryList");
const wikiFeatured = document.querySelector("#wikiFeatured");
const wikiUpdates = document.querySelector("#wikiUpdates");
const contentAtlasEl = document.querySelector("#contentAtlas");
let activeTab = "all";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function copyButton(value, label = "复制") {
  return `<button class="copy-btn" type="button" data-copy="${escapeHtml(value)}">${label}</button>`;
}

function communityBlock(item, label = "我来提供线索") {
  const contributor = contributorLine(item);
  const cta = needsCommunityLead(item)
    ? `<a class="lead-btn" href="${feedbackUrl}" data-entry="${escapeHtml(item.title || item.name || item.art || item.sect || "未命名条目")}">${label}</a>`
    : "";
  return `
    <div class="community-line">
      ${cta}
      <span>本条目由 ${escapeHtml(contributor)} 协助核验</span>
    </div>
  `;
}

const martialLookup = weapons.flatMap((weapon) =>
  weapon.arts.map((art) => ({
    ...art,
    weapon: weapon.weapon,
    type: "武学",
    title: art.name,
    desc: `${weapon.weapon} / ${art.attribute} / ${art.role}`,
    tags: [weapon.weapon, art.attribute, art.role, art.status],
    coord: art.coord || "待采集",
  }))
);

const practicalBoard = document.querySelector("#practicalBoard");
const suggestionPool = [
  ...martialLookup,
  ...archive.map((item) => ({
    ...item,
    weapon: item.type,
    attribute: item.tags[1] || "待补",
    obtain: item.desc,
    status: item.tags[2] || item.type,
    coord: item.coord || "待采集",
  })),
];

function renderWikiHub() {
  const typeCounts = archive.reduce((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + 1;
    return acc;
  }, {});
  const categoryOrder = ["武学", "奇术", "心法", "装备", "门派", "人物", "任务", "副本", "试炼", "区域"];

  wikiCategoryList.innerHTML = categoryOrder
    .filter((type) => typeCounts[type])
    .map(
      (type) => `
        <button class="wiki-category" type="button" data-wiki-tab="${type}">
          <span>${type}</span>
          <b>${typeCounts[type]}</b>
        </button>
      `
    )
    .join("");

  wikiFeatured.innerHTML = wikiFeaturedEntries
    .map(
      (entry) => `
        <a class="wiki-feature-card" href="${entry.href}">
          <span class="card-type">${entry.type}</span>
          <h3>${entry.title}</h3>
          <p>${entry.desc}</p>
          <em>${entry.meta}</em>
        </a>
      `
    )
    .join("");

  wikiUpdates.innerHTML = wikiUpdateFeed
    .map(
      ([time, title, desc]) => `
        <article class="wiki-update">
          <time>${time}</time>
          <div>
            <b>${title}</b>
            <span>${desc}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderContentAtlas() {
  contentAtlasEl.innerHTML = contentAtlas
    .map(
      (group) => `
        <article class="atlas-card">
          <div class="atlas-top">
            <span>${group.source}</span>
            <b>${group.entries.length} 个代表条目</b>
          </div>
          <h3>${group.title}</h3>
          <p>${group.desc}</p>
          <div class="atlas-entry-list">
            ${group.entries.map((entry) => `<button type="button" data-atlas-search="${escapeHtml(entry)}">${entry}</button>`).join("")}
          </div>
          <div class="atlas-fields">
            ${group.fields.map((field) => `<span>${field}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderCards() {
  const keyword = searchInput.value.trim().toLowerCase();
  const rows = archive.filter((item) => {
    const matchesTab = activeTab === "all" || item.type === activeTab;
    const haystack = `${item.type} ${item.title} ${item.desc} ${item.tags.join(" ")}`.toLowerCase();
    return matchesTab && (!keyword || haystack.includes(keyword));
  });

  cards.innerHTML = rows
    .map(
      (item) => `
        <article class="card">
          <span class="card-type">${item.type}</span>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <div class="coord-line"><b>坐标：</b>${item.coord || "待采集"} ${copyButton(item.coord || "待采集")}</div>
          <div class="tag-row">${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
          ${communityBlock(item)}
        </article>
      `
    )
    .join("");

  if (!rows.length) {
    cards.innerHTML = `<article class="card"><span class="card-type">空结果</span><h3>没有找到匹配条目</h3><p>换一个关键词，或切回“全部”分类。</p></article>`;
  }
}

function renderSuggestions() {
  const keyword = searchInput.value.trim().toLowerCase();
  if (!keyword) {
    searchSuggest.classList.remove("show");
    searchSuggest.innerHTML = "";
    return;
  }

  const rows = suggestionPool
    .filter((item) => {
      const haystack = `${item.title} ${item.type} ${item.weapon || ""} ${item.attribute || ""} ${item.obtain || ""} ${(item.tags || []).join(" ")}`.toLowerCase();
      return haystack.includes(keyword);
    })
    .slice(0, 6);

  if (!rows.length) {
    searchSuggest.classList.remove("show");
    searchSuggest.innerHTML = "";
    return;
  }

  searchSuggest.innerHTML = rows
    .map(
      (item) => `
        <button class="suggest-item" type="button" data-suggest="${escapeHtml(item.title)}" role="option">
          <strong>${item.title}</strong>
          <span>${item.weapon || item.type} · ${item.attribute || "待补属性"} · ${item.status || "待核验"}</span>
          <small>获取：${item.obtain || item.desc || "待补"} ｜ 坐标：${item.coord || "待采集"}</small>
        </button>
      `
    )
    .join("");
  searchSuggest.classList.add("show");
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeTab = button.dataset.tab;
    tabButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderCards();
  });
});

searchInput.addEventListener("input", () => {
  renderCards();
  renderSuggestions();
});

searchSuggest.addEventListener("click", (event) => {
  const item = event.target.closest(".suggest-item");
  if (!item) return;
  searchInput.value = item.dataset.suggest;
  renderCards();
  renderSuggestions();
});

wikiCategoryList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-wiki-tab]");
  if (!button) return;
  const targetTab = button.dataset.wikiTab;
  activeTab = targetTab;
  tabButtons.forEach((tab) => tab.classList.toggle("active", tab.dataset.tab === targetTab));
  searchInput.value = "";
  renderCards();
  document.querySelector("#archive").scrollIntoView({ behavior: "smooth" });
});

contentAtlasEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-atlas-search]");
  if (!button) return;
  activeTab = "all";
  tabButtons.forEach((tab) => tab.classList.toggle("active", tab.dataset.tab === "all"));
  searchInput.value = button.dataset.atlasSearch;
  renderCards();
  renderSuggestions();
  document.querySelector("#archive").scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".search")) searchSuggest.classList.remove("show");
});

practicalBoard.innerHTML = practicalGuides
  .map(
    (guide) => `
      <article class="practical-card">
        <div class="raid-card-head">
          <span class="pill">${guide.type}</span>
          <span class="status">${guide.status}</span>
        </div>
        <h3>${guide.title}</h3>
        <p>${guide.body}</p>
        <ul>${guide.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>
        ${communityBlock({ title: guide.title, desc: guide.body, status: guide.status })}
      </article>
    `
  )
  .join("");

document.querySelector("#weaponList").innerHTML = weapons
  .map(
    (weapon) => `
      <article class="weapon">
        <div class="weapon-top">
          <h3>${weapon.weapon}</h3>
          <span class="pill">${weapon.arts.length} 套武学</span>
        </div>
        <p>${weapon.note}</p>
        <div class="art-list">
          ${weapon.arts
            .map(
              (art) => `
                <div class="art-item">
                  <div class="art-title">
                    <strong>${art.name}</strong>
                    <span class="status">${art.status}</span>
                  </div>
                  <div class="art-meta">
                    <span>${art.attribute}</span>
                    <span>${art.role}</span>
                  </div>
                  <p><b>获取方式：</b>${art.obtain} ${copyButton(art.obtain, "复制来源")}</p>
                  <p><b>坐标：</b>${art.coord || "待采集"} ${copyButton(art.coord || "待采集")}</p>
                  <p><b>升级材料：</b>${art.materials || "待补材料"}</p>
                  <p><b>偷师指南：</b>${art.steal || "待补 NPC / 资源 / 前置条件"}</p>
                  ${communityBlock({ ...art, title: art.name })}
                </div>
              `
            )
            .join("")}
        </div>
      </article>
    `
  )
  .join("");

document.querySelector("#gamekeeBoard").innerHTML = gamekeeMartialDetails
  .map(
    (art) => `
      <article class="gamekee-card">
        <div class="gamekee-title">
          <div>
            <span class="pill">${art.weapon}</span>
            <h3>${art.name}</h3>
          </div>
          <span class="status">${art.status}</span>
        </div>
        <div class="fact-grid">
          <p><b>属性</b><span>${art.attribute}</span></p>
          <p><b>定位</b><span>${art.role}</span></p>
          <p><b>获取</b><span>${art.obtain} ${copyButton(art.obtain, "复制")}</span></p>
          <p><b>材料</b><span>${art.materials || "待补材料"}</span></p>
          <p><b>偷师</b><span>${art.steal || "待补 NPC / 资源 / 前置条件"}</span></p>
          <p><b>坐标</b><span>${art.coord || "待采集"} ${copyButton(art.coord || "待采集")}</span></p>
        </div>
        <div class="source-row">
          <span>${art.sourceTitle} · 接口字段摘录 · ${art.updated}</span>
          <a href="${art.source}" target="_blank" rel="noreferrer">打开来源</a>
        </div>
        ${communityBlock({ ...art, title: art.name })}
      </article>
    `
  )
  .join("");

document.querySelector("#sectMatrix").innerHTML = sects
  .map(
    ([name, desc]) => `
      <article class="sect">
        <span class="pill">门派</span>
        <h3>${name}</h3>
        <p>${desc}</p>
        ${communityBlock({ title: name, desc })}
      </article>
    `
  )
  .join("");

const mapEntries = document.querySelector("#mapEntries");
const mapRegionTitle = document.querySelector("#mapRegionTitle");
const mapPins = [...document.querySelectorAll(".map-pin")];
let activeMapRegion = "清河";

function renderMap(region) {
  activeMapRegion = region;
  mapRegionTitle.textContent = region;
  mapPins.forEach((pin) => pin.classList.toggle("active", pin.dataset.mapRegion === region));
  mapEntries.innerHTML = (mapData[region] || [])
    .map(
      (entry) => `
        <article class="map-entry">
          <span class="pill">${entry.type}</span>
          <h4>${entry.title}</h4>
          <p><b>坐标：</b>${entry.coord} ${copyButton(entry.coord)}</p>
          <p>${entry.note}</p>
          ${communityBlock(entry)}
        </article>
      `
    )
    .join("");
}

mapPins.forEach((pin) => {
  pin.addEventListener("click", () => renderMap(pin.dataset.mapRegion));
});

document.querySelector("#stealGuides").innerHTML = stealGuides
  .map(
    (guide) => `
      <article class="steal-card">
        <span class="pill">${guide.path}</span>
        <h4>${guide.art}</h4>
        <dl>
          <div><dt>NPC</dt><dd>${guide.npc}</dd></div>
          <div><dt>坐标</dt><dd>${guide.coord} ${copyButton(guide.coord)}</dd></div>
          <div><dt>消耗</dt><dd>${guide.cost}</dd></div>
          <div><dt>前置</dt><dd>${guide.prereq}</dd></div>
        </dl>
        ${communityBlock({ ...guide, title: guide.art })}
      </article>
    `
  )
  .join("");

document.querySelector("#sectWarnings").innerHTML = sectWarnings
  .map(
    (warning) => `
      <article class="warning-card">
        <div class="raid-card-head">
          <span class="pill">${warning.sect}</span>
          <span class="status">${warning.status}</span>
        </div>
        <h4>${warning.rule}</h4>
        <p>${warning.impact}</p>
        ${communityBlock({ ...warning, title: warning.sect })}
      </article>
    `
  )
  .join("");

const regionIndex = document.querySelector("#regionIndex");
const peopleBoard = document.querySelector("#peopleBoard");

function renderPeople(region) {
  [...regionIndex.querySelectorAll("button")].forEach((button) => {
    button.classList.toggle("active", button.dataset.region === region);
  });

  peopleBoard.innerHTML = peopleByRegion[region]
    .map(
      ([name, desc]) => `
        <article class="person">
          <span class="pill">${region}</span>
          <h3>${name}</h3>
          <p>${desc}</p>
          ${communityBlock({ title: name, desc, tags: ["待核验"] })}
        </article>
      `
    )
    .join("");
}

regionIndex.innerHTML = Object.keys(peopleByRegion)
  .map((region) => `<button type="button" data-region="${region}">${region}</button>`)
  .join("");

regionIndex.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (button) renderPeople(button.dataset.region);
});

document.querySelector("#questLanes").innerHTML = questLanes
  .map(
    (lane) => `
      <article class="lane">
        <span class="pill">任务</span>
        <h3>${lane.title}</h3>
        <p>${lane.desc}</p>
        <ul>${lane.items.map((item) => `<li>${item}</li>`).join("")}</ul>
        ${communityBlock({ title: lane.title, desc: lane.desc, tags: ["待补"] })}
      </article>
    `
  )
  .join("");

const raidBoard = document.querySelector("#raidBoard");
const raidFilters = [...document.querySelectorAll(".raid-filter")];
let activeRaid = "全部";

function renderRaids() {
  const rows = raidGuides.filter((guide) => activeRaid === "全部" || guide.type === activeRaid);
  raidBoard.innerHTML = rows
    .map(
      (guide) => `
        <article class="raid-card">
          <div class="raid-card-head">
            <span class="pill">${guide.type}</span>
            <span class="status">${guide.status}</span>
          </div>
          <h3>${guide.title}</h3>
          <p>${guide.setup}</p>
          <h4>核心机制</h4>
          <ul>${guide.mechanics.map((item) => `<li>${item}</li>`).join("")}</ul>
          <h4>速查口令</h4>
          <div class="call-row">${guide.calls.map((item) => `<span>${item}${copyButton(item, "复制")}</span>`).join("")}</div>
          ${communityBlock({ ...guide, title: guide.title })}
        </article>
      `
    )
    .join("");
}

raidFilters.forEach((button) => {
  button.addEventListener("click", () => {
    activeRaid = button.dataset.raid;
    raidFilters.forEach((item) => item.classList.toggle("active", item === button));
    renderRaids();
  });
});

document.querySelector("#versionBoard").innerHTML = versionSnapshots
  .map(
    (snapshot) => `
      <article class="version-card">
        <div class="version-card-head">
          <span class="pill">${snapshot.item}</span>
          <span class="status">${snapshot.latest}</span>
        </div>
        <div class="version-grid">
          <div><b>2.5</b><span>${snapshot.v25}</span></div>
          <div><b>2.6</b><span>${snapshot.v26}</span></div>
          <div><b>来源</b><span>${snapshot.source}</span></div>
          <div><b>结论</b><span>${snapshot.verdict}</span></div>
        </div>
        ${communityBlock({ ...snapshot, title: snapshot.item })}
      </article>
    `
  )
  .join("");

const buildBoard = document.querySelector("#buildBoard");
const buildFilters = [...document.querySelectorAll(".build-filter")];
let activeBuild = "新手游历";

function renderBuilds() {
  const guide = buildGuides.find((item) => item.scene === activeBuild) || buildGuides[0];
  buildBoard.innerHTML = `
    <article class="build-card">
      <div class="build-card-main">
        <span class="pill">${guide.scene}</span>
        <h3>${guide.summary}</h3>
        <div class="build-columns">
          <div>
            <h4>推荐关注</h4>
            <div class="call-row">${guide.focus.map((item) => `<span>${item}</span>`).join("")}</div>
          </div>
          <div>
            <h4>可查条目</h4>
            <ul>${guide.weapons.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
          <div>
            <h4>补充原则</h4>
            <ul>${guide.notes.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
        </div>
        ${communityBlock({ title: guide.scene, desc: guide.summary, tags: ["待补"] })}
      </div>
    </article>
  `;
}

buildFilters.forEach((button) => {
  button.addEventListener("click", () => {
    activeBuild = button.dataset.build;
    buildFilters.forEach((item) => item.classList.toggle("active", item === button));
    renderBuilds();
  });
});

document.querySelector("#routeSteps").innerHTML = routeSteps
  .map(
    (step, index) => `
      <article class="route-step">
        <span class="route-number">${String(index + 1).padStart(2, "0")}</span>
        <div>
          <span class="pill">${step.tag}</span>
          <h3>${step.title}</h3>
          <ul>${step.items.map((item) => `<li>${item}</li>`).join("")}</ul>
          ${communityBlock({ title: step.title, tags: ["待补"] })}
        </div>
      </article>
    `
  )
  .join("");

async function copyText(value, button) {
  const text = String(value || "").trim();
  if (!text) return;

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const input = document.createElement("textarea");
      input.value = text;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.left = "-9999px";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    const original = button.textContent;
    button.textContent = "已复制";
    button.classList.add("copied");
    window.setTimeout(() => {
      button.textContent = original;
      button.classList.remove("copied");
    }, 1200);
  } catch (error) {
    button.textContent = "复制失败";
    window.setTimeout(() => {
      button.textContent = "复制";
    }, 1200);
  }
}

document.addEventListener("click", (event) => {
  const button = event.target.closest(".copy-btn");
  if (!button) return;
  event.preventDefault();
  event.stopPropagation();
  copyText(button.dataset.copy, button);
});

renderWikiHub();
renderContentAtlas();
renderCards();
renderMap(activeMapRegion);
renderBuilds();
renderPeople("清河");
renderRaids();
