let questions = [ {

    question :  'which is largest animal in world ?',
    answer : [
         {option : "shark" , correct : true} ,
         {option : "blue wale" , correct : false} ,
         {option : "elephant" , correct : false} ,
         {option : "tiger" , correct : false} 
    ]

},
{

    question :  'which is largest bird in world ?',
    answer : [
         {option : "swift" , correct : false} ,
         {option : "eagle" , correct : true} ,
         {option : "crow" , correct : false} ,
         {option : "sparrow" , correct : false} 
    ]

},
{

    question :  'which is largest country in world ?',
    answer : [
         {option : "india" , correct : false} ,
         {option : "russia" , correct : true} ,
         {option : "usa" , correct : false} ,
         {option : "japan" , correct : false} 
    ]

},
{

    question :  'which is largest ocean in world ?',
    answer : [
         {option : "pacefic" , correct : false} ,
         {option : "atlantic" , correct : true} ,
         {option : "indian" , correct : false} ,
         {option : "none of above" , correct : false} 
    ]

}

]
let questionPad = document.querySelector('.question p');
let index = 0;
let score = 0; 
const answerPad = document.querySelector('.answer');



////   ADDING OPTIONS IN ANSWER PAD  //////


startQuiz = () => {
    
    let quesNum = index+1;

    questionPad.innerHTML = `${quesNum}. ${questions[index].question}`

    // let options = document.querySelectorAll('.option');
     let i = 0;
    //  for (const option of options) {
    //      option.innerText = questions[index].answer[i].option;
         
    //      if(questions[index].answer[i].correct===true){
    //         option.classList.add("checked");
    //      }else{
    //         option.classList.add("unchecked");
    //      }
    //      i++;
    //  }
    //  index++;

    questions.forEach(function(options){
       
       div = document.createElement("button");
       div.innerHTML =  questions[index].answer[i].option;
       div.classList.add("option");
      
       if(questions[index].answer[i].correct){
        div.id = "correct";
       }
       answerPad.appendChild(div);
       i++ ;

    });



    items = document.querySelectorAll('.option');
//  console.log(Array.from(items));

    ///// ISKO FOR LOOP SE LIKH KE BREAK KARNA H SIRF ;
      
// items.forEach((item) =>{
    
//   item.addEventListener('click',(e)=>{
//     console.log(e.target)
//         click = true;
//         if(e.target.id === "correct"){
//             score++;
//             e.target.classList.add("checked");
//         }else{
//             e.target.classList.add("unchecked"); 
//         }  
       
//     })

// })
    
items.forEach((item) =>{
                item.addEventListener('click',(e)=>{
    
                 if(e.target.id === "correct"){
                    score++;
                    e.target.classList.add("checked");
                }else{
                    e.target.classList.add("unchecked"); 
                }  

      
           if(item.id === "correct"){
            item.classList.add("checked")
           }   
           
           
           item.setAttribute("disabled","disabled");      
   })
   
})


//  })
 





   index++;

}


startQuiz ();


////   OPTION CLICK FEATURES  //////


// answerPad.addEventListener('click',(e)=>{
// //    console.log (e.target.innerText)
//             if(e.target.id === "correct"){
//                 score++;
//                 e.target.classList.add("checked");
//              }
//             else{
//                 e.target.classList.add("unchecked");
//             }


//    blockItems = document.querySelectorAll(".option");
//    e.target.id
//     let i=0;
//     blockItems.forEach((item) =>{
//         item.setAttribute("disabled","disabled");
//         item.style.display= "blocked";
//         if( questions[index-1].answer[i].correct){
//             item.classList.add("checked");
//         }else{
//            // item.classList.add("unchecked");
//         }
       
//       i++;
//     })




// questions[index-1].answer.forEach(function(options){   
//      if(guess.toLowerCase().trim() === options.option.toLowerCase().trim()){
//         if( options.correct){
//             e.target.classList.add("checked"); 
           
//            }
//            else{
//            e.target.classList.add("unchecked"); 
//            }
//      }
// })
//})







     ////   NEXT BUTTON FEATURES  //////

const next = document.querySelector('.submit');

  next.addEventListener('click', (e)=>{
      e.preventDefault();
      let options = document.querySelectorAll('.option');
        
      options.forEach((item)=>{
        console.log(item)
            answerPad.removeChild(item);
        })

      if(index < questions.length){
        if(index === questions.length-1){
            next.innerText = "submit";
        }
      startQuiz();
      }else{
      questionPad.innerText = `you scored ${score} out of ${questions.length}!`
      next.innerText = `Start Again`;
      }
  })



