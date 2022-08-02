const onClickAdd = () => {
  // テキストボックスの値を取得し初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText)
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
}

// 未完了のリストに追加する関数
const createIncompleteList = (text) => {
    // liタグを生成
  const li = document.createElement("li");

  // divタグを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグを生成
  const p = document.createElement("p");
  p.innerText = text;

  // button(完了)
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener('click', () => {
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    // 完了リストに追加する
    const addTarget = completeButton.parentNode.parentNode;
    const text = addTarget.firstElementChild.firstElementChild.innerText;
    
    // div以下を初期化
    addTarget.textContent = null;

    const div = document.createElement('div');
    div.className = 'list-row'

    const p = document.createElement('p');
    p.innerText = text;
    
    //  buttonタグ生成
    const backButton = document.createElement('button');
    backButton.innerText = '戻す';
    backButton.addEventListener('click', () => {
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById('complete-list').removeChild(deleteTarget);

      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text)

    });
    
    div.appendChild(p);
    div.appendChild(backButton);
    addTarget.appendChild(div);


    document.getElementById("complete-list").append(li);


    
  });


  // button(削除)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener('click', () => {
    // 押された削除ボタンの親タグ(li)を未完了リストから削除;
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
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
}

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
