let progressDiv = document.querySelector(".progress-div"),
  progressBar = document.querySelectorAll(".progress-div .progress-bar");

window.addEventListener("scroll", () => {
  let progDivPosition = progressDiv.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;

  if (progDivPosition < screenPosition) {
    showprogress();
  } else {
    hideprogress();
  }
});

showprogress = () => {
  progressBar.forEach((el) => {
    let valueNow = el.getAttribute("aria-valuenow");
    el.style.width = `${valueNow}%`;

    let counterSpan = el.parentElement.parentElement.querySelector(".progress-value span");
    let timer = setInterval(() => {
      if (Number(counterSpan.textContent) < valueNow) {
        counterSpan.textContent = Number(counterSpan.textContent) + 1;
      } else {
        clearInterval(timer);
      }
    }, 50);
  });
};

hideprogress = () => {
  progressBar.forEach((el) => {
    el.style.width = 0;
    el.parentElement.parentElement.querySelector(".progress-value span").textContent = 0;
  });
};

// Start Counter-div
let counterSection = document.querySelector(".counter-div"),
  counterNumber = document.querySelectorAll(".counter-div h2");

window.addEventListener("scroll", () => {
  let countSectionPos = counterSection.getBoundingClientRect().top;
  let countScreenPos = window.innerHeight;

  if (countSectionPos < countScreenPos) {
    showCounterNumber();
  } else {
    hideCounterNumber();
  }
});

showCounterNumber = () => {
  counterNumber.forEach((el) => {
    let countTimer = setInterval(() => {
      if (Number(el.textContent) < el.dataset.counter) {
        el.textContent = Number(el.textContent) + 1;
      } else {
        clearInterval(countTimer);
      }
    }, 100);
  });
};
hideCounterNumber = () => {
  counterNumber.forEach((el) => {
    el.textContent = 0;
  });
};

// Start Portfolio
let list_item = document.querySelectorAll(".portfolio .list-group li"),
  filter_item = document.querySelectorAll(".portfolio .filterd-items a");

list_item.forEach((list) => {
  list.addEventListener("click", () => {
    document.querySelector(".portfolio .list-group li.active").classList.remove("active");
    list.classList.add("active");

    filter_item.forEach((item) => {
      item.style.display = "none";
    });

    document.querySelectorAll(list.dataset.filter).forEach((el) => {
      el.style.display = "block";
    });
  });
});

// Start Portfolio lightGallery
lightGallery(document.getElementById("lightgallery"), {});

// Start Aos Library
AOS.init({
  duration: 1500,
  once: true,
});
