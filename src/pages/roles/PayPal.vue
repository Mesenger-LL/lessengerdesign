<template>
<rolePage image="paypal.png" roleContainerBg="#003087" rolecolorBg="#56CCFE" projectname="Digital Identity and Authentication" summarytitle="The Project" summary="PayPal Digital Identity and Authorization is a product of PayPal focused on keeping user’s accounts secure and safe in the face of bad characters attempting fraudulent actions on others accounts. PayPal does this through presenting a user with a set of challenges that proves to PayPal that the user is a trusted and known person." caseheader="SMS Two-Factor Authentication">
<template #roleUserInfo>
  <div class="PPuserpersona">
    <div class="ppaligncenter">
  <img src="@/assets/userpersona/paypalusers.png" alt="User Persona Name" class="pppersonaimg"/>
  
  <div class="userquote bold paypalcolor">“ I want my money to feel secure, but I don’t want it to to be inconvenient to access it ”</div>

  <div class="ppusers">
  <userInfoCard usercardbg="#FED13C"
  username="Grant Patterson"
  :lines="[
    {label: 'Age', value: '68'},
    {label: 'Gender', value: 'Man'},
    {label: 'Tech Efficiency', value: 'Low'},
    {label: 'Account Type', value: 'Personal'},
    {label: 'Member for', value: '15 years'},
    {label: 'Account Usage', value: '~once/quarter'},
  ]"
  />

  <userInfoCard usercardbg="#FED13C"
  username="Jasmin Frederick"
  :lines="[
    {label: 'Age', value: '22'},
    {label: 'Gender', value: 'Woman'},
    {label: 'Tech Efficiency', value: 'High'},
    {label: 'Account Type', value: 'Personal'},
    {label: 'Member for', value: '3 years'},
    {label: 'Account Usage', value: '~every other day'},
  ]"
  />

  <userInfoCard usercardbg="#FED13C"
  username="Arvin Singh"
  :lines="[
    {label: 'Age', value: '45'},
    {label: 'Gender', value: 'Man'},
    {label: 'Tech Efficiency', value: 'High'},
    {label: 'Account Type', value: 'Business'},
    {label: 'Member for', value: '10 years'},
    {label: 'Account Usage', value: '~daily'},
  ]"
  />

  <userInfoCard usercardbg="#FED13C"
  username="April Hansel"
  :lines="[
    {label: 'Age', value: '38'},
    {label: 'Gender', value: 'Woman'},
    {label: 'Tech Efficiency', value: 'Moderate'},
    {label: 'Account Type', value: 'Business'},
    {label: 'Member for', value: '4 years'},
    {label: 'Account Usage', value: 'daily'},
  ]"
  />
    </div>
  
  </div>
      
      </div>
    </template>

<template #roleCaseStudy>
    <div class="role2col ppsec1">
  <div class="paraunit">
  <h3 class="roleh3">
    Product's Request
  </h3>

  <p class="rolepara">“Create a timer for the SMS code request” </p>

  <p class="rolepara">As the first designer on this product team, they had a lot of requests to solve for issues they were having problems with. But as the first designer, it was also my job to discern that, requests don’t have to be taken at face value and instead ask the question of “why”.  </p>
</div>

  <img src="@/assets/company/PayPal/timerrequest.png" />
  </div>
  
  <div class="roleheaders bold pproleheader">
    Didn't get a code?
  </div>
  
