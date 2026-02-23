document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.getElementById("updates-wrapper");
  const btn = document.getElementById("updates-toggle");
  if (!wrapper || !btn) return;

  btn.addEventListener("click", function () {
    wrapper.classList.toggle("expanded");
    btn.textContent = wrapper.classList.contains("expanded") ? "Show less" : "Show more";
  });
});
