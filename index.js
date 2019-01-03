function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(nested, target){
return document.querySelector( '#nested .target')
}

function increaseRankBy(n){
  const amount = parseInt(n)
<<<<<<< HEAD
  const doc = document.querySelectorAll("ul.ranked-list")

  for (let i = 0; i < doc.length; i++){
    doc[i] += amount
=======
  const doc = document.querySelector(".ranked-list")

  return for (let i = 0; i < doc.length; i++){
    doc[i] += amount
    
>>>>>>> 193583ace733a8ce5409a4aff959fe16bf2b704d
  }
}
