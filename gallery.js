document.addEventListener('DOMContentLoaded', function () {

  // ===== 二级 tab 切换 =====
  document.querySelectorAll('.tab-btn[data-subtarget]').forEach(button => {
    button.addEventListener('click', function () {
      document.querySelectorAll('.tab-btn[data-subtarget]').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const targetId = this.getAttribute('data-subtarget');
      document.querySelectorAll('.video-sub-page').forEach(p => {
        p.classList.remove('active');
        if (p.id === targetId) p.classList.add('active');
      });
    });
  });

  // ===== 渲染单个 block（图片 / 文字 / 空行） =====
  function renderBlock(s, item, index) {
    // 1. 字符串 → 图片
    if (typeof s === 'string') {
      if (!s) return '';
      return `<img src="${s}" alt="${item.name} ${index + 1}">`;
    }
    // 2. 对象
    if (s && typeof s === 'object') {
      // 2.1 空行
      if (s.spacer) return `<div class="gallery-spacer"></div>`;
      // 2.2 文字段落
      if (s.text) return `<p class="gallery-inline-text">${s.text}</p>`;
    }
    return '';
  }

  // ===== 把 images 统一成数组 =====
  function toImageArray(images) {
    if (Array.isArray(images)) return images;
    if (typeof images === 'string') return images ? [images] : [];
    return [];
  }

  // ===== 渲染详情内容 =====
  function renderDetail(item) {
    const arr = toImageArray(item.images);
    const blocks = arr
      .map((s, i) => renderBlock(s, item, i))
      .filter(Boolean)
      .join('');

    return `
      <h3 class="gallery-title">${item.name}</h3>
      <div class="gallery-desc">${item.desc || ''}</div>
      <div class="gallery-body">${blocks}</div>
    `;
  }

  // ===== 遍历三个分类 =====
  ['gallery-photo', 'gallery-magazine', 'gallery-card'].forEach(catId => {
    const listEl = document.getElementById(catId + '-list');
    const detailEl = document.getElementById(catId + '-detail');
    if (!listEl || !detailEl) return;

    const items = galleryData[catId] || [];
    const detailContent = detailEl.querySelector('.gallery-detail-content');
    const backBtn = detailEl.querySelector('.back-to-list');

    // ===== 列表页 =====
    listEl.innerHTML = `<div class="card-grid">${items.map(it => `
      <div class="media-card" data-gallery-id="${it.id}">
        <div class="poster"><img src="${it.poster}" alt="${it.name}"></div>
        <div class="media-name">${it.name}</div>
      </div>`).join('')}</div>`;

    // ===== 点击卡片 → 详情页 =====
    listEl.querySelectorAll('.media-card').forEach(card => {
      card.addEventListener('click', function () {
        const gid = this.getAttribute('data-gallery-id');
        const item = items.find(it => it.id === gid);
        if (!item) return;

        detailContent.innerHTML = renderDetail(item);

        listEl.style.display = 'none';
        detailEl.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // 更新 URL
        const url = new URL(location.href);
        url.searchParams.set('item', gid);
        history.replaceState(null, '', url);
      });
    });

    // ===== 返回列表 =====
    backBtn.addEventListener('click', () => {
      detailEl.classList.remove('active');
      listEl.style.display = 'block';

      // 清掉 URL 参数
      const url = new URL(location.href);
      url.searchParams.delete('item');
      history.replaceState(null, '', url);
    });
  });

  // ===== 首次加载：读 URL 参数，自动打开对应相册 =====
  const params = new URLSearchParams(location.search);
  const galleryId = params.get('item');
  if (!galleryId) return;

  // 找到这个 id 属于哪个分类
  let foundCat = null;
  let foundItem = null;
  ['gallery-photo', 'gallery-magazine', 'gallery-card'].forEach(catId => {
    const items = galleryData[catId] || [];
    const it = items.find(x => x.id === galleryId);
    if (it) {
      foundCat = catId;
      foundItem = it;
    }
  });

  if (!foundCat || !foundItem) return;

  // 1. 切到对应 tab
  document.querySelectorAll('.tab-btn[data-subtarget]').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-subtarget') === foundCat);
  });
  document.querySelectorAll('.video-sub-page').forEach(p => {
    p.classList.toggle('active', p.id === foundCat);
  });

  // 2. 打开详情
  const listEl = document.getElementById(foundCat + '-list');
  const detailEl = document.getElementById(foundCat + '-detail');
  const detailContent = detailEl.querySelector('.gallery-detail-content');

  detailContent.innerHTML = renderDetail(foundItem);
  listEl.style.display = 'none';
  detailEl.classList.add('active');
});