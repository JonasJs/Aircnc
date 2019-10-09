<script>

</script>

<style>
  :global(*){
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  :global(html, body), .App {
    min-height: 100%;
    height: 100%;
  }
  :global(body){
    background: url('images/background.jpg') no-repeat;
    background-size: cover;
    -webkit-font-smoothing: antialiased !important;
    color: #fff;
  }
  :global(body, input, button){
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 14px;
  }
</style>

<div class="App">
  <slot />
</div>
