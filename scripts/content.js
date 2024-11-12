const CONTAINER_SELECTORS = [
  ".scaffold-layout__list-container",
  "#jobs-home-vertical-list__entity-list",
].join(", ");
const JOB_CARD_SELECTOR = ".job-card-list--is-dismissed";
let observer;
let count = 0;

function observeContainers(selector) {
  observer = new MutationObserver(() => {
    if (document.querySelectorAll(selector).length) {
      removeJobCards(document.querySelectorAll(selector));
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

function removeJobCards(containers) {
  containers.forEach((container) => {
    container.querySelectorAll(JOB_CARD_SELECTOR).forEach((card) => {
      card.remove();
      count++;
      console.log(`Removed ${count} job cards so far!`);
    });
  });
}

removeJobCards(document.querySelectorAll(CONTAINER_SELECTORS));
observeContainers(CONTAINER_SELECTORS);
