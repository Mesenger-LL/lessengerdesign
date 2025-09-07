<template>
    <div class="footer">
        <LogoVertical />
        <div class="content">
            <div class="footleft">
                <div class="rolequote">
                    <h1>UX + Visual Design</h1>
                    <h2>Experience defines who we are and how we react.</h2>
                    <h2>Let's create positive reactions.</h2>
                </div>
                <ButtonCTA label="Back to Top" icon="arrowup" to="#top" />
            </div>
            <div class="footright">

                <div class="contact">
                    <h1>Get in Touch</h1>
                    <h2>lisalessenger@gmail.com</h2>
                </div>

                <div class="link-columns">
                    <div class="navcolumn">
                        <navlinks label="Blog" to="/ongoing" />
                        <navlinks label="About Me" to="/roles" />
                    </div>

                    <div class="navcolumn">
                    <navlinks label="Ongoing Projects" to="/ongoing" />
                    <navlinks label="Design Roles" to="/roles" />
                    <navlinks label="Case Studies" to="/studies" />

                    </div>
                </div>
            </div>
        </div>
        <p class="copyright">	&#169; Designed and Coded by Lisa Lessenger</p>
    </div>
</template>

<script setup>
import navlinks from '../Links/navlinks.vue';
</script>

<script>
import LogoVertical from '@/components/Logo/LogoVertical.vue';
import ButtonCTA from '@/components/Links/buttonCTA.vue';

export default{
    name: 'footerDesktop',
    components: {
    LogoVertical,
    ButtonCTA
  }
}
</script>


<style>
.footer{
    display:flex;
    flex-direction: column;
    background-color: var(--bg-color);
    justify-content: space-between;
    align-items: center;
    padding-left:176px;
    padding-right:176px;
    padding-top:88px;
    padding-bottom:112px;
    gap:80px;
}

.footleft{
    display: flex;
    flex-direction: column;
    gap:32px;
}

.footright{
    display: flex;
    flex-direction: column;
    gap:32px;
}
.content{
    width:100%;
    display:flex;
    align-items: center;
    justify-content: space-between;
}

.contact{
    display: flex;
    flex-direction: column;
    gap:8px;
    padding-left:16px;
}


.rolequote{
    display: flex;
    flex-direction: column;
    gap:8px;
}

.link-columns{
    display: flex;
    flex-direction: row;
    gap:8px;
}

.navcolumn {
    display: flex;
    flex-direction: column;
}

.footer h1{
    font-size:20px;
    font-weight: 600;
}

.footer h2{
    font-size:16px;
    font-weight:500;
}

.copyright{
   letter-spacing: 1.16px; 
   font-size: 14px;
}

</style>