<script>
  export let Label,
    placeholder = '',
    ChangeValue,
    error = false,
    descript = ''
  // axios({
  //   method: "post",
  //   url: "http://localhost:3333/sessions",
  //   data: {
  //     email: "joonasjss@gmail.com"
  //   }
  // }).then(response => {
  //   const { data } = response;
  //   console.log(data);
  // });
</script>

<style lang="scss">
  .form-group {
    margin-bottom: 16px;
    .label-content {
      display: flex;
      margin-bottom: 8px;
      label {
        display: block;
        font-size: 14px;
        color: #444;
        font-weight: bold;
        text-align: left;
      }

      p {
        font-size: 12px;
        color: #999999;
        margin-left: 6px;
      }
    }

    input {
      width: 100%;
      height: 40px;
      border: 1px solid #9c27b0;
      padding: 0 8px;
    }

    p.error {
      color: red;
      text-align: left;
      margin-top: 4px;
    }
  }
</style>

<div class="form-group">
  <div class="label-content">
    <label>{Label}</label>
    {#if descript}
      <p>({descript})</p>
    {/if}
  </div>
  <input type="text" {placeholder} bind:value={ChangeValue} />
  {#if error}
    <p class="error">Por favor digite um valor valido.</p>
  {/if}

</div>
