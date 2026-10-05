import '../../style/global.css'
import { boxanim } from './boxanim.js'

const pag = document.getElementById('app')

pag.innerHTML = `

<header class="z-50 px-5 border-b-1 border-b-[#2cd3ff]/25">
  <div class="flex flex-row items-center justify-between px-1.5 justify-right h-10 pl-2 gap-5 py-1 mb-2">

    <div>
      <img src="../../icons/rocket2.svg" alt="" class="w-10 h-10 rounded-sm">    
    </div>

    <div class="flex flex-row items-center gap-2">
      <a href="../index.html" class="text-white/90 text-sm flex items-center w-fit h-max hover:text-[#2cd3ff] rounded-sm justify-right p-2 duration-200">Sobre</a>
      <a href="../pages/cadastrar.html" class="text-white/90 text-sm flex items-center w-fit h-max hover:text-[#2cd3ff] rounded-sm justify-rightp-2 duration-200">Contato</a>
      <a href="../pages/cadastrar.html" class="text-white/90 text-sm flex items-center w-fit h-max hover:text-[#2cd3ff] rounded-sm justify-right  p-2 duration-200">Capsula do tempo</a>
    </div>

  </div>
</header>

<section class="flex flex-row mt-15 align-items  justify-between bg-[#7FB2C6]/25 h-80 gap-5 p-5 mb-2 rounded-sm ">

  <div class="flex flex-col items-start gap-5 max-w-1/2">
    <h1 class="bungee-regular text-left text-white/90"><span class="hover:text-[#2cd3ff] cursor-pointer duration-200">Hello //</span> <br> <span class="text-[#2cd3ff] ml-17">World.</span></h1>
    <h1 class="tech-mono text-white/85" >I'm Julio Bom a Full-Stack Developer</h1>
    <p class="tech-mono text-white/85 text-justify"><span class="ml-8"></span>I am a passionate and dedicated developer with a strong foundation in both frontend and backend technologies.</p>
  </div>


  <div class="flex aling-items items-center pr-8" ><img src="../../images/julio.jpeg" alt="" class="w-50 h-50 rounded-full"></div>


</section>
<section class="border-2 border-[#2cd3ff]/50 w-full h-fit p-5 mb-2 rounded-sm ">
  <div class="grid grid-flow-col gap-2 w-full h-full">

    <div class="box-grid flex flex-col mask-origin-border bg-white/90 rounded-xl max-w-3/2  h-70  snap-start">
      <img src="../../images/fuji.jpg" alt="" class="rounded-xl w-full h-full">
    </div>

    <div class="box-grid bg-[#2cd3ff]/65 rounded-xl max-w-3/2 h-70">09</div>

    <div class="box-grid bg-[#2cd3ff]/65 rounded-xl max-w-3/2 h-70">09</div>
    
    <div class="box-grid bg-[#2cd3ff]/65 rounded-xl max-w-3/2 h-70">09</div>

</div>
</section>
<section class="mt-5 px-5">                                                       <!-- " Seçao de Skill's em horizontal " -->
  <div class="grid grid-flow-col px-2 gap-5 snap-x overflow-x-auto w-full h-20">
    <div class="bg-[#2cd3ff]/65 rounded-xl w-30 h-20 snap-start"></div>
    <div class="bg-[#2cd3ff]/65 rounded-xl w-30 h-20"></div>
    <div class="bg-[#2cd3ff]/65 rounded-xl w-30 h-20"></div>
    <div class="bg-[#2cd3ff]/65 rounded-xl w-30 h-20"></div>
    <div class="bg-[#2cd3ff]/65 rounded-xl w-30 h-20"></div>
    <div class="bg-[#2cd3ff]/65 rounded-xl w-30 h-20"></div>
    </div>
</section>

<footer>
  <div>rodape</div>
</footer>

`

const caixa = pag.querySelector('.box-grid')
caixa.addEventListener('mouseenter', boxanim)



