function olympicCountdown(){
    const olympicDate = new Date("July 26, 2026 18:00");
    const now = new Date();
    
    const result = olympicDate-now;
    
    const msInSeconds = 1000;
    const msInMinutes = 60*1000;
    const msInHours = 60*60*1000;
    const msInDays = 24*60*60*1000;

    const displayDays = Math.floor(result / msInDays);
    document.querySelector(".days").textContent = displayDays;

    const displayHours = Math.floor((result % msInDays)/msInHours);
    document.querySelector(".hours").textContent = displayHours;

    const displayMinutes = Math.floor((result % msInHours)/ msInMinutes);
    document.querySelector(".minutes").textContent = displayMinutes;

    const displaySeconds = Math.floor((result % msInMinutes)/ msInSeconds);
    document.querySelector(".seconds").textContent = displaySeconds;

    if(result <= 0){
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0; 
        clearInterval(timerId);
        letTheGamesBegin();
        
    }
}
    let timerId = setInterval(olympicCountdown,1000);

    function letTheGamesBegin(){
        const beginning = document.querySelector("h1");
        beginning.textContent = "Let The Games Begin!!!";
        beginning.classList.add("start");

    }
    
    const button = document.querySelector("#myButton");
    button.addEventListener("click",function(){
        document.querySelector(".myAudio").play();
    })
