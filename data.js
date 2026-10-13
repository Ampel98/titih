// ===== 占位图：用 picsum.photos，本地双击也能显示，不会裂 =====
const PIC = (n, w = 500, h = 600) => `https://picsum.photos/${w}/${h}?random=${n}`;

/* ========== Profile ========== */
const bioData = {
  selfItems: [
    { label: '姓名', value: '黄婷婷' },
    { label: '外文名', value: 'Kotete、こう ていてい、황팅팅' },
    { label: '职业', value: '演员、歌手' },
    { label: '生日', value: '1992.09.08' },
    { label: '出生地', value: '江苏南京' },
    { label: '星座', value: '处女座' },
    { label: '身高', value: '165cm' },
    { label: '血型', value: 'O型' },
    { label: 'MBTI', value: 'INFP' },
    { label: '粉丝名', value: '跳跳糖、T3' }
  ],
  petItems: [
    { label: '宠物名', value: '五一' },
    { label: '品种', value: '德文卷毛猫' },
    { label: '生日', value: '2020.03.29' },
    { label: '回家日期', value: '2020.05.01' },
    { label: '毛色', value: '黑白' },
    { label: '性别', value: '弟弟' }
  ],
  selfSocials: [
    { name: '黄婷婷', url: 'https://weibo.com/u/7735668873', icon: 'https://www.sinaimg.cn/blog/developer/wiki/LOGO_64x64.png' },
    { name: '黄婷婷', url: 'https://xhslink.cn/o/4J9FrODsoNu', icon: 'https://www.xiaohongshu.com/favicon.ico' },
    { name: '黄婷婷', url: 'https://v.douyin.com/jy6nj6nML6Y/', icon: 'https://lf-douyin-pc-web.douyinstatic.com/obj/douyin-pc-web/2025_0313_logo.png' },
    { name: '黄婷婷TiTi', url: 'https://space.bilibili.com/1727095428', icon: 'https://i0.hdslb.com/bfs/static/jinkela/long/images/favicon.ico' },
    { name: 'kotetehtt', url: 'https://www.instagram.com/kotetehtt', icon: 'https://cloudflare-imgbed-94l.pages.dev/file/icon/1791784893528_Ins_icon.png' },
    { name: '黄婷婷', url: 'https://x.com/kotete920908', icon: 'https://cloudflare-imgbed-94l.pages.dev/file/icon/1791784893568_X_icon.png' }
  ],
  petSocials: [
    { name: '515151', url: 'https://xhslink.cn/o/AArxW6h0ors', icon: 'https://www.xiaohongshu.com/favicon.ico' }
  ]
};

