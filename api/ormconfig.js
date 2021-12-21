module.exports = {
  type: 'postgres',
  host: 'db',
  ports: '5432',
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.NODE_ENV === 'test' ? 'test' : process.env.POSTGRES_DB,
  entities:
    process.env.NODE_ENV === 'production'
      ? ['dist/db/**/*.entity.js']
      : ['src/db/**/*.entity.ts'],
  migrations: ['migrations/*.ts'],
  seeds: ['src/dbseed.ts'],
  factories: ['src/db/**/*.factory{.ts,.js}'],
  synchronize: process.env.NODE_ENV === 'test',
  dropSchema: process.env.NODE_ENV === 'test',
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'migrations',
  },
};
