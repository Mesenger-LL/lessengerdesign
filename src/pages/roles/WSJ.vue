<template>
<rolePage image="WSJ.png" roleContainerBg="#F4FBFF" rolecolorBg="#0574B7" projectname="Executive Edition" summarytitle="The Project" summary="The Wall Street Journal, as a news source, needs to stay up-to-date with technology to remain both relevant to its audience and solidify connections with the companies that lead the world’s technology. The Wall Street Journal collaborated with AWS on this project to utilize AI and create news feeds specifically tailored to provide relevant news to companies and their employees. As proven time and again with internet services, customized and tailored experiences are highly desirable benefits of online content providers."

caseheader="Core Elements of Executive Edition">
<template #roleUserInfo>
  <div class="WSJuserpersona">
    <div class="userquote bold wsjcolor">"I'm tired of reviewing multiple news sources everyday to keep track of relevant news."</div>
    <div class="wsjaligncenter">
  <img src="@/assets/userpersona/WSJuser.png" alt="User Persona Name" class="wsjpersonaimg"/>
  <div>
  <userInfoCard usercardbg="#F8991C"
  username="Carl Johnson"
  :lines="[
    {label: 'Occupation', value: 'Senior Product Manager'},
    {label: 'Company', value: 'Amazon Web Services'},
    {label: 'Income', value: '$200,000'},
    {label: 'Location', value: 'New York City'},
  ]"
  />
  </div>
  </div>
      <div class="trustednews">
        <h2 class="newssource bold">Preferred Trusted News Sources</h2>
        <img src="@/assets/userpersona/preferrednews.png" alt="User Persona Name" class="newssources"/>
      </div>
      </div>
    </template>

<template #roleCaseStudy>
  <div class="roleheaders bold wsjroleheader">
    Interests
  </div>
<div class="role2col">
  <p class="rolepara">As part of the onboarding process, users define their company, job role, and a few interests. This gives the algorithm a starting point for creating a curated list. This way, users can constantly improve their customization and WSJ can increase transparency. Each suggested article has interests associated with the article’s subject matter and content.</p>

  <img src="@/assets/WSJ/interests.png" />
  </div>

  <div class="gap24px">
      <h2 class="roleh2 bold">Preference Center</h2>

      

      <img class="gb" src="@/assets/WSJ/preference-center.png"/>
    <div class="role2col">
      <div class="paraunit">
        <h3 class="roleh3">
          What's it for?
        </h3>
        <p class="rolepara">The preference center is where the users can have more control of their feeds tailoring. By expressing and managing the two types of interests, users are able to ensure there feed matches their changing needs. </p>
      </div>

      <div class="paraunit">
      <h3 class="roleh3">
        Design Reasoning
      </h3>
      <p class="rolepara">To accommodate for an unknown length of interests, the save and cancel buttons were put at the top of the section for easy access. </p>
      </div>
    </div>
    </div>
  <div class="roleheaders bold wsjroleheader">
    Tailored News Feed
  </div>

  <div class="gap24px">
    <h2 class="roleh2 bold">Feed Layout Exploration</h2>
    <div class="plax">
    <div class="wsj2img gb">
        <img src="@/assets/WSJ/Layout-Exploration-1.png" />
        <img src="@/assets/WSJ/Layout-Exploration-2.png" />
      </div>

    <div class="paraunit">
      <h3 class="roleh3">
        Design for AI with the Past in Mind
      </h3>
      <p class="rolepara">The design of this AI-curated feed needed to be differentiated from the main WSJ to create a clear visual distinction. To create a new layout while maintaining the WSJ brand feel, I referenced multiple different physical newspapers. I tried coming up with different article “card” types that could be placed within the feed. </p>
    </div>

    
    </div>
  </div>

  <div class="gap24px">
  <h2 class="roleh2 bold">Feed Order</h2>

    <div class="plax">
      <img class="gb" src="@/assets/WSJ/NumberedDash1.png" />

        <div class="paraunit">
        <h3 class="roleh3">
          How AI can generate the feed
        </h3>
        <p class="rolepara">To handle how the MLM would assign posts, we determined a set layout that could remain consistent for the output. In early explorations, I proposed that we order based on importance. If it doesn’t have an image, the article would be lowered in priority until it reaches a slot that does not require an image.  </p>
      </div>
      </div>

      </div>

      <div class="plax">
        <img class="gb" src="@/assets/WSJ/NumberedDash2.png" />

        <div class="paraunit">
          <h3 class="roleh3">
            AI's Feed
          </h3>
          <p class="rolepara">To simplify this suggestion, we decided to use two feeds. One feed included the top articles with featured images, and the other included the top articles without any featured image.</p>
        </div>
      </div>
  

  <div class="roleheaders bold wsjroleheader wsjblue">
    Final Designs
  </div>

  <div class="paraunit">
    <h3 class="roleh3">
      Main Feed
    </h3>
    <p class="rolepara">By the end of my contract, I delivered five different types of feed. One was the default home feed that became the blueprint for the other feeds. This feed contained the top news for all their reader’s interests and had a competitor’s module which targets competitors of the company they work at. This also included a stock module and trending news section.</p>
  </div>

  <img class="gb" src="@/assets/WSJ/DashboardHome.png" />
