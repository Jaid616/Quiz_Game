let questionpaper = [
    {
    question : "Javascript is an _______ language?",
    option1 : "Object-Oriented",
    option2 : "Object-Based",
    option3 : "Procedural",
    option4 : "None of the above",
    answers  : "Object-Oriented"
   },
   {
    question : "Which of the following keywords is used to define a varable in Javascript",
    option1 : "var",
    option2 : "let",
    option3 : "Both A and B",
    option4 :"None of the above",
    answers  : "Both A and B"
   },
   {
    question : "Upon encountering empty statements,what does the Javascript Interpreter do?",
    option1 : "Throws an error",
    option2 : "Ignores the statements",
    option3 : "Give a warning",
    option4 : "None of the above",
    answers  :"Ignores the statements"
   },
   {
    question : "How can a datatype be declared to be constant type",
    option1 : "const",
    option2 : "var",
    option3 : "let",
    option4: "constant",
    answers  : "const"
   },
   {
    question : "When an operator's value is NULL, the typeof return by the unary operator is",
    option1 : "Boolean",
    option2 : "Undefined",
    option3 : "Object",
    option4 : "Integer",
    answers  : "Object"
   },
   
  



]
let num =0;
let questionnumber = 1;
let showres = "";
let score = 0;
let resultshow1 = [];
const btn = document.querySelectorAll(".btnsub");
const question = document.querySelector(".question");
const answernumber = document.querySelector("#answer");
const qno = document.querySelector("#qno")
const resultshow = document.querySelector("#resultshow");
const quiz = document.querySelector(".quiz");
const prenextbtn = document.querySelector("#prenextbtn");
const showanswer = document.querySelector("#showresult");


btn[1].addEventListener("click",fun1);

function fun1(){
    resultsimple();
   
    const opt2 = document.querySelectorAll(".option");
    num = num+1;
   if(num==questionpaper.length)
   {
    
    prenextbtn.innerHTML = "";
     return quiz.innerHTML = ` <div>

     <h2 class="heading">Thanks For The attemping the Quiz</h2>
     <button class="sub btnsub" id="showresult" onclick ="showanswer1()">Show Your Result</button>
   </div>`
 

    num = questionpaper.length-1;
   }
   
    display(num);
}

btn[0].addEventListener("click",fun2);

function fun2(){
    num = num-1;

    if(num<0){
        num=0;
    }
    
    display(num);
}

function display(num){

   
   

    quiz.innerHTML= `   <span class="ques_no"> Question No. <span id="qno">${questionnumber+num}</span> </span ><h4 class="question">${ questionpaper[num].question}
    </h4> 
    <div class="radiobtn">

        <div class="radio2">
            <input type="radio" name="options" id=""  value="${questionpaper[num].option1}" class="option" >
            <label for="front" id ="opt">${questionpaper[num].option1}</label>
        </div>
        <div class="radio2">
            <input type="radio" name="options" id=""  value="${questionpaper[num].option2}"  class="option"> 
            <label for="front" id ="opt">${questionpaper[num].option2} </label>
        </div>
        <div class="radio2">
            <input type="radio" name="options" id=""  value="${questionpaper[num].option3}" class="option"> 
            <label for="front" id ="opt">${questionpaper[num].option3} </label>
        </div>
        <div class="radio2">
            <input type="radio" name="options" id=""  value="${questionpaper[num].option4}"  class="option">
             <label for="front" id ="opt">${questionpaper[num].option4} </label>
        </div>
    </div>`
   
    // result();

}

function resultsimple(){
    const options = document.querySelectorAll(".option");
   

     options.forEach((option)=>{
           if(option.checked==true)
           {
           
             
             resultshow1.push( {
                questionnumber : `${questionnumber+num}`,
                answer : `${option.value}`,
                questionshow : `${questionpaper[num].question}`,
                correctanswer : `${questionpaper[num].answers}`
                

                 });

                 if(option.value == questionpaper[num].answers){
                    score++;
                   
                 }
             return resultshow1;

           } 
     })

  }

function showanswer1 () {
       quiz.innerHTML="";
       
       resultshow1.forEach((res)=>{
        quiz.innerHTML += `<pre> Q.No${res.questionnumber}     ${ res.questionshow}      Your Choise option is ${res.answer}         Correct answer is ${res.correctanswer}\n </pre>`;


        answernumber.innerHTML = `Your Score is ${score} `;
        
          if(score >= questionpaper.length/2){
            answernumber.innerHTML += `You Passed `;
          }
          else {
            answernumber.innerHTML += `You Failed  Passing Score is Must be equal or More Than 50%`;
            
          }
        
       })
    

 }


display(num);



