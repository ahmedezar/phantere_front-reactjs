// eslint-disable-next-line import/no-anonymous-default-export
export default {
  server: {
    port: 4000,
  
    cors: {
      credentials: true,
      origin: [" http://localhost:3000/argon-dashboard-react", "http://localhost:3000"],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
     
    },
  }
  };
