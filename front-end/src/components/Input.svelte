<script>
  import axios from "axios";
  export let Label, placeholder;

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

  }
  .form-group label {
    display: block;
    font-size: 14px;
    color: #444;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .form-group input {
    width: 100%;
    height: 40px;
    border: 1px solid #9C27B0;
    margin-bottom: 16px;
    padding: 0 8px;
  }

</style>

<div class="form-group">
  <label>{Label}</label>
  <input type="text" {placeholder}/>
</div>
