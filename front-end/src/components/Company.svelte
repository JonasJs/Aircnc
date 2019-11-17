<script>
  import Button from '../components/Button.svelte'
  //   export let title, className
</script>

<style lang="scss">
  .container {
    margin-bottom: 16px;
    text-align: left;
    .box-image {
      width: 210px;
      height: 120px;
    }
    img {
      width: 100%;
      height: 100%;
    }
    h2 {
      margin-top: 8px;
      font-size: 24px;
    }
    h3 {
      font-size: 13px;
      color: #999999;
      font-weight: 400;
    }
  }
</style>

<div class="container">
  <div class="box-image">
    <img
      src="https://peakon.com/wp-content/uploads/2018/06/google-company-culture-5-1120x575.jpg" />
  </div>
  <h2>Google</h2>
  <h3>Free</h3>
  <Button title="Solicitar reserva" className="full primary" />
</div>
