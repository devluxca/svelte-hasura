export const GET_USERS = `
    {
        users {
            id
            name
            email
            user_business {
                name
                banner
            }
        }
    }
`
