function correctAnswer1 () {
    choice= "1"
    sessionStorage.setItem("choice-1", choice)
    window.location.href="./fourthpage.html";
}

function correctAnswer2 () {
    choice= "1"
    sessionStorage.setItem("choice-2", choice)
    window.location.href="./fifthpage.html";
}

function correctAnswer3 () {
    choice="1"
    sessionStorage.setItem("choice-3", choice)
    window.location.href="./sixthpage.html";
}

function correctAnswer4 () {
    choice="1"
    sessionStorage.setItem("choice-4", choice)
    window.location.href="./seventhpage.html";
}

function correctAnswer5 () {
    choice="1"
    sessionStorage.setItem("choice-5", choice)
    window.location.href="./eighthpage.html";
}


function displayResults () {
    value= parseInt(sessionStorage.getItem("choice-1")) +parseInt(sessionStorage.getItem("choice-2")) +parseInt(sessionStorage.getItem("choice-3")) +parseInt(sessionStorage.getItem("choice-4")) +parseInt(sessionStorage.getItem("choice-5"));


if (value == 5) {
    document.getElementById("Results").innerHTML ="100%- Due to your wonderful deductive reasoning, here's the full story about how the Doctor did it. Well, do you remember the low hissing sound that Julia and Miss Roylott heard? Or the ventilator in Julia's room? Well, in searching the room you found a bell-rope by Julia's bolted bed near her ventilator. Don't forget also that she could smell the Doctor's cigar smoke. But there was no bell for the rope to actually call for a servant, which Miss Roylott informed you was correct because they did all the work themselves. So, you concluded the bell-rope was a ploy for something else. When being in the room overnight with Watson, you finally hear that same whistling sound which turned out to be the deadliest snake in India coming from the ventilator onto a bell-rope to get to the bed. Thankfully, Miss Roylott was sleeping in her own bed and not in her sister's! Anyway, you beat at the bell-rope with your cane and then you hear the terrifying sound of Dr. Roylott screaming. You and Watson rush to his room next door to find him killed by his own snake. In the end, you understand the meaning of the speckled band. The bell-rope, her bolted bed, and the ventilator."
} else {
    document.getElementById("Results").innerHTML ="80% or less- Due to your sufficient deductive reasoning, here's a little information about how the Doctor did it. Well, do you remember the low hissing sound that Julia and Miss Roylott heard? Or the ventilator in Julia's room? Well, in searching the room you found a bell-rope by Julia's bed near her ventilator. But there was no bell for the rope to actually call for a servant, which Miss Roylott informed you was correct because they did all the work themselves. So, you concluded that the bell-rope was a ploy for something else. When being in the room overnight with Watson, you finally hear that same whistling sound which turns out to be a snake...but that's all I can give you. Try again, Sherlock! There's a lot you may have missed."
}

sessionStorage.removeItem("choice-1");
sessionStorage.removeItem("choice-2");
sessionStorage.removeItem("choice-3");
sessionStorage.removeItem("choice-4");
sessionStorage.removeItem("choice-5");


}