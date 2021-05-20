<script>
    import "../app.postcss"
    import Nav from "$lib/Nav.svelte"

    
  </script>
  <div class="flex flex-col min-h-screen justify-between space-y-10 w-full bg-blue-50 pt-1">
    <Nav  />
    <slot />
  </div>