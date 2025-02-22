function showToast(message, type = "success") {
    const toastContainer = document.querySelector(".toast-container");

    const toast = document.createElement("div");
    toast.classList.add("toast", type);

    toast.innerHTML = `
      <div class="toast-content">
        <i class="bi icon bi-${getIcon(type)}"></i>
        <div class="message">
          <span class="text text-2">${message}</span>
        </div>
      </div>
      <i class="bi bi-x-lg close"></i>
      <div class="progress active"></div>
    `;

    toastContainer.appendChild(toast);
    let showToast = setTimeout(() => {
        void toast.offsetHeight;
        toast.classList.add("active");
    }, 1);

    const progress = toast.querySelector(".progress");
    const closeIcon = toast.querySelector(".close");

    const timer1 = setTimeout(() => {
        toast.classList.remove("active");
    }, 5000);

    const timer2 = setTimeout(() => {
        progress.classList.remove("active");
        setTimeout(() => toast.remove(), 400);
    }, 5300);

    closeIcon.addEventListener("click", () => {
        toast.classList.remove("active");
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(showToast);
        setTimeout(() => toast.remove(), 400);
    });
}

function getIcon(type) {
    switch (type) {
        case "success": return "check-circle-fill";
        case "error": return "x-circle-fill";
        case "warning": return "exclamation-triangle-fill";
        case "info": return "info-circle-fill";
        default: return "check-circle-fill";
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Example Usage:
// showToast("Your changes have been saved!", "success");
// setTimeout(() => showToast("Something went wrong!", "error"), 1000);
// setTimeout(() => showToast("Check your settings!", "warning"), 2000);
// setTimeout(() => showToast("This is an info message.", "info"), 3000);