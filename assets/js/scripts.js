(function() {
  fetch("./assets/js/projects.json")
    .then((response) => response.json())
    .then((data) => setup(data));

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function setup(data) {
    const shuffledData = shuffleArray(data);
    const parent = document.getElementById("projectGrid");

    for (let i = 0; i < shuffledData.length; i++) {
      const project = shuffledData[i];
      const singleProject = document.createElement("a");
      singleProject.href = project.url;
      singleProject.setAttribute("id", i);

      const img = document.createElement("img");
      if (project.img !== false) {
        img.src = `./assets/img/${project.img}`;
      } else {
        img.src = "./assets/img/placeholder.jpg";
      }

      const description = document.createElement("div");
      description.innerHTML += `
        <p>${project.designer}</p>
      `;
      singleProject.append(img, description);
      parent.appendChild(singleProject);
    }
  }
})();
