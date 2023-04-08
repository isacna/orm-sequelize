## Migrate Sequelize
```js
npx sequelize-cli db:migrate
```
## Conectar a Database

```sql
use escola_ingles;
show tables;
describe pessoas;
```

## Criar um novo arquivo para popular banco
```js
npx sequelize-cli seed:generate --name demo-pessoa
```

## Enviar dados para o banco
```js
npx sequelize-cli db:seed:all
```
