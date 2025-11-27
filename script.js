// 🎵 Background Music Control
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

let isPlaying = false;

// Required for mobile: start after first user interaction
document.addEventListener("click", function autoStart() {
  bgMusic.play();
  isPlaying = true;
  musicToggle.textContent = "🔈 Pause Music";
  document.removeEventListener("click", autoStart);
});

musicToggle.addEventListener("click", function (e) {
  e.stopPropagation();

  if (isPlaying) {
    bgMusic.pause();
    musicToggle.textContent = "🔊 Play Music";
  } else {
    bgMusic.play();
    musicToggle.textContent = "🔈 Pause Music";
  }

  isPlaying = !isPlaying;
});

        
        
        
        // Countdown Timer
        function updateCountdown() {
            const targetDate = new Date('November 30, 2025 00:00:00').getTime();
            const now = new Date().getTime();
            const distance = targetDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const timerElement = document.getElementById('countdownTimer');
            
            if (distance < 0) {
                timerElement.innerHTML = '<div class="time-unit"><span class="time-value">🎉</span><span class="time-label">It\'s Time!</span></div>';
            } else {
                timerElement.innerHTML = `
                    <div class="time-unit">
                        <span class="time-value">${days}</span>
                        <span class="time-label">Days</span>
                    </div>
                    <div class="time-unit">
                        <span class="time-value">${hours}</span>
                        <span class="time-label">Hours</span>
                    </div>
                    <div class="time-unit">
                        <span class="time-value">${minutes}</span>
                        <span class="time-label">Minutes</span>
                    </div>
                    <div class="time-unit">
                        <span class="time-value">${seconds}</span>
                        <span class="time-label">Seconds</span>
                    </div>
                `;
            }
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);

        // Birthday Cards
        const cardsData = [
          { image: "./images/1.jpg",
            message: "Happy 40th Birthday! Today we celebrate four decades of grace, beauty, strength, and God’s goodness in your life. You are truly a blessing!" },
        
          { image: "./images/2.jpg",
            message: "At 40, you shine brighter than ever. Your faith, love, and kindness light the way for everyone around you." },
        
          { image: "./images/3.jpg",
            message: "You are proof that hard work, faith, and love create a beautiful life. Incredible woman!" },
        
          
        
          { image: "./images/125.jpg",message: "You are not just aging — you are increasing in wisdom, grace, and beauty." },
        
         
        
          { image:"./images/7.jpg",
            message: "A virtuous woman, a loving mother, a strong believer — today we celebrate YOU!" },
        
          { image:"./images/8.jpg",
            message: "As you turn 40, may your joy overflow and your faith grow deeper every day." },
        
          {image:"./images/9.jpg",
             message: "Bible Verse: 'The Lord bless thee, and keep thee.' – Numbers 6:24 (KJV)" },
        
          { image:"./images/10.jpg",
            message: "Your beauty shines not just on the outside, but through your heart, your faith, and your sacrifice as a mother." },
        
          { image:"./images/11.jpg",
            message: "Happy Birthday to a woman who carries strength with elegance and faith with confidence." },
        
          { image:"./images/12.jpg",
            message: "At 40, you are walking proof that God’s timing is always perfect." },
        
          { image:"./images/13.jpg",
            message: "Your children are blessed to have a praying, loving, and hardworking mother like you." },
        
          { image:"./images/14.jpg",
            message: "Bible Verse: 'She is clothed with strength and honor.' – Proverbs 31:25 (KJV)" },
        
          { image:"./images/15.jpg",
            message: "May your days be filled with peace, your home with joy, and your heart with gratitude." },
        
          { image:"./images/16.jpg",
            message: "Your life reflects discipline, faith, and a heart that truly loves God. Happy 40th!" },



        
         



        
          {image:"./images/18.jpg", message: "40 years of building, loving, praying, and persevering and you’re just getting started!" },
        
          {image:"./images/19.png", message: "Bible Verse: 'For I know the plans I have for you.' – Jeremiah 29:11 (KJV)" },
        
          {image:"./images/124.jpg", message: "May this new decade bring deeper peace, bigger victories, and sweeter testimonies." },
        
          {image:"./images/123.jpg", message: "Your hands were made to nurture, to build, and to bless. Woman of purpose!" },
        
         
        
          {image:"./images/23.jpg", message: "You are a living reminder that faith and hard work always yield beautiful results." },
        
          {image:"./images/24.jpg",
             message: "Bible Verse: 'The joy of the Lord is your strength.' – Nehemiah 8:10 (KJV)" },
        
          {image:"./images/25.jpg",
             message: "At 40, you stand as a pillar of strength in your family and a light in your generation." },



 {image:"./images/129.jpg",  
          message: "You make motherhood look powerful, graceful, and sacred. Happy Birthday!" },




        
          {image:"./images/26.jpg",
             message: "Your journey inspires faith, patience, and unwavering trust in God." },




        
          { image:"./images/27.jpg",
            message: "May God reward every sacrifice, every tear, and every prayer you’ve sown over the years." }, 
            
          {image:"./images/22.jpg", message: "Your smile carries hope, your words carry wisdom, and your life carries impact." },
        
          {image:"./images/28.jpg",
             message: "Happy Birthday to a woman whose beauty flows from the inside out." },
        
          { image:"./images/29.jpg",
            message: "Bible Verse: 'Commit thy works unto the Lord.' – Proverbs 16:3 (KJV)" },

            { image:"./images/37.png",
            message: "With God all things are possible. He made you possible' – Matthew 19:26 (KJV)" },

        
          { image:"./images/132.png",
            message: "Your perseverance tells a story of victory — and your best chapters are still ahead." },

            
        
          { image:"./images/31.png",
            message: "You age with grace, lead with wisdom, and love with all your heart." },
        
          { image:"./images/32.png",
            message: "40 is not just a number — it’s a crown of experience, honor, and divine favor." },





        
          { image:"./images/33.png",
            message: "The Lord is your shepherd; You shall not want. – Psalm 23:1" },
        
          { image:"./images/34.png",
            message: "Your children rise blessed because you kneel in prayer for them first." },
        
          { image:"./images/35.png",
            message: "May your laughter be louder, your peace be deeper, and your faith be stronger than ever." },





        
          { image:"./images/126.jpg",
            message: "Your life is a sermon without words — and it preaches excellence, faith, and love." },
        
          
             { image:"./images/45.jpg",
            message: "Your life is a testimony of what God can do through a devoted heart. 40 looks amazing on you!" },
        
          { image:"./images/38.png",
            message: "You are living proof that a woman can be gentle and powerful at the same time." },

            { image: "./images/44.png",
            message: "40 years of impact, purpose, and divine favor. May the next chapter be even greater." },
        
          { image:"./images/127.jpg",
           
           
           
   message: "40 years of God’s faithfulness — and the future is even brighter!" },


        ];
        








        const container = document.getElementById('cardsContainer');

        cardsData.forEach((cardData, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="checked-mark">✓</div>
                <div class="card-inner">
                    <div class="card-front">
                        <div class="card-symbol">♠</div>
                    </div>
                    <div class="card-back">
                        <img src="${cardData.image}" alt="Card ${index + 1}" class="player-image">
                        <div class="card-message">
                            <p>${cardData.message}</p>
                        </div>
                    </div>
                </div>
            `;
            
            card.addEventListener('click', function(e) {
                this.classList.toggle('flipped');
                if (this.classList.contains('flipped')) {
                    this.classList.add('viewed');
                }
            });

            container.appendChild(card);
        });
 




        