<div class="role2col">
    <div class="paraunit">
    <h3 class="roleh3">
      Product's Actual Problem
    </h3>

    <p class="rolepara">They found that there was a large number of new code requests that typically happened within seconds of eachother. </p>

    <p class="rolepara">Aside from the apparent user issues they were experiencing, repeat code requests was incurring a high cost and needed to be addressed from a business standpoint. </p>
    </div>

    <div class="paraset">
    <div class="paraunit">
    <h3 class="roleh3">
      Assumptions
    </h3>

    <p class="rolepara"><em>Assumption 1:</em> Users do not see a clear indicator that their request has been processed </p>

    <p class="rolepara"><em>Assumption 2:</em> Users may need more options  </p>
    
    </div>
    
    <div class="paraunit">
    <h3 class="roleh3">
      Idea
    </h3>
    <p class="rolepara">To request a new authentication code, users must first access a menu to request a new code to be sent via SMS. This menu will also include other options for the users that may be more appropriate method for their code retrieval. </p>
    </div>


    
    </div>
  </div>

  <img src="@/assets/company/PayPal/tryanotherway.png" />

  <div class="gap24px">
  <h2 class="roleh2 bold">User Testing</h2>
  <p class="rolepara">To test if the new design, I created a prototype that allowed the research team to run a series of tests with users to see their reactions, how well they understood the new designs and if they could navigate it easily. </p>

  <img src="@/assets/company/PayPal/researchresult.png" />

  <div class="paraunit">
    <h3 class="roleh3">
      Results
    </h3>
    <p class="rolepara">From observiing the interviews, I found users were more likely to be in tun with the other options listed under “Didin’t get a code?” and did not always feel that resending their code via SMS was their preferred option.</p>

  </div>
  </div>

  <div class="roleheaders bold pproleheader">
    Mandatory Phone Confirmation
  </div>

<div class="role2col">
  <div class="paraunit">
  <h3 class="roleh3">
    Problem
  </h3>
  <p class="rolepara">While I was working on the new updates for the Authentication method, an immediate problem arose. Product had changed it to require users to use 2-Factor Authentication and customer services was receiving frequent letters expressing and frustration that they were unable to access their accounts.  </p>

  <p class="rolepara">The users were typically senior citizen users who were less likely to have a personal mobile phone to use for autheticating.  </p>
  </div>

  <div class="paraunit">
    <h3 class="roleh3">
      My approach
    </h3>
    <p class="rolepara">After a meeting with too many cooks in the kitchen, I reached out to the customer service agent who brought the issue forward and requested they send me letters they had received so I could understand the problem.  </p>

    <p class="rolepara">After reading the letters, I realized some of it was a need for a design update, but some was also a need for content design change. </p>

    <p class="rolepara">This was already currently a blocker so it needed to be addressed immediately so I approached a phased approach to first change the mobile centric language to eventually match the expansion of authentication methods I had been working on.  </p>
  </div>
  </div>

  <img src="@/assets/company/PayPal/addnumber.png" />
  

  

  <div class="roleheaders bold pproleheader">
    Using Design System
  </div>

  <div class="paraunit">
    <h3 class="roleh3">
      Versioning
    </h3>
    <p class="rolepara">While designing authorization challenged I had to build designs for both PayPal’s design systems, the original 1.0 and the new 2.0 system. </p>

    <p class="rolepara">Through out designing authorization challenges I used these design systems to help me build an interface that would be consistent with the established patterns of PayPal UI while also building something that would work best for solving user problems. </p>
  </div>

  <img src="@/assets/company/PayPal/reskin.png" />


  
    </template>

</rolepage>
</template>

<script>
import rolePage from '@/components/contents/rolePage.vue'
import userInfoCard from '@/components/Cards/userinfo.vue'

export default {
  name: 'PayPalPage',
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

.ppuserpersona{
  display: flex;
  flex-direction: column;
}

.ppaligncenter{
  width:100%;
  display: flex;
  flex-direction: column;
  gap:64px;
  align-items: center;
}

.pppersonaimg{
  width:100%;
  padding-left:48px;
  padding-right:48px;
}

.pproleheader{
  background-color:#003087;
  border-radius: 24px;
}

.ppsec1{
  display: flex;
  align-items: center;
}

.ppsec1 img{
  width: 100%;
  height: 100%;
  object-fit: cover; /* or contain for no crop */

}

.ppusers {
  display: grid;
  grid-template-columns:repeat(2,1fr);
  gap:48px;
  align-items: stretch;
}

.paypalcolor{
  color:#003087;
}

.paraset{
  display: flex;
  flex-direction: column;
  gap:24px;
}

</style>

