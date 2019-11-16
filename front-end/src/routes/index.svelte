<script>
  import { goto } from '@sapper/app'
  import axios from 'axios'

  // Components
  import Input from '../components/Input.svelte'
  import Button from '../components/Button.svelte'

  //Variables
  let email = ''
  let error = false

  function login() {
    const regex = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/

    if (regex.exec(email)) {
      error = false
      axios({
        method: 'post',
        url: 'http://localhost:3333/sessions',
        data: {
          email,
        },
        headers: { 'Access-Control-Allow-Origin': '*' },
      }).then(response => {
        const { data } = response
        localStorage.setItem('logged', true)
        goto('listCompanies')
      })
    } else {
      error = true
    }
  }
</script>

<style lang="scss">
  .home {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: $black;
    img {
      margin-bottom: 56px;
    }
    .content {
      max-width: 420px;
      width: 100%;
      padding: 32px;
      background: #fff;
      margin-top: 50px;
      border-radius: 4px;
      text-align: right;
    }
    p.header-text {
      font-size: 19px;
      line-height: 27px;
      margin-bottom: 32px;
      text-align: center;
    }
  }
</style>

<div class="home">
  <img src="images/logo.svg" alt="Aircnc" />

  <div class="content">
    <p class="header-text">
      Ofereça
      <strong>spots</strong>
      para programadores e encontre
      <strong>talentos</strong>
      para sua empresa
    </p>
    <Input
      Label="Email*"
      placeholder="Digite seu email"
      bind:ChangeValue={email}
      {error} />
    <Button title="Entrar" className="primary" on:click={login} />
  </div>

</div>
