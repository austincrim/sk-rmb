<script>
  let { data } = $props()
</script>

<h1>Notes</h1>
<hr />
<ul>
  {#each data.notes as note}
    <li>
      <a href="/notes/{note.id}">{note.id}</a>
    </li>
  {/each}
</ul>
