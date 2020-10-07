 var quiz=[
    {
    id:0,
    question:"1.The members of the Rajya Sabha are elected by? ?",
    img:"images/quiz1.jpg",
    choice1:"the people",
    choice2:"Lok Sabha",
    choice3:"elected members of the legislative assembly",
    choice4:"elected members of the legislative council",
    answer:"elected members of the legislative assembly",
    option:"option 3"
   },
   {
    id:1,
    question:"2.Nuclear sizes are expressed in a unit named ?",
    img:"images/quiz2.jpg",
    choice1:"Fermi",
    choice2:"angstrom",
    choice3:"newton",
    choice4:"tesla",
    answer:"Fermi",
    option:"option 1"
   },
   {
    id:2,
    question:"3.Who developed Yahoo ?",
    img:"images/quiz3.jpg",
    choice1:"Dennis Ritchie And Ken Thompson",
    choice2:"David Filo And Jerry Yang",
    choice3:"Vint Cerf And Robert Kahn",
    choice4:"Steve Case And Jeff Bezos",
    answer:"David Filo And Jerry Yang",
    option:"option 2"
   },
   {
    id:3,
    question:"4.The most commonly used bleaching agent is?",
    img:"images/quiz4.jpg",
    choice1:"alcohol",
    choice2:"carbon dioxide",
    choice3:"chlorine",
    choice4:"sodium chlorine",
    answer:"chlorine",
    option:"option 3"
   },
   {
    id:4,
    question:"5.The Centre for Cellular and Molecular Biology is situated at ?",
    img:"images/quiz5.jpg",
    choice1:"Patna",
    choice2:"Jaipur",
    choice3:"Hyderabad",
    choice4:"New Delhi",
    answer:"Hyderabad",
    option:"option 3"
   },
   {
    id:5,
    question:"6.Who invented the BALLPOINT PEN ?",
    img:"images/quiz6.jpg",
    choice1:"Biro Brothers",
    choice2:"Waterman Brothers",
    choice3:"Bicc Brothers",
    choice4:"Write Brothers",
    answer:"Biro Brothers",
    option:"option 1"
   },
   {
    id:6,
    question:"7.20th August is celebrated as ?",
    img:"images/quiz7.jpg",
    choice1:"Earth Day",
    choice2:"Sadbhavana Divas",
    choice3:"No Tobacco Day",
    choice4:"None of these",
    answer:"Sadbhavana Divas",
    option:"option 2"
   },
   {
    id:7,
    question:"8.ICICI is the name of a ?",
    img:"images/quiz8.jpg",
    choice1:"chemical industry",
    choice2:"bureau",
    choice3:"corporation",
    choice4:"financial institution",
    answer:"financial institution",
    option:"option 4"
   },
   {
    id:8,
    question:"9.Who is the author of the book 'Nineteen Eighty Four?",
    img:"images/quiz9.jpg",
    choice1:"Thomas Hardy",
    choice2:"Emile Zola",
    choice3:"George Orwell",
    choice4:"Walter Scott",
    answer:"George Orwell",
    option:"option 3"
   },
   {
    id:9,
    question:"10.The ratio of width of our National flag to its length is?",
    img:"images/quiz10.jpg",
    choice1:"3:5",
    choice2:"2:3",
    choice3:"2:4",
    choice4:"3:4",
    answer:"2:3",
    option:"option 2"
   },
   {
       id:"undefined"
   }
]
$(document).ready(function(){
  $("#mymodal").modal("show");
});
          
var img=document.getElementsByTagName("img")[0];
var option1=document.getElementById("option 1");
var option2=document.getElementById("option 2");
var option3=document.getElementById("option 3");
var option4=document.getElementById("option 4");
var heading=document.getElementById("head");
var Result=0;
i=0;
function Inputvalue()
{
    if(quiz[i].id==i)
    {
        img.src=quiz[i].img;
        option1.innerHTML=quiz[i].choice1;
        option2.innerHTML=quiz[i].choice2;
        option3.innerHTML=quiz[i].choice3;
        option4.innerHTML=quiz[i].choice4;
        heading.innerHTML=quiz[i].question;
    }
    else if(quiz[i].id=="undefined")
    {
    alert("you got score "+Result+" out of 10");
    window.location.reload();
    }
}
function check(id)
{
  if(id.innerHTML==quiz[i].answer)
  {
    id.style.backgroundColor="green";
    Result++;
    setTimeout(function(){
      next(id);
    },1000);
  }
  else
  {
    id.style.backgroundColor="red";
    var answer=document.getElementById(quiz[i].option);
    setTimeout(function(){
        answer.style.backgroundColor="green";
        console.log(answer+"called");
    },900)
    setTimeout(function(){
        answer.style.backgroundColor="#337ab7";
        next(id);
    },2000);
  }
}

function next(id)
{
    i++;
    id.style.backgroundColor="#337ab7";
    Inputvalue();
    console.log("function called");
}
Inputvalue();