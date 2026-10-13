document.addEventListener('DOMContentLoaded', function () {

  const musicGrid = document.getElementById('music-grid-container');
  musicGrid.innerHTML = musicCardList.map(card => {
    const a = musicAlbums[card.id];
    return `<div class="music-card" data-type="${card.type}" data-album-id="${card.id}">
      <div class="cover"><img src="${a.cover}" alt="${a.title}"></div>
      <div class="info"><div class="title">${a.title}</div><div class="date">${a.date}</div></div>
    </div>`;
  }).join('');

  const musicCards = document.querySelectorAll('.music-card');

  // ===== 分类过滤 =====
  document.querySelectorAll('.tab-btn[data-filter]').forEach(button => {
    button.addEventListener('click', function () {
      document.querySelectorAll('.tab-btn[data-filter]').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const f = this.getAttribute('data-filter');
      musicCards.forEach(card => {
        card.style.display = (f === 'all' || f === card.getAttribute('data-type')) ? 'flex' : 'none';
      });
    });
  });

  const musicList = document.getElementById('music-list-view');
  const musicDetailView = document.getElementById('music-detail-view');
  const musicDetailContent = document.getElementById('music-detail-content');

  // ===== 打开某张专辑详情 =====
  function openAlbum(albumId) {
    const a = musicAlbums[albumId];
    if (!a) return;

    const tracks = a.tracks.map(t =>
      `<li><span class="track-name">${t.name}</span><span class="track-artist">${t.artist}</span></li>`
    ).join('');
    const plats = a.platforms.map(p =>
      `<a href="${p.url}" target="_blank" class="platform-btn">${p.name}</a>`
    ).join('');

    musicDetailContent.innerHTML = `
      <div class="detail-cover"><img src="${a.cover}" alt="${a.title}"></div>
      <div class="detail-info">
        <h3>${a.title}</h3>
        <div class="detail-meta">发行日期：${a.date}</div>
        <div class="section-label">曲目列表</div>
        <ul class="track-list">${tracks}</ul>
        <div class="section-label">试听平台</div>
        <div class="platform-links">${plats}</div>
      </div>`;

    musicList.style.display = 'none';
    musicDetailView.classList.add('active');
  }

  // ===== 卡片点击 =====
  musicCards.forEach(card => {
    card.addEventListener('click', function () {
      const albumId = this.getAttribute('data-album-id');
      openAlbum(albumId);
      // 更新 URL，方便分享 / 刷新
      const url = new URL(location.href);
      url.searchParams.set('album', albumId);
      history.replaceState(null, '', url);
    });
  });

  // ===== 返回列表 =====
  document.getElementById('back-to-music-btn').addEventListener('click', () => {
    musicDetailView.classList.remove('active');
    musicList.style.display = 'block';
    // 清掉 URL 参数
    const url = new URL(location.href);
    url.searchParams.delete('album');
    history.replaceState(null, '', url);
  });

  // ===== 首次加载：读 URL 参数，自动打开专辑 =====
  const params = new URLSearchParams(location.search);
  const albumId = params.get('album');
  if (albumId && musicAlbums[albumId]) {
    openAlbum(albumId);
  }
});