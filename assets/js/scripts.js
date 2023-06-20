(function() {
  async function getJSONData() {
    try {
      let response = await fetch("/assets/js/projects.json/");
      let data = await response.json();
      return data;
    } catch(error) {
      console.log(error);
    }
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  async function setup() {
    let fontData = await getJSONData();
    let shuffledData = shuffleArray(fontData);
    const parent = document.getElementById("projectGrid");

    for (let i = 0; i < shuffledData.length; i++) {
      let path = window.location.pathname;
      const project = shuffledData[i];

      const singleProject = document.createElement("a");
      if (path == '/index.html') {
        singleProject.href = project.url;
      } else {
        singleProject.href = `../${project.url}`;
      }
      singleProject.setAttribute("id", i);

      const img = document.createElement("img");
      if (path == '/index.html') {
        img.src = `./assets/img/${project.img}`;
      } else {
        img.src = `../../assets/img/${project.img}`;
      }

      const description = document.createElement("div");
      description.innerHTML += `
        <p>${project.designer}</p>
      `;
      singleProject.append(img, description);
      parent.appendChild(singleProject);
    }
  }

  setup();
})();
