import './style.css'

const pag = document.getElementById('app')
const fundo = document.getElementById('fundo')


pag.innerHTML = `

<header class="fixed inset-x-0 top-0 z-50 bg-white/25">
  <div class="flex flex-row items-center justify-between px-1.5 justify-right h-10 pl-2 gap-5 py-1 mb-2">

    <div>
      <img src="../src/assets/logo.png" alt="Logo" class="w-10 h-10 rounded-sm">    
    </div>

    <div class="flex flex-row items-center gap-2">
      <a href="../index.html" class="text-black text-sm flex items-center w-fit h-max hover:text-white/70 rounded-sm justify-right p-2 duration-200">Sobre Mim</a>
      <a href="../pages/cadastrar.html" class="text-black text-sm flex items-center w-fit h-max hover:text-white/70 rounded-sm justify-rightp-2 duration-200">Contato</a>
      <a href="../pages/cadastrar.html" class="text-black text-sm flex items-center w-fit h-max hover:text-white/70 rounded-sm justify-right  p-2 duration-200">Capsula do tempo</a>
    </div>

  </div>
</header>
<main class="mt-12">
  <h1 class="font-bold text-white">
    Julio Bom
  </h1>
</main>
<section class="flex flex-row align-items justify-center bg-[#7FB2C6] h-80 gap-5 pt-5 mb-2 rounded-sm">
  <div class=" absolute ">meio</div>
  <button type="button" onclick="window.location.href='../pages/cadastrar.html'" class="rounded-sm bg-amber-50 text-black w-30 h-15 cursor-pointer duration-300 hover:w-35 hover:h-20">clique Aqui</button>
</section>
<section class="flex flex-row align-items justify-center bg-[#3A6D8C] h-150 gap-5 pt-5 mb-2 mx-10 rounded-sm">
  
</section>
<footer>
  <div>rodape</div>
</footer>

`


