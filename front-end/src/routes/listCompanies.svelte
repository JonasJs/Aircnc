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
    color: $black;
    margin: 60px 0;
    text-align: center;
    .content {
      width: 70%;
      margin: 0 auto;
      background: #fff;
      padding: 30px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      border-radius: 5px;
    }
    img {
      text-align: center;
      margin-bottom: 56px;
    }
  }
</style>

<div class="list-companies">

  <img src="images/logo.svg" alt="Aircnc" />
  <div class="content">
    <Company />
    <Company />
    <Company />
    <Company />
    <Company />
  </div>
</div>