/* ========== 影视 ========== */
const filmData = {
  groups: [
    { title: '电视剧 / 网剧', items: [
      {
        id: 'series_fdwxs', name: '《飞到我心上》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_ys/1791807444644_fdwxs.jpg',
        role: '饰 李之槐', platform: '湖南卫视 / 芒果TV / 咪咕视频等', episodes: '全24集',
        year: '2026', director: '郑世龙', cast: '魏哲鸣 / 刘些宁 / 费启鸣 / 赵晴 / 黄婷婷等',
        synopsis: '改编自晋江文学城小说《降落我心上》原著：翘摇\n2026.08.31 湖南卫视播出，芒果TV、咪咕视频上线播出\n出场集数：15、16、17',
        fullVideo: [{ label: '芒果TV - 全集', type: 'link', url: 'https://www.mgtv.com/b/778406/24623021.html' },
          { label: '咪咕视频 - 全集', type: 'link', url: 'https://www.miguvideo.com/p/detail/966740877' },
          { label: '爱奇艺国际 - 全集', type: 'link', url: 'https://www.iq.com/album/%E9%A3%9E%E5%88%B0%E6%88%91%E5%BF%83%E4%B8%8A-2026-1hg9a70yi45' },
          { label: 'Viki - 全集', type: 'link', url: 'https://www.viki.com/tv/41640c-blossom-through-the-cloud' },
          { label: 'friDay影音 - 全集', type: 'link', url: 'https://video.friday.tw/drama/detail/5282' }],
        behindScenes: [],
        stills: [],
        downloads: []
      },
      {
        id: 'series_cx', name: '《炽夏》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_ys/1791807446182_cx.jpg',
        role: '饰 沈岚', platform: '湖南卫视 / 芒果TV / 咪咕视频等', episodes: '全29集',
        year: '2026', director: '许肇任 / 黄常祚', cast: '包上恩 / 周柯宇 / 赵英博 / 黄奕 / 黄婷婷等',
        synopsis: '改编自晋江文学城小说《坠落》原著：甜醋鱼\n2026.06.16 湖南卫视播出，芒果TV、咪咕视频上线播出\n出场集数：3、6、8、9、10、11、12',
        fullVideo: [{ label: '芒果TV - 全集', type: 'link', url: 'https://www.mgtv.com/b/783747/24437770.html' },
          { label: '咪咕视频 - 全集', type: 'link', url: 'https://www.miguvideo.com/p/detail/965297054' },
          { label: 'Netflix - 全集', type: 'link', url: 'https://www.netflix.com/tw/title/82957534' },
          { label: '爱奇艺国际 - 全集', type: 'link', url: 'https://www.iq.com/album/%E7%82%BD%E5%A4%8F-2026-14mg4loc341' },
          { label: 'friDay影音 - 全集', type: 'link', url: 'https://video.friday.tw/drama/detail/5013' }],
        behindScenes: [],
        stills: [],
        downloads: []
      },
      {
        id: 'series_yn', name: '《被隐匿的真相》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_ys/1791807452006_yn.jpg',
        role: '饰 王以沫', platform: '腾讯视频', episodes: '全12集',
        year: '2026', director: '嵇政', cast: '丁冠森 / 印小天 / 黄婷婷 / 郭品超等',
        synopsis: '2026.02.66 腾讯视频上线播出\n出场集数：全剧',
        fullVideo: [{ label: '腾讯视频 - 全集', type: 'link', url: 'https://v.qq.com/x/cover/mzc00200sp5f6qy/g4101nfbc7g.html' }],
        behindScenes: [],
        stills: [],
        downloads: []
      },
      {
        id: 'series_jksc', name: '《即刻上场》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_ys/1791807442210_jksc.jpg',
        role: '饰 黄月', platform: 'CCTV / 腾讯视频', episodes: '全24集',
        year: '2025', director: '邓珂', cast: '胡先煦 / 周依然 / 何蓝逗 / 加奈那 / 李乐 / 黄婷婷等',
        synopsis: '2025.11.29 中央电视台电视剧频道首播，腾讯视频同步播出\n出场集数：1~15、17~19、22、24',
        fullVideo: [{ label: '腾讯视频 - 全集', type: 'link', url: 'https://v.qq.com/x/cover/mzc00200ehxx2hp.html' }],
        behindScenes: [],
        stills: [],
        downloads: []
      },
      {
        id: 'series_xmyn', name: '《熊猫与你，滚滚而来！》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_ys/1791807446121_xmyn.jpg',
        role: '饰 刘柳', platform: '优酷视频', episodes: '全20集',
        year: '2025', director: '方婷婷', cast: '黄婷婷 / 王星玮 / 任宇 / 赵圆圆等',
        synopsis: '2025.10.27 优酷视频全网独播\n出场集数：全剧',
        fullVideo: [{ label: '优酷视频 - 全集', type: 'link', url: 'https://v.youku.com/v_show/id_XNjUwNzAxMjMxMg==.html' }],
        behindScenes: [],
        stills: [],
        downloads: []
      },
      {
        id: 'series_sqy', name: '《深情眼》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_ys/1791807442270_syq.jpg',
        role: '饰 江露芝', platform: '湖南卫视 / 芒果TV / 咪咕视频等', episodes: '全26集',
        year: '2025', director: '张笑安', cast: '张予曦 / 毕雯珺 / 张小婉 / 刘润南 / 黄婷婷等',
        synopsis: '改编自晋江文学城小说《深情眼》原著：耳东兔子\n2025.07.21 湖南卫视播出，芒果TV、咪咕视频上线播出\n出场集数：1、4、5、8、11、13、16、17',
        fullVideo: [{ label: '芒果TV - 全集', type: 'link', url: 'https://www.mgtv.com/b/730633/23231099.html' },
          { label: '咪咕视频 - 全集', type: 'link', url: 'https://www.miguvideo.com/p/detail/956485906' },
          { label: 'Netflix - 全集', type: 'link', url: 'https://www.netflix.com/title/82118175' },
          { label: 'Viki - 全集', type: 'link', url: 'https://www.viki.com/tv/41178c-deep-affectionate-eyes' },
          { label: 'LINETV - 全集', type: 'link', url: 'https://www.linetv.tw/drama/17876' }],
        behindScenes: [],
        stills: [],
        downloads: [{ label: '度盘 - 4K全集CUT 无台标硬字幕', url: 'https://pan.baidu.com/s/135xNlzfMk9A8KIPYiSuyrg?pwd=gf2w', code: 'gf2w' }]
      },
      {
        id: 'series_hy', name: '《花月》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_ys/1791807445133_hy.jpg',
        role: '饰 月千雪', platform: '腾讯视频', episodes: '全18集',
        year: '2025', director: '李少岚', cast: '黄婷婷 / 权裴伦 / 王彦鑫 / 韩煜等',
        synopsis: '2025.06.13 腾讯视频上线播出\n出场集数：全剧',
        fullVideo: [{ label: '腾讯视频 - 全集', type: 'link', url: 'https://v.qq.com/x/cover/mzc00200i6uydda/u4101b7a1j6.html' },
          { label: 'LINETV - 全集', type: 'link', url: 'https://www.linetv.tw/drama/17656' }],
        behindScenes: [],
        stills: [],
        downloads: []
      },
      {
        id: 'series_yycn', name: '《御妖厨娘》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_ys/1791807449171_yycn.jpg',
        role: '饰 银妹妹', platform: '爱奇艺', episodes: '全24集',
        year: '2025', director: '吴承峰', cast: '徐艺洋 / 孙泽源 / 黄婷婷等',
        synopsis: '2025.04.08 爱奇艺上线播出\n出场集数：',
        fullVideo: [{ label: '爱奇艺 - 全集', type: 'link', url: 'https://www.iqiyi.com/v_23j7vqky7gw.html' }],
        behindScenes: [],
        stills: [],
        downloads: []
      },
      {
        id: 'series_scb', name: '《沙尘暴》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_ys/1791807443502_scb.jpg',
        role: '饰 琴', platform: '优酷视频', episodes: '全12集',
        year: '2025', director: '谭嘉言', cast: '段奕宏 / 王锵 / 张佳宁 / 张瑶 / 黄婷婷等',
        synopsis: '2025.03.28 优酷视频上线播出\n出场集数：5、12',
        fullVideo: [{ label: '优酷视频 - 全集', type: 'link', url: 'https://v.youku.com/v_show/id_XNjQxNDA5MDA2NA==.html' }],
        behindScenes: [],
        stills: [],
        downloads: []
      },
      {
        id: 'series_bkadt', name: '《不可爱的她》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_ys/1791807444998_bkadt.jpg',
        role: '饰 唐嘉佳', platform: '爱奇艺', episodes: '全24集',
        year: '2025', director: '施磊', cast: '郑水晶 / 邓泽鸣 / 秦奋 / 黄婷婷 / 曾乙同 / 庄雨婷等',
        synopsis: '2025.02.13 爱奇艺上线播出\n出场集数：',
        fullVideo: [{ label: '爱奇艺 - 全集', type: 'link', url: 'https://www.iqiyi.com/v_13j3s57xtdg.html' }],
        behindScenes: [],
        stills: [],
        downloads: []
      },
      {
        id: 'series_dsyqa', name: '《大宋有奇案》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_ys/1791807448486_dsyqa.jpg',
        role: '饰 穆青', platform: '腾讯视频', episodes: '全20集',
        year: '2025', director: '戴琪', cast: '高一玮 / 蔡正杰 / 王俊笔 / 刘剑羽 / 黄婷婷等',
        synopsis: '2025.01.06 腾讯视频上线播出\n出场集数：',
        fullVideo: [{ label: '腾讯视频 - 全集', type: 'link', url: 'https://v.qq.com/x/cover/mzc00200n6pmzx1/j4100ef277n.html' }],
        behindScenes: [],
        stills: [],
        downloads: []
      },
      {
        id: 'series_hhsx', name: '《虎鹤双行》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_ys/1791807448832_hhsx.jpg',
        role: '饰 Judy / 双总', platform: '腾讯视频', episodes: '全20集',
        year: '2024', director: '彭晨', cast: '衣云鹤 / 唐九洲 / 黄婷婷等',
        synopsis: '2024.09.30 腾讯视频上线播出\n出场集数：',
        fullVideo: [{ label: '腾讯视频 - 全集', type: 'link', url: 'https://v.qq.com/x/cover/mzc002004jqk4iq/n4100gl2zzk.html' }],
        behindScenes: [],
        stills: [],
        downloads: []
      },
      {
        id: 'series_fcrs', name: '《飞驰人生热爱篇》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_ys/1791807447113_fcrs.jpg',
        role: '饰 解说小黄', platform: '优酷视频', episodes: '全28集',
        year: '2024', director: '十一月', cast: '胡先煦 / 王彦霖 / 喻恩泰 / 阎鹤祥 / 曲哲明 / 陈雨贤 / 黄婷婷等',
        synopsis: '2024.02.28 优酷视频上线播出\n出场集数：',
        fullVideo: [{ label: '优酷视频 - 全集', type: 'link', url: 'https://v.youku.com/v_show/id_XNjM3MTczOTM2OA==.html' }],
        behindScenes: [],
        stills: [],
        downloads: []
      },
      {
        id: 'series_wf', name: '《王妃芳龄三千岁》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_ys/1791807451956_wf.jpg',
        role: '饰 墨冰 / 玉三娘 / 纤云', platform: '腾讯视频', episodes: '全24集',
        year: '2024', director: '西岛', cast: '黄婷婷 / 李岱昆 / 陈紫函 / 魏巍 / 朱云龙 / 书亚信 / 叶舒予等',
        synopsis: '2024.02.26 腾讯视频上线播出\n出场集数：',
        fullVideo: [{ label: '腾讯视频 - 全集', type: 'link', url: 'https://v.qq.com/x/cover/mzc002004wj9faj/e0048qkbf7t.html' }],
        behindScenes: [],
        stills: [],
        downloads: []
      },
      {
        id: 'series_qdf', name: '《全世界都在等你们分手》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_ys/1791807441665_qdf.jpg',
        role: '饰 林清妙 / 徐甜甜', platform: '爱奇艺 / 芒果TV', episodes: '全24集',
        year: '2023', director: '田少波', cast: '朱正廷 / 卢昱晓 / 黄婷婷 / 王皓轩 / 许纯 / 吴曼思等',
        synopsis: '2023.05.31 爱奇艺上线播出\n出场集数：',
        fullVideo: [{ label: '爱奇艺 - 全集', type: 'link', url: 'https://www.iqiyi.com/v_14brdoern3g.html' },
          { label: '芒果TV - 全集', type: 'link', url: 'https://www.mgtv.com/b/614173/20311067.html' },
          { label: 'LINETV - 全集', type: 'link', url: 'https://www.linetv.tw/drama/14915' }],
        behindScenes: [],
        stills: [],
        downloads: []
      },
      {
        id: 'series_sszt', name: '《素手遮天》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_ys/1791807447886_sszt.jpg',
        role: '饰 素妗', platform: '腾讯视频', episodes: '全32集',
        year: '2018', director: '于敏', cast: '黄婷婷 / 刘忻 / 王霏霏 / 孟子荻 / 邓宁 / 刘育同等',
        synopsis: '2018.07.02 腾讯视频上线播出\n出场集数：',
        fullVideo: [{ label: '腾讯视频 - 全集', type: 'link', url: 'https://v.qq.com/x/cover/xo0tfoxpinwtrf8/m0703c238yz.html' },
          { label: '腾讯视频 - 单人CUT', type: 'link', url: 'https://v.qq.com/x/cover/6lrhsaxgj0cvw66/l071005j1ko.html' }],
        behindScenes: [],
        stills: [],
        downloads: []
      },
      {
        id: 'series_nx', name: '《逆袭之星途璀璨》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_ys/1791807447732_nx.jpg',
        role: '饰 程语柔', platform: '腾讯视频', episodes: '全50集',
        year: '2017', director: '杨磊', cast: 'Push / 宋轶 / 种丹妮 / 彦希 / 赵健 / 黄婷婷等',
        synopsis: '2017.06.09 腾讯视频上线播出（首播版本50集，后期删减为48集），2018.01.09 深圳卫视播出\n出场集数：',
        fullVideo: [{ label: '腾讯视频 - 全集', type: 'link', url: 'https://v.qq.com/x/cover/mzc002004wj9faj/e0048qkbf7t.html' },
          { label: '腾讯视频 - 单人CUT', type: 'link', url: 'https://v.qq.com/x/cover/7hyl4oek5w3wsp7.html' }],
        behindScenes: [],
        stills: [],
        downloads: []
      },
      {
        id: 'series_qajb', name: '《球爱酒吧》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_ys/1791807444116_qajb.jpg',
        role: '饰 Sweet Girls', platform: '优酷视频', episodes: '全20集',
        year: '2014', director: '尤明宇', cast: '袁成杰 / 王姿允 / 郑家彬 / 杨迪 / 张语格 / 黄婷婷等',
        synopsis: '2014.07.25 优酷视频上线播出\n出场集数：',
        fullVideo: [{ label: '优酷视频 - 全集', type: 'link', url: 'https://www.bilibili.com/video/av2957794/' },
          { label: 'B站 - 单人CUT', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1ws41127Yk', url: 'https://www.bilibili.com/video/BV1ws41127Yk/' }],
        behindScenes: [],
        stills: [],
        downloads: []
      }
    ]},
    { title: '电影 / 微电影', items: [
      {
        id: 'dy_zdxb', name: '电影短片《大世界扭蛋机2：准点下班》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_ys/1791807452728_zdxb.jpg',
        role: '饰 前女友', platform: '哔哩哔哩', episodes: '单片',
        year: '2023', synopsis: '演员：张哲华 / 黄婷婷 / 天放 / 酷酷的滕 / 李逗逗 / 雷淞然 / 张祐维\n2023.10.20 哔哩哔哩上线播出',
        fullVideo: [{ label: 'B站', type: 'link', url: 'https://www.bilibili.com/bangumi/play/ep779146' }],
        behindScenes: [{ label: '关于老板在准点下班的夜班记录🎬', type: 'link', url: 'https://weibo.com/tv/show/1034:4959328579289100' }],
        stills: ['https://p.sda1.dev/35/f518bef57612635931ee991ffad0b168/zdxb _1_.jpg','https://p.sda1.dev/35/b5f86b8f9d4add2fca20b3bf5fac445b/zdxb _2_.jpg','https://p.sda1.dev/35/dc60fb539137b41af33e6eaf0951cff4/zdxb _3_.jpg'],
        downloads: []
      },
      {
        id: 'dy_tsnz', name: '微电影《天生女主》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_ys/1791807450923_tsnz.jpg',
        role: '饰 善善', platform: '抖音 / 微博', episodes: '单片',
        year: '2023', synopsis: '2023.05.27 抖音上线播出',
        fullVideo: [{ label: '微博', type: 'link', url: 'https://weibo.com/tv/show/1034:4911094058385456' }],
        behindScenes: [],
        stills: ['https://p.sda1.dev/35/3455bc98fd19b003d4ed114c857f771c/tsnz _1_.jpg','https://p.sda1.dev/35/f96df0fef7cd95d5e4234dd1a218fc54/tsnz _2_.jpg','https://p.sda1.dev/35/0dec07351c7dfea21bb11da206a93ac3/tsnz _3_.jpg','https://p.sda1.dev/35/771c3e6138ee395acb8c1011a09a949c/tsnz _4_.jpg','https://p.sda1.dev/35/4e751be0f71465bfcac159cabdc1189e/tsnz _5_.jpg','https://p.sda1.dev/35/3b6d75b250f334f096eea7a49499f7a9/tsnz _6_.jpg','https://p.sda1.dev/35/865688c9bca0caeb56c3182193115416/tsnz _7_.jpg','https://p.sda1.dev/35/da2a26f0c8a27ad8308102d43a0cc36a/tsnz _8_.jpg','https://p.sda1.dev/35/1e4c8b4d9617d7fcb391cbdbadd3491f/tsnz _9_.jpg','https://p.sda1.dev/35/6c6ae6239be506d818918fdd27f5fdac/tsnz _10_.jpg'],
        downloads: []
      },
      {
        id: 'dy_chxf', name: '电影《翠狐戏夫》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_ys/1791807442930_chxf.jpg',
        role: '饰 小翠', platform: '腾讯视频', episodes: '电影长片',
        year: '2020', synopsis: '主演：黄婷婷 / 陈子由 / 王星允 / 吴思凡 / 陶慧敏 / 王鑫\n2020.08.14 腾讯视频上线播出',
        fullVideo: [{ label: '腾讯视频', type: 'link', url: 'https://v.qq.com/x/cover/mzc002004dsltzm/e0034l9mb0t.html' }],
        behindScenes: [],
        stills: ['https://p.sda1.dev/35/fd8b8a851f2f70b10865dc2818da30e7/chxf _1_.jpg','https://p.sda1.dev/35/62aa98d2790df7c241a67aaa1e285aae/chxf _2_.jpg','https://p.sda1.dev/35/13818595502ecf32fce2165c62484b03/chxf _3_.jpg','https://p.sda1.dev/35/9e510d0491cd3890b877f689e6a207eb/chxf _4_.jpg','https://p.sda1.dev/35/33323da6bb2ea81046b29101052a5e93/chxf _5_.jpg','https://p.sda1.dev/35/463d75796122db147859fdd9fc744bcd/chxf _6_.jpg','https://p.sda1.dev/35/5b2c5d0aaa5b3a84bf1e14c1aec65f04/chxf _7_.jpg','https://p.sda1.dev/35/d2ac5dcb0d6f4acc21a38f82a19a6b88/chxf _8_.jpg','https://p.sda1.dev/35/fa523a34d94653a06d4037288a8151c6/chxf _9_.jpg','https://p.sda1.dev/35/2ba4923dd835759f1985ea0e5a1513d9/chxf _10_.jpg','https://p.sda1.dev/35/83d9e2edb6a10ddf5861414a1ec0d053/chxf _11_.jpg','https://p.sda1.dev/35/d11db7c3a43b65506e00c5747926b09c/chxf _12_.jpg'],
        downloads: []
      },
      {
        id: 'dy_ysyn', name: '院线电影《一生有你2019》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_ys/1791807444997_ysyn.jpg',
        role: '饰 蕾蕾', platform: '院线 / 爱奇艺 / 优酷 / 腾讯视频 / 芒果TV', episodes: '电影长片',
        year: '2019', synopsis: '主演: 徐娇 / 谢彬彬 / 晏紫东 / 黄婷婷 / 吕绍聪 / 金志文 / 曾黎 / 保剑锋 / 卢庚戌 / 缪杰 / 潘斌龙 / 易小星\n2019.11.29 院线上映\n2020.01.01 流媒体平台上线播出',
        fullVideo: [{ label: '爱奇艺', type: 'link', url: 'https://www.iqiyi.com/v_19rrfbv8p4.html' },
          { label: '优酷视频', type: 'link', url: 'https://v.youku.com/v_show/id_XNDQ4ODc0MzczNg==.html' },
          { label: '腾讯视频', type: 'link', url: 'https://v.qq.com/x/cover/fq4h1jihnp01xqp/f0033p6lyfg.html' },
          { label: '芒果TV', type: 'link', url: 'https://www.mgtv.com/b/297950/15363144.html' }],
        behindScenes: [{ label: '《一生有你2019》独家纪录片', type: 'link', url: 'https://www.iqiyi.com/v_19ruzsp85w.html' }],
        stills: ['','','','',''],
        downloads: []
      },
      {
        id: 'dy_jnp', name: '微电影《纪念品》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_ys/1791807442183_jnp.jpg',
        role: '饰 婷婷', platform: '腾讯视频', episodes: '单片',
        year: '2016', synopsis: '2016.01.18 腾讯视频上线播出',
        fullVideo: [{ label: '腾讯视频', type: 'link', url: 'https://v.qq.com/x/cover/ctrhckipuiyxv2r.html' }],
        behindScenes: [{ label: '《纪念品Soulvenir》访谈 黄婷婷 冯薪朵 篇', type: 'link', url: 'https://www.bilibili.com/video/BV1ts411R7jp' },
          { label: '《纪念品Soulvenir》NG花絮及删减片段', type: 'link', url: 'https://www.bilibili.com/video/BV1Ps411Q7KB' }],
        stills: [],
        downloads: []
      }
    ]},
    { title: '未播出', items: [
      {
        id: 'wb_zyl', name: '《折月亮》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_ys/1791807453984_zyl.jpg',
        role: '饰 夏从声', platform: '待定', episodes: '未播出',
        year: ' ', synopsis: ' ',
        fullVideo: [],
        behindScenes: [],
        stills: [],
        downloads: []
      },
      {
        id: 'wb_xyq', name: '《小夜曲》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_ys/1791807446121_xyq.jpg',
        role: '饰 蔚蓝', platform: '待定', episodes: '未播出',
        year: ' ', synopsis: ' ',
        fullVideo: [],
        behindScenes: [],
        stills: [],
        downloads: []
      },
      {
        id: 'wb_qadhz', name: '《亲爱的孩子》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_ys/1791807451183_qadhz.jpg',
        role: '饰 青年黄玄凤', platform: '待定', episodes: '未播出',
        year: ' ', synopsis: ' ',
        fullVideo: [],
        behindScenes: [{ label: '《亲爱的孩子》杀青特辑', type: 'link', url: 'https://v.qq.com/x/cover/8x3y6memv7oj3jr/f0029tdqdpi.html' }],
        stills: [],
        downloads: []
      },
      {
        id: 'wb_dbzqs', name: '《大鼻子情圣》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_ys/1791807445008_dbzqs.jpg',
        role: '饰 孔以然', platform: '待定', episodes: '未播出',
        year: ' ', synopsis: ' ',
        fullVideo: [],
        behindScenes: [{ label: '《大鼻子情圣》泄露版预告', type: 'link', url: '' }],
        stills: [],
        downloads: []
      }
    ]}
  ]
};

/* ========== 综艺 ========== */
const varietyData = {
  groups: [
    { title: '常驻', items: [
      {
        id: 'zy_wxcyb', name: '无限超越班 第四季', poster: '',
        platform: '优酷视频 / 浙江卫视', year: '2026', episodes: '全13期',
        cast: '黄婷婷 / 群星',
        synopsis: '出演期数：全季',
        fullVideo: [{ label: '优酷 - 全集', type: 'link', url: 'https://v.youku.com/v_show/id_XNjUxOTc3NzY0NA==.html' }],
        behindScenes: [],
        downloads: [{ label: '夸克 - 4K 全CUT（含衍生及花絮）', url: 'https://pan.quark.cn/s/85d2ef7e405d', code: 'ySzw' }]
      },
      {
        id: 'zy_ljsh', name: '邻家诗话 第一季', poster: '',
        platform: '腾讯视频 / 河北卫视', year: '2019', episodes: '全12期',
        cast: '黄婷婷 / 群星',
        synopsis: '出演期数：2、5、9',
        fullVideo: [{ label: '腾讯视频 - E02', type: 'link', url: 'https://v.qq.com/x/cover/mzc00200729elaq/z0031rbsqjr.html' },
          { label: '腾讯视频 - E05', type: 'link', url: 'https://v.qq.com/x/cover/mzc00200729elaq/b0031voae2u.html' },
          { label: '腾讯视频 - E09', type: 'link', url: 'https://v.qq.com/x/cover/mzc00200729elaq/j0031hggxej.html' }],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'zy_xmxy', name: 'SNHello星梦学院 第二季', poster: '',
        platform: '腾讯视频', year: '2018', episodes: '全12期',
        cast: '黄婷婷 / 群星',
        synopsis: '出演期数：1、2、6、8',
        fullVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'zy_hcql', name: '嗨！唱起来', poster: '',
        platform: '江苏卫视', year: '2018', episodes: '全12期',
        cast: '黄婷婷 / 群星',
        synopsis: '出演期数：3、5、6、8、9、10、12',
        fullVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'zy_xcdd', name: '鲜厨当道', poster: '',
        platform: 'PPTV / 江苏卫视', year: '2017', episodes: '全12期',
        cast: '黄婷婷 / 群星',
        synopsis: '出演期数：全季',
        fullVideo: [{ label: 'B站 - 第一期 CUT', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1Xx411m78x', url: 'https://www.bilibili.com/video/BV1Xx411m78x' }],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'zy_jsqj', name: '极速前进 第三季', poster: '',
        platform: '搜狐视频 / 深圳卫视', year: '2016', episodes: '全10期',
        cast: '黄婷婷 / 群星',
        synopsis: '出演期数：1~5',
        fullVideo: [{ label: 'B站 - 单人CUT', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1Gjz1B2Ext', url: 'https://www.bilibili.com/video/BV1Gjz1B2Ext' }],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'zy_gm', name: '国民美少女', poster: '',
        platform: '优酷视频 / 东方卫视', year: '2016', episodes: '全12期',
        cast: '黄婷婷 / 群星',
        synopsis: '出演期数：全季',
        fullVideo: [{ label: 'B站 - 单人CUT', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1bs411z7iZ', url: 'https://www.bilibili.com/video/BV1bs411z7iZ' }],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'zy_jjdns', name: '进击的女生', poster: '',
        platform: '腾讯视频', year: '2015', episodes: '全6期',
        cast: '黄婷婷 / 群星',
        synopsis: '出演期数：1~4',
        fullVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'zy_xmxy_2', name: 'SNHello星萌学院 第一季', poster: '',
        platform: '腾讯视频', year: '2014', episodes: '全12期',
        cast: '黄婷婷 / 群星',
        synopsis: '出演期数：全季',
        fullVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'zy_shxy', name: '上海学院48', poster: '',
        platform: '腾讯视频', year: '2014', episodes: '全72期',
        cast: '黄婷婷 / 群星',
        synopsis: '出演期数：23、25、47、51、53、55、57、59',
        fullVideo: [],
        behindScenes: [],
        downloads: []
      },
    ]},
    { title: '飞行', items: [
      {
        id: 'zy_2026', name: '2026年参与综艺合集', poster: '',
        platform: 'OTT', year: '2026', episodes: '单期',
        synopsis: '',
        fullVideo: [{ label: '20260912 CCTV3 《远山之约 蜀山篇》 第六站 广元', type: 'link', url: 'https://tv.cctv.com/2026/09/12/VIDEIV4yJBEzugqheAG2al0P260912.shtml' },
          { label: '260509 我家那小子2026-日记', type: 'link', url: 'https://weibo.com/tv/show/1034:5296803667705887' },
          { label: '260505 我家那小子2026-加更', type: 'link', url: 'https://weibo.com/tv/show/1034:5296007928545339' },
          { label: '260503 我家那小子2026-正片', type: 'link', url: 'https://weibo.com/tv/show/1034:5295965486383204' },
        ],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'zy_2025', name: '2025年参与综艺合集', poster: '',
        platform: 'OTT', year: '2025', episodes: '单期',
        synopsis: '',
        fullVideo: [{ label: '20251211 CCTV8 《剧说很好看》即刻上场剧组', type: 'link', url: 'https://tv.cctv.cn/2025/12/12/VIDEhEMw7HpKX5Qf3yFWTYVH251212.shtml' },
          { label: '20250705 一见你就笑 EP12-彩蛋', type: 'link', url: 'https://v.qq.com/x/cover/mzc00200kjge0sk/z4101nxt7f7.html' },
          { label: '20250703 一见你就笑 EP12-笑笑百宝箱', type: 'link', url: 'https://v.qq.com/x/cover/mzc00200kjge0sk/j4101j01uor.html' },
          { label: '20250702 一见你就笑 EP12-正片', type: 'link', url: 'https://v.qq.com/x/cover/mzc00200kjge0sk/t41016747ey.html' },
        ],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'zy_2022', name: '2022年参与综艺合集', poster: '',
        platform: 'OTT', year: '2022', episodes: '单期',
        synopsis: '',
        fullVideo: [{ label: '20221223 CCTV11 梨园闯关我挂帅', type: 'link', url: 'https://www.bilibili.com/video/BV1fP4y1f7Sp' },
          { label: '20220902 CCTV11 梨园闯关我挂帅', type: 'link', url: 'https://www.bilibili.com/video/BV1fG4y1J7C5' },
        ],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'zy_2021', name: '2021年参与综艺合集', poster: '',
        platform: 'OTT', year: '2021', episodes: '单期',
        synopsis: '',
        fullVideo: [{ label: '20211201 BAZAAR《内行才知道》', type: 'link', url: 'https://bilibili.com/video/BV1CR4y1s75r' },
          { label: '20210328 浙江卫视 万里走单骑 S01E09', type: 'link', url: 'https://v.qq.com/x/cover/mzc00200jdpdh25/h0036lqbzxu.html' },
          { label: '20210301 益起追光吧 S02E06', type: 'link', url: 'https://v.youku.com/v_show/id_XNTExMTIzMDI5Mg==.html' },
          { label: '20210227 追光吧！哥哥 E12', type: 'link', url: 'https://v.youku.com/v_show/id_XNDk4NDYwNDU0MA==.html' },
          { label: '20210220 追光吧！哥哥 E11', type: 'link', url: 'https://v.youku.com/v_show/id_XNDk4NDU5MTI1Mg==.html' },
        ],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'zy_2020', name: '2020年参与综艺合集', poster: '',
        platform: 'OTT', year: '2020', episodes: '单期',
        synopsis: '',
        fullVideo: [{ label: '20211201 BAZAAR《内行才知道》', type: 'link', url: 'https://bilibili.com/video/BV1CR4y1s75r' },
          { label: '20210328 浙江卫视 万里走单骑 S01E09', type: 'link', url: 'https://v.qq.com/x/cover/mzc00200jdpdh25/h0036lqbzxu.html' },
          { label: '20210301 益起追光吧 S02E06', type: 'link', url: 'https://v.youku.com/v_show/id_XNTExMTIzMDI5Mg==.html' },
          { label: '20210227 追光吧！哥哥 E12', type: 'link', url: 'https://v.youku.com/v_show/id_XNDk4NDYwNDU0MA==.html' },
          { label: '20210220 追光吧！哥哥 E11', type: 'link', url: 'https://v.youku.com/v_show/id_XNDk4NDU5MTI1Mg==.html' },
        ],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'zy_2019', name: '2019年参与综艺合集', poster: '',
        platform: 'OTT', year: '2019', episodes: '单期',
        synopsis: '',
        fullVideo: [{ label: '20211201 BAZAAR《内行才知道》', type: 'link', url: 'https://bilibili.com/video/BV1CR4y1s75r' },
          { label: '20210328 浙江卫视 万里走单骑 S01E09', type: 'link', url: 'https://v.qq.com/x/cover/mzc00200jdpdh25/h0036lqbzxu.html' },
          { label: '20210301 益起追光吧 S02E06', type: 'link', url: 'https://v.youku.com/v_show/id_XNTExMTIzMDI5Mg==.html' },
          { label: '20210227 追光吧！哥哥 E12', type: 'link', url: 'https://v.youku.com/v_show/id_XNDk4NDYwNDU0MA==.html' },
          { label: '20210220 追光吧！哥哥 E11', type: 'link', url: 'https://v.youku.com/v_show/id_XNDk4NDU5MTI1Mg==.html' },
        ],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'zy_2018', name: '2018年参与综艺合集', poster: '',
        platform: 'OTT', year: '2018', episodes: '单期',
        synopsis: '',
        fullVideo: [{ label: '20211201 BAZAAR《内行才知道》', type: 'link', url: 'https://bilibili.com/video/BV1CR4y1s75r' },
          { label: '20210328 浙江卫视 万里走单骑 S01E09', type: 'link', url: 'https://v.qq.com/x/cover/mzc00200jdpdh25/h0036lqbzxu.html' },
          { label: '20210301 益起追光吧 S02E06', type: 'link', url: 'https://v.youku.com/v_show/id_XNTExMTIzMDI5Mg==.html' },
          { label: '20210227 追光吧！哥哥 E12', type: 'link', url: 'https://v.youku.com/v_show/id_XNDk4NDYwNDU0MA==.html' },
          { label: '20210220 追光吧！哥哥 E11', type: 'link', url: 'https://v.youku.com/v_show/id_XNDk4NDU5MTI1Mg==.html' },
        ],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'zy_2017', name: '2017年参与综艺合集', poster: '',
        platform: 'OTT', year: '2017', episodes: '单期',
        synopsis: '',
        fullVideo: [{ label: '20211201 BAZAAR《内行才知道》', type: 'link', url: 'https://bilibili.com/video/BV1CR4y1s75r' },
          { label: '20210328 浙江卫视 万里走单骑 S01E09', type: 'link', url: 'https://v.qq.com/x/cover/mzc00200jdpdh25/h0036lqbzxu.html' },
          { label: '20210301 益起追光吧 S02E06', type: 'link', url: 'https://v.youku.com/v_show/id_XNTExMTIzMDI5Mg==.html' },
          { label: '20210227 追光吧！哥哥 E12', type: 'link', url: 'https://v.youku.com/v_show/id_XNDk4NDYwNDU0MA==.html' },
          { label: '20210220 追光吧！哥哥 E11', type: 'link', url: 'https://v.youku.com/v_show/id_XNDk4NDU5MTI1Mg==.html' },
        ],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'zy_2016', name: '2016年参与综艺合集', poster: '',
        platform: 'OTT', year: '2016', episodes: '单期',
        synopsis: '',
        fullVideo: [{ label: '20211201 BAZAAR《内行才知道》', type: 'link', url: 'https://bilibili.com/video/BV1CR4y1s75r' },
          { label: '20210328 浙江卫视 万里走单骑 S01E09', type: 'link', url: 'https://v.qq.com/x/cover/mzc00200jdpdh25/h0036lqbzxu.html' },
          { label: '20210301 益起追光吧 S02E06', type: 'link', url: 'https://v.youku.com/v_show/id_XNTExMTIzMDI5Mg==.html' },
          { label: '20210227 追光吧！哥哥 E12', type: 'link', url: 'https://v.youku.com/v_show/id_XNDk4NDYwNDU0MA==.html' },
          { label: '20210220 追光吧！哥哥 E11', type: 'link', url: 'https://v.youku.com/v_show/id_XNDk4NDU5MTI1Mg==.html' },
        ],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'zy_2015', name: '2015年参与综艺合集', poster: '',
        platform: 'OTT', year: '2015', episodes: '单期',
        synopsis: '',
        fullVideo: [{ label: '20211201 BAZAAR《内行才知道》', type: 'link', url: 'https://bilibili.com/video/BV1CR4y1s75r' },
          { label: '20210328 浙江卫视 万里走单骑 S01E09', type: 'link', url: 'https://v.qq.com/x/cover/mzc00200jdpdh25/h0036lqbzxu.html' },
          { label: '20210301 益起追光吧 S02E06', type: 'link', url: 'https://v.youku.com/v_show/id_XNTExMTIzMDI5Mg==.html' },
          { label: '20210227 追光吧！哥哥 E12', type: 'link', url: 'https://v.youku.com/v_show/id_XNDk4NDYwNDU0MA==.html' },
          { label: '20210220 追光吧！哥哥 E11', type: 'link', url: 'https://v.youku.com/v_show/id_XNDk4NDU5MTI1Mg==.html' },
        ],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'zy_2014', name: '2014年参与综艺合集', poster: '',
        platform: 'OTT', year: '2014', episodes: '单期',
        synopsis: '',
        fullVideo: [{ label: '20211201 BAZAAR《内行才知道》', type: 'link', url: 'https://bilibili.com/video/BV1CR4y1s75r' },
          { label: '20210328 浙江卫视 万里走单骑 S01E09', type: 'link', url: 'https://v.qq.com/x/cover/mzc00200jdpdh25/h0036lqbzxu.html' },
          { label: '20210301 益起追光吧 S02E06', type: 'link', url: 'https://v.youku.com/v_show/id_XNTExMTIzMDI5Mg==.html' },
          { label: '20210227 追光吧！哥哥 E12', type: 'link', url: 'https://v.youku.com/v_show/id_XNDk4NDYwNDU0MA==.html' },
          { label: '20210220 追光吧！哥哥 E11', type: 'link', url: 'https://v.youku.com/v_show/id_XNDk4NDU5MTI1Mg==.html' },
        ],
        behindScenes: [],
        downloads: []
      }
    ]}
  ]
};

/* ========== MV ========== */
const mvData = {
  groups: [
    { title: '单人', items: [
      {
        id: 'mv_am', name: '黄婷婷《由我挑战· ALL MINE》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861176858_am.jpg',
        artist: '黄婷婷', date: '2022.09.25', album: '',
        synopsis: '舞蹈视频',
        fullVideo: [{ label: '微博 - 完整版', type: 'link', url: 'https://weibo.com/tv/show/1034:4817630834655371' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_wclq', name: '黄婷婷《未曾离去》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861182352_wclq.jpg',
        artist: '黄婷婷', date: '2020.08.14', album: '',
        synopsis: '电影《翠狐戏夫》插曲特别推广版',
        fullVideo: [{ label: '微博 - 完整版', type: 'link', url: 'https://weibo.com/tv/show/1034:4537760292470799' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_wnys', name: '黄婷婷 / 金志文《唯你一生》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861184472_wnys.jpg',
        artist: '黄婷婷 / 金志文', date: '2019.12.03', album: '',
        synopsis: '电影《一生有你2019》结爱曲',
        fullVideo: [{ label: 'B站 - 完整版', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1DGHx61EAB', url: 'https://www.bilibili.com/video/BV1DGHx61EAB' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_fy', name: '黄婷婷《FEELING YOU》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861177780_fy.jpg',
        artist: '黄婷婷', date: '2018.09.08', album: '',
        synopsis: '2018 生日特别 PV',
        fullVideo: [{ label: 'B站 - 完整版', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1tW411o7NP', url: 'https://www.bilibili.com/video/BV1tW411o7NP' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_hyns', name: '黄婷婷《黑夜女神》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861181442_hyns.jpg',
        artist: '黄婷婷', date: '2017.09.11', album: '《黑夜女神》',
        synopsis: 'SOLO单曲《黑夜女神》PV',
        fullVideo: [{ label: 'B站 - 完整版', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1Ex41147FM', url: 'https://www.bilibili.com/video/BV1Ex41147FM' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_xgsy', name: '黄婷婷《星光闪耀》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861177848_xgsy.jpg',
        artist: '黄婷婷', date: '2017.07.06', album: '《逆袭之星途璀璨》原声大碟',
        synopsis: '《逆袭之星途璀璨》梦想曲',
        fullVideo: [{ label: 'B站 - 完整版', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1Wx411z7Cw', url: 'https://www.bilibili.com/video/BV1Wx411z7Cw' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      }
    ]},
    { title: '特别出演', items: [
      {
        id: 'mv_cq', name: '薛之谦《彩券》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861172873_cq.jpg',
        artist: '薛之谦', date: '2021.03.03', album: '《天外来物》',
        synopsis: '友情出演',
        fullVideo: [{ label: 'B站 - 完整版', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV18h411k7xZ', url: 'https://www.bilibili.com/video/BV18h411k7xZ' },
          { label: 'B站 - 个人CUT', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1jX4y1V79A', url: 'https://www.bilibili.com/video/BV1jX4y1V79A' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      }
    ]},
    { title: '多人', items: [
      {
        id: 'mv_jynh', name: 'SNH48《加油女孩》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861182008_jynh.jpg',
        artist: 'SNH48', date: '2019.04.18', album: '',
        synopsis: '第二届偶像运动会主题曲《加油女孩》现场PV',
        fullVideo: [{ label: 'B站 - 完整版', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1mb41157YD', url: 'https://www.bilibili.com/video/BV1mb41157YD' },],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_hydt', name: 'SNH48《红运当头》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861182376_hydt.jpg',
        artist: 'SNH48', date: '2018.12.30', album: '',
        synopsis: 'SNH48 X 湾仔码头《红运当头》新年单曲MV',
        fullVideo: [{ label: 'B站 - 完整版+个人CUT', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1yt411z73J', url: 'https://www.bilibili.com/video/BV1yt411z73J' },],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_gzgj', name: 'SNH48《光之轨迹》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861181119_gzgj.jpg',
        artist: 'SNH48 Team NII', date: '2018.11.26', album: '',
        synopsis: 'SNH48 GROUP第四届金曲大赏十六人曲TOP1《光之轨迹》MV',
        fullVideo: [{ label: 'B站 - 完整版', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1Jt41197nG', url: 'https://www.bilibili.com/video/BV1Jt41197nG' },
          { label: 'B站 - HTT FOCUS 【尊享版】', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1Kt411R7gU', url: 'https://www.bilibili.com/video/BV1Kt411R7gU' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_wlyl', name: 'Various Artists《未来已来》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861179488_wlyl.jpg',
        artist: 'Various Artists', date: '2018.11.16', album: '',
        synopsis: '新青年唱响新时代 《未来已来》MV',
        fullVideo: [{ label: 'B站 - 个人CUT', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1ft41127So', url: 'https://www.bilibili.com/video/BV1ft41127So' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_mndsp', name: 'SNH48《魔女的诗篇》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861182807_mndsp.jpg',
        artist: 'SNH48', date: '2018.10.15', album: '《魔女的诗篇》',
        synopsis: 'SNH48 GROUP第五届偶像年度人气总决选TOP16汇报单曲《魔女的诗篇》MV',
        fullVideo: [{ label: 'B站 - 完整版', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1Dt411f7KG', url: 'https://www.bilibili.com/video/BV1Dt411f7KG' },
          { label: 'B站 - 黄婷婷 Ver.（尊享版）', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1kt411R7J3', url: 'https://www.bilibili.com/video/BV1kt411R7J3' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_rqdsm', name: 'SNH48《热情的沙漠》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861177930_rqdsm.jpg',
        artist: 'SNH48', date: '2018.07.24', album: '',
        synopsis: '湾仔码头广告MV',
        fullVideo: [{ label: 'B站 - 完整版', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1Cs411P7ra', url: 'https://www.bilibili.com/video/BV1Cs411P7ra' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_hyl', name: 'SNH48 / 祖海《好运来》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861184730_hyl.jpg',
        artist: 'SNH48 / 祖海', date: '2017.12.28', album: '',
        synopsis: '新年贺岁单曲《好运来》MV',
        fullVideo: [{ label: 'B站 - 完整版', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1NW411b7Jg', url: 'https://www.bilibili.com/video/BV1NW411b7Jg' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_nbls', name: 'SNH48《那不勒斯的黎明》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861182110_nbls.jpg',
        artist: 'SNH48', date: '2017.11.01', album: '《那不勒斯的黎明》',
        synopsis: 'SNH48 GROUP第四届偶像年度人气总决选TOP16汇报单曲《那不勒斯的黎明》MV',
        fullVideo: [{ label: 'B站 - 完整版', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1qx411E7AQ', url: 'https://www.bilibili.com/video/BV1qx411E7AQ' },
          { label: 'B站 - 个人CUT', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1Jx411E7WJ', url: 'https://www.bilibili.com/video/BV1Jx411E7WJ' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_gczg', name: 'SNH48《歌唱祖国》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861179528_gczg.jpg',
        artist: 'SNH48', date: '2017.09.30', album: '',
        synopsis: '为新中国68华诞献礼',
        fullVideo: [{ label: 'B站 - 个人CUT', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1Sx411g7f9', url: 'https://www.bilibili.com/video/BV1Sx411g7f9' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_wxax', name: 'SNH48《我心翱翔》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791872507825_wxax.jpg',
        artist: 'SNH48', date: '2017.09.30', album: '',
        synopsis: 'SNH48 GROUP第四届偶像年度人气总决选主题曲《我心翱翔》MV',
        fullVideo: [{ label: 'B站 - 完整版', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1Cx411p7RM', url: 'https://www.bilibili.com/video/BV1Cx411p7RM' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_xrnmc', name: 'SNH48《夏日柠檬船》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861185106_xrnmc.jpg',
        artist: 'SNH48', date: '2017.05.30', album: '《夏日柠檬船》',
        synopsis: 'SNH48第16张EP《夏日柠檬船》MV',
        fullVideo: [{ label: 'B站 - 个人CUT', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1jx411e7nx', url: 'https://www.bilibili.com/video/BV1jx411e7nx' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_bcdwl', name: 'SNH48《彼此的未来》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861180862_bcdwl.jpg',
        artist: 'SNH48', date: '2017.03.10', album: '《彼此的未来》',
        synopsis: 'SNH48《彼此的未来》MV',
        fullVideo: [{ label: 'B站 - 个人CUT', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1px411C7En', url: 'https://www.bilibili.com/video/BV1px411C7En' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_hh', name: 'SNH48《回合》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861174393_hh.jpg',
        artist: '黄婷婷 / 鞠婧祎等', date: '2016.11.03', album: '',
        synopsis: '梦幻西游主题曲',
        fullVideo: [{ label: 'B站 - 个人CUT', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1Us411s7Q2', url: 'https://www.bilibili.com/video/BV1Us411s7Q2' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_gzpf', name: 'SNH48《公主披风》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861181195_gzpf.jpg',
        artist: 'SNH48', date: '2016.10.13', album: '《公主披风》',
        synopsis: 'SNH48第三届偶像年度人气总决选TOP16汇报单曲《公主披风》MV',
        fullVideo: [{ label: 'B站 - 个人CUT', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1ss41147kv', url: 'https://www.bilibili.com/video/BV1ss41147kv' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_bg', name: 'SNH48《BINGO！》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861177225_bg.jpg',
        artist: 'SNH48 Team NII', date: '2016.08.24', album: '',
        synopsis: 'SNH48第二届年度金曲大赏Top2歌曲《BINGO！》MV',
        fullVideo: [{ label: 'B站 - 个人CUT', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1vs411k7EN', url: 'https://www.bilibili.com/video/BV1vs411k7EN' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_ybjp', name: 'SNH48《摇摆节拍》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861184765_ybjp.jpg',
        artist: 'SNH48 Team NII', date: '2016.08.18', album: '',
        synopsis: 'SNH48 铃木 SUZUKI合作MV',
        fullVideo: [{ label: 'B站 - 完整版', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1ps411k76S', url: 'https://www.bilibili.com/video/BV1ps411k76S' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_mxd', name: 'SNH48《梦想岛》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861180518_mxd.jpg',
        artist: 'SNH48', date: '2016.05.26', album: '《梦想岛》',
        synopsis: 'SNH48第三届年度总决选专属投票EP《梦想岛》MV',
        fullVideo: [{ label: 'B站 - 个人CUT', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1vs411i7Za', url: 'https://www.bilibili.com/video/BV1vs411i7Za' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_ydl', name: 'SNH48《源动力》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861180569_ydl.jpg',
        artist: 'SNH48', date: '2016.03.31', album: '《源动力》',
        synopsis: 'SNH48首张原创EP主打曲《源动力》MV',
        fullVideo: [{ label: 'B站 - 完整版', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1ts411z7j3', url: 'https://www.bilibili.com/video/BV1ts411z7j3' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_yd', name: '黄婷婷《夜蝶》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861179804_yd.jpg',
        artist: '黄婷婷等', date: '2016.03.17', album: '《夜蝶》',
        synopsis: 'SNH48第二届年度金曲大赏演唱会冠军歌曲《夜蝶》MV',
        fullVideo: [{ label: 'B站 - 完整版', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1Zx411y7K2', url: 'https://www.bilibili.com/video/BV1Zx411y7K2' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_wsjzy', name: 'SNH48《万圣节之夜》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861177936_wsjzy.jpg',
        artist: 'SNH48', date: '2015.10.13', album: '《万圣节之夜》',
        synopsis: 'SNH48第二届偶像年度人气总决选TOP16汇报单曲《万圣节之夜》MV',
        fullVideo: [{ label: 'B站 - 完整版', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1Sv41167pL', url: 'https://www.bilibili.com/video/BV1Sv41167pL' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_sfbaf', name: 'SNH48《释FUN不安分》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861177821_sfbaf.jpg',
        artist: 'SNH48', date: '2015.09.08', album: '',
        synopsis: 'SNH48上古世纪原创主题曲《释FUN不安分》MV',
        fullVideo: [{ label: 'B站 - 完整版', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1Ks411U7Lg', url: 'https://www.bilibili.com/video/BV1Ks411U7Lg' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_mxgf', name: 'SNH48《梦想高飞》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791872504001_mxgf.jpg',
        artist: 'SNH48', date: '2015.08.13', album: '',
        synopsis: 'SNH48 GROUP第二届偶像年度人气总决选主题曲《梦想高飞》MV',
        fullVideo: [{ label: 'B站 - 完整版', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1ex411m7Rm', url: 'https://www.bilibili.com/video/BV1ex411m7Rm' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_mwyfq', name: 'SNH48《马尾与发圈》2015版', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861175916_mwyfq.jpg',
        artist: 'SNH48', date: '2015.06.30', album: '',
        synopsis: '塞班岛拍摄2015夏日主题泳装MV',
        fullVideo: [{ label: 'B站 - 完整版', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1Kt411i7Vn', url: 'https://www.bilibili.com/video/BV1Kt411i7Vn' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_bpkll', name: 'SNH48《奔跑卡路里》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861179390_bpkll.jpg',
        artist: 'SNH48', date: '2015.06.16', album: '',
        synopsis: '',
        fullVideo: [{ label: 'B站 - 完整版', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV11x411m7qo', url: 'https://www.bilibili.com/video/BV11x411m7qo' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_sxhsy', name: 'SNH48《盛夏好声音》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861177974_sxhsy.jpg',
        artist: 'SNH48', date: '2015.05.17', album: '《盛夏好声音》',
        synopsis: '',
        fullVideo: [{ label: 'B站 - 完整版', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1J398YxEFx', url: 'https://www.bilibili.com/video/BV1J398YxEFx' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_ymm', name: 'SNH48《羊咩咩》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861186020_ymm.jpg',
        artist: 'SNH48', date: '2015.03.05', album: '《羊咩咩》',
        synopsis: '',
        fullVideo: [{ label: 'B站 - 完整版', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV18a4y1J7JC', url: 'https://www.bilibili.com/video/BV18a4y1J7JC' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_sd', name: 'SNH48《START DASH》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861183719_sd.jpg',
        artist: '黄婷婷 / 易嘉爱等', date: '2014.10.24', album: '',
        synopsis: 'SNH48成员挑战START DASH',
        fullVideo: [{ label: 'B站 - 完整版', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1bx411P7dD', url: 'https://www.bilibili.com/video/BV1bx411P7dD' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_adyy', name: 'SNH48《爱的意义》啦啦操版', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861176661_adyy.jpg',
        artist: 'SNH48 Team NII', date: '2014.09.23', album: '',
        synopsis: '',
        fullVideo: [{ label: 'B站 - 完整版', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1rx411K7UJ', url: 'https://www.bilibili.com/video/BV1rx411K7UJ' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      },
      {
        id: 'mv_zqpd', name: 'SNH48《足球派对》', poster: 'https://cloudflare-imgbed-94l.pages.dev/file/video_mv/1791861183915_zqpd.jpg',
        artist: 'SNH48 Team NII', date: '2014.06.09', album: '',
        synopsis: '',
        fullVideo: [{ label: 'B站 - 完整版', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1Lx411T7ow', url: 'https://www.bilibili.com/video/BV1Lx411T7ow' }],
        danceVideo: [],
        behindScenes: [],
        downloads: []
      }
    ]}
  ]
};

/* ========== SNS ========== */
const snsData = {
  groups: [
    { title: '微博', items: [
      {
        id: 'sns_wb1', name: '@黄婷婷 微博视频汇总', poster: PIC(01),
        date: 'from 2022', synopsis: '',
        videos: [],
        downloads: [{ label: '百度网盘', url: 'https://pan.baidu.com/', code: '1234' }]
      },
      {
        id: 'sns_wb2', name: '@SNH48-黄婷婷 微博视频汇总', poster: PIC(02),
        date: 'from 2013', synopsis: '',
        videos: [],
        downloads: [{ label: '百度网盘', url: 'https://pan.baidu.com/', code: '1234' }]
      },
      {
        id: 'sns_wb3', name: '@黄婷婷HTT工作室 微博视频汇总', poster: PIC(03),
        date: 'from 2020', synopsis: '',
        videos: [],
        downloads: [{ label: '百度网盘', url: 'https://pan.baidu.com/', code: '1234' }]
      }
    ]},
    { title: 'B站', items: [
      {
        id: 'sns_bi', name: '@黄婷婷TiTi B站视频汇总', poster: PIC(04),
        date: '2026.10.05', synopsis: '',
        videos: [{ label: 'B站', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1DGHx61EAB', url: 'https://www.bilibili.com/video/BV1DGHx61EAB' }],
        downloads: [{ label: '百度网盘', url: 'https://pan.baidu.com/', code: '1234' }]
      }
    ]},
    { title: '小红书', items: [
      {
        id: 'sns_xhs1', name: '@黄婷婷 小红书视频汇总', poster: PIC(05),
        date: '2026.10.05', synopsis: '',
        videos: [{ label: '', type: 'link', url: '' }],
        downloads: [{ label: '百度网盘', url: 'https://pan.baidu.com/', code: '1234' }]
      },
      {
        id: 'sns_xhs2', name: '@515151 小红书视频汇总', poster: PIC(06),
        date: '2026.10.05', synopsis: '',
        videos: [{ label: '', type: 'link', url: '' }],
        downloads: [{ label: '百度网盘', url: 'https://pan.baidu.com/', code: '1234' }]
      },
    ]},
    { title: '抖音', items: [
      {
        id: 'sns_dy1', name: '@黄婷婷 抖音视频汇总', poster: PIC(07),
        date: '2026.10.05', synopsis: '',
        videos: [{ label: '', type: 'link', url: '' }],
        downloads: [{ label: '百度网盘', url: 'https://pan.baidu.com/', code: '1234' }]
      },
      {
        id: 'sns_dy2', name: '@壹π即合 抖音视频汇总', poster: PIC(08),
        date: '2026.10.05', synopsis: '',
        videos: [{ label: '', type: 'link', url: '' }],
        downloads: [{ label: '百度网盘', url: 'https://pan.baidu.com/', code: '1234' }]
      }
    ]}
  ]
};

/* ========== 直播 ========== */
const liveData = {
  groups: [
    { title: '直播', items: [
      {
        id: 'lv1', name: '20260802 聊会儿天', poster: PIC(52),
        date: '2026.08.02', synopsis: '直播回放。',
        videos: [
          { label: 'B站回放', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1RX3R6yE4g', url: 'https://www.bilibili.com/video/BV1RX3R6yE4g' }
        ],
        downloads: []
      }
    ]}
  ]
};

/* ========== 公演 ========== */
const stageData = {
  groups: [
    { title: '公演', items: [
      {
        id: 'st1', name: '20191013 时之卷 单人CUT', poster: PIC(53),
        date: '2019.10.13', team: 'Team NII', synopsis: '时之卷公演单人 CUT。',
        fullVideo: [{ label: 'B站 - 单人CUT', type: 'iframe', embed: 'https://player.bilibili.com/player.html?aid=71132173', url: 'https://www.bilibili.com/video/av71132173' }],
        downloads: []
      }
    ]}
  ]
};

/* ========== 活动 ========== */
const eventData = {
  groups: [
    { title: '活动', items: [
      {
        id: 'event_210226', name: '20210226 JSTV 元宵荔枝灯会', poster: 'https://990088.com/',
        date: '2021.02.26', platform: '江苏卫视', synopsis: '表演节目：小品《礼外理》\n演员：黄婷婷 / 吴彼 / 张小婉',
        videos: [{ label: '微博', type: 'link', url: 'https://weibo.com/tv/show/1034:4608986096533559' }],
        downloads: [{ label: '夸克网盘', mediaInfo: '1080i | TS | 869MB', url: 'https://pan.baidu.com/', code: '0000' }]
      },
      {
        id: 'event_201001', name: '20201001 唱响新时代 甘肃·金昌', poster: 'https://990088.com/',
        date: '2020.10.01', platform: 'CCTV', synopsis: '20201001 CCTV3 首播，20201004 CCTV4K 播出\n表演节目：歌曲《未来已来》\n演唱：黄婷婷 / 符龙飞',
        videos: [{ label: 'B站', type: 'iframe', embed: 'https://player.bilibili.com/player.html?bvid=BV1uv411y7A8&page=3', url: 'https://www.bilibili.com/video/BV1uv411y7A8/?p=3' }],
        downloads: [{ label: '夸克网盘', mediaInfo: '4K50FPS | HDR | MKV | 551MB', url: 'https://pan.baidu.com/', code: '0000' }]
      }
    ]}
  ]
};

/* ========== 其他 ========== */
const otherVideoData = {
  groups: [
    { title: '总选', items: [
      {
        id: 'zx_190727', name: '20190727 第六届偶像年度人气总决选', poster: 'PIC(55)',
        date: '2019.07.27', synopsis: '地点：\n表演歌曲：\nSOLO《春日》\n多人《魔女的诗篇》',
        fullVideo: [{ label: 'B站', type: 'iframe',
          embed: 'https://player.bilibili.com/player.html?bvid=BV1qt411P7LX',
          url: 'https://www.bilibili.com/video/BV1qt411P7LX' }],
        downloads: []
      }
    ]},
    { title: '金曲大赏', items: [
      {
        id: 'jqds_180203', name: '20180202~03 第四届年度金曲大赏', poster: 'PIC(56)',
        date: '2018.02.02~03', synopsis: '2018.02.02 SNH48 FAMILY GROUP 暨 SNH48 出道五周年纪念演唱会\n地点：\n表演歌曲：\n\n2018.02.03 SNH48 GROUP 第四届年度金曲大赏\n地点：\n表演歌曲：',
        fullVideo: [{ label: 'B站', type: 'link', url: 'https://www.bilibili.com/' }],
        downloads: []
      }
    ]},
    { title: '演唱会', items: [
      {
        id: 'ych_180630', name: '20180630 总选预热演唱会 成都站', poster: 'PIC(56)',
        date: '2018.06.30', synopsis: '地点：成都世外桃源大剧院\n表演歌曲：Unit《曲终人散》',
        fullVideo: [{ label: 'B站', type: 'link', url: 'https://www.bilibili.com/' }],
        downloads: []
      }
    ]},
    { title: '活动', items: [
      {
        id: 'hd_180630', name: '20180630 总选预热演唱会 成都站', poster: 'PIC(56)',
        date: '2018.06.30', synopsis: '地点：成都世外桃源大剧院\n表演歌曲：Unit《曲终人散》',
        fullVideo: [{ label: 'B站', type: 'link', url: 'https://www.bilibili.com/' }],
        downloads: []
      }
    ]},
    { title: '纪录片', items: [
      {
        id: 'jlp_191117', name: '20191117 SNH48 TEAM NII六周年纪念短片', poster: 'PIC(56)',
        date: '2019.11.17', synopsis: '',
        fullVideo: [{ label: 'B站', type: 'link', url: 'https://www.bilibili.com/' }],
        downloads: []
      }
    ]}
  ]
};

/* ========== 音乐 ========== */
const musicAlbums = {
  'hjbj': { title: '好久不见', date: '2026.09.24', cover: 'https://p1.music.126.net/AsrYmNZdrL-gILzRRqQD0Q==/109951173967354346.jpg',
    tracks: [{ name: '01. 好久不见', artist: 'NAVE / 黄婷婷' }],
    platforms: [{ name: 'QQ音乐', url: 'https://y.qq.com/n/ryqq_v2/songDetail/0042p3Ta1iWZDl' },
      { name: '酷狗音乐', url: 'https://www.kugou.com/mixsong/fzhrmsf5.html' },
      { name: '网易云音乐', url: 'https://music.163.com/#/song?id=3438601645' },
      { name: '汽水音乐', url: 'https://qishui.douyin.com/s/iXbC28bG/' }] },
  'yt': { title: '雨天 (2026听见生长生日会现场)', date: '2026.09.20', cover: 'https://imgessl.kugou.com/uploadpic/softhead/480/20261005/20261005154442443619.jpg',
    tracks: [{ name: '01. 雨天 (2026听见生长生日会现场)', artist: '黄婷婷' }],
    platforms: [{ name: 'QQ音乐', url: 'https://y.qq.com/n/ryqq_v2/songDetail/002Rixxa17UNUX' },
      { name: '酷狗音乐', url: 'https://www.kugou.com/mixsong/fykvvyd1.html' }] },
   'ting': { title: '听（TING）', date: '2026.09.08', cover: 'https://p1.music.126.net/pjdrPIt7gRsssSnbE7dQ1g==/109951173909954297.jpg',
    tracks: [{ name: '01. 听', artist: '黄婷婷' }, { name: '02. 听 (伴奏)', artist: '黄婷婷' }],
    platforms: [{ name: 'QQ音乐', url: 'https://y.qq.com/n/ryqq_v2/albumDetail/002sZj0e3VfcTT' },
      { name: '酷狗音乐', url: 'https://www.kugou.com/album/info/3f2g1b1c/' },
      { name: '网易云音乐', url: 'https://music.163.com/#/album?id=397416204' },
      { name: 'Spotify', url: 'https://open.spotify.com/album/4sKxqbN2MY3w8joqgEb8hr' },
      { name: 'Apple Music', url: 'https://music.apple.com/gb/song/%E5%90%AC-ting-%E9%BB%84%E5%A9%B7%E5%A9%B72026%E7%94%9F%E6%97%A5%E5%8D%95%E6%9B%B2/6808068963' }] },
    'zajdr': { title: '最安静的人', date: '2026.09.05', cover: 'https://p2.music.126.net/xuXZy3BPSFszS0vo9g0JEg==/109951173904659064.jpg',
    tracks: [{ name: '01. 最安静的人', artist: '黄婷婷' }, { name: '02. 最安静的人 (伴奏)', artist: '黄婷婷' }],
    platforms: [{ name: 'QQ音乐', url: 'https://y.qq.com/n/ryqq_v2/albumDetail/002vSI2717VU1H' },
      { name: '酷狗音乐', url: 'https://www.kugou.com/album/info/3etv6552/' },
      { name: '网易云音乐', url: 'https://music.163.com/#/album?id=397198007' },
      { name: 'Spotify', url: 'https://open.spotify.com/track/6VMCTGnZLQuMnVjnRrJIU4' },
      { name: 'Apple Music', url: 'https://music.apple.com/gb/song/%E6%9C%80%E5%AE%89%E9%9D%99%E7%9A%84%E4%BA%BA-%E9%BB%84%E5%A9%B7%E5%A9%B72026%E7%94%9F%E6%97%A5%E5%8D%95%E6%9B%B2/6808069181' }] },
  'mm': { title: '美梦', date: '2026.02.10', cover: 'https://p2.music.126.net/gIbCaSamnGaPwRUo56mD0w==/109951172719961121.jpg',
    tracks: [{ name: '01. 美梦', artist: '黄婷婷' }],
    platforms: [{ name: 'QQ音乐', url: 'https://y.qq.com/n/ryqq_v2/songDetail/003MTdhu1sKaGL' },
      { name: '酷狗音乐', url: 'https://www.kugou.com/mixsong/dxnuxd86.html' },
      { name: '网易云音乐', url: 'https://music.163.com/#/song?id=3348205687' },
      { name: '汽水音乐', url: 'https://qishui.douyin.com/s/iXbQcsqq/' },
      { name: 'Spotify', url: 'https://open.spotify.com/track/4G2tNPJoSANkeoRZQCCgCw' },
      { name: 'Apple Music', url: 'https://music.apple.com/gb/song/%E7%BE%8E%E6%A2%A6-%E8%A2%AB%E9%9A%90%E5%8C%BF%E7%9A%84%E7%9C%9F%E7%9B%B8-%E4%B8%BB%E9%A2%98%E6%9B%B2/1876101040' }] },
  'thx': { title: '御妖厨娘 OST', date: '2025.04.09', cover: 'https://y.qq.com/music/photo_new/T002R300x300M000003vmhQo2XYGM4_1.jpg',
    tracks: [{ name: '02. 同呼吸', artist: '黄婷婷' }, { name: '04. 同呼吸 (伴奏)', artist: '黄婷婷' }],
    platforms: [{ name: 'QQ音乐', url: 'https://y.qq.com/n/ryqq_v2/albumDetail/003vmhQo2XYGM4' },
      { name: '酷狗音乐', url: 'https://www.kugou.com/album/info/2cqa7gd8/' },
      { name: 'Spotify', url: 'https://open.spotify.com/track/57mVyPm8hweHJOwRF8sgjH' },
      { name: 'Apple Music', url: 'https://music.apple.com/gb/song/%E5%90%8C%E5%91%BC%E5%90%B8-%E5%BE%A1%E5%8E%A8%E5%A6%96%E5%A8%98-%E6%8F%92%E6%9B%B2/1808995244' }] },
  'sklr': { title: '我的神使大人 OST', date: '2024.04.29', cover: 'https://p2.music.126.net/FaCtpRRHuS8lVZXN1aObgg==/109951169541020727.jpg',
    tracks: [{ name: '04. 时空恋人', artist: '黄婷婷' }],
    platforms: [{ name: 'QQ音乐', url: 'https://y.qq.com/n/ryqq_v2/songDetail/000zOmwn2qTS39' },
      { name: '酷狗音乐', url: 'https://www.kugou.com/mixsong/ad7uyb02.html' },
      { name: '网易云音乐', url: 'https://music.163.com/#/song?id=2149888296' },
      { name: '汽水音乐', url: 'https://qishui.douyin.com/s/iXbQoVt1/' }] },
  'jh': { title: '王妃芳龄三千岁 OST', date: '2024.02.26', cover: 'https://y.qq.com/music/photo_new/T002R300x300M000003qEpbC4C2k4W_3.jpg',
    tracks: [{ name: '01. 佳话', artist: '黄婷婷' }, { name: '03. 佳话 (伴奏)', artist: '黄婷婷' }],
    platforms: [{ name: 'QQ音乐', url: 'https://y.qq.com/n/ryqq_v2/albumDetail/002vSI2717VU1H' },
      { name: '酷狗音乐', url: 'https://www.kugou.com/album/info/3etv6552/' },
      { name: '网易云音乐', url: 'https://music.163.com/#/album?id=397198007' },
      { name: 'Spotify', url: 'https://open.spotify.com/track/6VMCTGnZLQuMnVjnRrJIU4' }] },
  'fnbk': { title: '全世界都在等你们分手 OST', date: '2023.05.31', cover: 'https://y.qq.com/music/photo_new/T002R300x300M000000roGVs2djPv6_2.jpg',
    tracks: [{ name: '02. 非你不可', artist: '黄婷婷' }],
    platforms: [{ name: 'QQ音乐', url: 'https://y.qq.com/n/ryqq_v2/albumDetail/002vSI2717VU1H' },
      { name: '酷狗音乐', url: 'https://www.kugou.com/album/info/3etv6552/' },
      { name: '网易云音乐', url: 'https://music.163.com/#/album?id=397198007' },
      { name: 'Spotify', url: 'https://open.spotify.com/track/6VMCTGnZLQuMnVjnRrJIU4' }] },
  'wclq': { title: '翠狐戏夫 OST', date: '2021.02.09', cover: 'https://p1.music.126.net/vQoNnCTSQQSYg05BnOkyqg==/109951165698346652.jpg',
    tracks: [{ name: '01. 未曾离去', artist: '黄婷婷' }],
    platforms: [{ name: 'QQ音乐', url: 'https://y.qq.com/n/ryqq_v2/albumDetail/002vSI2717VU1H' },
      { name: '酷狗音乐', url: 'https://www.kugou.com/album/info/3etv6552/' },
      { name: '网易云音乐', url: 'https://music.163.com/#/album?id=397198007' },
      { name: 'Spotify', url: 'https://open.spotify.com/track/6VMCTGnZLQuMnVjnRrJIU4' }] },
  'ysyn': { title: '一生有你 OST', date: '2019.12.02', cover: 'https://p1.music.126.net/PMb8EVTbPBZPxuajfB0gfw==/109951164608505423.jpg',
    tracks: [{ name: '04. 唯你一生', artist: '金志文 / 黄婷婷' },
      { name: '05. 青春舞曲', artist: '徐娇 / 黄婷婷 / 谢彬彬 / 晏紫东 / 吕绍聪 / 金志文' },
      { name: '唯你一生 (林夕版) [已下架]', artist: '金志文 / 黄婷婷' }],
    platforms: [{ name: 'QQ音乐', url: 'https://y.qq.com/n/ryqq_v2/albumDetail/002vSI2717VU1H' },
      { name: '酷狗音乐', url: 'https://www.kugou.com/album/info/3etv6552/' },
      { name: '网易云音乐', url: 'https://music.163.com/#/album?id=397198007' },
      { name: 'Spotify', url: 'https://open.spotify.com/track/6VMCTGnZLQuMnVjnRrJIU4' }] },
  'liuxuan1': { title: '第六届总决选LIVE(下)', date: '2019.08.18', cover: 'https://p1.music.126.net/cxLD07GqVhDCj8tuNT47eA==/109951164298177298.jpg',
    tracks: [{ name: '05. 春日 (第六届总决选live版)', artist: '黄婷婷' },
      { name: '09. 初日 (第六届总决选live版)', artist: 'SNH48' },
      { name: '10. 心的旅程 (第六届总决选live版)', artist: 'SNH48' },
      { name: '11. 我和我的祖国 (第六届总决选live版)', artist: 'SNH48' }],
    platforms: [{ name: 'QQ音乐', url: 'https://y.qq.com/n/ryqq_v2/albumDetail/002vSI2717VU1H' },
      { name: '酷狗音乐', url: 'https://www.kugou.com/album/info/3etv6552/' },
      { name: '网易云音乐', url: 'https://music.163.com/#/album?id=397198007' },
      { name: 'Spotify', url: 'https://open.spotify.com/track/6VMCTGnZLQuMnVjnRrJIU4' }] },
  'liuxuan2': { title: '第六届总决选LIVE(上)', date: '2019.08.12', cover: 'https://p1.music.126.net/BbMBJH2438NJvjzaqLsMVg==/109951164286285038.jpg',
    tracks: [{ name: '01. 魔女的诗篇 (第六届总决选live版)', artist: 'SNH48' }],
    platforms: [{ name: 'QQ音乐', url: 'https://y.qq.com/n/ryqq_v2/albumDetail/002vSI2717VU1H' },
      { name: '酷狗音乐', url: 'https://www.kugou.com/album/info/3etv6552/' },
      { name: '网易云音乐', url: 'https://music.163.com/#/album?id=397198007' },
      { name: 'Spotify', url: 'https://open.spotify.com/track/6VMCTGnZLQuMnVjnRrJIU4' }] }
};

const musicCardList = [
  { id: 'hjbj', type: 'feat' },{ id: 'yt', type: 'solo' }, { id: 'ting', type: 'solo' }, { id: 'zajdr', type: 'solo' },
  { id: 'mm', type: 'solo' }, { id: 'thx', type: 'solo' }, { id: 'sklr', type: 'solo' },
  { id: 'jh', type: 'solo' }, { id: 'fnbk', type: 'solo' }, { id: 'wclq', type: 'solo' },
  { id: 'ysyn', type: 'other' }, { id: 'liuxuan1', type: 'other' }, { id: 'liuxuan2', type: 'other' }
];

/* ========== 相册 ========== */
const galleryData = {
  'gallery-photo': [
    { id: 'sx1',
      name: '2018年9月 生日特别生写',
      poster: 'https://www.snh48.com/event/s246/images/bir_zb2.png',
      desc: '',
      images: [''] }
  ],
  'gallery-magazine': [
    { id: 'zz_202512',
      name: '2025.12 《Beatxl合拍志》',
      poster: '',
      desc: '',
      images: [''] },
    { id: 'zz_202208',
      name: '2022.08 《瑞丽服饰美容》',
      poster: '',
      desc: '',
      images: [''] },
    { id: 'zz_202205',
      name: '2022.05 《TheLUMEN》',
      poster: '',
      desc: 'TheLUMEN X 黄婷婷 in bloom 电子刊',
      images: [''] },
    { id: 'zz_202201',
      name: '2022.01 《锐界area》',
      poster: '',
      desc: '《锐界area》电子刊 黄婷婷：浴火重生，破茧成蝶',
      images: [''] },
    { id: 'zz_201906',
      name: '2019.06 《米娜》',
      poster: '',
      desc: '',
      images: [''] },
    { id: 'zz_201905',
      name: '2019.05 《O!what偶像志》',
      poster: '',
      desc: '电子刊',
      images: [''] },
    { id: 'zz_201611',
      name: '2016.11 《米娜》',
      poster: '',
      desc: '',
      images: [''] },
    { id: 'zz_201609',
      name: '2016.09 《文艺风象·水果!水果!》',
      poster: '',
      desc: '',
      images: [''] },
    { id: 'zz_201601',
      name: '2016.01 《男人装》',
      poster: '',
      desc: '',
      images: [''] },
    { id: 'zz_201512',
      name: '2015.12 《EASY》718期',
      poster: '',
      desc: '',
      images: [''] },
    { id: 'zz_201506',
      name: '2015.06 《男人装》',
      poster: '',
      desc: '',
      images: [''] },
    { id: 'zz_201506_2',
      name: '2015.06 《EASY》707期',
      poster: '',
      desc: '',
      images: [''] },
    { id: 'zz_201501',
      name: '2015.01 《当代歌坛》621期',
      poster: '',
      desc: '',
      images: [''] },
    { id: 'zz_201404',
      name: '2014.04 《EASY》679期',
      poster: '',
      desc: '',
      images: [''] }
  ],
  'gallery-card': [
    {
      id: 'xk_tjsz',
      name: '「听见生长」新歌首唱会 小卡',
      poster: '',
      desc: '伴手礼定制小卡 共计5款',
      images: [
        '',
        '',
        ''
        ]
    },
    {
      id: 'xk_sp',
      name: 'SnackPaper 小卡',
      poster: '',
      desc: '',
      images: [
        { text: 'TT&51 1.0 首发季' },
        '',
        { text: 'TT&51 2.0 线下痛店' },
        '',
        { text: 'TT&51 3.0 SNACKPAPER x 黄婷婷 全家便利店 限定活动' },
        '',
        { text: 'TT&51 4.0 生日季' },
        ''
        ]
    },
    {
      id: 'xk_beatxl',
      name: 'Beatxl合拍志 小卡',
      poster: '',
      desc: '共计23张',
      images: [
        '',
        '',
        ''
        ]
    },
  ]
};