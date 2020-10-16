

module.exports = {
Query: {
    getUsers: () => {
      const users = [
        {
          username:'user1',
          email:'user1@email.com'
        },
        {
          username:'user2',
          email:'user2@email.com'
        },
        
      ]
      return users
    },
  },
}