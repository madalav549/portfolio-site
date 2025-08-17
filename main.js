const hiddenProjects = document.querySelectorAll('.hidden-project');
const showMoreBtn = document.getElementById('showMoreBtn');
showMoreBtn.addEventListener('click', function() {
  hiddenProjects.forEach(project => {
    project.classList.remove('hidden-project');
  });
  showMoreBtn.style.display = 'none';
});