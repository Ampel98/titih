document.addEventListener('DOMContentLoaded', function () {

  // ===== 构建索引 =====
  function buildIndex() {
    const index = [];

    const videoSources = [
      { data: filmData,       type: 'film',    label: '影视' },
      { data: varietyData,    type: 'variety', label: '综艺' },
      { data: mvData,         type: 'mv',      label: 'MV' },
      { data: snsData,        type: 'sns',     label: 'SNS' },
      { data: liveData,       type: 'live',    label: '直播' },
      { data: stageData,      type: 'stage',   label: '公演' },
      { data: eventData,      type: 'event',   label: '活动' },
      { data: otherVideoData, type: 'other',   label: '其他' }
    ];

    videoSources.forEach(src => {
      if (!src.data || !src.data.groups) return;
      src.data.groups.forEach(g => {
        (g.items || []).forEach(it => {
          index.push({
            name: it.name,
            type: src.type,
            label: src.label,
            id: it.id,
            poster: it.poster || '',
            keywords: [it.name, it.role, it.platform, it.cast, it.artist, it.album, it.date, it.synopsis]
              .filter(Boolean).join(' ').toLowerCase()
          });
        });
      });
    });

    if (typeof musicAlbums !== 'undefined') {
      Object.keys(musicAlbums).forEach(key => {
        const a = musicAlbums[key];
        index.push({
          name: a.title,
          type: 'music',
          label: '音乐',
          id: key,
          poster: a.cover || '',
          keywords: [a.title, (a.tracks || []).map(t => t.name + ' ' + t.artist).join(' ')]
            .filter(Boolean).join(' ').toLowerCase()
        });
      });
    }

    if (typeof galleryData !== 'undefined') {
      Object.keys(galleryData).forEach(cat => {
        (galleryData[cat] || []).forEach(g => {
          index.push({
            name: g.name,
            type: 'gallery',
            label: '相册',
            id: g.id,
            poster: g.poster || (g.images && g.images[0]) || '',
            keywords: [g.name, g.desc].filter(Boolean).join(' ').toLowerCase()
          });
        });
      });
    }

    return index;
  }

  const INDEX = buildIndex();

  const box = document.getElementById('searchResults');
  const params = new URLSearchParams(location.search);
  const q = (params.get('q') || '').trim();

  if (!q) {
    box.innerHTML = '<p class="search-empty">输入关键词开始搜索</p>';
    return;
  }

  const keyword = q.toLowerCase();
  const results = INDEX.filter(it =>
    it.name.toLowerCase().includes(keyword) || it.keywords.includes(keyword)
  );

  if (!results.length) {
    box.innerHTML = `<p class="search-empty">没有找到与“${q}”相关的内容</p>`;
    return;
  }

  function getLink(item) {
    if (item.type === 'music')   return `music.html?album=${item.id}`;
    if (item.type === 'gallery') return `gallery.html?item=${item.id}`;
    return `detail.html?type=${item.type}&id=${item.id}`;
  }

  box.innerHTML = `
    <p class="search-result-title">找到 ${results.length} 条结果</p>
    <div class="search-grid">
      ${results.map(it => `
        <a class="search-card" href="${getLink(it)}">
          <div class="poster"><img src="${it.poster}" alt="${it.name}" loading="lazy"></div>
          <div class="name">${it.name}</div>
          <div class="type">${it.label}</div>
        </a>`).join('')}
    </div>`;
});