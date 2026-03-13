// 燕云十六声 - 完整数据库 (开服—2026.03.13)
const DB = {
// ========== 和鸣套装（2 八音窍）==========
heming2: [
{id:1,name:"无间无相",icon:"⚔️",price:"2 个八音窍",source:"和鸣商店",desc:"开服绝世·经典武侠",tags:["开服","绝世"],dyes:["#1a1a2e","#8B0000","#FFD700","#4169E1"]},
{id:2,name:"乐神师延",icon:"🎵",price:"2 个八音窍",source:"和鸣商店",desc:"开服绝世·音乐主题",tags:["开服","绝世"],dyes:["#8B4513","#DAA520","#FFD700","#4B0082"]},
{id:3,name:"雪满川",icon:"❄️",price:"2 个八音窍",source:"和鸣商店",desc:"BOSS 主题·冰雪",tags:["BOSS","冰雪"],dyes:["#E6E6FA","#B0C4DE","#87CEEB","#F0F8FF"]},
{id:4,name:"青丘千岁",icon:"🦊",price:"2 个八音窍",source:"和鸣商店",desc:"狐狸主题·妖媚",tags:["狐狸","绝世"],dyes:["#FF69B4","#FFD700","#8B0000","#FF1493"]},
{id:5,name:"葬花吟",icon:"🌸",price:"2 个八音窍",source:"和鸣商店",desc:"绝世·落花",tags:["绝世","落花"],dyes:["#FFB6C1","#FF69B4","#FFD700","#FFC0CB"]},
{id:6,name:"月中天阙",icon:"🌙",price:"2 个八音窍",source:"和鸣商店",desc:"常驻·月宫",tags:["常驻","月宫"],dyes:["#E6E6FA","#4169E1","#FFD700","#8A2BE2"]},
{id:7,name:"鬼公子",icon:"👻",price:"2 个八音窍",source:"和鸣商店",desc:"常驻·幽冥",tags:["常驻","幽冥"],dyes:["#2F2F2F","#4B0082","#8B0000","#FFD700"]},
{id:8,name:"沧海龙吟",icon:"🐉",price:"2 个八音窍",source:"和鸣商店",desc:"可交易绝世·白龙",tags:["可交易","绝世"],dyes:["#FFFFFF","#1a1a2e","#8B0000","#FFD700"]},
{id:9,name:"风吟彼岸",icon:"🍃",price:"2 个八音窍",source:"和鸣商店",desc:"绝世·彼岸花",tags:["绝世"],dyes:["#8B0000","#FF6347","#FFD700"]},
{id:10,name:"灵鲛织梦",icon:"🧜",price:"2 个八音窍",source:"和鸣商店",desc:"人鱼·限时 2026/3/23",tags:["限时"],dyes:["#00CED1","#4169E1","#FFD700"]},
{id:11,name:"寻山野",icon:"⛰️",price:"2 个八音窍",source:"赛季奖池",desc:"赛季·山野",tags:["赛季"],dyes:["#228B22","#8B4513","#FFD700"]},
{id:12,name:"莲渡幽罗",icon:"🪷",price:"2 个八音窍",source:"和鸣商店",desc:"限时 87 天·附演出 + 头像",tags:["限时","演出"],dyes:["#191970","#4169E1","#8B0000","#FFD700"]},
{id:13,name:"晏平生",icon:"// 续：商城直售 + 发型 + 特效 + 武器
const shop2580 = [
{id:20,name:"雀临华台",icon:"🪶",price:"2580 长鸣珠",source:"周年礼盒",desc:"绝版礼盒·限至 2026/1/30",tags:["绝版","周年"]},
{id:21,name:"马上有乾",icon:"🐴",price:"2580→1280 长鸣珠",source:"新春活动",desc:"除夕贺岁·活动价",tags:["新春"]},
{id:22,name:"探梅逢春",icon:"🌸",price:"2580 长鸣珠",source:"花间十二客",desc:"新春·梅花",tags:["新春","梅花"]},
{id:23,name:"飞白成诗",icon:"🖌️",price:"1280 长鸣珠",source:"商城",desc:"水墨风",tags:["水墨"]},
{id:24,name:"焰卷残夜",icon:"🔥",price:"1280 长鸣珠",source:"商城",desc:"硬朗风",tags:["硬朗"]},
{id:25,name:"蜀戏春",icon:"🎭",price:"2580 长鸣珠",source:"商城",desc:"川剧主题",tags:["川剧"]},
{id:26,name:"铁马金戈",icon:"⚔️",price:"2580 长鸣珠",source:"限时",desc:"玉门主题·2025/3/28-4/25",tags:["限时","玉门"]},
{id:27,name:"游子衣",icon:"🧵",price:"60 长鸣珠",source:"周年福利",desc:"周年福利",tags:["福利"]},
{id:28,name:"清音晓",icon:"🎵",price:"680 长鸣珠",source:"商城",desc:"直售",tags:["直售"]},
{id:29,name:"财星高照",icon:"💰",price:"60 长鸣珠",source:"正月初五",desc:"财神",tags:["节日"]},
{id:30,name:"幽夜尘影",icon:"🌑",price:"60 长鸣珠",source:"2026/3/6",desc:"暗夜风",tags:["新品"]},
{id:31,name:"岁寒香",icon:"🌺",price:"680→300 长鸣珠",source:"折扣",desc:"折扣至 2026/1/15",tags:["折扣"]},
{id:32,name:"万壑清响",icon:"🏔️",price:"680→300 长鸣珠",source:"折扣",desc:"折扣至 2026/3/13·书院",tags:["折扣","书院"]}
];

const hairstyles = [
{id:100,name:"青鸾瑶音",icon:"👑",price:"2 个八音窍",desc:"限时 87 天·配饰套组",tags:["和鸣","配饰"]},
{id:101,name:"有狐绥绥",icon:"🦊",price:"八音/抽奖",desc:"青丘千岁配套",tags:["配套"]},
{id:102,name:"弄清影",icon:"⚪",price:"1 个八音窍",desc:"白发·限时",tags:["白发","限时"]},
{id:103,name:"万顷琉璃",icon:"💎",price:"2 个八音窍",desc:"发型 + 耳饰套组",tags:["和鸣","套组"]},
{id:104,name:"栖彤霞",icon:"🌅",price:"1 个八音窍",desc:"红霞主题",tags:["和鸣"]},
{id:105,name:"逐月华",icon:"🌙",price:"1 个八音窍",desc:"月光主题",tags:["和鸣"]},
{id:106,name:"朔风雪",icon:"❄️",price:"1 个八音窍",desc:"白发·限时 90 天",tags:["白发","限时"]},// 武学特效 + 奇术特效 + 武器外观
const wuxueEffects = [
{id:200,name:"骥跃长风",icon:"⚡",price:"1 个八音窍",weapon:"陌刀·十方破阵",desc:"陌刀特效",tags:["八音","陌刀"]},
{id:201,name:"墨泼风",icon:"🖌️",price:"1280 长鸣珠",weapon:"伞",desc:"水墨风特效",tags:["直售","伞"]},
{id:202,name:"风戏万古",icon:"🌪️",price:"1280 长鸣珠",weapon:"绳镖·粟子行云",desc:"绳镖特效",tags:["直售","绳镖"]},
{id:203,name:"妙音千啭",icon:"🎵",price:"抽奖/赛季",weapon:"粟子行云",desc:"音乐特效",tags:["抽奖","赛季"]},
{id:204,name:"龙腾九霄",icon:"🐉",price:"音玉",weapon:"通用",desc:"龙主题特效",tags:["音玉"]},
{id:205,name:"一雷惊蛰",icon:"⚡",price:"音玉",weapon:"通用",desc:"雷电特效",tags:["音玉"]},
{id:206,name:"万剑归宗",icon:"⚔️",price:"音玉",weapon:"剑",desc:"剑系特效",tags:["音玉","剑"]},
{id:207,name:"一斩绛天",icon:"🗡️",price:"音玉",weapon:"通用",desc:"高爆发特效",tags:["音玉"]},
{id:208,name:"蝶舞飞花",icon:"🦋",price:"音玉",weapon:"通用",desc:"蝴蝶特效",tags:["音玉"]},
{id:209,name:"墨舞云",icon:"☁️",price:"音玉",weapon:"通用",desc:"水墨云特效",tags:["音玉"]},
{id:210,name:"飞霜点雪",icon:"❄️",price:"音玉",weapon:"通用",desc:"冰雪特效",tags:["音玉"]}
];

const qishuEffects = [
{id:300,name:"貔貅赐宝",icon:"🦁",price:"2 音玉 (限至 2026/3/27)",skill:"金蟾腾跃",desc:"奇术特效·限时优惠",tags:["限时","奇术"]},
{id:301,name:"天龙舞火",icon:"🐉",price:"2 音玉 (42 天后恢复 3 音玉)",skill:"神龙吐火",desc:"奇术特效·限时",tags:["限时","奇术"]},
{id:302,name:"狮吼正声",icon:"🦁",price:"2 音玉",skill:"狮吼正声",desc:"奇术特效·月中狮",tags:["奇术"]},
{id:303,name:"雾隐关峦",icon:"🌫️",price:"60 长鸣珠",skill:"红尘障目",desc:"奇术特效外观·限时",tags:["限时","外观"]},
{id:304,name:"九算擎天",icon:"🔮",price:"2 音玉",skill:"摄星拿月",desc:"奇术特效·限时",tags:["限时","奇术"]},
{id:305,name:"龙战千山",icon:"🐉",price:"2 音玉",skill:"太白醉月",desc:"特效外观·限时",tags:["限时","外观"]},
{id:306,name:"鹤破青冥",icon:"🦢",price:"980 长鸣珠",skill:"清风霁月",desc:"奇术特效",tags:["直售","奇术"]},
{id:307,name:"月锁天罗",icon:"🌙",price:"980 长鸣珠",skill:"百鬼打穴手",desc:"奇术特效",tags:["直售","奇术"]},
{id:308,name:"北辰星拱",icon:"⭐",price:"980 长鸣珠",skill:"盒玉手",desc:"奇术特效",tags// 武器外观
const weapons = [
{id:400,name:"青鸟衔刀",icon:"🐦",price:"2 音玉 (2026/2/13-4/13)",weapon:"陌刀",desc:"赋神联动·限时",tags:["限时","联动","陌刀"]},
{id:401,name:"濯浪天清",icon:"🌊",price:"2 音玉 (2026/2/13-4/13)",weapon:"横刀",desc:"赋神联动·限时",tags:["限时","联动","横刀"]},
{id:402,name:"折桃问雪",icon:"🌸",price:"1280 长鸣珠",weapon:"剑",desc:"万籁系列",tags:["直售","剑","万籁"]},
{id:403,name:"倚雪听春",icon:"❄️",price:"1280 长鸣珠",weapon:"枪",desc:"万籁系列",tags:["直售","枪","万籁"]},
{id:404,name:"飞马逐日",icon:"🐴",price:"680→540→320 长鸣珠",weapon:"生肖武器",desc:"年度生肖·多买折扣",tags:["折扣","生肖"]},
{id:405,name:"北溟有鱼",icon:"🐟",price:"2 个八音窍",weapon:"伞",desc:"限时 180 天",tags:["限时","八音","伞"]},
{id:406,name:"出竹意",icon:"🎋",price:"60 长鸣珠",weapon:"枪",desc:"直售",tags:["直售","枪"]},
{id:407,name:"藏音·潜龙在渊",icon:"🐉",price:"限时 360 天",weapon:"枪",desc:"太一玄石重铸",tags:["限时","枪"]},
{id:408,name:"藏音·千古断云",icon:"☁️",price:"八音/交易",weapon:"剑",desc:"可交易",tags:["可交易","剑"]},
{id:409,name:"藏音·昆山玉碎",icon:"💎",price:"八音/交易",weapon:"枪",desc:"可交易",tags:["可交易","枪"]},
{id:410,name:"万籁·斩阴阳",icon:"⚖️",price:"系列",weapon:"剑",desc:"万籁系列",tags:["系列","剑"]},
{id:411,name:"无声无形",icon:"🌑",price:"系列",weapon:"通用",desc:"武器外观主题",tags:["系列"]},
{id:412,name:"游鳞飞浪",icon:"🐠",price:"系列",weapon:"通用",desc:"武器外观主题",tags:["系列"]}
];

// 免费时装示例
const freeFashion = [
{id:500,name:"蚕织染",icon:"🧵",source:"活动/探索/门派",desc:"免费获取示例",tags:["免费"]},
{id:501,name:"坐忘道",icon:"🧘",source:"任务/活动",desc:"免费",tags:["免费"]},
{id:502,name:"初出茅庐",icon:"🌱",source:"任务/活动",desc:"新手免费",tags:["免费","新手"]},
{id:503,name:"霓荷花影",icon:"🪷",source:"预约",desc:"预约奖励",tags:["免费","预约"]},
{id:504,name:"浴袍·黄金缕",icon:"🛁",source:"春水阁成就",desc:"成就奖励",tags:["免费","成就"]},
{id:505,name:"金吾卫",icon:"🛡️",source:"百业声望",desc:"声望奖励",tags:["免费","声望"]},
{id:506,name:"双飞燕",icon:"🕊️",source:"师徒商店",desc:"师徒奖励",tags:["免费","师徒"]},
{id:507,name:"一人心",icon:"💕",source:"侠缘商店",desc:"侠缘奖励",tags:["免费","侠缘"]},
{id:508,name:"苍狼",icon:"