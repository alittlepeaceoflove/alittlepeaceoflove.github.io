document.getElementById('year').textContent = new Date().getFullYear();

// Load projects from JSON
fetch('projects.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('projects');
    data.forEach(p => {
      const div = document.createElement('div');
      div.style.border = "1px solid #ddd";
      div.style.padding = "10px";
      div.style.margin = "10px 0";
      div.innerHTML = `<h3>${p.title}</h3><p><em>${p.domain}</em></p><p>${p.summary}</p>`;
      container.appendChild(div);
    });
  });
