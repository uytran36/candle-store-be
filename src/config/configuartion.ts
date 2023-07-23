export default () => ({
  appVersion: process.env.APP_VERSION ?? '1.0',
  port: parseInt(process.env.PORT, 10) ?? 9000,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET ?? 'whisperForAccess',
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET ?? 'whisperForRefresh',
  pepper: process.env.PEPPER ?? '$2a$10$8zbARqdJOG5Z8ZbIZht7QO',
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) ?? 5432,
    user: process.env.DATABASE_USER ?? 'postgres',
    password: process.env.DATABASE_PASSWORD ?? '1',
    database: process.env.DATABASE_NAME ?? 'candleaf',
    schema: process.env.DATABASE_SCHEMA ?? 'public',
    poolSize: parseInt(process.env.DATABASE_POOL_SIZE, 10) ?? 10,
  },
});
