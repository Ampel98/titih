// video.js
document.addEventListener('DOMContentLoaded', function () {

  // ===== tab 名 → 子页面 id =====
  const TAB_MAP = {
    film:    'sub-film',
    variety: 'sub-variety',
    mv:      'sub-mv',
    sns:    'sub-sns',
    live:    'sub-live',
    stage:   'sub-stage',
    event:   'sub-event',
    other:   'sub-other'
  };

  // ===== 切换 tab =====
  function activateTab(tabKey, pushState) {
    const targetId = TAB_MAP[tabKey] || 'sub-film';

    // 按钮状态
    document.querySelectorAll('.tab-btn[data-subtarget]').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-subtarget') === targetId);
    });

    // 子页面状态
    document.querySelectorAll('.video-sub-page').forEach(p => {
      p.classList.toggle('active', p.id === targetId);
    });

    // 更新 URL（不刷新页面）
    if (pushState !== false) {
      const url = new URL(location.href);
      url.searchParams.set('tab', tabKey);
      history.replaceState(null, '', url);
    }
  }

  // ===== 点击 tab =====
  document.querySelectorAll('.tab-btn[data-subtarget]').forEach(button => {
    button.addEventListener('click', function () {
      const tabKey = this.getAttribute('data-tab');
      activateTab(tabKey, true);
    });
  });

  // ===== 首次加载：读 URL 参数 =====
  const params = new URLSearchParams(location.search);
  const initialTab = params.get('tab') || 'film';
  activateTab(initialTab, false);

  // ===== 渲染卡片列表 =====
function renderJumpList(containerId, groups, type) {
  const c = document.getElementById(containerId);
  if (!c) return;
  c.innerHTML = groups.map(g => `
    <div class="card-group">
      <h3 class="card-group-title">${g.title}</h3>
      <div class="card-grid">
        ${(g.items || []).map(it => {
          let subText = '';

          if (type === 'mv') {
            // MV：只显示日期
            subText = (it.year || it.date || '').trim();
          } else if (type === 'film') {
            // 影视：角色 + 年份
            const role = (it.role || '').trim();
            const year = (it.year || '').trim();
            subText = [role, year].filter(Boolean).join(' · ');
          } else if (type === 'sns' || type === 'live' || type === 'stage' || type === 'variety') {
            subText = '';
          } else {
            subText = (it.date || it.year || '').trim();
          }

          return `
          <a class="media-card" href="detail.html?type=${type}&id=${it.id}">
            <div class="poster"><img src="${it.poster}" alt="${it.name}"></div>
            <div class="info">
              <div class="media-name">${it.name}</div>
              ${subText ? `<div class="media-date">${subText}</div>` : ''}
            </div>
          </a>`;
        }).join('')}
      </div>
    </div>`).join('');
}

  renderJumpList('film-list-view',    filmData.groups,        'film');
  renderJumpList('variety-list-view', varietyData.groups,     'variety');
  renderJumpList('mv-list-view',      mvData.groups,          'mv');
  renderJumpList('sns-list-view',    snsData.groups,        'sns');
  renderJumpList('live-list-view',    liveData.groups,        'live');
  renderJumpList('stage-list-view',   stageData.groups,       'stage');
  renderJumpList('event-list-view',   eventData.groups,       'event');
  renderJumpList('other-list-view',   otherVideoData.groups,  'other');
});