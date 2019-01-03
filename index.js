function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(nested, target){
return document.querySelector( '#nested .target')
}

function increaseRankBy(n){
  const amount = parseInt(n)
  const doc = document.querySelectorAll("ul.ranked-list li")
  for (let i = 0; i < doc.length; i++){
    doc[i].innerHTML = parseInt(doc[i].innerHTML) + amount
  }
}

function deepestChild(){
  let doc = document.getElementById("grand-node")
  let answer = doc.children[0]
  while(answer){
    doc = answer
    answer = answer.children[0]
  }
  console.log(doc)
  return doc
}
