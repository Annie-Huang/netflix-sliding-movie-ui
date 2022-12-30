// I don't like this implementation. How do you know user click within the container? It may never get to the .handle element.
document.addEventListener('click', (e) => {
  let handle;

  if (e.target.matches('.handle')) {
    handle = e.target;
  } else {
    handle = e.target.closest('.handle');
  }

  if (handle !== null) {
    onHandleClick(handle);
  }
});

window.addEventListener('resize', (e) => {
  // Recalculate Progress Bar
});

function calculateProgressBar(progressBar) {
  progressBar.innerHTML = '';
  const slider = progressBar.closest('.row').querySelector('.slider');
  const itemCount = slider.children.length;
  const itemPerScreen = parseInt(
    getComputedStyle(slider).getPropertyValue('--items-per-screen')
  );
  const progressBarItemCount = Math.ceil(itemPerScreen / itemCount);
}

function onHandleClick(handle) {
  const slider = handle.closest('.container').querySelector('.slider');
  const sliderIndex = parseInt(
    getComputedStyle(slider).getPropertyValue('--slider-index')
  );

  if (handle.classList.contains('left-handle')) {
    slider.style.setProperty('--slider-index', sliderIndex - 1);
  }

  if (handle.classList.contains('right-handle')) {
    slider.style.setProperty('--slider-index', sliderIndex + 1);
  }
}
