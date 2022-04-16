import ky from 'ky'
import { getContext, setContext } from 'svelte'
import { pluck, map } from 'ramda'

const clientHttp = (uri, hasuraSecret = '') => ky.extend({
  prefixUrl: uri,
  headers: {
    'Content-Type': 'application/json',
    'x-hasura-admin-secret': hasuraSecret,
  },
})

export const createClient = (cHttp) => {
  const connection = cHttp

  setContext('client', connection)
}

export const getClient = () => getContext('client')

export const query = (client) => async (queryStatement) => {
  const promises = Promise.all(map(q => client.post('', {
    json: { query: q },
  }).json())(queryStatement))

  const req = await promises

  return pluck('data')(req)
}

export const hasura = {
  clientHttp,
  createClient,
  getClient,
  query,
}
