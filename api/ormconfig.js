module.exports = {
  type: 'postgres',
  host: 'db',
  ports: '5432',
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: ['src/entities/*.ts'],
  migrations: ['migrations/*.ts'],
  synchronize: false,
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'migrations',
  },
};
