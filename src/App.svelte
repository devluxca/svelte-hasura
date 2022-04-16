<script>
  import { UserList } from '$lib/user-list'
  import { Styles } from 'sveltestrap'
  import { hasura } from '$utils/hasura'

  hasura.createClient(
    hasura.clientHttp('http://localhost:8080/v1/graphql', 'hasuraadminkey'),
  )
</script>

<Styles />
<UserList />
