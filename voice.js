const textE1=document.getElementById("text")
const voiceEle=document.getElementById("voiceList")
let speechBtn=document.getElementById("speak")

let speechSynth=speechSynthesis


speechSynth.addEventListener('voiceschanged',loadVoices);



function loadVoices(){
    let voices=speechSynth.getVoices()
  
    for(voice of voices){
        let option =document.createElement("option")
        option.value =voice.name
        option.innerText =`${voice.name} ${voice.lang}`
        voiceEle.appendChild(option)
        
    }
}


function textToSpeech(text){
     let utterance =new SpeechSynthesisUtterance(text)
     for(let voice of speechSynth.getVoices()){
        if(voice.name===voiceEle.value){
            utterance.voice=voice
        }
     }
     speechSynth.speak(utterance);
}


speechBtn.addEventListener('click',function(){
    if(textE1.value!==''){
        if(!speechSynth.speaking){
            textToSpeech(textE1.value)
        }
    }
    else{
        alert("Enter some Text")
    }
})