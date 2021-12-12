var skip = document.getElementById('skip');
var score = document.getElementById('score');
var totalScore = document.getElementById('totalScore');
var countdown = document.getElementById('countdown');
var count = 0;
var scoreCount = 0;
var duration = 0;
var qa_set = document.querySelectorAll('.qa_set');
var qaAnsRow = document.querySelectorAll('.qa_set .qa_ans_row input');

skip.addEventListener('click', function(){
  step()
  
});
qaAnsRow.forEach( function(qqAnsRowSingle){
  qaAnsRowSingle.addEventListener('click', function(){
    setTimeout(function(){
      step();
    },500)

    var valid = this.getAttribute("valid");
    if(valid == "valid"){
      scoreCount += 1;
      score.innerHTML = scoreCount;
      totalScore.innerHTML = scoreCount;
    }else{
      scoreCount -= 1;
      score.innerHTML = scoreCount;
      totalScore.innerHTML = scoreCount;
    }

  })
  
});


function step(){
  count += 1;
  for(var i = 0; i < qa_set.length; i++){
    qaSet[i].className = 'qa_set';
  }
  qaSet[count].className = 'qa_set active';
  if(count == 5){
    skip.style.display =  'none';
  }



}