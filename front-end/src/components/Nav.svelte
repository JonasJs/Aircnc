<script>
  export let segment
</script>

<style lang="scss">
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;

    ul {
      margin: 0;
      padding: 0;

      /* clearfix */
      &::after {
        content: '';
        display: block;
        clear: both;
      }

      li {
        display: block;
        float: left;

        a {
          text-decoration: none;
          padding: 1em 0.5em;
          display: block;
          color: $green-br;

          &.selected {
            position: relative;
            display: inline-block;

            &::after {
              position: absolute;
              content: '';
              width: calc(100% - 1em);
              height: 2px;
              background-color: $blue-br;
              display: block;
              bottom: -1px;
            }
          }
        }
      }
    }
  }
</style>

<nav>
  <ul>
    <li>
      <a class={segment === undefined ? 'selected' : ''} href=".">home</a>
    </li>
  </ul>
</nav>
