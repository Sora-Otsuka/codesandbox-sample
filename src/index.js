const onClickAdd = () => {
  // テキストボックスの値を取得し初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // liタグを生成
  const li = document.createElement("li");

  // divタグを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグを生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // button(完了)
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  // button(削除)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // ulの子要素にli
  document.getElementById("incomplete-list").appendChild(li);

  // 子要素の配置
  // liの子要素にdiv
  li.appendChild(div);

  // divの子要素にp
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // どうなるか？
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
