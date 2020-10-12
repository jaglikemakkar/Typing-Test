var list = ['avoid',    'worse',        'heading',    'cross',     'education',
'paint',    'conversation', 'sitting',    'actual',    'sold',
'instead',  'ago',          'science',    'thick',     'knife',
'oil',      'with',         'toy',        'burn',      'remove',
'require',  'kill',         'begun',      'size',      'getting',
'thought',  'wrote',        'crew',       'addition',  'sky',
'turn',     'continent',    'meant',      'climb',     'signal',
'having',   'piece',        'rubber',     'whale',     'pitch',
'four',     'or',           'fireplace',  'within',    'with',
'future',   'city',         'escape',     'page',      'question',
'call',     'evening',      'born',       'silver',    'shorter',
'or',       'cutting',      'hide',       'record',    'possibly',
'coat',     'record',       'phrase',     'chance',    'single',
'fire',     'farm',         'title',      'organized', 'plates',
'bean',     'topic',        'instrument', 'headed',    'large',
'his',      'opinion',      'shirt',      'flew',      'play',
'mood',     'action',       'exact',      'poet',      'trouble',
'pressure', 'wish',         'declared',   'stretch',   'suit',
'heat',     'hide',         'police',     'imagine',   'promised',
'count',    'start',        'brick',      'stomach',   'naturally',
'crack',     'refer',       'spread',     'butter',   'service',
'piano',     'engine',      'pig',        'western',  'gun',
'wore',      'entire',      'he',         'gulf',     'idea',
'old',       'prove',       'lucky',      'worse',    'wing',
'last',      'measure',     'room',       'sat',      'might',
'guard',     'social',      'printed',    'teach',    'poet',
'enjoy',     'composed',    'see',        'size',     'rocky',
'man',       'free',        'fence',      'itself',   'older',
'record',    'kitchen',     'men',        'then',     'check',
'mistake',   'gasoline',    'worse',      'wall',     'although',
'carefully', 'probably',    'trace',      'stared',   'between',
'you',       'year',        'balance',    'herd',     'score',
'avoid',     'smell',       'pack',       'wise',     'well',
'in',        'cheese',      'fierce',     'feet',     'dozen',
'smaller',   'continent',   'journey',    'plant',    'early',
'value',     'blank',       'thing',      'captured', 'make',
'fighting',  'direction',   'largest',    'stream',   'real',
'rest',      'wore',        'poem',       'last',     'joy',
'consist',   'coat',        'bridge',     'dress',    'fighting',
'sell',      'information', 'provide',    'hall',     'class']


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
    document.getElementById("input").style.display="none";
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