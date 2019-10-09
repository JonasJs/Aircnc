<!-- <script context="module">
  export async function preload(page, session) {
    const { slug } = page.params;
    console.log(page);
    console.log(session);

    console.log("jonas");
  }
</script> -->


<script>
  import Input from "../components/Input.svelte";
  import Button from '../components/Button.svelte';

</script>

<style>
  .home{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #444;
  }
  .home img {
    margin-bottom: 56px;
  }
  .home .content {
    max-width: 420px;
    width: 100%;
    padding: 32px;
    background: #fff;
    margin-top: 50px;
    border-radius: 4px;
  }
  .home p {
    font-size: 19px;
    line-height: 27px;
    margin-bottom: 32px;
  }
</style>

<div class="home">
  <img src="images/logo.svg" alt="Aircnc" />

  <div class="content">
    <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>
    <Input Label="Email*" placeholder="Digite seu email"/>
    <Button title="Entrar"  />
  </div>
  
</div>