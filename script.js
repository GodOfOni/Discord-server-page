function openModal(imgElement) {
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("modal-img");
  const captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = imgElement.src;
  captionText.innerText = imgElement.alt;
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
