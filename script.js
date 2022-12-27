// I don't like this implementation. How do you know user click within the container? It may never get to the .handle element.
document.addEventListener('click', (e) => {
  let handle;

  if (e.target.match('.handle')) {
    handle = e.target;
  } else {
    handle = e.target.closest('.handle');
  }

  if (handle !== null) {
    onHandleClick(handle);
  }
});

function onHandleClick(handle) {}
