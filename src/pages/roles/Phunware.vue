d<template>
<rolePage image="phunware.png" roleContainerBg="#ffffff" rolecolorBg="#4784C5" projectname="Indoor Wayfinding" summarytitle="The Product" summary="Phunware’s Indoor Wayfinding SDK, enables large facilities to provide precise navigation for their customers, clients or patients by utilizing beacon technology. The indoor wayfinding SDK, has been used with a number of hospitals, airports and concert venues." caseheader="Wayfinding at Cedars-Sinai">
<template #roleUserInfo>
  <div class="userquote bold phunwarecolor">" This hospital is so big. I wish it was easier to navigate. "</div>
  <div class="phunwareuserpersona">
    <div class="phunwarealigncenter">
  <img src="@/assets/userpersona/phunwareusers.png" alt="User Persona Name" class="phunwarepersonaimg"/>
  <userInfoCard usercardbg="#4784C5"
  username="Suzy Gomez"
  :lines="[
    {label: 'Age', value: '35'},
    {label: 'Gender', value: 'Woman'},
    {label: 'Tech Efficiency', value: 'Moderate'},
    {label: 'Location', value: 'Mark Taper Foundation Imaging'},
  ]"
  />
  
  </div>
      </div>
    </template>

<template #roleCaseStudy>
  
  
<img src="@/assets/company/Phunware/objective.png" alt="Suzy Gomez Appointment info Location Mark Taper Foundation Imaging Center Time: 8:15 AM Objective To arrive on time and have coffee before going into work" />

  <div class="role2col">
    <div class="paraunit">
      <h3 class="roleh3">
        Suzy's Morning
      </h3>
      <p class="rolepara">Suzy has a mornining appointment with Cedars-Sinai at their Mark Taper Foundation Imaging Center at 8:15 AM. Suzy is worried about getting there on time since it a very early appointment and she has not been to this facility before but has heard its very big.</p>

      <p class="rolepara">When checking out the maps, she found that Cedars-Sinai has an app that allows indoor wayfinding. </p>
    </div>

    <div class="paraunit">
      <h3 class="roleh3">
        Solution
      </h3>
      <p class="rolepara">To help patients confidently arrive at their appointments, Cedars-Sinai and Phunware worked together to create an interactive map that could navigate their patients through the multiple buildings, parking lots, and floors of their campus.</p>

      <p class="rolepara">By engaging Phunware’s services, the biggest benefit was Step-by-step indoor wayfinding, which utilizes Bluetooth beacons to triangulate a user’s location. Each beacon is assigned a location which is given a corresponding location within the app. The beacons then ping off the user’s Bluetooth-activated phone to triangulate their location on the map. </p>
    </div>
  </div>

<div class="roleheaders bold cedarsroleheader">
    Navigating Cedars-Sinai
  </div>

  
  <div class="paraunit">
    <h3 class="roleh3">
      Navigating to Appointment
    </h3>
    <p class="rolepara">To find her way to her appointment, Suzy can search for her destination within Cedars-Sinai’s map. While she navigates, the maps will update with step-by-step directions and lines on the map for her to follow. For accessibility, there is a voice to announce each step along the way.</p>
  </div>

  <img src="@/assets/company/Phunware/hallwalker.png" />
  <img src="@/assets/company/Phunware/walkingtotaper.png" />

  <div class="paraunit">
    <h3 class="roleh3">
      Exploring places of interest
    </h3>
    <p class="rolepara">Suzy still needs her coffee. So while she waits, she can explore the area for places to find coffee, food, and other locations at the hospital. By using the filter function, she can see all the different types and scroll through them to find the location she is interested in.</p>
    <p class="rolepara">When you don’t know the exact name of the location you are looking for, this provides an opportunity for you to explore what is in the surrounding area.</p>
  </div>

  <img src="@/assets/company/Phunware/starbucks.png" />

  <div class="roleheaders bold cedarsroleheader">
    Finding Parking and your Parking Spot
  </div>
  <div class="role2col">
  <p class="rolepara">We all know that at big places like hospitals finding parking can be stressful and confusing. By using geofencing, the app provides Suzy with directions to the parking closest to her appointment when she arrives at the campus.</p>
  
  <p class="rolepara">When she arrives on campus, she is alerted to allow permission for the app to utilize this service and open the app to the directions of the plot from services like google maps.</p>
  </div>

  <img src="@/assets/company/Phunware/geofencing.png" />

  <div class="role2col">
  <div class="paraunit">
    <h3 class="roleh3">
      Remember your parking spot
    </h3>
    <p class="rolepara">After a long appointment, remembering where you parked can be hard, confusing and sometimes very frustrating. This app, helps keep the guess work out of the equation, by allowing the user quick access to placing a pin in the wayfinding system that allows them to navigate to and from your parking spot. </p>
  </div>

  <img src="@/assets/company/Phunware/parkingspot.png" />
  </div>

  <img src="@/assets/company/Phunware/parkingping.png" />
  <img src="@/assets/company/Phunware/routebackto.png" />
  <img src="@/assets/company/Phunware/routeback.png" />
  
  <div class="roleheaders bold phunwareroleheader">
      What I learned
    </div>
    <div class="paraunit">

    <p class="rolepara">Phunware was my first job out of college and was client based. I found this project aligned well with my strengths and passion for user experience. In comparison to different projects I did throughout my time at Phunware, I found the projects more user experience intense to be the ones I felt most proud of. I believe that was the benefit of a job that was so varied, I found early on what it was that I wanted to do with my career.</p>

    <p class="rolepara">At the time, when I was working with Cedars-Sinai, I was overwhelmed with all the logistics of scoping and meeting client expectations. I learned a lot about seeking to understand scope early in the project so that everyone can align quickly when starting a new project. This is also true when joining a project at any time.</p>
    </div>


    </template>

</rolepage>
</template>

<script>
import rolePage from '@/components/contents/rolePage.vue'
import userInfoCard from '@/components/Cards/userinfo.vue'

export default {
  name: 'phunwarePage',
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
.wsjaligncenter{
  width:100%;
  display: flex;
  gap:68px;
}

.phunwarepersonaimg{
  height:400px;
}

.cedarsroleheader{
  background-color:#982C3A;
  border-radius: 24px;
}

.phunwareroleheader{
  background-color:#4784C5;
  border-radius: 24px;
}

.wsjblue{
  background-color:#057b7;
}

.role2col{
}

.phunwarecolor{
  color:#146291;
}

.phunwarealigncenter{
  display: flex;
  gap:64px;
  padding-top:64px;
  align-items: center;
}


</style>

