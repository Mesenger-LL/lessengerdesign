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
                <ButtonCTA label="Back to Top" icon="arrowup" to="#top" class="backto" />
            </div>
            <div class="footright">

                <div class="contact">
                    <h1>Get in Touch</h1>
                    <h2>lisalessenger@gmail.com</h2>
                </div>

                <div class="link-columns">
                    <div class="navcolumn navcol1">
                        <navlinks label="Blog" to="/ongoing" />
                        <navlinks label="About Me" to="/roles" />
                    </div>

                    <div class="navcolumn navcol2">
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
    
    display: flex;
    flex-direction: column;
    
    background-color: var(--bg-color);
    justify-content: space-between;
    align-items: center;
    padding-top:88px;
    padding-left:12%;
    padding-right:12%;
    padding-bottom:112px;
    gap:80px;
}

.content{
    width:100%;
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-areas:
        "left right";
    align-items: center;
    gap:1rem;
    justify-content: space-between;
}

.footleft{
    grid-area:left;
    justify-self: start;
    display: flex;
    flex-direction: column;
    gap:32px;
}

.footright{
    grid-area:right;
    justify-self: end;
    display: flex;
    flex-direction: column;
    gap:32px;
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

/* Breakpoint: 2 per row */
@media (max-width: 1200px) {
  .roleSection {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Breakpoint: 1 per row */
@media (max-width: 540px) {

  .content{
    flex-direction: column;
    gap:32px;
    align-items:start;
    grid-template-columns:1fr;
    grid-template-areas:
        "right"
        "left";
  }

  .footright{
    justify-self: start;
}

.contact{
    padding-left:0px;
}



}


</style>