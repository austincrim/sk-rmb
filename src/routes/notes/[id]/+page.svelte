<script>
  let { data } = $props()
</script>

<h1>Note {data.note.id}</h1>
<hr />
<p>
  {data.note.content}
</p>
