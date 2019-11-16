<script>
  export let title, className
</script>

<style lang="scss">
  button {
    border: 0;
    background: #cccccc;
    color: #fff;
    text-transform: uppercase;
    padding: 10px 29px;
    font-weight: 600;
    cursor: pointer;
  }
  .full {
    width: 100%;
  }
  .primary {
    background: $color-primary;
  }
  .segudary {
    background: transparent;
    border: 1px solid $black;
    color: $black;
  }
</style>

<button class={className} on:click>{title}</button>
