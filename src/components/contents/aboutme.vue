<template>

<div class="aboutme">

        <div class="aboutmesec">

            <div class="aboutintro">
        <h1 class="abouth1">Hello There</h1> <img src="@/assets/aboutme/wave.png" alt="wave emote" />
        </div>

        <div class="bubble">
            <h2>I am Lisa, a UX Designer who loves solving problems and creating better experiences for things that matter.</h2>
        </div>

        <div class="aboutparaset">
        <div class="aboutset">
        <div class="paraabout">
            <h2>My Journey</h2>
            <p>My passion for UX Design truly took shape in college. One of my instructors taught me that the value of UX isn’t just about saying, "Oh, you need a website." It’s about deeply understanding your users’ challenges and crafting unique, thoughtful solutions to meet their needs.</p>
        </div>
        <img src="@/assets/aboutme/heart.png" alt="heart emote" />
        </div>

        <div class="aboutset">
        <div class="paraabout">
            <h2>My Design Beliefs</h2>
            <p>I believe great design stems from observation and actively seeking users’ reactions. These reactions tell stories about their experiences and help build the empathy and understanding needed to design solutions that seamlessly guide users toward their goals.</p>
        </div>
        <img src="@/assets/aboutme/thumbsup.png" alt="thumbs up emote" />
        </div>

            <div class="aboutset">
                <div class="paraabout">
                    <h2>My Tech Stack</h2>
                    <p>I primarily work with Figma but I have extensive experience with Adobe’s Creative Suite. Beyond design, I bring an added skill set in coding. I designed and coded this portfolio and all previous versions myself.  The tools I’ve used include: HTML, CSS, PHP, Vue, and JavaScript.</p>
                </div>
                <img src="@/assets/aboutme/thought.png" alt="thinking emote" />
                </div>

            <div class="aboutset">
            <div class="paraabout">
                <h2>My Achievements</h2>
                <p>In my career so far, I’ve had the privilege of transforming three proof-of-concept ideas into fully realized products. Became the subject matter expert and improved wayfinding product. Contributed to the trust and safety of millions of people around the world.  </p>
            </div>
            <img src="@/assets/aboutme/celebrate.png" alt="celebrate emote" />
            
            </div>
            </div>
            
            <div class="companyset">
        <div class="companylogos">
                <img src="@/assets/aboutme/phunware.png" alt="IBM logo" />
                <img src="@/assets/aboutme/ibm.png" alt="IBM logo" />
                <img src="@/assets/aboutme/paypal.png" alt="IBM logo" />
                <img src="@/assets/aboutme/wsj.png" alt="IBM logo" />
            </div>
        <div class="greenbar"></div>
        </div>

        <div class="aboutset">
        <div class="paraabout">
            <h2>My Life</h2>
            <p>Outside of work, you can find me immersed in fantasy books, playing cozy video games, cooking up something delicious, or exploring Texas on a hike. And if I’m working remotely, don’t be surprised if my cat, “Gorgeous Girl,” makes a guest appearance on screen.</p>
        </div>
        <img src="@/assets/aboutme/joy.png" alt="joy emote" />
        </div>

        

        <div class="bubble">
            <h2>Thanks for stopping by!</h2>
        </div>
        </div>

    </div>

</template>

<script>


export default {
  name: 'aboutme',

}
</script>

<style>

.aboutme{

    display: block;
    width:100vw;
}
.aboutmesec{
    display: flex;
    flex-direction: column;
    gap:72px;
    padding-bottom:96px;
    margin-left:8%;
    max-width: 936px;
}

.abouth1{
    font-size:42px;
    font-weight:700;
}

.paraabout h2{
    color:var(--nav-color);
    font-weight:700;
    font-size:22px;
}

.paraabout p{
    font-size:16px;
    line-height: 24px;
    max-width:580px;
}

.bubble{
    background-color:var(--green-accent);
    width:fit-content;
    
    border-radius: 52px;
}

.bubble h2{
    color:white;
    font-weight:700;
    font-size:22px;
    max-width:696px;
    padding:32px;
}

.greenbar{
display: block;
background-color: var(--green-accent);
height:20px;
width:100%;
}



.aboutintro{
    display: flex;
    gap:56px;
    align-items: center;
}

.aboutparaset{
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.companylogos{
    display: flex;
    justify-content: space-between;
}

.aboutset{
    display: flex;
    justify-content: space-between;
}

.companyset{
    display: flex;
    flex-direction: column;
    gap:72px;
    max-width: 580px;
}
</style>
