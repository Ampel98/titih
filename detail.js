// detail.js
document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(location.search);
  const type = params.get('type');
  const id = params.get('id');
  const root = document.getElementById('detail-body');
  const backLink = document.getElementById('back-link');
if (backLink && type) {
  backLink.href = `video.html?tab=${type}`;
}

  // ===== 分类配置：数据源 + 要展示的板块顺序 =====
  const CONFIG = {
    film:    { data: () => filmData,        sections: ['synopsis', 'full', 'bts', 'stills'] },
    variety: { data: () => varietyData,     sections: ['synopsis', 'full', 'bts'] },
    mv:      { data: () => mvData,          sections: ['synopsis', 'full', 'dance', 'bts'] },
    sns:    { data: () => snsData,        sections: ['videos'] },
    live:    { data: () => liveData,        sections: ['videos'] },
    stage:   { data: () => stageData,       sections: ['synopsis', 'full'] },
    event:   { data: () => eventData,       sections: ['synopsis', 'videos'] },
    other:   { data: () => otherVideoData,  sections: ['synopsis', 'full'] }
  };

  const cfg = CONFIG[type];
  if (!cfg) {
    root.innerHTML = '<p style="color:#fff;text-align:center;padding:60px 0;">未知分类</p>';
    return;
  }

  // ===== 从数据里找对应 id 的条目 =====
  let item = null;
  cfg.data().groups.forEach(g => {
    (g.items || []).forEach(it => {
      if (it.id === id) item = it;
    });
  });

  if (!item) {
    root.innerHTML = '<p style="color:#fff;text-align:center;padding:60px 0;">未找到内容</p>';
    return;
  }

  document.title = `${item.name} | 黄婷婷`;

  // ===== 顶部信息区（海报 + 元数据） =====
  const metaRows = [];
  if (item.role)     metaRows.push(['角色', item.role]);
  if (item.platform) metaRows.push(['平台', item.platform]);
  if (item.episodes) metaRows.push(['集数', item.episodes]);
  if (item.year)     metaRows.push(['年份', item.year]);
  if (item.director) metaRows.push(['导演', item.director]);
  if (item.cast)     metaRows.push(['主演', item.cast]);
  if (item.artist)   metaRows.push(['歌手', item.artist]);
  if (item.album)    metaRows.push(['专辑', item.album]);
  if (item.date)     metaRows.push(['日期', item.date]);
  if (item.team)     metaRows.push(['队伍', item.team]);

  const metaHtml = metaRows.map(([k, v]) =>
    `<div class="row"><span class="k">${k}</span><span>${v}</span></div>`
  ).join('');

  // ===== 各板块标题 =====
  const sectionTitles = {
    synopsis: '简介',
    full: '正片',
    dance: '舞蹈版',
    bts: '花絮',
    stills: '剧照',
    videos: '播放'
  };

  // ===== 把任意输入统一成数组 =====
  function toArray(val) {
    if (Array.isArray(val)) return val;
    if (typeof val === 'string') return val ? [val] : [];
    if (val == null) return [];
    return [val];
  }

  // ===== 渲染单个视频列表（兼容字符串 / 数组 / null） =====
  function renderVideoList(list, emptyText) {
    // 字符串统一包成 { label, type, url } 结构
    let arr;
    if (typeof list === 'string') {
      arr = list ? [{ label: '视频', type: 'link', url: list }] : [];
    } else {
      arr = toArray(list);
    }

    if (!arr.length) {
      return `<p style="color:#888;padding:20px 0;">${emptyText}</p>`;
    }

    return `<div class="video-list">${arr.map(v => {
      const playIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
      const dlIcon   = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"/></svg>`;

      // 情况1：iframe 内嵌播放器
      if (v.type === 'iframe' && v.embed) {
        return `
          <div class="video-item">
            <div class="video-header">
              <span class="video-label">${v.label || '视频'}</span>
            </div>
            <div class="video-frame">
              <iframe src="${v.embed}" allowfullscreen scrolling="no" frameborder="0"></iframe>
            </div>
          </div>`;
      }

      // 情况2：link 外链（按钮）
      const actions = [];
      if (v.url) {
        actions.push(`<a href="${v.url}" target="_blank">${playIcon} 播放</a>`);
      }
      if (v.download) {
        actions.push(`<a href="${v.download}" target="_blank">${dlIcon} 下载</a>`);
      }

      const coverHtml = v.cover
        ? `<a href="${v.url}" target="_blank" class="video-cover"><img src="${v.cover}" alt="${v.label}"></a>`
        : '';

      return `
        <div class="video-item">
          <div class="video-header">
            <span class="video-label">${v.label || '视频'}</span>
            <div class="video-actions">${actions.join('')}</div>
          </div>
          ${coverHtml}
        </div>`;
    }).join('')}</div>`;
  }

  // ===== 生成每个板块的 HTML =====
  function buildSection(key) {
    const title = sectionTitles[key];

    // --- 简介 ---
    if (key === 'synopsis') {
      return `
        <section class="section-block">
          <h2 class="section-title">${title}</h2>
          <p class="synopsis">${item.synopsis || '暂无简介'}</p>
        </section>`;
    }

    // --- 正片 ---
    if (key === 'full') {
      return `
        <section class="section-block">
          <h2 class="section-title">${title}</h2>
          ${renderVideoList(item.fullVideo || [], '暂无正片资源')}
        </section>`;
    }

    // --- 舞蹈版 ---
    if (key === 'dance') {
      return `
        <section class="section-block">
          <h2 class="section-title">${title}</h2>
          ${renderVideoList(item.danceVideo || [], '暂无舞蹈版')}
        </section>`;
    }

    // --- 花絮 ---
    if (key === 'bts') {
      return `
        <section class="section-block">
          <h2 class="section-title">${title}</h2>
          ${renderVideoList(item.behindScenes || [], '暂无花絮')}
        </section>`;
    }

    // --- 剧照 ---
    if (key === 'stills') {
      const arr = toArray(item.stills).filter(Boolean); // 过滤空字符串
      const inner = arr.length
        ? `<div class="stills-grid">${arr.map(s =>
            `<a href="${s}" target="_blank"><img src="${s}" alt="剧照"></a>`
          ).join('')}</div>`
        : '<p style="color:#888;padding:20px 0;">暂无剧照</p>';
      return `
        <section class="section-block">
          <h2 class="section-title">${title}</h2>
          ${inner}
        </section>`;
    }

    // --- 播放（sns / 直播 / 活动） ---
    if (key === 'videos') {
      return `
        <section class="section-block">
          <h2 class="section-title">${title}</h2>
          ${renderVideoList(item.videos || [], '暂无播放资源')}
        </section>`;
    }

    return '';
  }

  // ===== 下载区（所有类型通用，放最后） =====
  const downloads = toArray(item.downloads);
  const downloadHtml = downloads.length
    ? `
      <section class="section-block">
        <h2 class="section-title">下载地址</h2>
        <div class="download-list">
          ${downloads.map(d => `
            <div class="download-item">
              <span class="dl-label">${d.label || '下载'}</span>
              ${d.mediaInfo ? `<span class="dl-mediaInfo">${d.mediaInfo}</span>` : ''}
              ${d.code ? `<span class="dl-code">提取码：${d.code}</span>` : ''}
              ${d.url ? `<a href="${d.url}" target="_blank">前往下载</a>` : ''}
            </div>
          `).join('')}
        </div>
      </section>`
    : '';

  // ===== 组装整体 HTML =====
  root.innerHTML = `
    <div class="hero">
      <div class="poster"><img src="${item.poster}" alt="${item.name}"></div>
      <div class="info">
        <h1>${item.name}</h1>
        <div class="meta">${metaHtml || '<div class="row"><span class="k">信息</span><span>—</span></div>'}</div>
      </div>
    </div>

    ${cfg.sections.map(buildSection).join('')}

    ${downloadHtml}
  `;
});