<template>
<rolePage image="CPE.png" roleContainerBg="#000000" rolecolorBg="#D12370" projectname="Cloud Pak Experiences" summarytitle="The Product" summary="IBM Cloud® Paks are a set of enterprise-ready, containerized software with on-premise solutions covering domains such as Applications, Automation, Data, and Multi-cloud management. Cloud Pak Experiences utilizes kubernetes to create publicly available instances of the Cloud Pak’s interface. On these instances, digital adoption software is used to create a guided tutorial that highlights the value of a product function within a mortgage use case scenario." caseheader="Cloud Pak for Automation">
<template #roleUserInfo>
  <div class="cpeuserpersona">
    <div class="cpealigncenter">
  <img src="@/assets/userpersona/cpeusers.png" alt="User Persona Name" class="cpepersonaimg"/>


  <div class="cpeperset">
    <div class="usercolumn">
      <div class="userquote bold cpe1color">“ Installing a POC can be costly and take a lot of time. I wish they had a way to review the products before installation. ”</div>

      <userInfoCard usercardbg="#284FAC"
      username="Yousuf Villegas"
      :lines="[
        {label: 'Age', value: '46'},
        {label: 'Gender', value: 'Man'},
        {label: 'Occupation', value: 'Senior Sale Engineer'},
        {label: 'Organization', value: 'Cloud Pak for Automation'},
      ]"
      />

      <userInfoCard usercardbg="#284FAC"
      username="Miles Sawyer"
      :lines="[
        {label: 'Age', value: '51'},
        {label: 'Gender', value: 'Man'},
        {label: 'Occupation', value: 'Product Executive'},
        {label: 'Organization', value: 'Cloud Pak for Data'},
      ]"
      />
  </div>

    <div class="usercolumn">

    <div class="userquote bold cpe1color">“ I wish I could experience more of a private cloud solution before installation. ”</div>

    <userInfoCard usercardbg="#00ABA9"
    username="Sumaiya Sutton"
    :lines="[
      {label: 'Age', value: '34'},
      {label: 'Gender', value: 'Man'},
      {label: 'Occupation', value: 'Senior Engineer'},
      {label: 'Tech Efficiency', value: 'High'},
    ]"
    />

    <userInfoCard usercardbg="#00ABA9"
    username="Cory Newton"
    :lines="[
      {label: 'Age', value: '34'},
      {label: 'Gender', value: 'Woman'},
      {label: 'Occupation', value: 'Data Engineer'},
      {label: 'Tech Efficiency', value: 'Above Average'},
    ]"
    />
    </div>
  

  </div>

  </div>
      </div>
    </template>

<template #roleCaseStudy>

  <img src="@/assets/company/CPE/workflowmap.png" />
  
  <div class="paraunit">
    <h3 class="roleh3">
      Cross Team Collaboration
    </h3>
    <p class="rolepara">Each Pak's first phase started with a conversation with this Pak's Product Stakeholders and Sales team. This conversation typically started by discussing what tools were within that Cloud Pak, what features they provided, how valuable they were as a sales tool, and especially how presentable the tools were.</p>

    <p class="rolepara">But most of all to adhere to limitations, we had to determine the products' compatibilities with the the third-party onboarding tool we were using, AppCues.</p>

  </div>


  <div class="roleheaders bold cperoleheader">
    How does Cloud Pak Experiences help?
  </div>
  <div class="role2col">
    <div class="paraunit">
      <h3 class="roleh3">
        What we are
      </h3>
      <p class="rolepara">Cloud Pak Experiences, creates an sale and onboarding tool that allows potential customers navigate and assess the software in a live environment.  </p>
    </div>

    <div class="paraunit">
      <h3 class="roleh3">
        Mock Ups
      </h3>
      <p class="rolepara">To visualize where and when we would use onboarding cards, we took existing shots of the software. I would ask questions like, why would they do this, how do they do it and how could this benefit them? </p>

      <p class="rolepara">This helped pull out information that would be important to guide them through the product that would show them the capabilities of the product while discussing the capabilities and features. </p>
    </div>

  </div>
  <img src="@/assets/company/CPE/processmural.png" />
  <img src="@/assets/company/CPE/windowprocess.png" />

  <div class="paraunit">
    <h3 class="roleh3">
      Component Library
    </h3>
    <p class="rolepara">While working on the project across different Paks with my team, I found that we were using multiple similar but not consistent designs. To help maintain consistency, I put together a component library of all of our commonly used elements. This made it easier for us to expand our tools to other design teams who were designing onboarding solutions for different Cloud computing products. </p>
  </div>

  <img src="@/assets/company/CPE/component.png" />

  <div class="role2col">
    <div class="paraunit">
      <h3 class="roleh3">
        Implementation
      </h3>
      <p class="rolepara">Cloud Pak Experiences was a unique project for designers. There were no dedicated developers to the team and since we were using Appcues to implement the onboarding and wall through. With each project I would use appcues to map interactions with their respective component. It was similar to creating a prototype, but with a bit more troubleshooting because it was attached to a live website and the complications that came with it. I am thankful that I had a moderate knowledge of coding that enabled being independent in this way. </p>
    </div>


    
    <img src="@/assets/company/CPE/implementation.png" />

  </div>
  <img src="@/assets/company/CPE/mockups.png" />

  <div class="roleheaders bold cperoleheader">
    Impact
  </div>

  <p class="rolepara">With flows built out for three Cloud Paks our project drove tens of millions of dollars in sales towards the Cloud Paks which have been IBMs main focus over the last few years </p>

  
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
.cpealigncenter{
  width:100%;
  display: flex;
  flex-direction: column;
  gap:68px;
}

.cpepersonaimg{
  width:464px;
  width:100%;
}

.cperoleheader{
  background-color:#D12765;
}

.wsjblue{
  background-color:#057b7;
}

.cpeusers{
  display: flex;
  flex-direction: column;
}

.cpe1color{
  color:#284FAC;
}

.cpe1color{
  color:#004D57;
}


</style>

