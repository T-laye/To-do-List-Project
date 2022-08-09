// "use strict";
// window.localStorage.setItem()

window.addEventListener("load", () => {
  const form = document.querySelector("#new-task");
  let input = document.querySelector("#task-input");
  const list_el = document.querySelector("#task");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      alert("Please fill out task");
      return;
    } else {
      // console.log("sucee");
    }

    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("added");

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    const task_send_el = document.createElement("input");
    task_send_el.classList.add("send");
    task_send_el.type = "submit";
    task_send_el.value = "push";

    task_content_el.appendChild(task_input_el);
    task_content_el.appendChild(task_send_el);

    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("action");

    task_el.appendChild(task_actions_el);

    // const task_edit_el = document.createElement("button");
    // task_edit_el.classList.add("delete-btn");
    // task_edit_el.innerText = "Edit";

    // task_actions_el.appendChild(task_edit_el);

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit-btn");
    task_edit_el.innerText = "Edit";

    task_actions_el.appendChild(task_edit_el);

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("edit-btn");
    task_delete_el.innerText = "Delete";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    list_el.appendChild(task_el);

    input.value = "";

    task_edit_el.addEventListener("click", () => {
      if (task_edit_el.innerText.toLowerCase() == "edit") {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_edit_el.innerText = "Save";
      } else {
        task_input_el.setAttribute("readonly", "readonly");
        task_edit_el.innerText = "Edit";
      }
    });

    task_delete_el.addEventListener("click", () => {
      list_el.removeChild(task_el);
    });

    const progress_section = document.querySelector("#progress");

    task_send_el.addEventListener("click", () => {
      console.log("Send");
      const progress_el = document.createElement("input");
      progress_el.classList.add("text");
      progress_el.type = "text";
      progress_el.value = task;
      progress_el.setAttribute("readonly", "readonly");

      progress_section.appendChild(progress_el);
    });
  });
});