const onClickAdd = () => {
  // テキストボックスの値を取得し初期化
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = '';

  // liタグを生成
  const li = document.createElement("li");
  
  // divタグを生成
  const div = document.createElement('div');
  div.className = 'list-row';

  // pタグを生成
  const p = document.createElement('p');
  p.innerText = inputText;

  // liの子要素にdiv
  li.appendChild(div);

  // divの子要素にp
  div.appendChild(p)

  // ulの子要素にli
  document.getElementById('incomplete-list').appendChild(li)
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());