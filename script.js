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

document
  .querySelectorAll('.progress-bar')
  // this is the same as below
  // .forEach((p) => calculateProgressBar(p));
  .forEach(calculateProgressBar);

function calculateProgressBar(progressBar) {
  progressBar.innerHTML = '';
  const slider = progressBar.closest('.row').querySelector('.slider');
  const itemCount = slider.children.length;
  const itemPerScreen = parseInt(
    getComputedStyle(slider).getPropertyValue('--items-per-screen')
  );
  const sliderIndex = parseInt(
    getComputedStyle(slider).getPropertyValue('--slider-index')
  );
  const progressBarItemCount = Math.ceil(itemCount / itemPerScreen);

  for (let i = 0; i < progressBarItemCount; i++) {
    const barItem = document.createElement('div');
    barItem.classList.add('progress-item');
    if (i === sliderIndex) {
      barItem.classList.add('active');
    }
    progressBar.append(barItem);
  }
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
