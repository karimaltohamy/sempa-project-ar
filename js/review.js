// start popup evaluation
let evaluationBtn = document.querySelector(".btn_evaluation");
let evaluationBox = document.querySelector(".evaluation-box");
let closeEvaluation = document.querySelector(".close-evaluation");
let btnBoxClickApp = document.querySelector(".rate-this-book");

evaluationBtn.addEventListener("click", () => {
  evaluationBox.classList.add("active");
});

closeEvaluation.addEventListener("click", () => {
  evaluationBox.classList.remove("active");
});
// end popup evaluation

// start comment-evaluition
let evaluationLineBtns = document.querySelectorAll(".evaluation-line");
let commentEvaluation = document.querySelector(".comment-evaluition");
let closeCommentEvaluation = document.querySelector(
  ".close-comment-evaluation"
);
let btnCloseComment = document.querySelector(".btn-close-comment");

evaluationLineBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    evaluationBox.classList.remove("active");
    commentEvaluation.classList.add("active");
  });
});

closeCommentEvaluation.addEventListener("click", () => {
  commentEvaluation.classList.remove("active");
});

btnCloseComment.addEventListener("click", () => {
  commentEvaluation.classList.remove("active");
});
// end comment-evaluition
