<script>
  import { onMount } from 'svelte'
  import { goto } from '@sapper/app'

  import axios from 'axios'

  onMount(async () => {
    if (!localStorage.getItem('logged')) {
      goto('/')
    }
  })
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
  }
</style>

<div class="home">

  <img src="images/logo.svg" alt="Aircnc" />

</div>
