<script>
  import { hasura } from '$utils/hasura'

  export let queries

  const client = hasura.getClient()
  const query = hasura.query(client)
  const q = query(queries)
</script>

{#await q}
    <slot name="loading" {q} />
{:then data}
    <slot name="done" {data} />
{:catch err}
    <slot name="error" {err} />
{/await}