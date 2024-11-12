const CONTAINER_SELECTORS = [
  ".scaffold-layout__list-container",
  "#jobs-home-vertical-list__entity-list",
].join(", ");
const JOB_CARD_SELECTOR = ".job-card-list--is-dismissed";

const JobCardYeeter = {
  observer: null,
  count: 0,

  init(selector = "") {
    this.hideDismissedJobs(document.querySelectorAll(selector));
    this.initObserver(selector);
  },

  initObserver(selector) {
    this.observer = new MutationObserver(() => {
      if (document.querySelectorAll(selector).length) {
        this.hideDismissedJobs(document.querySelectorAll(selector));
      }
    });
    this.observer.observe(document.body, { childList: true, subtree: true });
  },

  hideDismissedJobs(containers) {
    containers.forEach((container) => {
      container.querySelectorAll(JOB_CARD_SELECTOR).forEach((card) => {
        card.remove();
        this.updateCount();
      });
    });
  },

  updateCount() {
    this.count++;
    console.log(`Hidden ${this.count} jobs so far!`);
  },

  destroyObserver() {
    this.observer.disconnect();
    this.observer = null;
    this.count = 0;
  },
};

JobCardYeeter.init(CONTAINER_SELECTORS);
