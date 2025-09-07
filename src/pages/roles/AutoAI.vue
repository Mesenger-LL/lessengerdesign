<template>
<rolePage image="autoai.png" roleContainerBg="#0B2B30" rolecolorBg="#D12370" projectname="Auto AI" summarytitle="The Product" summary="IBM Watson Studio helps data scientists and analysts prepare data and build models at scale across any cloud. AutoAI accelerates Data Scientist’s work by evaluating the predictions they are trying to make by automatically performing actions such as manipulating the data and evaluating the results for accuracy. All of this is done within a fraction of the time for a human to complete them." caseheader="Auto AI Wizard and Dashboard">
<template #roleUserInfo>
  <div class="autoaiuserpersona">
    <div class="autoaialigncenter">
  <img src="@/assets/userpersona/autoaiusers.png" alt="User Persona Name" class="autoaipersonaimg"/>

  <div class="userquote bold ibmcolor">"AI is an extremely useful tool, but can sometimes feel out of reach. "</div>
  
<div class="autoaiusergroup">
  <userInfoCard usercardbg="#1BA9B9"
  username="Grant Patterson"
  :lines="[
    {label: 'Age', value: '32'},
    {label: 'Gender', value: 'Man'},
    {label: 'Occupation', value: 'Senior Engineer'},
    {label: 'Data Proficiency', value: 'Personal'},
  ]"
  />

  <userInfoCard usercardbg="#1BA9B9"
  username="Ahmad Hardin"
  :lines="[
    {label: 'Age', value: '45'},
    {label: 'Gender', value: 'Man'},
    {label: 'Occupation', value: 'Product Manager'},
    {label: 'Data Proficiency', value: 'Low'},
  ]"
  />

  <userInfoCard usercardbg="#1BA9B9"
  username="Caroline Calhoun"
  :lines="[
    {label: 'Age', value: '35'},
    {label: 'Gender', value: 'Woman'},
    {label: 'Occupation', value: 'Product Manager'},
    {label: 'Data Proficiency', value: 'High'},
  ]"
  />

  <userInfoCard usercardbg="#1BA9B9"
  username="Kelsie Ryan"
  :lines="[
    {label: 'Age', value: '58'},
    {label: 'Gender', value: 'Woman'},
    {label: 'Occupation', value: 'Product Manager'},
    {label: 'Data Proficiency', value: 'Moderate'},
  ]"
  />

  </div>
  </div>
      </div>
    </template>

<template #roleCaseStudy>
  <div class="roleheaders bold cperoleheader">
    Getting to know the Domain
  </div>
  <div class="role2col">
  <div class="paraunit">
      <h3 class="roleh3">
        Target Users
      </h3>
      <p class="rolepara">Just as it is now, AI was a hot topic and a desirable tool. Predictive models are most desirable in companies that are involved in risk assessment, such as insurance companies. Not every company has the budget to afford subject matter experts in AI and teams involved in creating predictive models. To bridge the gaps fo access to AI, IBM wanted to create a solution that could help these people with finding a predictive model.</p>
    </div>

    <div class="paraunit">
      <h3 class="roleh3">
        Understanding the Domain
      </h3>
      <p class="rolepara">AI is a complicated domain involving many people from differing backgrounds. To understand our product, I had to understand the domain and the product’s users. My team started by understanding the typical process of creating a successful model manually, and how that could be transposed to be done automatically.</p>

      <p class="rolepara">To the best of my understanding, prediction models are made up of data, algorithms, assumptions, and the final step of validation. To start a column from a dataset is chosen to be the target for prediction. This then would be run through an algorithm’s pipeline, which would calculate different predictive answers for the selected column. After going through the pipelin,e predictions would then be validated by comparing data from complete datasets.</p>
    </div>
  </div>


  <img src="@/assets/company/AutoAI/aiunderstanding.png" />
<div class="role2col"></div>
<div class="paraunit">
    <h3 class="roleh3">
      Defining Auto AIs MVP Features
    </h3>
    <p class="rolepara">We broke down what we learned about AI into a framework to understand and define the project scope. The design team collaborated to label different features that could be established in Auto AI. As we labeled the different steps, we started defining what could be within the scope of an MVP. This helped us to prioritize what we would be including in our iterations and to note the features that could be included at a later date.</p>
  </div>

  <img src="@/assets/company/AutoAI/featureprocess.png" />

<div class="roleheaders bold cperoleheader">
    Running Auto AI
  </div>
  <div class="paraunit">
    <h3 class="roleh3">
      Training
    </h3>
    <p class="rolepara">Set up is the part where Auto AI is doing the heavy lifting. Each set of data is sent through multiple algorithms' pipelines and then predictive data is validated against complete data sets.</p>
  </div>

  <img src="@/assets/company/AutoAI/flowmapsetup.png" />

  <div class="paraunit">
    <h3 class="roleh3">
      Evaluation
    </h3>
    <p class="rolepara">Each pipeline is given an accuracy rating. This system helps people track and see what predictive model is most likely to achieve the desired outcome of predictability. And for those a little bit more knowledgeable there are deeper views to see the different algorithmic scores.</p>
  </div>

  <img src="@/assets/company/AutoAI/dashboard.png" />



  <div class="roleheaders bold cperoleheader">
    What I learned
  </div>
  <div class="role2col">
    <p class="rolepara">I think this project was a great chance to learn about scoping because the design team had blue skies and was instrumental in defining the scope. Having first-hand experience in defining features useful for a product and then prioritizing them gave me the skill of a deeper perspective of business goals.</p>

    <p class="rolepara">Obviously—I learned about AI. How it worked, and I gained a lot of good domain knowledge. What was interesting most to me was how it could AI could be compared to a human's thinking processes. For me, this project provided a psychological insight into the decisions of individuals. This psychological comparison was the most interesting aspect I learned from this project.</p>
  </div>
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

.autoaialigncenter{
  width:100%;
  display: flex;
  flex-direction: column;
  gap:68px;
}

.autoaijpersonaimg{
  width:464px;
  width:40%;
}

.autoaiusergroup{
  display: grid;
  grid-template-columns:repeat(2,1fr);
  gap:48px;
  align-items: stretch;
}

.ibmcolor{
  color:#146291;
}

</style>