<div class="plax">
  <div class="paraunit">
    <h3 class="roleh3">
      Interest Feeds
    </h3>
    <p class="rolepara">The below feeds focus on the industries or companies the readers expressed interest in. This shows a section, “Signals,” which are articles that signal major changes to occur within the industry or companies of interest.</p>
  </div>

  <div class="wsj2img">
  <img class="gb" src="@/assets/WSJ/industries.png" />
  <img class="gb" src="@/assets/WSJ/companies.png" />
    </div>
  </div>

  <div class="plax">
  <div class="paraunit">
    <h3 class="roleh3">
      Interest Feeds
    </h3>
    <p class="rolepara">The below feeds have a focus on an individual industry or individual company. These can be selected directly from interest titles throughout the feeds. From here the reader can review specific information to that industry or company and add it as an interest from there. Individual Company feeds will have information regarding stocks and competitor news.</p>
  </div>

  <img class="gb" src="@/assets/WSJ/company.png" />

  </div>


  <div class="roleheaders bold wsjroleheader">
    Components
  </div>

  <div class="role2col">
    <div>
      <div class="paraunit">
      <h3 class="roleh3">
        Modules
      </h3>
      <p class="rolepara">From the beginning of my journey with WSJ, the designs had a section in the right rail to align with WSJ’s design system to include ad space.  In this portion I utilized the space to create an interest management and discovery set. As the designs expanded, we need more modules that could provide helpful information and articles at a glance</p>
    </div>

    <img src="@/assets/WSJ/module1.png" />

    <div class="paraunit paddingplus">
    <h3 class="roleh3">
      Components are Friends
    </h3>
    <p class="rolepara">As a new product at WSJ, I was defining many new patterns. Not only did I rely on components as a way to pass off items that could be included in a design system, but I also used components to iterate quickly. Little changes could be expressed all across the designs in a matter of seconds. With this and auto layout, the iterative process was made quicker at scale.</p>
  </div>

    </div>

    <img class="fiximage" src="@/assets/WSJ/module2.png" />
  </div>

  

  <img src="@/assets/WSJ/Components16u.png" />
  <img src="@/assets/WSJ/Components12u.png" />
  <img src="@/assets/WSJ/Components4u.png" />

  
    </template>

</rolepage>
</template>

<script>
import rolePage from '@/components/contents/rolePage.vue'
import userInfoCard from '@/components/Cards/userinfo.vue'

export default {
  name: 'WSJPage',
  components: {
    rolePage,
    userInfoCard
  }
}
</script>

<style>

.rolepara{
  width:368px;
}

.WSJuserpersona{
display: flex;
flex-direction: column;
gap:32px;
align-items: center;
}

.wsjaligncenter{
  width:100%;
  display: flex;
  gap:40px;
  align-items: center;
}

.wsjpersonaimg{
  width:464px;
  width:40%;
}

.wsjroleheader{
  background-color:#F8991C;
}

.wsjblue{
  background-color:#0574B7;
}

.plax{
  display: flex;
  flex-direction: row;
  gap:48px;

}

.plax img{
  width: fit-content;
  max-width:648px;
}

.wsj2img{
  display: flex;
  flex-direction: column;
  gap:24px;

}

.newssource{
  background-color:white;
  width: fit-content;
  padding:8px;
  margin-left:40px;
  z-index:10;
  position: absolute;
  margin-top:-22px;
}

.newssources{
  border:solid #D2D3D4 1px;
  padding-top:32px;
  padding-left:24px;
  padding-bottom: 24px;
  padding-right:48px;
}

.trustednews{
  margin-top:22px;
}

.wsjcolor{
  color:#146291;
}

.gb{
  border:solid 1px #D2D3D4;
}

.paddingplus{
  padding-top:24px;
}

.role2col img{
  height:auto;
  align-self: flex-start;
  flex-shrink:0;
}

</style>

