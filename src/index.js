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
  completeButton.addEventListener('click', () => {
    // 押されたボタンの親タグ(li)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);

    // さらにそのタグを完了したTODOに追加
    const li = document.createElement('li');
    const div = document.createElement('div');
    const p = document.createElement('p');
    const button = document.createElement('button');
    
    div.className = 'list-row'
    p.innerText = completeButton.previousElementSibling.innerText;
    button.innerText = '戻す';
    button.addEventListener('click', () => {
      const backTarget = button.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(backTarget);

      const li = document.createElement('li');
      const div = document.createElement('div');
      const p = document.createElement('p');
      const completeButton = document.createElement('button');
      const deleteButton = document.createElement('button');

      div.className = 'list-row'
      p.innerText = button.previousElementSibling.innerText;
      completeButton.innerText = '完了';
      deleteButton.innerText = '削除';

      li.append(div);
      div.append(p)
      div.append(completeButton)
      div.append(deleteButton)

      document.getElementById("incomplete-list").append(li);
    });

    li.append(div);
    div.append(p)
    div.append(button)

    document.getElementById("complete-list").append(li);
  });


  // button(削除)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener('click', () => {
    // 押された削除ボタンの親タグ(li)を未完了リストから削除;
    const deleteTarget = deleteButton.parentNode.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

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
