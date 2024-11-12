function findContainer(selector) {
  // if (document.querySelectorAll(selector).length) {
  //   console.log(`findContainer: found ${selector} immediately`);
  //   return resolve(document.querySelectorAll(selector));
  // }

  const observer = new MutationObserver(() => {
    if (document.querySelectorAll(selector).length) {
      // console.log(`findContainer: found ${selector} after DOM changed`);
      // resolve(document.querySelectorAll(selector));
      // observer.disconnect();
      removeJobCards(document.querySelectorAll(selector));
    }
  });
  observer.observe(document.body, { childList: true });
}

function removeJobCards(containers) {
  const jobCard = ".job-card-list--is-dismissed";
  containers.forEach((container) => {
    container.querySelectorAll(jobCard).forEach((card) => card.remove());
  });
}

//

const container = ".scaffold-layout__list-container";
const container2 = "#jobs-home-vertical-list__entity-list";
removeJobCards(document.querySelectorAll(container2));

window.addEventListener("popstate", () => {
  console.log("popstate");
  findContainer(container2);
});
