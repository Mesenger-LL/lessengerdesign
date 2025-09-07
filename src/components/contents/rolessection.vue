<template> 
    <div class="roleSection">
	<rolesCard link="/WSJ" company="The Wall Street Journal" project="Executive Edition" description="An AI powered news feed, that provides tailored news to corporate employees based off their role, company and specified interests. " timeperiod="June 2022 – Dec 2022" image="WSJ.png"/>

    <rolesCard link="/paypal" company="PayPal" project="Digital Identity and Authentication " description="To protect user data, PayPal uses 2-Factor Authentication to verify a person’s account " timeperiod="June 2021 – Dec 2021" image="paypal.png"/>

    <rolesCard link="/cpe" company="IBM" project="Cloud Pak Experience" description="Digital adoption software, providing hands-on guided experience and onboarding for IBM’s private cloud solutions and platforms. " timeperiod="June 2022 – Dec 2022" image="CPE.png"/>

    <rolesCard link="/autoai" company="IBM" project="Auto AI" description="AutoAI applies intelligent automation to the steps of building predictive machine learning models by reducing data preparation and validation time." timeperiod="June 2022 – Dec 2022" image="autoai.png"/>

    <rolesCard link="/phunware" company="Phunware" project="Indoor Wayfinding" description="Wayfinding SDK that enables large facilities to provide precise floor-to-floor navigation by utilizing beacon and geofencing technology" timeperiod="June 2022 – Dec 2022" image="phunware.png"/>

    </div>

</template>

<script>
 import rolesCard from '../Cards/roles.vue'

export default{
    name: 'rolessection',
    components: {
    rolesCard
  }
}

</script>

<style>

    .roleSection{
        display: flex;
        flex-wrap: wrap;
        gap:28px;   
        padding-left:72px;
        padding-right:72px;
        padding-top:24px;
        padding-bottom:24px;
        justify-content: flex-start;
    }

</style>