$(document).ready(function () {
  homeElement = document.getElementById("home");
  portfolioElement = document.getElementById("Portfolio");
  serviceElement = document.getElementById("service");
  loadElementPortfolio = document.getElementById("load");
  load2ElementPortfolio = document.getElementById("load2");
  load3ElementPortfolio = document.getElementById("load3");
  load4ElementPortfolio = document.getElementById("load4");
  buttonElementPortfolio = document.getElementById("button");
  button2ElementPortfolio = document.getElementById("button2");
  button3ElementPortfolio = document.getElementById("button3");
  button4ElementPortfolio = document.getElementById("button4");
  allElementPortfolio = document.getElementById("All");
  weddingElementPortfolio = document.getElementById("Wedding");
  preweddingElementPortfolio = document.getElementById("Pre-Wedding");
  babyshowerElementPortfolio = document.getElementById("Baby-Shower");
  videoshowerElementPortfolio = document.getElementById("Videos");
  portfolioNavLinkAll = document.getElementById("portfolioAll");
  portfolioNavLinkWedding = document.getElementById("portfolioWedding");
  portfolioNavLinkPreWedding = document.getElementById("portfolioPreWedding");
  portfolioNavLinkBaby = document.getElementById("portfolioBaby");
  portfolioNavLinkVideo = document.getElementById("portfolioVideo");
  homeLoad();
  $('.nav-item').click(function () {
    $('.navbar div').removeClass('show');
  });
  portfolioImgList = document.querySelectorAll(".img-portfolio");
  for (item of portfolioImgList) {
    item.addEventListener('click', (e) => {
      openModal(e.target);
    })
  }
});
// functions are starts from here
function openModal(img) {
  document.getElementById("portfolioModal").innerHTML =
  `
  <div class="d-flex flex-column position-fixed w-100" style="z-index:99;height:100vh;background: #000d;">
    <div class="col-sm-6 col-12 mx-auto d-flex flex-column">
      <span onclick="modalHide()" class="text-white" style="cursor: pointer;">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
      </span>
      <div class="w-100 d-flex align-items-center" style="min-height:90vh;max-height:100vh;">
        <img class="img-fluid mx-auto" src="`+ img.src + `" style="max-height:90vh">
      </div>
    </div>
  </div>
  `;
}
modalHide = () => { document.getElementById("portfolioModal").innerHTML = '' }
function homeLoad() {
  homeElementShow();
  portfolioElementHide();
  serviceElementHide();
}
function homeElementHide() {
  homeElement.classList.add("d-none");
}
function homeElementShow() {
  homeElement.classList.remove("d-none");
}
function portfolioElementHide() {
  portfolioElement.classList.add("d-none");
}
function portfolioElementShow() {
  portfolioElement.classList.remove("d-none");
  allElementPortfolioShow();
  weddingElementPortfolioHide();
  preweddingElementPortfolioHide();
  babyshowerElementPortfolioHide();
  portfolioVideoHide();
  loadElementPortfolioHide();
  load2ElementPortfolioHide();
  load3ElementPortfolioHide();
  load4ElementPortfolioHide();
}
function serviceElementShow() {
  serviceElement.classList.remove("d-none");
}
function serviceElementHide() {
  serviceElement.classList.add("d-none");
}
function portfolioVideoShow() {
  videoshowerElementPortfolio.innerHTML = `<iframe class="mx-auto w-100" height="480" src="https://www.youtube.com/embed/t_nuQeITnfY" title="Ayan & Madhurima" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe class="mx-auto mt-3 w-100" height="480" src="https://www.youtube.com/embed/DCdNfC08SgE" title="SHUBHANKAR & SURUCHI WEDDING TEASER." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  portfolioNavLinkVideo.classList.add('active');
}
function portfolioVideoHide() {
  videoshowerElementPortfolio.innerHTML = '';
  portfolioNavLinkVideo.classList.remove('active');
}
function allElementPortfolioHide() {
  allElementPortfolio.classList.add("d-none");
  portfolioNavLinkAll.classList.remove('active');
}
function allElementPortfolioShow() {
  allElementPortfolio.classList.remove("d-none");
  portfolioNavLinkAll.classList.add('active');
}
function weddingElementPortfolioHide() {
  weddingElementPortfolio.classList.add("d-none");
  portfolioNavLinkWedding.classList.remove('active');
}
function weddingElementPortfolioShow() {
  weddingElementPortfolio.classList.remove("d-none");
  portfolioNavLinkWedding.classList.add('active');
}
function preweddingElementPortfolioHide() {
  preweddingElementPortfolio.classList.add("d-none");
  portfolioNavLinkPreWedding.classList.remove('active');
}
function preweddingElementPortfolioShow() {
  preweddingElementPortfolio.classList.remove("d-none");
  portfolioNavLinkPreWedding.classList.add('active');
}
function babyshowerElementPortfolioHide() {
  babyshowerElementPortfolio.classList.add("d-none");
  portfolioNavLinkBaby.classList.remove('active');
}
function babyshowerElementPortfolioShow() {
  babyshowerElementPortfolio.classList.remove("d-none");
  portfolioNavLinkBaby.classList.add('active');
}
function loadElementPortfolioHide() {
  loadElementPortfolio.classList.add("d-none");
}
function loadElementPortfolioShow() {
  loadElementPortfolio.classList.remove("d-none");
}
function buttonElementPortfolioShow() {
  buttonElementPortfolio.classList.remove("d-none");
}
function buttonElementPortfolioHide() {
  buttonElementPortfolio.classList.add("d-none");
}
function load2ElementPortfolioHide() {
  load2ElementPortfolio.classList.add("d-none");
}
function load2ElementPortfolioShow() {
  load2ElementPortfolio.classList.remove("d-none");
}
function button2ElementPortfolioShow() {
  button2ElementPortfolio.classList.remove("d-none");
}
function button2ElementPortfolioHide() {
  button2ElementPortfolio.classList.add("d-none");
}
function load3ElementPortfolioShow() {
  load3ElementPortfolio.classList.remove("d-none");
}
function button3ElementPortfolioShow() {
  button3ElementPortfolio.classList.remove("d-none");
}
function load3ElementPortfolioHide() {
  load3ElementPortfolio.classList.add("d-none");
}
function button3ElementPortfolioHide() {
  button3ElementPortfolio.classList.add("d-none");
}
function load4ElementPortfolioShow() {
  load4ElementPortfolio.classList.remove("d-none");
}
function button4ElementPortfolioShow() {
  button4ElementPortfolio.classList.remove("d-none");
}
function load4ElementPortfolioHide() {
  load4ElementPortfolio.classList.add("d-none");
}
function button4ElementPortfolioHide() {
  button4ElementPortfolio.classList.add("d-none");
}
$(".carousel").carousel({
  interval: 2000,
});
