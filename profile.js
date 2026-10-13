document.addEventListener('DOMContentLoaded', function() {
  const renderItems = (items) => items.map(i =>
    `<div class="bio-item"><span class="k">${i.label}</span><span class="v">${i.value}</span></div>`
  ).join('');

  document.getElementById('bio-self-cols').innerHTML = `<div class="bio-col-items">${renderItems(bioData.selfItems)}</div>`;
  document.getElementById('bio-pet-cols').innerHTML = `<div class="bio-col-items">${renderItems(bioData.petItems)}</div>`;
  document.getElementById('bio-person-socials').innerHTML = bioData.selfSocials.map(s =>
    `<a href="${s.url}" target="_blank" class="social-icon-btn"><img src="${s.icon}" alt="${s.name}"><span>${s.name}</span></a>`
  ).join('');
  document.getElementById('bio-pet-socials').innerHTML = bioData.petSocials.map(s =>
    `<a href="${s.url}" target="_blank" class="social-icon-btn"><img src="${s.icon}" alt="${s.name}"><span>${s.name}</span></a>`
  ).join('');
});