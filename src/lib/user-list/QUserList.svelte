<script>
  import { hasura } from '$utils/hasura'
  import { GET_USERS } from '$querys'
  import UserList from './UserList.svelte'


  const client = hasura.getClient()
  const query = hasura.query(client)
  const q = query([GET_USERS])
</script>


{#await q}
  <p>Carregando os usuários...</p>
{:then [{ users }]}
  <UserList {users} />
{/await}
