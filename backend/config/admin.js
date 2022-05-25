module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '54d82a5dcb7db482c03ab85ee2f17843'),
  },
});
