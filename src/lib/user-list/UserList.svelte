<script>
    import { Card, CardBody, Row, Image } from 'sveltestrap'

    export let users
</script>

<main>
  {#each users as user}
  <Card>
    <CardBody>
      <Image thumbnail src={user.user_business.banner} />
      <Row>{user.name}</Row>
      <Row>{user.email}</Row>
      <Row>{user.user_business.name}</Row>
    </CardBody>
  </Card>
  {/each}
</main>