import '../../style/global.css'


const pag = document.getElementById('app')

pag.innerHTML = `

<header class="z-50 px-5 border-b-1 backdrop-blur-sm border-b-[#2cd3ff]/20">
  <div class="flex flex-row items-center justify-between px-1.5 h-10 pl-2 gap-5 py-1 mb-2">

    <div>
      <img src="../../icons/rocket2.svg" alt="" class="w-10 h-10 rounded-sm">    
    </div>

    <div class="flex flex-row items-center gap-2">
      <a href="../index.html" class="text-white/90 text-sm flex items-center w-fit h-max hover:text-[#2cd3ff] rounded-sm justify-right p-2 duration-200">Sobre</a>
      <a href="../pages/cadastrar.html" class="text-white/90 text-sm flex items-center w-fit h-max hover:text-[#356DA8] rounded-sm justify-rightp-2 duration-200">Contato</a>
      <a href="../pages/cadastrar.html" class="text-white/90 text-sm flex items-center w-fit h-max hover:text-[#2cd3ff] rounded-sm justify-right  p-2 duration-200">Capsula do tempo</a>
    </div>

  </div>
</header>

<section class="flex flex-row align-items  justify-between h-screen gap-5 p-5 mb-2 rounded-sm">

  <div class="flex flex-col items-start gap-5 max-w-1/2">
    <h1 class="bungee-regular text-left text-white/90"><span class="hover:text-[#356DA8] cursor-pointer duration-200">Hello //</span> <br> <span class="text-[#356DA8] ml-17">World.</span></h1>
    <h1 class="tech-mono text-white/85" >I'm Julio Bom a Full-Stack Developer</h1>
    <p class="tech-mono text-white/85 text-justify"><span class="ml-8"></span>I am a passionate and dedicated developer with a strong foundation in both frontend and backend technologies.</p>
  </div>


  <div class="flex aling-items items-center p-2 w-65 h-65 bg-[linear-gradient(360deg,#0f172a_0%,#9333ea_35%,#ec4899_70%,#06b6d4_100%)] rounded-full" ><img src="../../images/Avatar.png" alt="" class="w-full h-full bg-white/70 rounded-full"></div>


</section>



                                  <!-- " Seçao de Projetos " -->


<section class="my-10 px-5" >
  <h1 class="bungee-regular animate-typing overflow-hidden whitespace-nowrap" >
    Meus Projetos
  </h1>
</section>



<section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-white justify-between border-2 border-[#2cd3ff]/50 w-full h-fit gap-5  p-5 mb-2 mt- rounded-sm">


    <div class="box-grid flex flex-col mask-origin-border bg-white/90 rounded-xl min-w-0 max-w-3/2  h-70  snap-start">
      <img src="../../images/fuji.jpg" alt="" class="rounded-xl w-full h-full">
    </div>

    <div class="box-grid bg-[#1a2530] rounded-xl min-w-0 max-w-3/2 h-70">09</div>

    <div class="box-grid bg-[#243B53] rounded-xl min-w-0 max-w-3/2 h-70">09</div>
    
    <div class="box-grid bg-[#243B53] rounded-xl min-w-0 max-w-3/2 h-70 ">09</div>

</section>


                                <!-- " Seçao de Skill's em horizontal " -->


<section class="mt-5 px-5">                                                       
  <div class="grid grid-flow-col px-2 py-2 gap-5 snap-x overflow-x-auto w-full h-30 justify-between">
    
    <div class="mini-grid bg-white/75 rounded-xl min-w-0 w-30 max-w-30 h-20 py-2 hover:animate-pulse snap-start"> 
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" class="opacity-75 w-full h-full"/>
    </div>
    
    <div class="mini-grid bg-white/75 rounded-xl min-w-0 w-30 max-w-30 h-20 py-2 hover:animate-pulse ">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" class="opacity-75 w-full h-full"/>          
    </div>
    <div class="mini-grid bg-white/75 rounded-xl min-w-0 w-30 max-w-30 h-20 py-2 hover:animate-pulse ">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" class="opacity-80 w-full h-full " />
    </div>
    <div class="mini-grid bg-white/75 rounded-xl min-w-0 w-30 max-w-30 h-20 py-2 hover:animate-pulse ">
      <img src="../../icons/html5-original.svg" class="opacity-80 w-full h-full"/>
    </div>
    <div class="mini-grid bg-white/75 rounded-xl min-w-0 w-30 max-w-30 h-20 py-2 hover:animate-pulse ">

    </div>
    <div class="mini-grid bg-white/75 rounded-xl min-w-0 w-30 max-w-30 h-20 py-2 hover:animate-pulse ">

    </div>
  </div>
</section>

<footer>
  <div>rodape</div>
</footer>

`






