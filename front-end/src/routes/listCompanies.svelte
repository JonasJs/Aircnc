<script>
  import { onMount } from 'svelte'
  import { goto } from '@sapper/app'

  import axios from 'axios'

  // Component
  import Company from '../components/Company.svelte'

  onMount(async () => {
    if (!localStorage.getItem('logged')) {
      goto('/')
    }
  })
</script>

<style lang="scss">
  .list-companies {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: $black;
    .content {
      max-width: 420px;
      display: flex;
      width: 100%;
      padding: 22px;
      background: #fff;
      margin-top: 50px;
      border-radius: 4px;
    }
    img {
      margin-bottom: 56px;
    }
  }
</style>

<div class="list-companies">

  <img src="images/logo.svg" alt="Aircnc" />
  <div class="content">
    <Company />
    <Company />
  </div>
</div>
