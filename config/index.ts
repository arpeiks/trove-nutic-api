export default () => ({
  database: {
    port: process.env.TYPEORM_PORT || 5432,
    logging: process.env.TYPEORM_LOGGING || true,
    host: process.env.TYPEORM_HOST || 'localhost',
    username: process.env.TYPEORM_USERNAME || 'root',
    database: process.env.TYPEORM_DATABASE || 'nutic',
    password: process.env.TYPEORM_PASSWORD || 'password',
    synchronize: process.env.TYPEORM_SYNCHRONIZE || false,
  },

  env: process.env.NODE_ENV || 'production',
  port: parseInt(process.env.PORT, 10) || 3000,
});
