document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery-item img");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const captionText = document.getElementById("caption");
  const closeModal = document.querySelector(".close");
  const rightArrow = document.querySelector(".arrow-right");
  const leftArrow = document.querySelector(".arrow-left");
  let currentPhotoIndex = 0;

  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  function openModal(src, alt) {
    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = alt;
  }
  rightArrow.addEventListener("click", function () {
    currentPhotoIndex = (currentPhotoIndex + 1) % galleryItems.length;
    const nextItem = galleryItems[currentPhotoIndex];
    openModal(nextItem.src, nextItem.alt);
  });

  leftArrow.addEventListener("click", function () {
    currentPhotoIndex = (currentPhotoIndex - 1 + galleryItems.length) % galleryItems.length;
    const prevItem = galleryItems[currentPhotoIndex];
    openModal(prevItem.src, prevItem.alt);
  });
});
