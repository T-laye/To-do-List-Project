// "use strict";
// window.localStorage.setItem()

window.addEventListener("load", () => {
  const form = document.querySelector("#new-task");
  let input = document.querySelector("#task-input");
  let list_el = document.querySelector("#task");
  const progress_section = document.querySelector("#progress");
  const done_section = document.querySelector("#done");
  const clear = document.querySelector(".clear-btn");

  // console.log(done_section.innerText);

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

    ///////////////////////////
    ///////Doing session

    task_send_el.addEventListener("click", () => {
      // console.log("Send");
      const progress_el = document.createElement("input");
      progress_el.classList.add("text");
      progress_el.type = "text";
      progress_el.value = task;
      progress_el.setAttribute("readonly", "readonly");

      progress_section.appendChild(progress_el);

      const progress_delete_el = document.createElement("button");
      progress_delete_el.classList.add("delete-progress-btn");
      progress_delete_el.innerText = "Delete";

      progress_section.appendChild(progress_delete_el);

      // const clear_el = document.createElement("button");
      // clear_el.classList.add("clear-btn");
      // clear_el.innerText = "Clear List";

      // progress_section.appendChild(clear_el);

      progress_delete_el.addEventListener("click", () => {
        progress_section.removeChild(progress_el);
        progress_section.removeChild(progress_delete_el);
        progress_section.removeChild(push_el);
      });

      const push_el = document.createElement("input");
      push_el.classList.add("push");
      push_el.type = "submit";
      push_el.value = "Push";

      progress_section.appendChild(push_el);

      push_el.addEventListener("click", () => {
        const done_el = document.createElement("input");
        done_el.classList.add("text");
        done_el.type = "text";
        done_el.value = task;
        done_el.setAttribute("readonly", "readonly");

        done_section.appendChild(done_el);

        progress_section.removeChild(progress_el);
        progress_section.removeChild(progress_delete_el);
        progress_section.removeChild(push_el);
      });
    });

    clear.addEventListener("click", () => {
      list_el.removeChild(task_el);
    });
  });
});
