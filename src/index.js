document.addEventListener("DOMContentLoaded", (event) => {
  const input = document.querySelector("#add-text");
  const addBtn = document.querySelector("#add-button");
  const incompList = document.querySelector("#incomplete-list");
  const compList = document.querySelector("#complete-list");
  const addText =
    `<div class="list-row">
      <p class="todo-item"></p>
      <button class="cmp">完了</button>
      <button class="del">削除</button>
      <button class="ret">戻す</button>
    </div>`

  const onClickAdd = () => {
    if (input.value) {
      const clone = document.createElement("li");
      clone.innerHTML = addText;
      clone.querySelector(".todo-item").textContent = input.value;;
      input.value = "";
      incompList.appendChild(clone);
      const btnEls = incompList.lastElementChild.querySelectorAll("button");
      [...btnEls].forEach((button) => {
        button.addEventListener("click", onClickBtn);
      })

    } else {
      alert("TODOタイトルを入力してください。");
    }
  }

  const onClickBtn = (e) => {
    const btnName = e.target.textContent;
    const parentLi = e.target.closest("li");
    const cmp = parentLi.querySelector(".cmp");
    const del = parentLi.querySelector(".del");
    const ret = parentLi.querySelector(".ret");
    if (btnName == "完了") {
      cmp.style.display = "none";
      del.style.display = "none";
      ret.style.display = "block";
      compList.appendChild(parentLi);
    } else if (btnName == "削除") {
      parentLi.remove();
    } else if (btnName == "戻す") {
      cmp.style.display = "block";
      del.style.display = "block";
      ret.style.display = "none";
      incompList.appendChild(parentLi);
    }
  }

  addBtn.addEventListener("click", onClickAdd);

});