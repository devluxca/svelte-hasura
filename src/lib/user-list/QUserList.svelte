<script>
  import { hasura } from '$utils/hasura'
  import { Query } from '$utils'
  import { GET_USERS } from '$querys'
  import UserList from './UserList.svelte'
</script>

<Query queries={[GET_USERS]}>
  <section slot="loading">
    <p>Carregando os usuários...</p>
  </section>
  <section slot="done" let:data={[{ users }]}>
    <UserList {users} />
  </section>
</Query>
