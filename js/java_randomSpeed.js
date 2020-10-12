var list = ['Mauris', 'rutrum', 'pharetra', 'accumsan', 'Vestibulum', 'laoreet', 
'justo', 'eu', 'lectus', 'pulvinar', 'sed', 'condimentum',
'magna', 'convallis',  'Nullam', 'sit', 'amet', 'augue', 'lacus', 
'Curabitur', 'ullamcorper', 'semper', 'tincidunt', 'Quisque', 
'ullamcorper', 'et', 'erat', 'sed', 'ullamcorper', 'Proin', 
'venenatis', 'tortor', 'a', 'convallis', 'gravida', 'Donec', 'tincidunt', 
'lorem', 'vehicula', 'suscipit', 'urna', 'eget', 'pellentesque',
'quam', 'Nullam', 'feugiat', 'ornare', 'fringilla', 'Ut', 'ac', 'dui', 
'eros', 'Ut', 'sit', 'amet', 'accumsan', 'sapien',

'Duis', 'cursus', 'quis', 'dolor', 'mollis', 'auctor', 'Vestibulum', 
'eu', 'tristique', 'libero', 'et', 'tincidunt', 'metus', 'Nullam', 
'efficitur', 'aliquet', 'mattis', 'Sed', 'finibus', 'massa', 'quis', 
'eros', 'varius', 'sodales', 'elementum', 'lacus', 'aliquet', 
'Aliquam', 'quis', 'congue', 'mauris', 'In', 'a', 'imperdiet', 
'lorem', 'Nam', 'ante', 'nibh', 'facilisis', 'id', 'laoreet', 'et', 'finibus', 
'lacus', 'Nam', 'nec', 'est', 'erat', 'Praesent', 'sit', 'amet', 
'hendrerit', 'eros', 'Curabitur', 'porta', 'molestie', 'ullamcorper', 
'Praesent', 'placerat', 'tortor', 'aliquam', 'rhoncus', 'lectus', 'eget', 
'rhoncus', 'tellus']


function startfn(){
    for (var i=0; i<50; i++){
        var a=(Math.random())*list.length
        var b=Math.floor(a)
        document.getElementById("text").innerHTML+=list[b]
        document.getElementById("text").innerHTML+=" "
    }
    characters=document.getElementById("text").innerHTML.length
    document.getElementById("text").innerHTML=document.getElementById("text").innerHTML.substr(0,characters-1)+".";

}

function reloadfn(){
    document.getElementById("text").innerHTML=''
    for (var i=0; i<50; i++){
        var a=(Math.random())*list.length
        var b=Math.floor(a)
        document.getElementById("text").innerHTML+=list[b]
        document.getElementById("text").innerHTML+=" "
    }
    characters=document.getElementById("text").innerHTML.length
    document.getElementById("text").innerHTML=document.getElementById("text").innerHTML.substr(0,characters-1)+".";
    document.getElementById("input").value=""
    clearInterval(ID);
    timeCount=0;
    check=0;
    correct=0;
    incorrect=0;
    lenOfInput=0
}

function cancelfn(){
    location.href="index.html";
}

var timeCount=0;
var check=0;
var correct=0;
var incorrect=0;
var lenOfInput=0;
var ID=0;
var ID1=0;
var ID2=0;

function timefn(){
    timeCount+=1
    console.log(timeCount);
    if(timeCount==60){
        timeover();
    }
    document.getElementById("time").innerHTML="Time: "+(timeCount)
}


function checkfn(){
    var input = document.getElementById("input");
    var characters=input.value.length;
    var text=document.getElementById("text");
    
    if (check==0){
        ID=setInterval(timefn,1000);
        check=1;
    }

    if(input.value[characters-1] == text.innerHTML[characters-1] && input.value.length>lenOfInput){
        input.style.color="green"
        lenOfInput+=1
        correct+=1
    }
    if(input.value[characters-1] != text.innerHTML[characters-1] && input.value.length>lenOfInput){
        input.style.color="red";
        incorrect+=1;
        lenOfInput+=1;
    }

    if(input.value.length<lenOfInput){
        lenOfInput-=1;
        if (input.value[characters-1] == text.innerHTML[characters-1]){
            input.style.color="green";
        }
        else{
            input.style.color="red";
        }
        
    }
    
    if(input.value.length == text.innerHTML.length && input.value[characters-1] == text.innerHTML[characters-1]){
        timeover();
    }
}

function retake(){
    document.getElementById("input").style.display="block";
}

function timeover(){
    clearInterval(ID)
    speed=Math.round((correct/timeCount)*12);
    incorrect-=1;
    document.getElementById("result").style.display="block";
    document.getElementById("speed").innerHTML="Your typing speed is: "+ speed +" words per minute";
    document.getElementById("timeTaken").innerHTML="Time taken is: "+timeCount +" seconds";
    document.getElementById("correct").innerHTML="No. of correct characters: "+correct;
    document.getElementById("incorrect").innerHTML="No. of incorrect characters: "+incorrect;
    reloadfn();
    input.value=""
    timeCount=0;
    check=0;
    correct=0;
    incorrect=0;
    lenOfInput=0;
}